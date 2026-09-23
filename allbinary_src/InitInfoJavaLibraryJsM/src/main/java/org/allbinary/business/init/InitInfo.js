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
import { Object } from '../../../../java/lang/Object.js';
//not GWT import const HashMap
//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
//not plain js import { PreLogUtil } 
const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;
import { LogConfigTypeFactory } from '../../../../org/allbinary/logic/communication/log/config/type/LogConfigTypeFactory.js';
//not GWT import const LogConfigTypeFactory
import { LogConfigTypes } from '../../../../org/allbinary/logic/communication/log/config/type/LogConfigTypes.js';
//not GWT import const LogConfigTypes
import { AbPath } from '../../../../org/allbinary/logic/io/path/AbPath.js';
//not GWT import const AbPath
import { BooleanUtil } from '../../../../org/allbinary/logic/java/bool/BooleanUtil.js';
//not GWT import const BooleanUtil
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { InitInfoEntity } from './InitInfoEntity.js';
//not GWT import - same folder const InitInfoEntity
export class InitInfo extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return InitInfo.instance;
    }
    constructor() {
        super();
        this.TESTING = "TESTING";
        this.MAINPATH = "MAINPATH";
        this.TESTHTMLPATH = "TESTHTMLPATH";
        this.testing = null;
        this.mainPath = null;
        this.testHtmlPath = null;
        this.hasRead = false;
    }
    //@Throws(InitException.constructor)
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    set() {
        try {
            var initInfoEntity = new InitInfoEntity();
            ;
            if (LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance().PRELOADER)) {
                PreLogUtil.put("created entity", "InitInfo", "set()");
            }
            if (!initInfoEntity.is()) {
                if (LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance().PRELOADER)) {
                    PreLogUtil.put("adding", "InitInfo", "set()");
                }
                initInfoEntity.add();
            }
            else {
                if (LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance().PRELOADER)) {
                    PreLogUtil.put("update", "InitInfo", "set()");
                }
                initInfoEntity.update();
            }
            this.hasRead = false;
            //: 
        }
        catch (e) {
            if (LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance().PRELOADERERROR)) {
                PreLogUtil.putOE("error", "InitInfo", "set()", e);
            }
        }
    }
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    set(hashMap) {
        try {
            this.testing = hashMap.get(this.TESTING);
            this.mainPath = new AbPath(hashMap.get(this.MAINPATH), StringUtil.getInstance().EMPTY_STRING);
            this.testHtmlPath = new AbPath(hashMap.get(this.TESTHTMLPATH), StringUtil.getInstance().EMPTY_STRING);
            //: 
        }
        catch (e) {
            if (LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance().PRELOADERERROR)) {
                PreLogUtil.putOE("error", "InitInfo", "set()", e);
            }
        }
    }
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    get() {
        try {
            this.testing =
                null;
            this.mainPath =
                null;
            this.testHtmlPath =
                null;
            var initInfoEntity = new InitInfoEntity();
            ;
            initInfoEntity.get();
            //: 
        }
        catch (e) {
            if (LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance().PRELOADERERROR)) {
                PreLogUtil.putOE("error", "InitInfo", "set()", e);
            }
            //if statement needs to be on the same line and ternary does not work the same way.
            return;
        }
    }
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    setHasRead(value) {
        this.hasRead = value;
    }
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    updateIfNeeded() {
        try {
            if (!this.hasRead) {
                this.hasRead = true;
                this.get();
            }
            //: 
        }
        catch (e) {
            if (LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance().PRELOADERERROR)) {
                PreLogUtil.putOE("error", "InitInfo", "updateIfNeeded()", e);
            }
            //if statement needs to be on the same line and ternary does not work the same way.
            return;
        }
    }
    isTesting() {
        try {
            this.updateIfNeeded();
            //if statement needs to be on the same line and ternary does not work the same way.
            return BooleanUtil.getInstance().getFromString(this.testing);
            ;
            //: 
        }
        catch (e) {
            if (LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance().PRELOADERERROR)) {
                PreLogUtil.putOE("error", "InitInfo", "updateIfNeeded()", e);
            }
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
    }
    getTesting() {
        this.updateIfNeeded();
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.testing;
    }
    getTestHtmlPath() {
        this.updateIfNeeded();
        if (this.testHtmlPath !=
            null) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return this.testHtmlPath.toString();
            ;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return null;
        }
    }
    getMainPath() {
        this.updateIfNeeded();
        if (this.mainPath !=
            null) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return this.mainPath.toString();
            ;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return null;
        }
    }
    setTesting(value) {
        this.testing = value;
    }
    setTestHtmlPath(value) {
        this.testHtmlPath = value;
    }
    setMainPath(value) {
        this.mainPath = value;
    }
    isMainPathValid(abPath) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return true;
    }
    isTestHtmlPathValid(abPath) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return true;
    }
    //@Throws(Exception.constructor)
    isTestingValid(testing) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return BooleanUtil.getInstance().isStringBoolean(testing);
        ;
    }
    toHashMap() {
        var hashMap = StdUtil.getInstance().createHashMap();
        ;
        hashMap.put(this.TESTING, this.getTesting());
        hashMap.put(this.MAINPATH, this.getMainPath());
        hashMap.put(this.TESTHTMLPATH, this.getTestHtmlPath());
        //if statement needs to be on the same line and ternary does not work the same way.
        return hashMap;
    }
}
InitInfo.instance = new InitInfo();
