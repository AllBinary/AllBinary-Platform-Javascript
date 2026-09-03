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
//not plain js import { CommonSeps } from '../../../../../org/allbinary/string/CommonSeps.js';
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
//not plain js import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not plain js import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//not plain js import { PlayN } from '../../../../../playn/core/PlayN.js';
const PlayN = globalThis.playn.core.PlayN;
//Current folder imports from return types, extended types, and scope (deduplicated)
//not plain js import { LogFormatUtil } from './LogFormatUtil.js';
const LogFormatUtil = globalThis.org.allbinary.logic.communication.log.LogFormatUtil;
//ActualPlatform
/*actual*/ export class PreLogUtil extends Object {
    /*actual*/ static put(specialMessage, anyType = {}, functionName) {
        var className = PreLogUtil.getClassName(anyType);
        ;
        if (className ==
            null) {
            className = CommonStrings.getInstance().EMPTY;
        }
        className = new StringMaker().append(className).append(CommonSeps.getInstance().FORWARD_SLASH).append(StringUtil.getInstance().toString(anyType)).toString();
        var message = LogFormatUtil.getInstance().getS(className, functionName, specialMessage);
        ;
        PlayN.log().debug(PreLogUtil.LOG_SUCCESS + message);
    }
    /*actual*/ static putOE(specialMessage, anyType = {}, functionName, exception = {}) {
        var className = PreLogUtil.getClassName(anyType);
        ;
        if (className ==
            null) {
            className = CommonStrings.getInstance().EMPTY;
        }
        className = new StringMaker().append(className).append(CommonSeps.getInstance().FORWARD_SLASH).append(StringUtil.getInstance().toString(anyType)).toString();
        var message = LogFormatUtil.getInstance().get(className, functionName, specialMessage, exception);
        ;
        PlayN.log().error(PreLogUtil.LOG_SUCCESS + message, exception);
    }
    /*actual*/ static putS(specialMessage, className, functionName) {
        var message = LogFormatUtil.getInstance().getS(className, functionName, specialMessage);
        ;
        PlayN.log().debug(PreLogUtil.LOG_SUCCESS + message);
    }
    /*actual*/ static putSE(specialMessage, className, functionName, exception = {}) {
        var message = LogFormatUtil.getInstance().get(className, functionName, specialMessage, exception);
        ;
        PlayN.log().error(PreLogUtil.LOG_SUCCESS + message, exception);
    }
    /*actual*/ static getClassName(anyType = {}) {
    }
    //native - END
    constructor() {
        super();
    }
}
PreLogUtil.LOG_SUCCESS = "org.allbinary: ";
