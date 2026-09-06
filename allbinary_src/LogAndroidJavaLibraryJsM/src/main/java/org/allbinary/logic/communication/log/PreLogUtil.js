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
//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
//not plain js import { LogFormatUtil } 
const LogFormatUtil = globalThis.org.allbinary.logic.communication.log.LogFormatUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
//not plain js - same folder import { Log } 
const Log = globalThis.org.allbinary.logic.communication.log.Log;
//ActualPlatform
/*actual*/ export class PreLogUtil extends Object {
    /*actual*/ static put(specialMessage, anyType = {}, functionName) {
        PreLogUtil.putOE(specialMessage, anyType, functionName, NullUtil.getInstance().NULL_OBJECT);
    }
    /*actual*/ static putOE(specialMessage, anyType = {}, functionName, exception = {}) {
        var className = PreLogUtil.LABEL;
        ;
        var actualClassName = anyType.constructor.name.toString();
        ;
        if (actualClassName !=
            null) {
            className = actualClassName;
        }
        var message = LogFormatUtil.getInstance().get(className, functionName, specialMessage, exception);
        ;
        hilog.info(0x0000, className, PreLogUtil.PUBLIC, message);
    }
    /*actual*/ static putS(specialMessage, className, functionName) {
        PreLogUtil.putSE(specialMessage, className, functionName, NullUtil.getInstance().NULL_OBJECT);
    }
    /*actual*/ static putSE(specialMessage, className, functionName, exception = {}) {
        var message = LogFormatUtil.getInstance().get(className, functionName, specialMessage, exception);
        ;
        hilog.info(0x0000, className, PreLogUtil.PUBLIC, message);
    }
    constructor() {
        super();
    }
}
PreLogUtil.PUBLIC = '%{public}s';
PreLogUtil.LABEL = "org.allbinary";
