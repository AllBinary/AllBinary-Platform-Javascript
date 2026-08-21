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
import { DomSearchHelper } from '../../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js';
import { DomDocumentHelper } from '../../../../../../org/allbinary/data/tree/dom/document/DomDocumentHelper.js';
import { PATH_GLOBALS } from '../../../../../../org/allbinary/globals/PATH_GLOBALS.js';
import { URLGLOBALS } from '../../../../../../org/allbinary/globals/URLGLOBALS.js';
import { AbFileLocalInputStream } from '../../../../../../org/allbinary/logic/io/AbFileLocalInputStream.js';
import { AbFile } from '../../../../../../org/allbinary/logic/io/file/AbFile.js';
import { AbPath } from '../../../../../../org/allbinary/logic/io/path/AbPath.js';
import { BasicArrayListD } from '../../../../../../org/allbinary/util/BasicArrayListD.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { LogConfigsData } from './LogConfigsData.js';
import { LogConfigData } from './LogConfigData.js';
import { LogConfig } from './LogConfig.js';
export class LoggingInitInfo extends Object {
    //@Throws(Exception.constructor)
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    static getDoc() {
        var path = URLGLOBALS.getWebappPath() + LoggingInitInfo.PACKAGE;
        ;
        var FILEABPATH = new AbPath(path, INITFILENAME);
        ;
        var file = AbFile.createAbFileFromAbPath(FILEABPATH);
        ;
        var document = DomDocumentHelper.create(new AbFileLocalInputStream(file));
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return document;
    }
    //@Throws(Exception.constructor)
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    static write() {
        try {
            LoggingInitInfo.hasRead = false;
            //: 
        }
        catch (e) {
            throw e;
        }
    }
    //@Throws(Exception.constructor)
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    static read() {
        try {
            var document = LoggingInitInfo.getDoc();
            ;
            var logConfigsNodeList = document.getElementsByTagName(LogConfigsData.getInstance().NAME);
            ;
            var logConfigsNode = logConfigsNodeList.item(0);
            ;
            var logConfigNodeVector = DomSearchHelper.getAllNodes(LogConfigData.getInstance().NAME, logConfigsNode.getChildNodes());
            ;
            LoggingInitInfo.logConfigInfoList = new BasicArrayListD();
            var size = logConfigNodeVector.length;
            ;
            for (var i = 0; i < size; i++) {
                var node = logConfigNodeVector.elementAt(i);
                ;
                var logConfigInfo = new LogConfig(node);
                ;
                LoggingInitInfo.logConfigInfoList.add(logConfigInfo);
            }
            //: 
        }
        catch (e) {
            throw e;
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
    static set(logConfigInfoVector) {
        LoggingInitInfo.logConfigInfoList = logConfigInfoVector;
    }
    //@Throws(Exception.constructor)
    static get() {
        LoggingInitInfo.updateIfNeeded();
        //if statement needs to be on the same line and ternary does not work the same way.
        return LoggingInitInfo.logConfigInfoList;
    }
    //@Throws(Exception.constructor)
    static getTypeNameList() {
        LoggingInitInfo.updateIfNeeded();
        var allLogTypeVector = new BasicArrayListD();
        ;
        var size = LoggingInitInfo.logConfigInfoList.size();
        ;
        for (var index = 0; index < size; index++) {
            var logConfigInfo = LoggingInitInfo.logConfigInfoList.objectArray[index];
            ;
            var logTypeVector = logConfigInfo.getTypeVector();
            ;
            if (logConfigInfo.isEnabled()) {
                allLogTypeVector.addAllList(logTypeVector);
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return allLogTypeVector;
    }
    //@Throws(Exception.constructor)
    static getTypeList() {
        LoggingInitInfo.updateIfNeeded();
        var allLogTypeVector = new BasicArrayListD();
        ;
        var size = LoggingInitInfo.logConfigInfoList.size();
        ;
        for (var index = 0; index < size; index++) {
            var logConfigInfo = LoggingInitInfo.logConfigInfoList.objectArray[index];
            ;
            var logTypeVector = logConfigInfo.getTypeVector();
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
            //: 
        }
        catch (e) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
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
            var document = LoggingInitInfo.getDoc();
            ;
            //if statement needs to be on the same line and ternary does not work the same way.
            return DomDocumentHelper.toString(document);
            ;
            //: 
        }
        catch (e) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return "Error";
        }
    }
}
LoggingInitInfo.INITFILENAME = "logConfig.xml";
LoggingInitInfo.PACKAGE = PATH_GLOBALS.getInstance().INIT_PATH;
LoggingInitInfo.logConfigInfoList = null;
LoggingInitInfo.hasRead = false;
