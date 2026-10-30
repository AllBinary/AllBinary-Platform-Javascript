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
import { Object } from '../../../../../../../java/lang/Object.js';
import { Exception } from '../../../../../../../java/lang/Exception.js';
import { DomNodeHelper } from '../../../../../../../org/allbinary/data/tree/dom/DomNodeHelper.js';
//not GWT import const DomNodeHelper
import { DomSearchHelper } from '../../../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js';
//not GWT import const DomSearchHelper
//not plain js import { PreLogUtil } 
const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;
import { LoggingInitInfo } from '../../../../../../../org/allbinary/logic/communication/log/config/LoggingInitInfo.js';
//not GWT import const LoggingInitInfo
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//not GWT import const Node
//Current folder imports from return types, extended types, and scope (deduplicated)
import { LogConfigTypeFactory } from './LogConfigTypeFactory.js';
//sameFolderImports - not GWT import - same folder const LogConfigTypeFactory
import { LogConfigTypeData } from './LogConfigTypeData.js';
//sameFolderImports - not GWT import - same folder const LogConfigTypeData
import { LogConfigType } from './LogConfigType.js';
//sameFolderImports - not GWT import - same folder const LogConfigType
export class LogConfigTypes extends Object {
    static init() {
        LogConfigTypes.init();
        return 0;
    }
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    static init() {
        try {
            PreLogUtil.put("Initialize LogconfigTypes", "LogConfigTypes", "init()");
            LogConfigTypeFactory.getInstance();
            let loggingInitInfo = new LoggingInitInfo();
            ;
            let logConfigTypeVector = loggingInitInfo.getTypeList();
            ;
            PreLogUtil.put("Number Of Log Configs: " + loggingInitInfo.getNumberOfLogConfigs(), "LogConfigTypes", "init()");
            PreLogUtil.put("Number Of Log Config Type Names: " + logConfigTypeVector.size(), "LogConfigTypes", "init()");
            LogConfigTypes.LOGGING.addAllList(logConfigTypeVector);
            LogConfigTypes.LOGGING.add(LogConfigTypeFactory.getInstance().NETBEANS_MODULE);
        }
        catch (caught) {
            {
                const e = caught;
                PreLogUtil.putSE("Unable to initialize LogConfigTypes", "LogConfigTypes", "init()", e);
            }
        }
    }
    //@Throws(Exception.constructor)
    static getInstance(node) {
        let nameValueNode = DomSearchHelper.getNode(LogConfigTypeData.getInstance().NAME, node.getChildNodes());
        ;
        let name = DomNodeHelper.getTextNodeValue(nameValueNode);
        ;
        let descriptionValueNode = DomSearchHelper.getNodeNoThrow(LogConfigTypeData.getInstance().DESCRIPTION, node.getChildNodes());
        ;
        if (descriptionValueNode !=
            null) {
            let description = DomNodeHelper.getTextNodeValue(descriptionValueNode);
            ;
        }
        let availableLogConfigTypes = LogConfigType.availableLogConfigTypes;
        ;
        let size = availableLogConfigTypes.size();
        ;
        let logConfigType;
        ;
        for (let index = 0; index < size; index++) {
            logConfigType = availableLogConfigTypes.get(index);
            if (logConfigType.getName().compareTo(name) == 0) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return logConfigType;
            }
        }
        throw new Exception("No Such LogConfigType: " + name);
    }
    constructor() {
        super();
    }
}
LogConfigTypes.JSP_ERROR_NO_FUNCTION = "in JSP Not In Function";
LogConfigTypes.LOGGING = new BasicArrayListD();
LogConfigTypes.initResult = LogConfigTypes.init();
