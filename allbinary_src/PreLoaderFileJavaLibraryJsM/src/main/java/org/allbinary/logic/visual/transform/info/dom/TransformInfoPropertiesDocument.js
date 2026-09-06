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
//not GWT import const HashMap = globalThis.java.util.HashMap;
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
import { DomSearchHelper } from '../../../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js';
//not GWT import const DomSearchHelper = globalThis.org.allbinary.data.tree.dom.DomSearchHelper;
import { DomDocumentFileHelper } from '../../../../../../../org/allbinary/data/tree/dom/document/DomDocumentFileHelper.js';
//not GWT import const DomDocumentFileHelper = globalThis.org.allbinary.data.tree.dom.document.DomDocumentFileHelper;
//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
import { AbFile } from '../../../../../../../org/allbinary/logic/io/file/AbFile.js';
//not GWT import const AbFile = globalThis.org.allbinary.logic.io.file.AbFile;
import { TransformInfoData } from '../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoData.js';
//not GWT import const TransformInfoProperties = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoProperties;
import { TransformInfoPropertiesFactory } from '../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoPropertiesFactory.js';
//not GWT import const TransformInfoPropertiesFactory = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoPropertiesFactory;
import { TransformInfosData } from '../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfosData.js';
//not GWT import const TransformInfosData = globalThis.org.allbinary.logic.visual.transform.info.TransformInfosData;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not GWT import const NodeList = globalThis.org.w3c.dom.NodeList;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class TransformInfoPropertiesDocument extends Object {
    constructor(filePath) {
        super();
        this.logUtil = LogUtil.getInstance();
        var xmlFile = AbFile.createAbFile(filePath);
        ;
        this.document = DomDocumentFileHelper.createDocument(xmlFile);
    }
    toTransformInfoPropertiesHashMap() {
        try {
            var transformInfoPropertiesHashMap = StdUtil.getInstance().createHashMap();
            ;
            var transformInfosNode = this.document.getElementsByTagName(TransformInfosData.getInstance().NAME).item(0);
            ;
            var transformInfosChildNodeList = transformInfosNode.getChildNodes();
            ;
            var transformInfoNodeVector = DomSearchHelper.getAllNodes(TransformInfoData.getInstance().NAME, transformInfosChildNodeList);
            ;
            if (org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance().VIEW)) {
                this.logUtil.putF("Size: " + transformInfoNodeVector.size(), this, "toTransformInfoPropertiesHashMap()");
            }
            var size = transformInfoNodeVector.size();
            ;
            var node;
            ;
            var transformInfoProperties;
            ;
            for (var index = 0; index < size; index++) {
                node = transformInfoNodeVector.get(index);
                transformInfoProperties = TransformInfoPropertiesFactory.getInstance().getInstance(node);
                transformInfoPropertiesHashMap.put(transformInfoProperties.getName(), transformInfoProperties);
            }
            //if statement needs to be on the same line and ternary does not work the same way.
            return transformInfoPropertiesHashMap;
            //: 
        }
        catch (e) {
            if (org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance().VIEWERROR)) {
                var commonStrings = CommonStrings.getInstance();
                ;
                this.logUtil.put(commonStrings.EXCEPTION, this, "toTransformInfoPropertiesHashMap()", e);
            }
            //if statement needs to be on the same line and ternary does not work the same way.
            return null;
        }
    }
}
