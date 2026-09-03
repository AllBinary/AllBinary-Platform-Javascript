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
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;
import { ByteArrayInputStream } from '../../../../../java/io/ByteArrayInputStream.js';
//not GWT import const ByteArrayInputStream = globalThis.java.io.ByteArrayInputStream;
import { ByteArrayOutputStream } from '../../../../../java/io/ByteArrayOutputStream.js';
//not GWT import const ByteArrayOutputStream = globalThis.java.io.ByteArrayOutputStream;
import { DataInputStream } from '../../../../../java/io/DataInputStream.js';
//not GWT import const DataInputStream = globalThis.java.io.DataInputStream;
import { DataOutputStream } from '../../../../../java/io/DataOutputStream.js';
//not GWT import const DataOutputStream = globalThis.java.io.DataOutputStream;
import { Hashtable } from '../../../../../java/util/Hashtable.js';
//not GWT import const Hashtable = globalThis.java.util.Hashtable;
//not plain js import { RecordEnumeration } from '../../../../../javax/microedition/rms/RecordEnumeration.js';
const RecordEnumeration = globalThis.javax.microedition.rms.RecordEnumeration;
//not plain js import { RecordStore } from '../../../../../javax/microedition/rms/RecordStore.js';
const RecordStore = globalThis.javax.microedition.rms.RecordStore;
import { TsUtil } from '../../../../../org/allbinary/TsUtil.js';
//not GWT import const TsUtil = globalThis.org.allbinary.TsUtil;
//not plain js import { PreLogUtil } from '../../../../../org/allbinary/logic/communication/log/PreLogUtil.js';
const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;
//not plain js import { SmallIntegerSingletonFactory } from '../../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js';
const SmallIntegerSingletonFactory = globalThis.org.allbinary.logic.math.SmallIntegerSingletonFactory;
//not plain js import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//not GWT import const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;
//not plain js import { CommonSeps } from '../../../../../org/allbinary/string/CommonSeps.js';
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
//not plain js import { HashtableUtil } from '../../../../../org/allbinary/util/HashtableUtil.js';
const HashtableUtil = globalThis.org.allbinary.util.HashtableUtil;
//not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { BasicPersitance } from './BasicPersitance.js';
//not GWT import const BasicPersitance = globalThis.org.allbinary.game.configuration.persistance.BasicPersitance;
import { NullRecordStore } from './NullRecordStore.js';
//not GWT import const NullRecordStore = globalThis.org.allbinary.game.configuration.persistance.NullRecordStore;
import { NullRecordFilter } from './NullRecordFilter.js';
//not GWT import const NullRecordFilter = globalThis.org.allbinary.game.configuration.persistance.NullRecordFilter;
import { NullRecordComparator } from './NullRecordComparator.js';
//not GWT import const NullRecordComparator = globalThis.org.allbinary.game.configuration.persistance.NullRecordComparator;
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
