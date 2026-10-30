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
import { ByteArrayInputStream } from '../../../../../java/io/ByteArrayInputStream.js';
//not GWT import const ByteArrayInputStream
import { ByteArrayOutputStream } from '../../../../../java/io/ByteArrayOutputStream.js';
//not GWT import const ByteArrayOutputStream
import { DataInputStream } from '../../../../../java/io/DataInputStream.js';
//not GWT import const DataInputStream
import { DataOutputStream } from '../../../../../java/io/DataOutputStream.js';
//not GWT import const RecordEnumeration
import { RecordStore } from '../../../../../javax/microedition/rms/RecordStore.js';
//not GWT import const RecordStore
import { TsUtil } from '../../../../../org/allbinary/TsUtil.js';
//not GWT import const TsUtil
//not plain js import { PreLogUtil } 
const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;
import { SmallIntegerSingletonFactory } from '../../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js';
//not GWT import const SmallIntegerSingletonFactory
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//not GWT import const AbeClientInformationInterface
//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;
//not plain js import { HashtableUtil } 
const HashtableUtil = globalThis.org.allbinary.util.HashtableUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { BasicPersitance } from './BasicPersitance.js';
//sameFolderImports - not GWT import - same folder const BasicPersitance
import { NullRecordStore } from './NullRecordStore.js';
//sameFolderImports - not GWT import - same folder const NullRecordStore
import { NullRecordFilter } from './NullRecordFilter.js';
//sameFolderImports - not GWT import - same folder const NullRecordFilter
import { NullRecordComparator } from './NullRecordComparator.js';
//sameFolderImports - not GWT import - same folder const NullRecordComparator
export class KeyValuePersistance extends BasicPersitance {
    constructor(recordId) {
        super(recordId);
        this.tsUtil = TsUtil.getInstance();
        //For kotlin this is before the body of the constructor.
    }
    //@Throws(Exception.constructor)
    loadAll(abeClientInformation) {
        this.loadAllSize(abeClientInformation, 1);
    }
    //@Throws(Exception.constructor)
    loadAllSize(abeClientInformation, size) {
        let recordStore = NullRecordStore.NULL_RECORD_STORE;
        ;
        try {
            recordStore = RecordStore.openRecordStore(this.getRecordId(abeClientInformation), true);
            let recordEnum = recordStore.enumerateRecords(NullRecordFilter.NULL_RECORD_FILTER, NullRecordComparator.NULL_RECORD_COMPARATOR, true);
            ;
            let hashtable;
            ;
            let name;
            ;
            let value;
            ;
            let smallIntegerSingletonFactory = SmallIntegerSingletonFactory.getInstance();
            ;
            let stringBuffer = new StringMaker();
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
                stringBuffer.delete(0, stringBuffer.length());
                this.logUtil.putF(stringBuffer.append(this.persistanceStrings.LOADING_ID).appendint(id).toString(), this, this.persistanceStrings.LOAD_ALL);
                recordAsBytes = this.tsUtil.getRecord(recordStore, id);
                if (recordAsBytes !=
                    null) {
                    byteArrayInputStream = new ByteArrayInputStream(recordAsBytes);
                    inputStream = new DataInputStream(byteArrayInputStream);
                    hashtable = new ABHashtable();
                    for (let index = 0; index < size; index++) {
                        name = inputStream.readUTF();
                        inputStream.readUTF();
                        value = inputStream.readUTF();
                        hashtable.put(name, value);
                    }
                    this.valueList.add(hashtable);
                    this.idList.add(smallIntegerSingletonFactory.getAt(id));
                }
            }
        }
        catch (caught) {
            {
                const e = caught;
                throw e;
            }
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
        let recordStore = NullRecordStore.NULL_RECORD_STORE;
        ;
        try {
            this.logUtil.putF(new StringMaker().append(this.persistanceStrings.SAVING).append(StringUtil.getInstance().toString(hashtable)).toString(), this, this.commonStrings.SAVE);
            recordStore = RecordStore.openRecordStore(this.getRecordId(abeClientInformation), true);
            let byteArrayOutputStream = new ByteArrayOutputStream();
            ;
            let outputStream = new DataOutputStream(byteArrayOutputStream);
            ;
            let value;
            ;
            let commonSeps = CommonSeps.getInstance();
            ;
            let objectArray = HashtableUtil.getInstance().getKeysAsArray(hashtable);
            ;
            let anyType;
            ;
            let size = objectArray.length;
            ;
            for (let index = 0; index < size; index++) {
                outputStream.writeUTF(objectArray[index]);
                outputStream.writeUTF(commonSeps.EQUALS);
                anyType = objectArray[index];
                value = hashtable.get(anyType);
                outputStream.writeUTF(value);
            }
            let tsUtil = TsUtil.getInstance();
            ;
            let savedGameBytes = tsUtil.getByteArray(byteArrayOutputStream.toString());
            ;
            recordStore.addRecord(savedGameBytes, 0, savedGameBytes.length);
        }
        catch (caught) {
            {
                const e = caught;
                throw e;
            }
        }
        finally {
            if (recordStore !=
                null) {
                PreLogUtil.put(this.persistanceStrings.CLOSING_RECORDSTORE, this, this.commonStrings.SAVE);
                recordStore.closeRecordStore();
            }
        }
    }
    get(index) {
        let hashtable = this.valueList.objectArray[index];
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return hashtable;
    }
}
