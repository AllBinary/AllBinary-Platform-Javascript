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
//not GWT import const ByteArrayInputStream
import { DataInputStream } from '../../../../java/io/DataInputStream.js';
//not GWT import const DataInputStream
import { EOFException } from '../../../../java/io/EOFException.js';
//not GWT import const EOFException
import { IOException } from '../../../../java/io/IOException.js';
//not GWT import const IOException
import { RecordComparatorI } from '../../../../javax/microedition/rms/RecordComparator.js';
//not GWT import const RecordEnumeration
import { RecordStore } from '../../../../javax/microedition/rms/RecordStore.js';
//not GWT import const RecordStore
import { RecordStoreException } from '../../../../javax/microedition/rms/RecordStoreException.js';
//not GWT import const RecordStoreException
import { RecordStoreNotFoundException } from '../../../../javax/microedition/rms/RecordStoreNotFoundException.js';
//not GWT import const RecordStoreNotFoundException
import { TsUtil } from '../../../../org/allbinary/TsUtil.js';
//not GWT import const TsUtil
import { GameInfo } from '../../../../org/allbinary/game/GameInfo.js';
//not GWT import const GameInfo
import { NullRecordComparator } from '../../../../org/allbinary/game/configuration/persistance/NullRecordComparator.js';
//not GWT import const NullRecordComparator
import { NullRecordFilter } from '../../../../org/allbinary/game/configuration/persistance/NullRecordFilter.js';
//not GWT import const NullRecordFilter
import { NullRecordStore } from '../../../../org/allbinary/game/configuration/persistance/NullRecordStore.js';
//not GWT import const NullRecordStore
//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { PreLogUtil } 
const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not GWT import const AbeClientInformationInterface
import { PlatformRecordIdUtil } from '../../../../org/allbinary/persistance/PlatformRecordIdUtil.js';
//not GWT import const PlatformRecordIdUtil
//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { HighScores } from './HighScores.js';
//sameFolderImports - not GWT import - same folder const HighScores
import { HighScore } from './HighScore.js';
//sameFolderImports - not GWT import - same folder const ScoreComparator
export class RecordStoreHighScores extends HighScores {
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    static getInstance(abeClientInformation, gameInfo, highScoreName, heading, columnTwoHeading, recordComparatorInterface) {
        let highScoresCanBeNull = RecordStoreHighScores.hashTable.get(highScoreName);
        ;
        if (highScoresCanBeNull ==
            null) {
            let highScores = new RecordStoreHighScores(abeClientInformation, gameInfo, highScoreName, heading, columnTwoHeading, recordComparatorInterface);
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
        let recordStore = NullRecordStore.NULL_RECORD_STORE;
        ;
        try {
            this.logUtil.putF(new StringMaker().append("Adding HighScore: ").appendlong(newHighScore.getScore()).toString(), this, this.commonStrings.ADD);
            if (this.isTooManyHighScores()) {
                this.logUtil.putF("Removing Lowest Score", this, this.commonStrings.ADD);
                this.removeLowestHighScore();
            }
            recordStore = RecordStore.openRecordStore(this.getRecordId(this.abeClientInformation), true);
            let highScoreBytes = newHighScore.getAsBytes();
            ;
            let recordId = recordStore.addRecord(highScoreBytes, 0, highScoreBytes.length);
            ;
            this.load();
        }
        catch (caught) {
            if (caught instanceof RecordStoreException) {
                const e = caught;
                this.logUtil.put(this.commonStrings.EXCEPTION, this, this.commonStrings.ADD, e);
            }
            else if (caught instanceof IOException) {
                const e = caught;
                this.logUtil.put(this.commonStrings.EXCEPTION, this, this.commonStrings.ADD, e);
            }
            else {
                const e = caught;
                this.logUtil.put(this.commonStrings.EXCEPTION, this, this.commonStrings.ADD, e);
            }
        }
        finally {
            try {
                if (recordStore !=
                    null) {
                    PreLogUtil.put("Closing RecordStore", this, this.commonStrings.ADD);
                    recordStore.closeRecordStore();
                }
            }
            catch (caught) {
                if (caught instanceof RecordStoreException) {
                    const e = caught;
                    this.logUtil.put(this.commonStrings.EXCEPTION, this, this.commonStrings.ADD, e);
                }
                else {
                    throw caught;
                }
            }
        }
    }
    removeLowestHighScore() {
        let recordStore = NullRecordStore.NULL_RECORD_STORE;
        ;
        try {
            recordStore = RecordStore.openRecordStore(this.getRecordId(this.abeClientInformation), true);
            let recordEnum = recordStore.enumerateRecords(NullRecordFilter.NULL_RECORD_FILTER, NullRecordComparator.NULL_RECORD_COMPARATOR, true);
            ;
            let scoreComparator = this.recordComparatorInterface;
            ;
            let bestHighScore = new HighScore(-1, "none", GameInfo.NONE, scoreComparator.getBestScore());
            ;
            let recordAsBytes;
            ;
            let byteArrayInputStream;
            ;
            let inputStream;
            ;
            while (recordEnum.hasNextElement()) {
                let id = recordEnum.nextRecordId();
                ;
                recordAsBytes = this.tsUtil.getRecord(recordStore, id);
                if (recordAsBytes !=
                    null) {
                    byteArrayInputStream = new ByteArrayInputStream(recordAsBytes);
                    inputStream = new DataInputStream(byteArrayInputStream);
                    let name = inputStream.readUTF();
                    ;
                    let nextScore = inputStream.readLong();
                    ;
                    let nextCurrentHighScore = new HighScore(id, name, GameInfo.NONE, nextScore);
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
        }
        catch (caught) {
            if (caught instanceof RecordStoreException) {
                const e = caught;
                this.logUtil.put(this.commonStrings.EXCEPTION, this, "removeLowestHighScore", e);
            }
            else {
                const e = caught;
                this.logUtil.put(this.commonStrings.EXCEPTION, this, "removeLowestHighScore", e);
            }
        }
        finally {
            try {
                if (recordStore !=
                    null) {
                    PreLogUtil.put("Closing RecordStore", this, "removeLowestHighScore");
                    recordStore.closeRecordStore();
                }
            }
            catch (caught) {
                if (caught instanceof RecordStoreException) {
                    const e = caught;
                    this.logUtil.put(this.commonStrings.EXCEPTION, this, "removeLowestHighScore", e);
                }
                else {
                    throw caught;
                }
            }
        }
    }
    load() {
        let recordStore = NullRecordStore.NULL_RECORD_STORE;
        ;
        try {
            recordStore = RecordStore.openRecordStore(this.getRecordId(this.abeClientInformation), true);
            this.setList(new BasicArrayListD());
            let recordEnum = recordStore.enumerateRecords(NullRecordFilter.NULL_RECORD_FILTER, NullRecordComparator.NULL_RECORD_COMPARATOR, true);
            ;
            let recordAsBytes;
            ;
            let byteArrayInputStream;
            ;
            let inputStream;
            ;
            while (recordEnum.hasNextElement()) {
                let id = recordEnum.nextRecordId();
                ;
                recordAsBytes = this.tsUtil.getRecord(recordStore, id);
                if (recordAsBytes !=
                    null) {
                    byteArrayInputStream = new ByteArrayInputStream(recordAsBytes);
                    inputStream = new DataInputStream(byteArrayInputStream);
                    try {
                        let name = inputStream.readUTF();
                        ;
                        let score = inputStream.readLong();
                        ;
                        let newHighScore = new HighScore(id, name, GameInfo.NONE, score);
                        ;
                        let list = this.getList();
                        ;
                        let size = list.size();
                        ;
                        let lastIndex = size;
                        ;
                        for (let index = 0; index < size; index++) {
                            let highScore = list.objectArray[index];
                            ;
                            if (this.recordComparatorInterface.compare(newHighScore.getAsBytes(), highScore.getAsBytes()) == RecordComparatorI.PRECEDES) {
                                lastIndex = index;
                                break;
                            }
                        }
                        list.addAt(lastIndex, newHighScore);
                    }
                    catch (caught) {
                        if (caught instanceof EOFException) {
                            const e = caught;
                            this.logUtil.put("EOF", this, this.commonStrings.LOAD, e);
                            throw e;
                        }
                        else {
                            throw caught;
                        }
                    }
                }
            }
        }
        catch (caught) {
            if (caught instanceof RecordStoreNotFoundException) {
                const e = caught;
                this.logUtil.put("No High Scores", this, this.commonStrings.LOAD, e);
            }
            else if (caught instanceof RecordStoreException) {
                const e = caught;
                this.logUtil.put(this.commonStrings.UNKNOWN, this, this.commonStrings.LOAD, e);
            }
            else if (caught instanceof IOException) {
                const e = caught;
                this.logUtil.put(this.commonStrings.UNKNOWN, this, this.commonStrings.LOAD, e);
            }
            else {
                const e = caught;
                this.logUtil.put(this.commonStrings.UNKNOWN, this, this.commonStrings.LOAD, e);
            }
        }
        finally {
            try {
                if (recordStore !=
                    null) {
                    PreLogUtil.put("Closing RecordStore", this, this.commonStrings.LOAD);
                    recordStore.closeRecordStore();
                }
            }
            catch (caught) {
                if (caught instanceof RecordStoreException) {
                    const e = caught;
                    this.logUtil.put(this.commonStrings.EXCEPTION, this, this.commonStrings.LOAD, e);
                }
                else {
                    throw caught;
                }
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
                let list = this.getList();
                ;
                let size = list.size();
                ;
                for (let index = 0; index < size; index++) {
                    let highScore = list.objectArray[index];
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
        }
        catch (caught) {
            {
                const e = caught;
                this.logUtil.put(this.commonStrings.EXCEPTION, this, this.commonStrings.ADD, e);
                throw e;
            }
        }
    }
    toString() {
        let stringBuffer = new StringMaker();
        ;
        stringBuffer.append(super.toString());
        let list = this.getList();
        ;
        let size = list.size();
        ;
        for (let index = 0; index < size; index++) {
            let highScore = list.objectArray[index];
            ;
            stringBuffer.append(highScore.getScoreString());
            stringBuffer.append(CommonSeps.getInstance().COMMA_SEP);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return stringBuffer.toString();
        ;
    }
}
RecordStoreHighScores.hashTable = StdUtil.getInstance().createHashtable();
