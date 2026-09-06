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
import hilog from '@ohos.hilog';
import { Object } from '../../../../../java/lang/Object.js';
import { Integer } from '../../../../../java/lang/Integer.js';
//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
import { TsUtil } from '../../../../../org/allbinary/TsUtil.js';
//not GWT import const TsUtil = globalThis.org.allbinary.TsUtil;
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
//Current folder imports from return types, extended types, and scope (deduplicated)
//not plain js - same folder import { LogFormatUtil } 
const LogFormatUtil = globalThis.org.allbinary.logic.communication.log.LogFormatUtil;
//not plain js - same folder import { Log } 
const Log = globalThis.org.allbinary.logic.communication.log.Log;
//ActualPlatform
/*actual*/ export class LogUtil extends Object {
    /*actual*/ static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return LogUtil.instance;
    }
    constructor() {
        super();
        this.commonSeps = CommonSeps.getInstance();
        this.logFormatUtil = LogFormatUtil.getInstance();
        this.LABEL = "org.allbinary";
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
        this.put(specialMessage, anyType, functionName, NullUtil.getInstance().NULL_OBJECT);
    }
    putFS(specialMessage, string, functionName) {
        this.putS(specialMessage, string, functionName, NullUtil.getInstance().NULL_OBJECT);
    }
    /*actual*/ put(specialMessage, anyType = {}, functionName, exception = {}) {
        var className = this.LABEL;
        ;
        className = new StringMaker().append(anyType.constructor.name.toString()).append(this.commonSeps.COLON).append(Integer.toHexString(TsUtil.getInstance().hashCode(anyType))).toString();
        var message = this.logFormatUtil.get(className, functionName, specialMessage, exception);
        ;
        hilog.info(0x0000, className, LogUtil.PUBLIC, message);
    }
    /*actual*/ putS(specialMessage, string, functionName, exception = {}) {
        var className = this.LABEL;
        ;
        className = new StringMaker().append(string).append(this.commonSeps.COLON).append(Integer.toHexString(TsUtil.getInstance().hashCode(string))).toString();
        var message = this.logFormatUtil.get(className, functionName, specialMessage, exception);
        ;
        hilog.info(0x0000, className, LogUtil.PUBLIC, message);
    }
}
LogUtil.PUBLIC = '%{public}s';
LogUtil.instance = new LogUtil();
