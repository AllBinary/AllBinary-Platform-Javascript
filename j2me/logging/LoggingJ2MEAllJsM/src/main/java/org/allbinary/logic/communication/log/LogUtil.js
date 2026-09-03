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
import { Integer } from '../../../../../java/lang/Integer.js';
import { TsUtil } from '../../../../../org/allbinary/TsUtil.js';
//not GWT import const TsUtil = globalThis.org.allbinary.TsUtil;
//not plain js import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { CommonSeps } from '../../../../../org/allbinary/string/CommonSeps.js';
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
//not plain js import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//Current folder imports from return types, extended types, and scope (deduplicated)
//not plain js import { LogFormatUtil } from './LogFormatUtil.js';
const LogFormatUtil = globalThis.org.allbinary.logic.communication.log.LogFormatUtil;
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
        var specialMessage = log.getSpecialMessage();
        ;
        var anyType = log.getObject();
        ;
        var functionName = log.getFunctionName();
        ;
        var exception = log.getThrowable();
        ;
        this.put(specialMessage, anyType, functionName, exception);
    }
    /*actual*/ putF(specialMessage, anyType = {}, functionName) {
        var className = CommonStrings.getInstance().EMPTY;
        ;
        if (anyType.constructor.name.toString() !=
            null) {
            className = new StringMaker().append(anyType.constructor.name.toString()).append(CommonSeps.getInstance().COLON).append(Integer.toHexString(TsUtil.getInstance().hashCode(anyType))).toString();
        }
        var message = this.logFormatUtil.getS(className, functionName, specialMessage);
        ;
        console.log(this.LOG_SUCCESS + message);
    }
    /*actual*/ putFS(specialMessage, className, functionName) {
        var message = this.logFormatUtil.getS(className, functionName, specialMessage);
        ;
        console.log(this.LOG_SUCCESS + message);
    }
    /*actual*/ put(specialMessage, anyType = {}, functionName, exception = {}) {
        var className = CommonStrings.getInstance().EMPTY;
        ;
        if (anyType.constructor.name.toString() !=
            null) {
            className = new StringMaker().append(anyType.constructor.name.toString()).append(CommonSeps.getInstance().COLON).append(Integer.toHexString(TsUtil.getInstance().hashCode(anyType))).toString();
        }
        var message = this.logFormatUtil.get(className, functionName, specialMessage, exception);
        ;
        console.log(this.LOG_SUCCESS + message);
    }
}
LogUtil.instance = new LogUtil();
