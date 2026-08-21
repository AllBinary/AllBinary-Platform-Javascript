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
import { DomSearchHelper } from '../../../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js';
import { PreLogUtil } from '../../../../../../../org/allbinary/logic/communication/log/PreLogUtil.js';
import { LoggingInitInfo } from '../../../../../../../org/allbinary/logic/communication/log/config/LoggingInitInfo.js';
import { BasicArrayListD } from '../../../../../../../org/allbinary/util/BasicArrayListD.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { LogConfigTypeFactory } from './LogConfigTypeFactory.js';
import { LogConfigTypeData } from './LogConfigTypeData.js';
import { LogConfigType } from './LogConfigType.js';
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
            var loggingInitInfo = new LoggingInitInfo();
            ;
            var logConfigTypeVector = loggingInitInfo.getTypeList();
            ;
            PreLogUtil.put("Number Of Log Configs: " + loggingInitInfo.getNumberOfLogConfigs(), "LogConfigTypes", "init()");
            PreLogUtil.put("Number Of Log Config Type Names: " + logConfigTypeVector.size(), "LogConfigTypes", "init()");
            LogConfigTypes.LOGGING.addAllList(logConfigTypeVector);
            LogConfigTypes.LOGGING.add(LogConfigTypeFactory.getInstance().NETBEANS_MODULE);
            //: 
        }
        catch (e) {
            PreLogUtil.putSE("Unable to initialize LogConfigTypes", "LogConfigTypes", "init()", e);
        }
    }
    //@Throws(Exception.constructor)
    static getInstance(node) {
        var nameValueNode = DomSearchHelper.getNode(LogConfigTypeData.getInstance().NAME, node.getChildNodes());
        ;
        var name = DomNodeHelper.getTextNodeValue(nameValueNode);
        ;
        var descriptionValueNode = DomSearchHelper.getNodeNoThrow(LogConfigTypeData.getInstance().DESCRIPTION, node.getChildNodes());
        ;
        if (descriptionValueNode !=
            null) {
            var description = DomNodeHelper.getTextNodeValue(descriptionValueNode);
            ;
        }
        var availableLogConfigTypes = LogConfigType.availableLogConfigTypes;
        ;
        var size = availableLogConfigTypes.size();
        ;
        var logConfigType;
        ;
        for (var index = 0; index < size; index++) {
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
