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
import { ByteArrayOutputStream } from '../../../../../java/io/ByteArrayOutputStream.js';
import { DataInputStream } from '../../../../../java/io/DataInputStream.js';
import { DataOutputStream } from '../../../../../java/io/DataOutputStream.js';
import { Hashtable } from '../../../../../java/util/Hashtable.js';
import { RecordStore } from '../../../../../javax/microedition/rms/RecordStore.js';
import { TsUtil } from '../../../../../org/allbinary/TsUtil.js';
import { PreLogUtil } from '../../../../../org/allbinary/logic/communication/log/PreLogUtil.js';
import { SmallIntegerSingletonFactory } from '../../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js';
import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
import { CommonSeps } from '../../../../../org/allbinary/string/CommonSeps.js';
import { HashtableUtil } from '../../../../../org/allbinary/util/HashtableUtil.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { BasicPersitance } from './BasicPersitance.js';
import { NullRecordStore } from './NullRecordStore.js';
import { NullRecordFilter } from './NullRecordFilter.js';
import { NullRecordComparator } from './NullRecordComparator.js';
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
        var recordStore = NullRecordStore.NULL_RECORD_STORE;
        ;
        try {
            recordStore = RecordStore.openRecordStore(this.getRecordId(abeClientInformation), true);
            var recordEnum = recordStore.enumerateRecords(NullRecordFilter.NULL_RECORD_FILTER, NullRecordComparator.NULL_RECORD_COMPARATOR, true);
            ;
            var hashtable;
            ;
            var name;
            ;
            var value;
            ;
            var smallIntegerSingletonFactory = SmallIntegerSingletonFactory.getInstance();
            ;
            var stringBuffer = new StringMaker();
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
                    for (var index = 0; index < size; index++) {
                        name = inputStream.readUTF();
                        inputStream.readUTF();
                        value = inputStream.readUTF();
                        hashtable.put(name, value);
                    }
                    this.valueList.add(hashtable);
                    this.idList.add(smallIntegerSingletonFactory.getAt(id));
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
            this.logUtil.putF(new StringMaker().append(this.persistanceStrings.SAVING).append(StringUtil.getInstance().toString(hashtable)).toString(), this, this.commonStrings.SAVE);
            recordStore = RecordStore.openRecordStore(this.getRecordId(abeClientInformation), true);
            var byteArrayOutputStream = new ByteArrayOutputStream();
            ;
            var outputStream = new DataOutputStream(byteArrayOutputStream);
            ;
            var value;
            ;
            var commonSeps = CommonSeps.getInstance();
            ;
            var objectArray = HashtableUtil.getInstance().getKeysAsArray(hashtable);
            ;
            var anyType;
            ;
            var size = objectArray.length;
            ;
            for (var index = 0; index < size; index++) {
                outputStream.writeUTF(objectArray[index]);
                outputStream.writeUTF(commonSeps.EQUALS);
                anyType = objectArray[index];
                value = hashtable.get(anyType);
                outputStream.writeUTF(value);
            }
            var tsUtil = TsUtil.getInstance();
            ;
            var savedGameBytes = tsUtil.getByteArray(byteArrayOutputStream.toString());
            ;
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
    get(index) {
        var hashtable = this.valueList.objectArray[index];
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return hashtable;
    }
}
