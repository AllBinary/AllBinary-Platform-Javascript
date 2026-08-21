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
import { Hashtable } from '../../../../java/util/Hashtable.js';
import { RecordStore } from '../../../../javax/microedition/rms/RecordStore.js';
import { BasicPersitance } from '../../../../org/allbinary/game/configuration/persistance/BasicPersitance.js';
import { NullRecordComparator } from '../../../../org/allbinary/game/configuration/persistance/NullRecordComparator.js';
import { NullRecordFilter } from '../../../../org/allbinary/game/configuration/persistance/NullRecordFilter.js';
import { PreLogUtil } from '../../../../org/allbinary/logic/communication/log/PreLogUtil.js';
import { SmallIntegerSingletonFactory } from '../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js';
import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
import { HashtableUtil } from '../../../../org/allbinary/util/HashtableUtil.js';
//GameInputNoPersistanceLibrary
export class InputPersistance extends BasicPersitance {
    constructor(name) {
        super(name);
        this.hashtableUtil = HashtableUtil.getInstance();
        //For kotlin this is before the body of the constructor.
    }
    //@Throws(Exception.constructor)
    loadAll(abeClientInformation) {
        var recordStore = RecordStore.openRecordStore(this.getRecordId(abeClientInformation), true);
        ;
        var recordEnum = recordStore.enumerateRecords(NullRecordFilter.NULL_RECORD_FILTER, NullRecordComparator.NULL_RECORD_COMPARATOR, true);
        ;
        var hashtable;
        ;
        var stringBuffer = new StringMaker();
        ;
        var smallIntegerSingletonFactory = SmallIntegerSingletonFactory.getInstance();
        ;
        var id = 0;
        ;
        while (recordEnum.hasNextElement()) {
            id = recordEnum.nextRecordId();
            stringBuffer.delete(0, stringBuffer.length());
            this.logUtil.putF(stringBuffer.append(this.persistanceStrings.LOADING_ID).appendint(id).toString(), this, this.persistanceStrings.LOAD_ALL);
            hashtable = new Hashtable();
            this.valueList.add(hashtable);
            this.idList.add(smallIntegerSingletonFactory.getAt(id));
        }
        recordStore.closeRecordStore();
    }
    //@Throws(Exception.constructor)
    save(abeClientInformation, hashtable) {
        PreLogUtil.put(new StringMaker().append(this.persistanceStrings.NOT_SAVING).append(StringUtil.getInstance().toString(hashtable)).toString(), this, this.commonStrings.SAVE);
        var recordStore = RecordStore.openRecordStore(this.getRecordId(abeClientInformation), true);
        ;
        var gameActionInput;
        ;
        var list;
        ;
        var input;
        ;
        var inputObjectArray = this.hashtableUtil.getKeysAsArray(hashtable);
        ;
        var size = inputObjectArray.length;
        ;
        for (var index = 0; index < size; index++) {
            gameActionInput = inputObjectArray[index];
            list = hashtable.get(inputObjectArray[index]);
            for (var index2 = 0; index2 < list.size(); index2++) {
                input = list.get(index2);
            }
        }
        recordStore.closeRecordStore();
    }
}
