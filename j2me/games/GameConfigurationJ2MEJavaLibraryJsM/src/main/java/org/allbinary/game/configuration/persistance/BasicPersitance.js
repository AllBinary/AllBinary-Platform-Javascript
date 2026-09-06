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
import { Object } from '../../../../../java/lang/Object.js';
//not plain js import { RecordStore } 
const RecordStore = globalThis.javax.microedition.rms.RecordStore;
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { PreLogUtil } 
const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not GWT import const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;
import { PlatformRecordIdUtil } from '../../../../../org/allbinary/persistance/PlatformRecordIdUtil.js';
//not GWT import const PlatformRecordIdUtil = globalThis.org.allbinary.persistance.PlatformRecordIdUtil;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { PersistanceStrings } from './PersistanceStrings.js';
//not GWT import - same folder const PersistanceStrings = globalThis.org.allbinary.game.configuration.persistance.PersistanceStrings;
import { NullRecordStore } from './NullRecordStore.js';
//not GWT import - same folder const NullRecordStore = globalThis.org.allbinary.game.configuration.persistance.NullRecordStore;
export class BasicPersitance extends Object {
    constructor(recordId) {
        super();
        this.logUtil = LogUtil.getInstance();
        this.commonStrings = CommonStrings.getInstance();
        this.persistanceStrings = PersistanceStrings.getInstance();
        this.platformRecordIdUtil = PlatformRecordIdUtil.getInstance();
        this.valueList = new BasicArrayListD();
        this.idList = new BasicArrayListD();
        this.recordId = recordId;
    }
    //@Throws(Exception.constructor)
    deleteRecoreStore(abeClientInformation) {
        RecordStore.deleteRecordStore(this.getRecordId(abeClientInformation));
    }
    //@Throws(Exception.constructor)
    deleteAll(abeClientInformation) {
        var size = this.idList.size();
        ;
        for (var index = 0; index < size; index++) {
            var integer = this.idList.objectArray[index];
            ;
            this.delete(abeClientInformation, integer.intValue());
        }
        this.clear();
    }
    //@Throws(Exception.constructor)
    delete(abeClientInformation, deleteId) {
        var recordStore = NullRecordStore.NULL_RECORD_STORE;
        ;
        try {
            this.logUtil.putF(new StringMaker().append(this.persistanceStrings.DELETING_WITH_ID).appendint(deleteId).toString(), this, this.commonStrings.delete);
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
                PreLogUtil.put(this.persistanceStrings.CLOSING_RECORDSTORE, this, this.commonStrings.delete);
                recordStore.closeRecordStore();
            }
        }
    }
    getRecordId(abeClientInformation) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.platformRecordIdUtil.getRecordId(abeClientInformation, this.recordId);
        ;
    }
    getList() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.valueList;
    }
    getIds() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.idList;
    }
    clear() {
        this.valueList.clear();
        this.idList.clear();
    }
}
