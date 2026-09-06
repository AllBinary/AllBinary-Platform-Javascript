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
//Current folder imports from return types, extended types, and scope (deduplicated)
//not plain js - same folder import { Log } 
const Log = globalThis.org.allbinary.logic.communication.log.Log;
//ActualPlatform
/*actual*/ export class LogFactory extends Object {
    /*actual*/ static getInstanceD() {
        var stringUtil = StringUtil.getInstance();
        ;
        var nullUtil = NullUtil.getInstance();
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return new Log(stringUtil.EMPTY_STRING, nullUtil.NULL_OBJECT, stringUtil.EMPTY_STRING, nullUtil.NULL_OBJECT);
    }
    /*actual*/ static getInstanceNoF(specialMessage, anyType = {}, exception = {}) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new Log(specialMessage, anyType, StringUtil.getInstance().EMPTY_STRING, exception);
    }
    /*actual*/ static getInstance(specialMessage, anyType = {}, functionName, exception = {}) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new Log(specialMessage, anyType, functionName, exception);
    }
    /*actual*/ static getInstanceF(specialMessage, anyType = {}, functionName) {
        var nullUtil = NullUtil.getInstance();
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return new Log(specialMessage, anyType, functionName, nullUtil.NULL_OBJECT);
    }
}
