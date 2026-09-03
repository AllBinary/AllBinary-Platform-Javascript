/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2002 AllBinary
        *
        *  By agreeing to this license you and any business entity you represent are
        *  legally bound to the AllBinary Open License Version 1 legal agreement.
        *
        *  You may obtain the AllBinary Open License Version 1 legal agreement from
        *  AllBinary or the root directory of AllBinary's AllBinary Platform repository.
        *    Created By: Travis Berthelot
*/
/* Generated Code Do Not Modify */
//not plain js import { StringMaker } from '../../../../../../org/allbinary/logic/string/StringMaker.js';
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
import { AllBinaryEventObject } from '../../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
//not GWT import const AllBinaryEventObject = globalThis.org.allbinary.logic.util.event.AllBinaryEventObject;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class CapitalEvent extends AllBinaryEventObject {
    constructor(anyType = {}) {
        super(anyType);
        this.value = 0;
        //For kotlin this is before the body of the constructor.
    }
    toString() {
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append("CapitalEvent: Value: \n");
        stringBuffer.appendint(this.getValue());
        //if statement needs to be on the same line and ternary does not work the same way.
        return stringBuffer.toString();
        ;
    }
    getValue() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.value;
    }
    setValue(value) {
        this.value = value;
    }
}
