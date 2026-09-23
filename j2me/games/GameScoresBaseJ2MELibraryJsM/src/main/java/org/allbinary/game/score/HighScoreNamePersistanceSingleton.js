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
/* Generated Code Do Not Modify */
import { Object } from '../../../../java/lang/Object.js';
import { ByteArrayInputStream } from '../../../../java/io/ByteArrayInputStream.js';
//not GWT import const ByteArrayInputStream
import { ByteArrayOutputStream } from '../../../../java/io/ByteArrayOutputStream.js';
//not GWT import const ByteArrayOutputStream
import { DataInputStream } from '../../../../java/io/DataInputStream.js';
//not GWT import const DataInputStream
import { DataOutputStream } from '../../../../java/io/DataOutputStream.js';
//not GWT import const RecordEnumeration
import { RecordStore } from '../../../../javax/microedition/rms/RecordStore.js';
//not GWT import const RecordStoreException
import { TsUtil } from '../../../../org/allbinary/TsUtil.js';
//not GWT import const GameInfo
import { NullRecordComparator } from '../../../../org/allbinary/game/configuration/persistance/NullRecordComparator.js';
//not GWT import const NullRecordComparator
import { NullRecordFilter } from '../../../../org/allbinary/game/configuration/persistance/NullRecordFilter.js';
//not GWT import const NullRecordFilter
import { NullRecordStore } from '../../../../org/allbinary/game/configuration/persistance/NullRecordStore.js';
//not GWT import const NullRecordStore
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { PreLogUtil } 
const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;
//not plain js import { ExceptionUtil } 
const ExceptionUtil = globalThis.org.allbinary.logic.java.exception.ExceptionUtil;
import { SmallIntegerSingletonFactory } from '../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js';
//not GWT import const SmallIntegerSingletonFactory
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//not GWT import const AbeClientInformationInterface
import { PlatformRecordIdUtil } from '../../../../org/allbinary/persistance/PlatformRecordIdUtil.js';
//not GWT import const PlatformRecordIdUtil
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class HighScoreNamePersistanceSingleton extends Object {
    constructor() {
        super(...arguments);
        this.logUtil = LogUtil.getInstance();
        this.tsUtil = TsUtil.getInstance();
        this.commonStrings = CommonStrings.getInstance();
        this.platformRecordIdUtil = PlatformRecordIdUtil.getInstance();
        this.RECORD_ID = "_SN";
        this.name = StringUtil.getInstance().EMPTY_STRING;
        this.nameBasicArrayList = new BasicArrayListD();
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return HighScoreNamePersistanceSingleton.SINGLETON;
    }
    clear() {
        this.name = StringUtil.getInstance().EMPTY_STRING;
    }
    //@Throws(Exception.constructor)
    deleteAll(abeClientInformation, gameInfo) {
        var size = this.nameBasicArrayList.size();
        ;
        for (var index = 0; index < size; index++) {
            var integer = this.nameBasicArrayList.objectArray[index];
            ;
            this.delete(abeClientInformation, gameInfo, integer.intValue());
        }
        this.clear();
    }
    getRecordId(abeClientInformation) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.platformRecordIdUtil.getRecordId(abeClientInformation, this.RECORD_ID);
        ;
    }
    //@Throws(Exception.constructor)
    delete(abeClientInformation, gameInfo, deleteId) {
        var recordStore = NullRecordStore.NULL_RECORD_STORE;
        ;
        try {
            this.logUtil.putF(new StringMaker().append("Deleting: ").appendint(deleteId).toString(), this, this.commonStrings.delete);
            recordStore = RecordStore.openRecordStore(this.getRecordId(abeClientInformation), true);
            recordStore.deleteRecord(deleteId);
            //: 
        }
        catch (e) {
            throw e;
        }
        finally {
            if (recordStore !=
                null) {
                PreLogUtil.put("Closing RecordStore", this, this.commonStrings.delete);
                recordStore.closeRecordStore();
            }
        }
    }
    getIds() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.nameBasicArrayList;
    }
    load(abeClientInformation, gameInfo) {
        var recordStore = NullRecordStore.NULL_RECORD_STORE;
        ;
        try {
            if (this.name == StringUtil.getInstance().EMPTY_STRING) {
                var LOADING_ID = "Loading id: ";
                ;
                recordStore = RecordStore.openRecordStore(this.getRecordId(abeClientInformation), true);
                var recordEnum = recordStore.enumerateRecords(NullRecordFilter.NULL_RECORD_FILTER, NullRecordComparator.NULL_RECORD_COMPARATOR, true);
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
                    this.logUtil.putF(new StringMaker().append(LOADING_ID).appendint(id).toString(), this, this.commonStrings.LOAD);
                    recordAsBytes = this.tsUtil.getRecord(recordStore, id);
                    byteArrayInputStream = new ByteArrayInputStream(recordAsBytes);
                    inputStream = new DataInputStream(byteArrayInputStream);
                    while (inputStream.available() > 0) {
                        this.name = inputStream.readUTF();
                    }
                    this.nameBasicArrayList.add(smallIntegerSingletonFactory.getAt(id));
                }
            }
            //: 
        }
        catch (e) {
            this.save(abeClientInformation, gameInfo, this.name);
            this.logUtil.putF(new StringMaker().append(this.commonStrings.EXCEPTION_LABEL).append(ExceptionUtil.getInstance().getStackTrace(e)).toString(), this, this.commonStrings.LOAD);
        }
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
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.name;
    }
    save(abeClientInformation, gameInfo, name) {
        var recordStore = NullRecordStore.NULL_RECORD_STORE;
        ;
        try {
            this.logUtil.putF(new StringMaker().append("Saving: ").append(name).toString(), this, this.commonStrings.SAVE);
            recordStore = RecordStore.openRecordStore(this.getRecordId(abeClientInformation), true);
            var byteArrayOutputStream = new ByteArrayOutputStream();
            ;
            var outputStream = new DataOutputStream(byteArrayOutputStream);
            ;
            outputStream.writeUTF(name);
            var savedGameBytes = byteArrayOutputStream.toByteArray();
            ;
            recordStore.addRecord(savedGameBytes, 0, savedGameBytes.length);
            this.name = name;
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, this.commonStrings.SAVE, e);
        }
        finally {
            try {
                if (recordStore !=
                    null) {
                    PreLogUtil.put("Closing RecordStore", this, this.commonStrings.SAVE);
                    recordStore.closeRecordStore();
                }
                //: 
            }
            catch (e) {
                this.logUtil.put(this.commonStrings.EXCEPTION, this, this.commonStrings.SAVE, e);
            }
        }
    }
}
HighScoreNamePersistanceSingleton.SINGLETON = new HighScoreNamePersistanceSingleton();
