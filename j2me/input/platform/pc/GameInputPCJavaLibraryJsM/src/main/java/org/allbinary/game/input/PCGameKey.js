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
//not plain js import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { Input } from './Input.js';
//not GWT import const Input = globalThis.org.allbinary.game.input.Input;
import { InputFactory } from './InputFactory.js';
//not GWT import const InputFactory = globalThis.org.allbinary.game.input.InputFactory;
export class PCGameKey extends Input {
    static getString(keyCode) {
        var input = InputFactory.getInstance().getInstanceById(keyCode);
        ;
        if (input !=
            null) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return input.getName();
            ;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return StringUtil.getInstance().EMPTY_STRING;
        }
    }
    constructor(keyCode, name) {
        super(keyCode, name);
        //For kotlin this is before the body of the constructor.
        var id = this.getId();
        ;
        if (id >= 0) {
            InputFactory.getInstance().add(id, this);
        }
    }
    toString() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return "PCGameKey: " + super.toString();
    }
}
