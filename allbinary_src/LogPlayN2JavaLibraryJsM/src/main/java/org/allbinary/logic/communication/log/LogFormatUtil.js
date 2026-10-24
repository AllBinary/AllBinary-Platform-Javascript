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
//not plain js import { TimeStampUtil } 
const TimeStampUtil = globalThis.org.allbinary.time.TimeStampUtil;
//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//not plain js import { ExceptionUtil } 
const ExceptionUtil = globalThis.org.allbinary.logic.java.exception.ExceptionUtil;
//not plain js import { CommonLabels } 
const CommonLabels = globalThis.org.allbinary.string.CommonLabels;
//Current folder imports from return types, extended types, and scope (deduplicated)
//ActualPlatform
/*actual*/ export class LogFormatUtil extends Object {
    /*actual*/ static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return LogFormatUtil.instance;
    }
    constructor() {
        super();
        this.timeStampUtil = TimeStampUtil.getInstance();
        this.commonSeps = CommonSeps.getInstance();
        this.LOG_ERROR = "\nLog-Error: ";
        this.EMPTY = "Empty";
        this.STACK_TRACE = "\nStack Trace: ";
        this.TIME = "Time: ";
        this.CLASS_NAME = this.commonSeps.SPACE;
        this.FUNCTION_CALL = CommonLabels.getInstance().COLON_SEP;
        this.SPECIAL_MESSAGE = "> ";
        this.stringUtil = StringUtil.getInstance();
        this.exceptionUtil = ExceptionUtil.getInstance();
        this.nullUtil = NullUtil.getInstance();
    }
    /*actual*/ get(className, functionName, specialMessage, exception = {}) {
        var stringBuffer = this.getF(className, functionName);
        ;
        stringBuffer.append(this.getO(exception));
        stringBuffer.append(this.SPECIAL_MESSAGE);
        stringBuffer.append(specialMessage);
        stringBuffer.append(this.commonSeps.NEW_LINE);
        //if statement needs to be on the same line and ternary does not work the same way.
        return stringBuffer.toString();
        ;
    }
    /*actual*/ getS(className, functionName, specialMessage) {
        var stringBuffer = this.getF(className, functionName);
        ;
        stringBuffer.append(this.SPECIAL_MESSAGE);
        stringBuffer.append(specialMessage);
        stringBuffer.append(this.commonSeps.NEW_LINE);
        //if statement needs to be on the same line and ternary does not work the same way.
        return stringBuffer.toString();
        ;
    }
    getF(className, functionName) {
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append(this.TIME);
        stringBuffer.append(this.timeStampUtil.getAsString());
        stringBuffer.append(this.CLASS_NAME);
        stringBuffer.append(className);
        stringBuffer.append(this.FUNCTION_CALL);
        stringBuffer.append(functionName);
        //if statement needs to be on the same line and ternary does not work the same way.
        return stringBuffer;
    }
    /*actual*/ getO(exception = {}) {
        if (exception != this.nullUtil.NULL_OBJECT) {
            var stringBuffer = new StringMaker();
            ;
            stringBuffer.append(this.LOG_ERROR);
            var exceptionAsString = exception.toString();
            ;
            if (exceptionAsString !=
                null) {
                stringBuffer.append(exceptionAsString);
            }
            else {
                stringBuffer.append(this.EMPTY);
            }
            stringBuffer.append(this.STACK_TRACE);
            if (exception != this.nullUtil.NULL_OBJECT) {
                stringBuffer.append(this.exceptionUtil.getStackTrace(exception));
            }
            else {
                stringBuffer.append(this.stringUtil.NULL_STRING);
            }
            //if statement needs to be on the same line and ternary does not work the same way.
            return stringBuffer.toString();
            ;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return StringUtil.getInstance().EMPTY_STRING;
        }
    }
}
LogFormatUtil.instance = new LogFormatUtil();
