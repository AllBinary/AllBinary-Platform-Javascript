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
//not GWT import const RecordEnumeration
import { RecordStore } from '../../../../javax/microedition/rms/RecordStore.js';
//not GWT import const RecordStore
import { BasicPersitance } from '../../../../org/allbinary/game/configuration/persistance/BasicPersitance.js';
//not GWT import const BasicPersitance
import { NullRecordComparator } from '../../../../org/allbinary/game/configuration/persistance/NullRecordComparator.js';
//not GWT import const NullRecordComparator
import { NullRecordFilter } from '../../../../org/allbinary/game/configuration/persistance/NullRecordFilter.js';
//not GWT import const NullRecordFilter
//not plain js import { PreLogUtil } 
const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;
import { SmallIntegerSingletonFactory } from '../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js';
//not GWT import const SmallIntegerSingletonFactory
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//not GWT import const AbeClientInformationInterface
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { HashtableUtil } 
const HashtableUtil = globalThis.org.allbinary.util.HashtableUtil;
//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;
//sameFolderImports - not GWT import - same folder const Input
//GameInputNoPersistanceLibrary
export class InputPersistance extends BasicPersitance {
    constructor(name) {
        super(name);
        this.hashtableUtil = HashtableUtil.getInstance();
        //For kotlin this is before the body of the constructor.
    }
    //@Throws(Exception.constructor)
    loadAll(abeClientInformation) {
        let recordStore = RecordStore.openRecordStore(this.getRecordId(abeClientInformation), true);
        ;
        let recordEnum = recordStore.enumerateRecords(NullRecordFilter.NULL_RECORD_FILTER, NullRecordComparator.NULL_RECORD_COMPARATOR, true);
        ;
        let hashtable;
        ;
        let stringBuffer = new StringMaker();
        ;
        let smallIntegerSingletonFactory = SmallIntegerSingletonFactory.getInstance();
        ;
        let id = 0;
        ;
        while (recordEnum.hasNextElement()) {
            id = recordEnum.nextRecordId();
            stringBuffer.delete(0, stringBuffer.length());
            this.logUtil.putF(stringBuffer.append(this.persistanceStrings.LOADING_ID).appendint(id).toString(), this, this.persistanceStrings.LOAD_ALL);
            hashtable = StdUtil.getInstance().createHashtable();
            this.valueList.add(hashtable);
            this.idList.add(smallIntegerSingletonFactory.getAt(id));
        }
        recordStore.closeRecordStore();
    }
    //@Throws(Exception.constructor)
    save(abeClientInformation, hashtable) {
        PreLogUtil.put(new StringMaker().append(this.persistanceStrings.NOT_SAVING).append(StringUtil.getInstance().toString(hashtable)).toString(), this, this.commonStrings.SAVE);
        let recordStore = RecordStore.openRecordStore(this.getRecordId(abeClientInformation), true);
        ;
        let gameActionInput;
        ;
        let list;
        ;
        let input;
        ;
        let inputObjectArray = this.hashtableUtil.getKeysAsArray(hashtable);
        ;
        let size = inputObjectArray.length;
        ;
        for (let index = 0; index < size; index++) {
            gameActionInput = inputObjectArray[index];
            list = hashtable.get(inputObjectArray[index]);
            for (let index2 = 0; index2 < list.size(); index2++) {
                input = list.get(index2);
            }
        }
        recordStore.closeRecordStore();
    }
}
