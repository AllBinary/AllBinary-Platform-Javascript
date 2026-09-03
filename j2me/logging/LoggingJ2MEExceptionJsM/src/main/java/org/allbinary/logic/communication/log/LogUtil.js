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
//not plain js import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//Current folder imports from return types, extended types, and scope (deduplicated)
//not plain js import { LogFormatUtil } from './LogFormatUtil.js';
const LogFormatUtil = globalThis.org.allbinary.logic.communication.log.LogFormatUtil;
//not plain js import { LogFactory } from './LogFactory.js';
const LogFactory = globalThis.org.allbinary.logic.communication.log.LogFactory;
//not plain js import { Log } from './Log.js';
const Log = globalThis.org.allbinary.logic.communication.log.Log;
//ActualPlatform
/*actual*/ export class LogUtil extends Object {
    /*actual*/ static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return LogUtil.instance;
    }
    constructor() {
        super();
        this.logFormatUtil = LogFormatUtil.getInstance();
        this.LOG_SUCCESS = "org.allbinary: ";
    }
    /*actual*/ putL(log) {
        if (log == LogFactory.LOG) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return;
        }
        var exception = log.getThrowable();
        ;
        if (exception ==
            null) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return;
        }
        var specialMessage = log.getSpecialMessage();
        ;
        var anyType = log.getObject();
        ;
        var functionName = log.getFunctionName();
        ;
        this.put(specialMessage, anyType, functionName, exception);
    }
    /*actual*/ putF(specialMessage, anyType = {}, functionName) {
    }
    /*actual*/ putF(specialMessage, className, functionName) {
    }
    /*actual*/ put(specialMessage, anyType = {}, functionName, exception = {}) {
        var className = CommonStrings.getInstance().EMPTY;
        ;
        if (anyType.constructor.name.toString() !=
            null) {
            className = anyType.constructor.name.toString();
        }
        var message = this.logFormatUtil.get(className, functionName, specialMessage, exception);
        ;
        console.log(this.LOG_SUCCESS + message);
    }
}
LogUtil.instance = new LogUtil();
