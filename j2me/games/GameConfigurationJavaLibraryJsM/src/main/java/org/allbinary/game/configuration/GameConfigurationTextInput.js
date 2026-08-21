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
import { Hashtable } from '../../../../java/util/Hashtable.js';
import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
export class GameConfigurationTextInput extends Object {
    static update(textField) {
        var anyType = textField.getLabel();
        ;
        var gameConfigurationTextInput = GameConfigurationTextInput.hashtable.get(anyType);
        ;
        gameConfigurationTextInput.setText(textField.getString());
    }
    static getHashtable() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return GameConfigurationTextInput.hashtable;
    }
    constructor(label, text) {
        super();
        this.label = StringUtil.getInstance().EMPTY_STRING;
        this.text = StringUtil.getInstance().EMPTY_STRING;
        this.setText(text);
        this.setLabel(label);
        GameConfigurationTextInput.hashtable.put(this.getLabel(), this);
    }
    setText(text) {
        this.text = text;
    }
    getText() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.text;
    }
    setLabel(label) {
        this.label = label;
    }
    getLabel() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.label;
    }
}
GameConfigurationTextInput.hashtable = new Hashtable();
GameConfigurationTextInput.SIMULATOR_IP = new GameConfigurationTextInput("IP: ", "192.168.1.3");
GameConfigurationTextInput.SIMULATOR_PORT = new GameConfigurationTextInput("Port: ", "8010");
