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
import { DomNodeHelper } from '../../../../../../org/allbinary/data/tree/dom/DomNodeHelper.js';
//not GWT import const DomNodeHelper = globalThis.org.allbinary.data.tree.dom.DomNodeHelper;
import { DomSearchHelper } from '../../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js';
//not GWT import const DomSearchHelper = globalThis.org.allbinary.data.tree.dom.DomSearchHelper;
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not GWT import const NodeList = globalThis.org.w3c.dom.NodeList;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { TransformInfoData } from './TransformInfoData.js';
//not GWT import - same folder const TransformInfoData = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoData;
import { TransformInfoProperties } from './TransformInfoProperties.js';
//not GWT import - same folder const TransformInfoProperties = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoProperties;
export class TransformInfoPropertiesFactory extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return TransformInfoPropertiesFactory.instance;
    }
    constructor() {
        super();
        this.logUtil = LogUtil.getInstance();
    }
    //@Throws(Exception.constructor)
    getInstance(node) {
        var transformInfoChildNodeList = node.getChildNodes();
        ;
        var transformInfoData = TransformInfoData.getInstance();
        ;
        var attributes = node.getAttributes();
        ;
        var attrNode = attributes.getNamedItem(transformInfoData.NAME);
        ;
        var name = attrNode.getValue();
        ;
        if (org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance().VIEW)) {
            this.logUtil.putF("Next View Name: " + name, this, "toTransformInfoPropertiesHashMap()");
        }
        var labelNode = DomSearchHelper.getNodeNoThrow(transformInfoData.LABEL, transformInfoChildNodeList);
        ;
        var label = DomNodeHelper.getTextNodesValue(labelNode);
        ;
        if (label ==
            null) {
            label = name;
        }
        var descriptionNode = DomSearchHelper.getNode(transformInfoData.DESCRIPTION, transformInfoChildNodeList);
        ;
        var description = DomNodeHelper.getTextNodesValue(descriptionNode);
        ;
        var objectFileNode = DomSearchHelper.getNode(transformInfoData.OBJECTFILENAME, transformInfoChildNodeList);
        ;
        var objectFileName = DomNodeHelper.getTextNodeValue(objectFileNode);
        ;
        var objectConfigFileNode = DomSearchHelper.getNode(transformInfoData.OBJECTCONFIGFILENAME, transformInfoChildNodeList);
        ;
        var objectConfigFileName = DomNodeHelper.getTextNodeValue(objectConfigFileNode);
        ;
        var templateFileNode = DomSearchHelper.getNode(transformInfoData.TEMPLATEFILENAME, transformInfoChildNodeList);
        ;
        var templateFileName = DomNodeHelper.getTextNodeValue(templateFileNode);
        ;
        var transformInfoProperties = new TransformInfoProperties(name, label, description, objectFileName, objectConfigFileName, templateFileName);
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return transformInfoProperties;
    }
}
TransformInfoPropertiesFactory.instance = new TransformInfoPropertiesFactory();
