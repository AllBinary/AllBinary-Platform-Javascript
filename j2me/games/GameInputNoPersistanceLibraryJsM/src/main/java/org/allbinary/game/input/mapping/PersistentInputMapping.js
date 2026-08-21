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
import { Exception } from '../../../../../java/lang/Exception.js';
import { GamePersistanceStrings } from '../../../../../org/allbinary/game/configuration/persistance/GamePersistanceStrings.js';
import { InputPersistance } from '../../../../../org/allbinary/game/input/InputPersistance.js';
import { InputMappingEvent } from '../../../../../org/allbinary/game/input/mapping/event/InputMappingEvent.js';
import { NullInputMappingEventListener } from '../../../../../org/allbinary/game/input/mapping/event/NullInputMappingEventListener.js';
import { NullUtil } from '../../../../../org/allbinary/logic/NullUtil.js';
import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
import { PreLogUtil } from '../../../../../org/allbinary/logic/communication/log/PreLogUtil.js';
import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
import { EnumerationUtil } from '../../../../../org/allbinary/util/EnumerationUtil.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { InputToGameKeyMapping } from './InputToGameKeyMapping.js';
//GameInputNoPersistanceLibrary
export class PersistentInputMapping extends Object {
    static getNullInstance() {
        if (PersistentInputMapping.instance == NullUtil.getInstance().NULL_OBJECT) {
            PersistentInputMapping.instance = new PersistentInputMapping(GamePersistanceStrings.getInstance().SAVED_INPUT_CONFIGURATION_RECORD_ID);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return PersistentInputMapping.instance;
    }
    constructor(name) {
        super();
        this.logUtil = LogUtil.getInstance();
        this.commonStrings = CommonStrings.getInstance();
        this.enumerationUtil = EnumerationUtil.getInstance();
        this.inputMapping = new InputToGameKeyMapping();
        this.inputMappingEventListenerInterface = NullInputMappingEventListener.NULL_INPUT_MAPPING_EVENT_LISTENER;
        this.inputMappingEvent = new InputMappingEvent(this);
        this.inputPersistance = new InputPersistance(name);
    }
    getTotalMapped() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.getInputMapping().getHashtable().size();
        ;
    }
    isDefaultNew() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    getDefault() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return InputToGameKeyMapping.getNullInstance();
        ;
    }
    //@Throws(Exception.constructor)
    setDefault(abeClientInformation) {
        this.getInputMapping().removeAll();
        this.getInputMapping().addMapping(this.getDefault());
        this.save(abeClientInformation);
    }
    //@Throws(Exception.constructor)
    update(abeClientInformation) {
        this.inputPersistance.deleteAll(abeClientInformation);
        this.save(abeClientInformation);
    }
    //@Throws(Exception.constructor)
    save(abeClientInformation) {
        this.inputPersistance.save(abeClientInformation, this.getInputMapping().getHashtable());
        this.inputMappingEvent.setInputToGameKeyMapping(this.getInputMapping());
        if (this.getInputMappingEventListenerInterface() !=
            null) {
            this.getInputMappingEventListenerInterface().onInputMappingEvent(this.inputMappingEvent);
        }
    }
    //@Throws(Exception.constructor)
    init(abeClientInformation) {
        this.logUtil.putF(this.commonStrings.START, this, this.commonStrings.INIT);
        try {
            this.inputPersistance.loadAll(abeClientInformation);
            //: 
        }
        catch (e) {
            PreLogUtil.putOE(this.commonStrings.EXCEPTION, this, this.commonStrings.INIT, e);
            this.inputPersistance.deleteRecoreStore(abeClientInformation);
            this.setDefault(abeClientInformation);
            this.inputPersistance.loadAll(abeClientInformation);
        }
        var list = this.inputPersistance.getList();
        ;
        var totalMappedTo = 0;
        ;
        var size = list.size();
        ;
        var hashtable;
        ;
        var enumeration;
        ;
        var mappedToInput;
        ;
        var gameActionInput;
        ;
        for (var index = 0; index < size; index++) {
            hashtable = list.objectArray[index];
            enumeration = hashtable.keys();
            while (this.enumerationUtil.hasMoreElements(enumeration)) {
                mappedToInput = this.enumerationUtil.nextElement(enumeration);
                gameActionInput = hashtable.get(mappedToInput);
                totalMappedTo++;
                this.getInputMapping().add(gameActionInput, mappedToInput);
            }
        }
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append("End - Total Loaded Keys Mapped: ");
        stringBuffer.appendint(this.getTotalMapped());
        stringBuffer.append(" to: ");
        stringBuffer.appendint(totalMappedTo);
        this.logUtil.putF(stringBuffer.toString(), this, this.commonStrings.INIT);
    }
    setInputMappingEventListenerInterface(inputMappingEventListenerInterface) {
        this.inputMappingEventListenerInterface = inputMappingEventListenerInterface;
    }
    getInputMappingEventListenerInterface() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.inputMappingEventListenerInterface;
    }
    getInputMapping() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.inputMapping;
    }
    //@Throws(Exception.constructor)
    isDelete(input) {
        throw new Exception(this.commonStrings.NOT_IMPLEMENTED);
    }
    //@Throws(Exception.constructor)
    isSystemInput(input) {
        throw new Exception(this.commonStrings.NOT_IMPLEMENTED);
    }
}
PersistentInputMapping.instance = NullUtil.getInstance().NULL_OBJECT;
