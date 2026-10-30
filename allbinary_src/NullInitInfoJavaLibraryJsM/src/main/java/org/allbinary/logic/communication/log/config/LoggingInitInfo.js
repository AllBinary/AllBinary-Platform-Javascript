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
import { Object } from '../../../../../../java/lang/Object.js';
import { Exception } from '../../../../../../java/lang/Exception.js';
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//sameFolderImports - not GWT import - same folder const LogConfig
export class LoggingInitInfo extends Object {
    //@Throws(Exception.constructor)
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    static write() {
        try {
            LoggingInitInfo.hasRead = false;
        }
        catch (caught) {
            {
                const e = caught;
                throw e;
            }
        }
    }
    //@Throws(Exception.constructor)
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    static read() {
        try { }
        catch (caught) {
            {
                const e = caught;
                throw e;
            }
        }
    }
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    static setHasRead(value) {
        LoggingInitInfo.hasRead = value;
    }
    //@Throws(Exception.constructor)
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    static updateIfNeeded() {
        if (!LoggingInitInfo.hasRead) {
            LoggingInitInfo.read();
            LoggingInitInfo.hasRead = true;
            if (LoggingInitInfo.logConfigInfoList ==
                null) {
                throw new Exception("Read Failed");
            }
        }
    }
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    static set(logConfigInfoList) {
        LoggingInitInfo.logConfigInfoList = logConfigInfoList;
    }
    //@Throws(Exception.constructor)
    static get() {
        LoggingInitInfo.updateIfNeeded();
        //if statement needs to be on the same line and ternary does not work the same way.
        return LoggingInitInfo.logConfigInfoList;
    }
    //@Throws(Exception.constructor)
    static getTypeList() {
        LoggingInitInfo.updateIfNeeded();
        let allLogTypeVector = new BasicArrayListD();
        ;
        let size = LoggingInitInfo.logConfigInfoList.size();
        ;
        for (let index = 0; index < size; index++) {
            let logConfigInfo = LoggingInitInfo.logConfigInfoList.objectArray[index];
            ;
            let logTypeVector = logConfigInfo.getTypeVector();
            ;
            if (logConfigInfo.isEnabled()) {
                allLogTypeVector.addAllList(logTypeVector);
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return allLogTypeVector;
    }
    constructor() {
        super();
    }
    isValid() {
        try {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        catch (caught) {
            {
                const e = caught;
                //if statement needs to be on the same line and ternary does not work the same way.
                return false;
            }
        }
    }
    //@Throws(Exception.constructor)
    getNumberOfLogConfigs() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return LoggingInitInfo.logConfigInfoList.size();
        ;
    }
    toString() {
        try {
            //if statement needs to be on the same line and ternary does not work the same way.
            return null;
        }
        catch (caught) {
            {
                const e = caught;
                //if statement needs to be on the same line and ternary does not work the same way.
                return "Error";
            }
        }
    }
}
LoggingInitInfo.logConfigInfoList = null;
LoggingInitInfo.hasRead = false;
