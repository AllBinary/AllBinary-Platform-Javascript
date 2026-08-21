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
import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { LogFormatUtil } from './LogFormatUtil.js';
import { LogFactory } from './LogFactory.js';
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
