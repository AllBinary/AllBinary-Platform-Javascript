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
import { Integer } from '../../../../java/lang/Integer.js';
import { ByteArrayInputStream } from '../../../../java/io/ByteArrayInputStream.js';
import { ByteArrayOutputStream } from '../../../../java/io/ByteArrayOutputStream.js';
import { DataInputStream } from '../../../../java/io/DataInputStream.js';
import { DataOutputStream } from '../../../../java/io/DataOutputStream.js';
import { Hashtable } from '../../../../java/util/Hashtable.js';
import { RecordStore } from '../../../../javax/microedition/rms/RecordStore.js';
import { TsUtil } from '../../../../org/allbinary/TsUtil.js';
import { BasicPersitance } from '../../../../org/allbinary/game/configuration/persistance/BasicPersitance.js';
import { NullRecordComparator } from '../../../../org/allbinary/game/configuration/persistance/NullRecordComparator.js';
import { NullRecordFilter } from '../../../../org/allbinary/game/configuration/persistance/NullRecordFilter.js';
import { NullRecordStore } from '../../../../org/allbinary/game/configuration/persistance/NullRecordStore.js';
import { PreLogUtil } from '../../../../org/allbinary/logic/communication/log/PreLogUtil.js';
import { SmallIntegerSingletonFactory } from '../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js';
import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
import { CommonSeps } from '../../../../org/allbinary/string/CommonSeps.js';
import { HashtableUtil } from '../../../../org/allbinary/util/HashtableUtil.js';
import { GameKeyMappingFactory } from './GameKeyMappingFactory.js';
import { InputFactory } from './InputFactory.js';
//GameInputPersistanceLibrary
export class InputPersistance extends BasicPersitance {
    constructor(name) {
        super(name);
        this.tsUtil = TsUtil.getInstance();
        this.hashtableUtil = HashtableUtil.getInstance();
        //For kotlin this is before the body of the constructor.
    }
    //@Throws(Exception.constructor)
    loadAll(abeClientInformation) {
        var recordStore = NullRecordStore.NULL_RECORD_STORE;
        ;
        try {
            recordStore = RecordStore.openRecordStore(this.getRecordId(abeClientInformation), true);
            var recordEnum = recordStore.enumerateRecords(NullRecordFilter.NULL_RECORD_FILTER, NullRecordComparator.NULL_RECORD_COMPARATOR, true);
            ;
            var gameActionInputId = 0;
            ;
            var inputId = 0;
            ;
            var gameActionInput;
            ;
            var input;
            ;
            var hashtable;
            ;
            var gameKeyFactory = GameKeyMappingFactory.getInstance();
            ;
            var stringBuffer = new StringMaker();
            ;
            var inputFactory = InputFactory.getInstance();
            ;
            var smallIntegerSingletonFactory = SmallIntegerSingletonFactory.getInstance();
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
                stringBuffer.delete(0, stringBuffer.length());
                this.logUtil.putF(stringBuffer.append(this.persistanceStrings.LOADING_ID).appendint(id).toString(), this, this.persistanceStrings.LOAD_ALL);
                recordAsBytes = this.tsUtil.getRecord(recordStore, id);
                if (recordAsBytes !=
                    null) {
                    byteArrayInputStream = new ByteArrayInputStream(recordAsBytes);
                    inputStream = new DataInputStream(byteArrayInputStream);
                    hashtable = new Hashtable();
                    var value = 0;
                    ;
                    while (inputStream.available() > 0) {
                        var gameActionInputIdAsString = inputStream.readUTF();
                        ;
                        value = Integer.parseInt(gameActionInputIdAsString);
                        gameActionInputId = value;
                        inputStream.readUTF();
                        value = Integer.parseInt(inputStream.readUTF());
                        inputId = value;
                        gameActionInput = gameKeyFactory.getGameKey(Math.round(gameActionInputId));
                        input = inputFactory.getInstanceById(Math.round(inputId));
                        if (input == inputFactory.NO_INPUT || gameActionInput ==
                            null) {
                            stringBuffer.delete(0, stringBuffer.length());
                            if (input == inputFactory.NO_INPUT) {
                                stringBuffer.append(this.persistanceStrings.ERROR_LOADING_ID);
                                stringBuffer.appendlong(inputId);
                                stringBuffer.append(this.persistanceStrings.GAME_ACTION_INPUT);
                                stringBuffer.appendlong(gameActionInputId);
                                PreLogUtil.put(stringBuffer.toString(), this, this.persistanceStrings.LOAD_ALL);
                            }
                            if (gameActionInput ==
                                null) {
                                stringBuffer.delete(0, stringBuffer.length());
                                stringBuffer.append(this.persistanceStrings.ERROR_LOADING);
                                stringBuffer.appendlong(gameActionInputId);
                                stringBuffer.append(this.persistanceStrings.ID);
                                stringBuffer.appendlong(inputId);
                                PreLogUtil.put(stringBuffer.toString(), this, this.persistanceStrings.LOAD_ALL);
                            }
                        }
                        else {
                        }
                        hashtable.put(input, gameActionInput);
                    }
                    this.valueList.add(hashtable);
                    this.idList.add(smallIntegerSingletonFactory.getAt(id));
                }
                else {
                }
            }
            //: 
        }
        catch (e) {
            throw e;
        }
        finally {
            if (recordStore !=
                null) {
                PreLogUtil.put(this.persistanceStrings.CLOSING_RECORDSTORE, this, this.persistanceStrings.LOAD_ALL);
                recordStore.closeRecordStore();
            }
        }
    }
    //@Throws(Exception.constructor)
    save(abeClientInformation, hashtable) {
        var recordStore = NullRecordStore.NULL_RECORD_STORE;
        ;
        try {
            var stringBuffer = new StringMaker();
            ;
            PreLogUtil.put(stringBuffer.append(this.persistanceStrings.SAVING).append(StringUtil.getInstance().toString(hashtable)).toString(), this, this.commonStrings.SAVE);
            recordStore = RecordStore.openRecordStore(this.getRecordId(abeClientInformation), true);
            var byteArrayOutputStream = new ByteArrayOutputStream();
            ;
            var outputStream = new DataOutputStream(byteArrayOutputStream);
            ;
            var gameActionInput;
            ;
            var list;
            ;
            var input;
            ;
            var savedGameBytes;
            ;
            var commonSeps = CommonSeps.getInstance();
            ;
            var smallIntegerSingletonFactory = SmallIntegerSingletonFactory.getInstance();
            ;
            var inputObjectArray = this.hashtableUtil.getKeysAsArray(hashtable);
            ;
            var size = inputObjectArray.length;
            ;
            for (var index = 0; index < size; index++) {
                gameActionInput = inputObjectArray[index];
                list = hashtable.get(inputObjectArray[index]);
                for (var index2 = 0; index2 < list.size(); index2++) {
                    var gameActionInputIdAsString = smallIntegerSingletonFactory.getAt(gameActionInput.getId()).toString();
                    ;
                    outputStream.writeUTF(gameActionInputIdAsString);
                    outputStream.writeUTF(commonSeps.EQUALS);
                    input = list.objectArray[index2];
                    var inputIdAsString = smallIntegerSingletonFactory.getAt(input.getId()).toString();
                    ;
                    outputStream.writeUTF(inputIdAsString);
                }
            }
            savedGameBytes = byteArrayOutputStream.toByteArray();
            recordStore.addRecord(savedGameBytes, 0, savedGameBytes.length);
            //: 
        }
        catch (e) {
            throw e;
        }
        finally {
            if (recordStore !=
                null) {
                PreLogUtil.put(this.persistanceStrings.CLOSING_RECORDSTORE, this, this.commonStrings.SAVE);
                recordStore.closeRecordStore();
            }
        }
    }
}
