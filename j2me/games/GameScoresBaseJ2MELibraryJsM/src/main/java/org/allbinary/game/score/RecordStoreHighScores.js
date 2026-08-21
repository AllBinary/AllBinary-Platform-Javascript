/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2011 AllBinary
        *
        *  By agreeing to this license you and any business entity you represent are
        *  legally bound to the AllBinary Open License Version 1 legal agreement.
        *
        *  You may obtain the AllBinary Open License Version 1 legal agreement from
        *  AllBinary or the root directory of AllBinary's AllBinary Platform repository.
        *
        *  Created By: Travis Berthelot
*/
import { ByteArrayInputStream } from '../../../../java/io/ByteArrayInputStream.js';
import { DataInputStream } from '../../../../java/io/DataInputStream.js';
import { Hashtable } from '../../../../java/util/Hashtable.js';
import { RecordComparatorI } from '../../../../javax/microedition/rms/RecordComparator.js';
import { RecordStore } from '../../../../javax/microedition/rms/RecordStore.js';
import { TsUtil } from '../../../../org/allbinary/TsUtil.js';
import { GameInfo } from '../../../../org/allbinary/game/GameInfo.js';
import { NullRecordComparator } from '../../../../org/allbinary/game/configuration/persistance/NullRecordComparator.js';
import { NullRecordFilter } from '../../../../org/allbinary/game/configuration/persistance/NullRecordFilter.js';
import { NullRecordStore } from '../../../../org/allbinary/game/configuration/persistance/NullRecordStore.js';
import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
import { PreLogUtil } from '../../../../org/allbinary/logic/communication/log/PreLogUtil.js';
import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
import { PlatformRecordIdUtil } from '../../../../org/allbinary/persistance/PlatformRecordIdUtil.js';
import { CommonSeps } from '../../../../org/allbinary/string/CommonSeps.js';
import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
import { BasicArrayListD } from '../../../../org/allbinary/util/BasicArrayListD.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { HighScores } from './HighScores.js';
import { HighScore } from './HighScore.js';
export class RecordStoreHighScores extends HighScores {
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    static getInstance(abeClientInformation, gameInfo, highScoreName, heading, columnTwoHeading, recordComparatorInterface) {
        var highScoresCanBeNull = RecordStoreHighScores.hashTable.get(highScoreName);
        ;
        if (highScoresCanBeNull ==
            null) {
            var highScores = new RecordStoreHighScores(abeClientInformation, gameInfo, highScoreName, heading, columnTwoHeading, recordComparatorInterface);
            ;
            RecordStoreHighScores.hashTable.put(highScores.getName(), highScores);
            //if statement needs to be on the same line and ternary does not work the same way.
            return highScores;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return highScoresCanBeNull;
    }
    constructor(abeClientInformation, gameInfo, name, heading, columnTwoHeading, recordComparatorInterface) {
        super(name, heading, columnTwoHeading);
        this.logUtil = LogUtil.getInstance();
        this.commonStrings = CommonStrings.getInstance();
        this.platformRecordIdUtil = PlatformRecordIdUtil.getInstance();
        this.tsUtil = TsUtil.getInstance();
        this.RECORD_ID = "_HS";
        this.MAXHIGHSCORES = 100;
        //For kotlin this is before the body of the constructor.
        this.abeClientInformation = abeClientInformation;
        this.gameInfo = gameInfo;
        this.recordComparatorInterface = recordComparatorInterface;
        this.load();
    }
    getRecordId(abeClientInformation) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.platformRecordIdUtil.getRecordId(abeClientInformation, new StringMaker().append(CommonSeps.getInstance().UNDERSCORE).append(this.getName()).append(this.RECORD_ID).toString());
        ;
    }
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    addHighScore(newHighScore) {
        var recordStore = NullRecordStore.NULL_RECORD_STORE;
        ;
        try {
            this.logUtil.putF(new StringMaker().append("Adding HighScore: ").appendlong(newHighScore.getScore()).toString(), this, this.commonStrings.ADD);
            if (this.isTooManyHighScores()) {
                this.logUtil.putF("Removing Lowest Score", this, this.commonStrings.ADD);
                this.removeLowestHighScore();
            }
            recordStore = RecordStore.openRecordStore(this.getRecordId(this.abeClientInformation), true);
            var highScoreBytes = newHighScore.getAsBytes();
            ;
            var recordId = recordStore.addRecord(highScoreBytes, 0, highScoreBytes.length);
            ;
            this.load();
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, this.commonStrings.ADD, e);
        }
        //: 
        /* catch(e)
                    {
        this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.ADD, e);
            
        }
        */
        //: 
        /* catch(e)
                    {
        this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.ADD, e);
            
        }
        */
        finally {
            try {
                if (recordStore !=
                    null) {
                    PreLogUtil.put("Closing RecordStore", this, this.commonStrings.ADD);
                    recordStore.closeRecordStore();
                }
                //: 
            }
            catch (e) {
                this.logUtil.put(this.commonStrings.EXCEPTION, this, this.commonStrings.ADD, e);
            }
        }
    }
    removeLowestHighScore() {
        var recordStore = NullRecordStore.NULL_RECORD_STORE;
        ;
        try {
            recordStore = RecordStore.openRecordStore(this.getRecordId(this.abeClientInformation), true);
            var recordEnum = recordStore.enumerateRecords(NullRecordFilter.NULL_RECORD_FILTER, NullRecordComparator.NULL_RECORD_COMPARATOR, true);
            ;
            var scoreComparator = this.recordComparatorInterface;
            ;
            var bestHighScore = new HighScore(-1, "none", GameInfo.NONE, scoreComparator.getBestScore());
            ;
            var recordAsBytes;
            ;
            var byteArrayInputStream;
            ;
            var inputStream;
            ;
            while (recordEnum.hasNextElement()) {
                var id = recordEnum.nextRecordId();
                ;
                recordAsBytes = this.tsUtil.getRecord(recordStore, id);
                if (recordAsBytes !=
                    null) {
                    byteArrayInputStream = new ByteArrayInputStream(recordAsBytes);
                    inputStream = new DataInputStream(byteArrayInputStream);
                    var name = inputStream.readUTF();
                    ;
                    var nextScore = inputStream.readLong();
                    ;
                    var nextCurrentHighScore = new HighScore(id, name, GameInfo.NONE, nextScore);
                    ;
                    if (this.recordComparatorInterface.compare(nextCurrentHighScore.getAsBytes(), bestHighScore.getAsBytes()) == RecordComparatorI.FOLLOWS) {
                        bestHighScore = nextCurrentHighScore;
                    }
                }
            }
            if (bestHighScore.getId() != -1) {
                this.logUtil.putF(new StringMaker().append("Removing Lowest HighScore: ").appendlong(bestHighScore.getScore()).toString(), this, this.commonStrings.LOAD);
                recordStore.deleteRecord(bestHighScore.getId());
            }
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, "removeLowestHighScore", e);
        }
        //: 
        /* catch(e)
                    {
        this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "removeLowestHighScore", e);
            
        }
        */
        finally {
            try {
                if (recordStore !=
                    null) {
                    PreLogUtil.put("Closing RecordStore", this, "removeLowestHighScore");
                    recordStore.closeRecordStore();
                }
                //: 
            }
            catch (e) {
                this.logUtil.put(this.commonStrings.EXCEPTION, this, "removeLowestHighScore", e);
            }
        }
    }
    load() {
        var recordStore = NullRecordStore.NULL_RECORD_STORE;
        ;
        try {
            recordStore = RecordStore.openRecordStore(this.getRecordId(this.abeClientInformation), true);
            this.setList(new BasicArrayListD());
            var recordEnum = recordStore.enumerateRecords(NullRecordFilter.NULL_RECORD_FILTER, NullRecordComparator.NULL_RECORD_COMPARATOR, true);
            ;
            var recordAsBytes;
            ;
            var byteArrayInputStream;
            ;
            var inputStream;
            ;
            while (recordEnum.hasNextElement()) {
                var id = recordEnum.nextRecordId();
                ;
                recordAsBytes = this.tsUtil.getRecord(recordStore, id);
                if (recordAsBytes !=
                    null) {
                    byteArrayInputStream = new ByteArrayInputStream(recordAsBytes);
                    inputStream = new DataInputStream(byteArrayInputStream);
                    try {
                        var name = inputStream.readUTF();
                        ;
                        var score = inputStream.readLong();
                        ;
                        var newHighScore = new HighScore(id, name, GameInfo.NONE, score);
                        ;
                        var list = this.getList();
                        ;
                        var size = list.size();
                        ;
                        var lastIndex = size;
                        ;
                        for (var index = 0; index < size; index++) {
                            var highScore = list.objectArray[index];
                            ;
                            if (this.recordComparatorInterface.compare(newHighScore.getAsBytes(), highScore.getAsBytes()) == RecordComparatorI.PRECEDES) {
                                lastIndex = index;
                                break;
                            }
                        }
                        list.addAt(lastIndex, newHighScore);
                        //: 
                    }
                    catch (e) {
                        this.logUtil.put("EOF", this, this.commonStrings.LOAD, e);
                        throw e;
                    }
                }
            }
            //: 
        }
        catch (e) {
            this.logUtil.put("No High Scores", this, this.commonStrings.LOAD, e);
        }
        //: 
        /* catch(e)
                    {
        this.logUtil!.put(this.commonStrings!.UNKNOWN, this, this.commonStrings!.LOAD, e);
            
        }
        */
        //: 
        /* catch(e)
                    {
        this.logUtil!.put(this.commonStrings!.UNKNOWN, this, this.commonStrings!.LOAD, e);
            
        }
        */
        //: 
        /* catch(e)
                    {
        this.logUtil!.put(this.commonStrings!.UNKNOWN, this, this.commonStrings!.LOAD, e);
            
        }
        */
        finally {
            try {
                if (recordStore !=
                    null) {
                    PreLogUtil.put("Closing RecordStore", this, this.commonStrings.LOAD);
                    recordStore.closeRecordStore();
                }
                //: 
            }
            catch (e) {
                this.logUtil.put(this.commonStrings.EXCEPTION, this, this.commonStrings.LOAD, e);
            }
        }
    }
    isTooManyHighScores() {
        if (this.getList() !=
            null
            && this.getList().size() < this.MAXHIGHSCORES) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
        else {
            this.logUtil.putF(new StringMaker().append("HighScores RecordStore Max Reached: ").appendint(this.MAXHIGHSCORES).toString(), this, "isTooManyHighScores");
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
    }
    //@Throws(Exception.constructor)
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    isBestScore(newHighScore) {
        try {
            if (!this.isTooManyHighScores()) {
                this.logUtil.putF("Slot Available for a High Score", this, "isBestScore");
                //if statement needs to be on the same line and ternary does not work the same way.
                return true;
            }
            else {
                var list = this.getList();
                ;
                var size = list.size();
                ;
                for (var index = 0; index < size; index++) {
                    var highScore = list.objectArray[index];
                    ;
                    if (this.recordComparatorInterface.compare(newHighScore.getAsBytes(), highScore.getAsBytes()) == RecordComparatorI.FOLLOWS) {
                        this.logUtil.putF("Obtained a High Score", this, "isBestScore");
                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
                    }
                }
            }
            this.logUtil.putF("Not a High Score", this, "isBestScore");
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, this.commonStrings.ADD, e);
            throw e;
        }
    }
    toString() {
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append(super.toString());
        var list = this.getList();
        ;
        var size = list.size();
        ;
        for (var index = 0; index < size; index++) {
            var highScore = list.objectArray[index];
            ;
            stringBuffer.append(highScore.getScoreString());
            stringBuffer.append(CommonSeps.getInstance().COMMA_SEP);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return stringBuffer.toString();
        ;
    }
}
RecordStoreHighScores.hashTable = new Hashtable();
