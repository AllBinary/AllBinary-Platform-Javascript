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
//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
import { SmallIntegerSingletonFactory } from '../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js';
//not GWT import const SmallIntegerSingletonFactory
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { Input } from './Input.js';
//not GWT import - same folder const Input
export class InputFactory extends Object {
    static getInstance() {
        if (InputFactory.instance == NullUtil.getInstance().NULL_OBJECT) {
            InputFactory.instance = new InputFactory();
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return InputFactory.instance;
    }
    constructor() {
        super();
        this.logUtil = LogUtil.getInstance();
        this.commonStrings = CommonStrings.getInstance();
        this.KEY_CODE_LABEL = "KeyCode: ";
        this.DEVICE_ID_LABEL = "DeviceId: ";
        this.MAX = SmallIntegerSingletonFactory.getInstance().getMin();
        this.inputIntegerArray = new Array(this.MAX);
        this.NO_INPUT = new Input(0, this.commonStrings.UNKNOWN);
        var size = this.inputIntegerArray.length;
        ;
        for (var index = 0; index < size; index++) {
            this.inputIntegerArray[index] = this.NO_INPUT;
        }
    }
    add(id, input) {
        this.inputIntegerArray[id] = input;
    }
    getInstanceById(id) {
        if (id < 0) {
            id = -id;
        }
        if (id > this.inputIntegerArray.length) {
            this.logUtil.putF(new StringMaker().append("Warning id: ").appendint(id).toString(), this, this.commonStrings.GET_INSTANCE);
            //if statement needs to be on the same line and ternary does not work the same way.
            return this.NO_INPUT;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.inputIntegerArray[id];
    }
}
InputFactory.instance = NullUtil.getInstance().NULL_OBJECT;
