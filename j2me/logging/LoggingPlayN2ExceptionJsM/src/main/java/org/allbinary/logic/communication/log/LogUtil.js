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
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;
//not plain js import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not plain js import { PlayN } from '../../../../../playn/core/PlayN.js';
const PlayN = globalThis.playn.core.PlayN;
//not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;
//Current folder imports from return types, extended types, and scope (deduplicated)
//not plain js import { LogFormatUtil } from './LogFormatUtil.js';
const LogFormatUtil = globalThis.org.allbinary.logic.communication.log.LogFormatUtil;
//not plain js import { Log } from './Log.js';
const Log = globalThis.org.allbinary.logic.communication.log.Log;
//not plain js import { PreLogUtil } from './PreLogUtil.js';
const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;
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
        if (log ==
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
        var exception = log.getThrowable();
        ;
        this.put(specialMessage, anyType, functionName, exception);
    }
    /*actual*/ putF(specialMessage, anyType = {}, functionName) {
        var className = PreLogUtil.getClassName(anyType);
        ;
        if (className ==
            null) {
            className = CommonStrings.getInstance().EMPTY;
        }
        var message = this.logFormatUtil.getS(className, functionName, specialMessage);
        ;
        var playN = PlayN.getInstance();
        ;
        playN.log().debug(this.LOG_SUCCESS + message);
    }
    /*actual*/ putFS(specialMessage, className, functionName) {
        var message = this.logFormatUtil.getS(className, functionName, specialMessage);
        ;
        var playN = PlayN.getInstance();
        ;
        playN.log().debug(this.LOG_SUCCESS + message);
    }
    /*actual*/ put(specialMessage, anyType = {}, functionName, exception = {}) {
        var className = PreLogUtil.getClassName(anyType);
        ;
        if (className ==
            null) {
            className = CommonStrings.getInstance().EMPTY;
        }
        var message = this.logFormatUtil.get(className, functionName, specialMessage, exception);
        ;
        var playN = PlayN.getInstance();
        ;
        if (exception !=
            null) {
            playN.log().error(this.LOG_SUCCESS + message, exception);
        }
        else {
            playN.log().debug(this.LOG_SUCCESS + message);
        }
    }
}
LogUtil.instance = new LogUtil();
