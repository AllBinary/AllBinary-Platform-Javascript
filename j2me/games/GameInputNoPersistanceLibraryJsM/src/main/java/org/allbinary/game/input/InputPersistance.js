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
//not GWT import const Hashtable = globalThis.java.util.Hashtable;
//not plain js import { RecordEnumeration } from '../../../../javax/microedition/rms/RecordEnumeration.js';
const RecordEnumeration = globalThis.javax.microedition.rms.RecordEnumeration;
//not plain js import { RecordStore } from '../../../../javax/microedition/rms/RecordStore.js';
const RecordStore = globalThis.javax.microedition.rms.RecordStore;
import { BasicPersitance } from '../../../../org/allbinary/game/configuration/persistance/BasicPersitance.js';
//not GWT import const BasicPersitance = globalThis.org.allbinary.game.configuration.persistance.BasicPersitance;
import { NullRecordComparator } from '../../../../org/allbinary/game/configuration/persistance/NullRecordComparator.js';
//not GWT import const NullRecordComparator = globalThis.org.allbinary.game.configuration.persistance.NullRecordComparator;
import { NullRecordFilter } from '../../../../org/allbinary/game/configuration/persistance/NullRecordFilter.js';
//not GWT import const NullRecordFilter = globalThis.org.allbinary.game.configuration.persistance.NullRecordFilter;
//not plain js import { PreLogUtil } from '../../../../org/allbinary/logic/communication/log/PreLogUtil.js';
const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;
//not plain js import { SmallIntegerSingletonFactory } from '../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js';
const SmallIntegerSingletonFactory = globalThis.org.allbinary.logic.math.SmallIntegerSingletonFactory;
//not plain js import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//not GWT import const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;
//not plain js import { BasicArrayList } from '../../../../org/allbinary/util/BasicArrayList.js';
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { HashtableUtil } from '../../../../org/allbinary/util/HashtableUtil.js';
const HashtableUtil = globalThis.org.allbinary.util.HashtableUtil;
//not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;
import { StdUtil } from '../../../../org/allbinary/logic/StdUtil.js';
//not GWT import const Input = globalThis.org.allbinary.game.input.Input;
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
            hashtable = StdUtil.getInstance().createHashtable();
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
