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
var _a, _b;
var _c;
/* Generated Code Do Not Modify */
import { Object } from '../../../../../java/lang/Object.js';
//import { Class } from '../../../../../java/lang/Class.js';
const Class = ((_c = (_b = (_a = globalThis.java) === null || _a === void 0 ? void 0 : _a.lang) === null || _b === void 0 ? void 0 : _b.Class) !== null && _c !== void 0 ? _c : class {
});
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not plain js import { LogFormatUtil } 
const LogFormatUtil = globalThis.org.allbinary.logic.communication.log.LogFormatUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class Log extends Object {
    constructor(specialMessage, anyType, functionName, exception) {
        super();
        this.logFormatUtil = LogFormatUtil.getInstance();
        this.specialMessage = specialMessage;
        this.anyType = anyType;
        this.functionName = functionName;
        this.exception = exception;
    }
    getSpecialMessage() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.specialMessage;
    }
    getObject() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.anyType;
    }
    getFunctionName() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.functionName;
    }
    getThrowable() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.exception;
    }
    toString() {
        let className = CommonStrings.getInstance().EMPTY;
        ;
        let clazz = this.anyType.constructor;
        ;
        if (clazz.toString() !=
            null) {
            className = clazz.toString();
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.logFormatUtil.get(className, this.functionName, this.specialMessage, this.exception);
        ;
    }
}
