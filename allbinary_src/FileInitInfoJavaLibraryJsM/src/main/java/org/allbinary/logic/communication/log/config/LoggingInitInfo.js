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
//not GWT import const DomSearchHelper
import { DomDocumentHelper } from '../../../../../../org/allbinary/data/tree/dom/document/DomDocumentHelper.js';
//not GWT import const DomDocumentHelper
import { XmlDocumentHelper } from '../../../../../../org/allbinary/data/tree/dom/document/XmlDocumentHelper.js';
//not GWT import const XmlDocumentHelper
import { PATH_GLOBALS } from '../../../../../../org/allbinary/globals/PATH_GLOBALS.js';
//not GWT import const PATH_GLOBALS
import { URLGLOBALS } from '../../../../../../org/allbinary/globals/URLGLOBALS.js';
//not GWT import const URLGLOBALS
import { AbFileLocalInputStream } from '../../../../../../org/allbinary/logic/io/AbFileLocalInputStream.js';
//not GWT import const AbFileLocalInputStream
import { AbFile } from '../../../../../../org/allbinary/logic/io/file/AbFile.js';
//not GWT import const AbFile
import { AbPath } from '../../../../../../org/allbinary/logic/io/path/AbPath.js';
//not GWT import const AbPath
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//not GWT import const NodeList
//Current folder imports from return types, extended types, and scope (deduplicated)
import { LogConfigsData } from './LogConfigsData.js';
//sameFolderImports - not GWT import - same folder const LogConfigsData
import { LogConfigData } from './LogConfigData.js';
//sameFolderImports - not GWT import - same folder const LogConfigData
import { LogConfig } from './LogConfig.js';
//sameFolderImports - not GWT import - same folder const LogConfig
export class LoggingInitInfo extends Object {
    //@Throws(Exception.constructor)
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    static getDoc() {
        let path = URLGLOBALS.getWebappPath() + LoggingInitInfo.PACKAGE;
        ;
        let FILEABPATH = new AbPath(path, INITFILENAME);
        ;
        let file = AbFile.createAbFileFromAbPath(FILEABPATH);
        ;
        let document = DomDocumentHelper.create(new AbFileLocalInputStream(file));
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return document;
    }
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
        try {
            let document = LoggingInitInfo.getDoc();
            ;
            let logConfigsNodeList = document.getElementsByTagName(LogConfigsData.getInstance().NAME);
            ;
            let logConfigsNode = logConfigsNodeList.item(0);
            ;
            let logConfigNodeVector = DomSearchHelper.getAllNodes(LogConfigData.getInstance().NAME, logConfigsNode.getChildNodes());
            ;
            LoggingInitInfo.logConfigInfoList = new BasicArrayListD();
            let size = logConfigNodeVector.size();
            ;
            for (let i = 0; i < size; i++) {
                let node = logConfigNodeVector.get(i);
                ;
                let logConfigInfo = new LogConfig(node);
                ;
                LoggingInitInfo.logConfigInfoList.add(logConfigInfo);
            }
        }
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
            let document = LoggingInitInfo.getDoc();
            ;
            //if statement needs to be on the same line and ternary does not work the same way.
            return XmlDocumentHelper.toString(document);
            ;
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
LoggingInitInfo.INITFILENAME = "logConfig.xml";
LoggingInitInfo.PACKAGE = PATH_GLOBALS.getInstance().INIT_PATH;
LoggingInitInfo.logConfigInfoList = null;
LoggingInitInfo.hasRead = false;
