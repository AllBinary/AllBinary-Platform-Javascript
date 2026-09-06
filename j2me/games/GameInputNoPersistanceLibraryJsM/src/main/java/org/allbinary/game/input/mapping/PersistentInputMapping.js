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
//not GWT import const Enumeration = globalThis.java.util.Enumeration;
import { GamePersistanceStrings } from '../../../../../org/allbinary/game/configuration/persistance/GamePersistanceStrings.js';
//not GWT import const Input = globalThis.org.allbinary.game.input.Input;
import { InputPersistance } from '../../../../../org/allbinary/game/input/InputPersistance.js';
//not GWT import const InputPersistance = globalThis.org.allbinary.game.input.InputPersistance;
import { InputMappingEvent } from '../../../../../org/allbinary/game/input/mapping/event/InputMappingEvent.js';
//not GWT import const InputMappingEventListenerInterface = globalThis.org.allbinary.game.input.mapping.event.InputMappingEventListenerInterface;
import { NullInputMappingEventListener } from '../../../../../org/allbinary/game/input/mapping/event/NullInputMappingEventListener.js';
//not GWT import const NullInputMappingEventListener = globalThis.org.allbinary.game.input.mapping.event.NullInputMappingEventListener;
//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { PreLogUtil } 
const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not GWT import const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { EnumerationUtil } 
const EnumerationUtil = globalThis.org.allbinary.util.EnumerationUtil;
//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { InputToGameKeyMapping } from './InputToGameKeyMapping.js';
//not GWT import - same folder const InputToGameKeyMapping = globalThis.org.allbinary.game.input.mapping.InputToGameKeyMapping;
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
