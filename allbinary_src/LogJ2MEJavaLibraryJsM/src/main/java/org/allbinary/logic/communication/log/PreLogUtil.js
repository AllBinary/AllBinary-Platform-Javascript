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
//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//Current folder imports from return types, extended types, and scope (deduplicated)
//not plain js - same folder import { LogFormatUtil } 
const LogFormatUtil = globalThis.org.allbinary.logic.communication.log.LogFormatUtil;
//ActualPlatform
/*actual*/ export class PreLogUtil extends Object {
    /*actual*/ static put(specialMessage, anyType = {}, functionName) {
        PreLogUtil.putOE(specialMessage, anyType, functionName, NullUtil.getInstance().NULL_OBJECT);
    }
    /*actual*/ static putOE(specialMessage, anyType = {}, functionName, exception = {}) {
        var className = CommonStrings.getInstance().EMPTY;
        ;
        if (anyType.constructor.name.toString() !=
            null) {
            className = anyType.constructor.name.toString();
        }
        var message = LogFormatUtil.getInstance().get(className, functionName, specialMessage, exception);
        ;
        console.log(PreLogUtil.LOG_SUCCESS + message);
    }
    /*actual*/ static putS(specialMessage, className, functionName) {
        PreLogUtil.putSE(specialMessage, className, functionName, NullUtil.getInstance().NULL_OBJECT);
    }
    /*actual*/ static putSE(specialMessage, className, functionName, exception = {}) {
        var message = LogFormatUtil.getInstance().get(className, functionName, specialMessage, exception);
        ;
        console.log(PreLogUtil.LOG_SUCCESS + message);
    }
    static getClassName(anyType = {}) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return anyType.constructor.name.toString();
        ;
    }
    constructor() {
        super();
    }
}
PreLogUtil.LOG_SUCCESS = "org.allbinary: ";
