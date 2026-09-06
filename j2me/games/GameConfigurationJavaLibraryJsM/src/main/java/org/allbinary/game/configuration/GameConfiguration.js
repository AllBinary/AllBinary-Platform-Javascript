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
import { Integer } from '../../../../java/lang/Integer.js';
import { GameFeatureEvent } from '../../../../org/allbinary/game/configuration/event/GameFeatureEvent.js';
//not GWT import const GameFeatureEvent = globalThis.org.allbinary.game.configuration.event.GameFeatureEvent;
import { GameFeatureEventHandler } from '../../../../org/allbinary/game/configuration/event/GameFeatureEventHandler.js';
//not GWT import const GameFeatureEventHandler = globalThis.org.allbinary.game.configuration.event.GameFeatureEventHandler;
import { BooleanFactory } from '../../../../org/allbinary/logic/java/bool/BooleanFactory.js';
//not GWT import const BooleanFactory = globalThis.org.allbinary.logic.java.bool.BooleanFactory;
//not plain js import { SmallIntegerSingletonFactory } 
const SmallIntegerSingletonFactory = globalThis.org.allbinary.logic.math.SmallIntegerSingletonFactory;
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { GameConfigurationSingleton } from './GameConfigurationSingleton.js';
//not GWT import - same folder const GameConfigurationSingleton = globalThis.org.allbinary.game.configuration.GameConfigurationSingleton;
export class GameConfiguration extends Object {
    constructor(name, defaultValue, minValue, maxValue) {
        super();
        this.name = StringUtil.getInstance().EMPTY_STRING;
        this.defaultValue = SmallIntegerSingletonFactory.getInstance().getAt(0);
        this.value = GameConfiguration.MIN_VALUE;
        this.minValue = this.defaultValue;
        this.maxValue = this.defaultValue;
        this.modifiable = BooleanFactory.getInstance().TRUE;
        this.setName(name);
        this.setDefaultValue(defaultValue);
        this.value = this.getDefaultValue();
        this.setMinValue(minValue);
        this.setMaxValue(maxValue);
        GameConfigurationSingleton.getInstance().getHashtable().put(this.getName(), this);
    }
    //@Throws(Exception.constructor)
    setValue(value) {
        if (this.value != value) {
            var oldValue = this.value;
            ;
            this.value = value;
            GameFeatureEventHandler.getInstance().fireEvent(new GameFeatureEvent(this, new StringMaker().append(this.name).append(" value: from: ").appendint(oldValue.intValue()).append(" to ").appendint(this.value.intValue()).toString()));
        }
    }
    getValue() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.value;
    }
    setMaxValue(maxValue) {
        this.maxValue = maxValue;
    }
    getMaxValue() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.maxValue;
    }
    setMinValue(minValue) {
        this.minValue = minValue;
    }
    getMinValue() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.minValue;
    }
    setName(name) {
        this.name = name;
    }
    getName() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.name;
    }
    setDefaultValue(defaultValue) {
        this.defaultValue = defaultValue;
    }
    getDefaultValue() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.defaultValue;
    }
    //@Throws(Exception.constructor)
    setDefault() {
        this.setValue(this.getDefaultValue());
    }
    toString() {
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append("Name: ");
        stringBuffer.append(this.name);
        stringBuffer.append(" Min: ");
        stringBuffer.appendint(this.getMinValue().intValue());
        stringBuffer.append(" Max: ");
        stringBuffer.appendint(this.getMaxValue().intValue());
        stringBuffer.append(" Value: ");
        stringBuffer.appendint(this.getValue().intValue());
        stringBuffer.append(" Default: ");
        stringBuffer.appendint(this.getDefaultValue().intValue());
        stringBuffer.append(" Modifiable: ");
        stringBuffer.appendboolean(this.isModifiable().valueOf());
        //if statement needs to be on the same line and ternary does not work the same way.
        return stringBuffer.toString();
        ;
    }
    setModifiable(modifiable) {
        this.modifiable = modifiable;
    }
    isModifiable() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.modifiable;
    }
}
GameConfiguration.MIN_VALUE = new Integer(Integer.MIN_VALUE);
