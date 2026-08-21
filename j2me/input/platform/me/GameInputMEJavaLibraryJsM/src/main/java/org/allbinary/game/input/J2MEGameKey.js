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
import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { Input } from './Input.js';
import { InputFactory } from './InputFactory.js';
export class J2MEGameKey extends Input {
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
    constructor(key, keyName) {
        super(key, keyName);
        //For kotlin this is before the body of the constructor.
        var id = this.getId();
        ;
        if (id >= 0) {
            var inputFactory = InputFactory.getInstance();
            ;
            inputFactory.add(id, this);
        }
    }
    toString() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new StringMaker().append("J2MEGameKey: ").append(super.toString()).toString();
        ;
    }
}
