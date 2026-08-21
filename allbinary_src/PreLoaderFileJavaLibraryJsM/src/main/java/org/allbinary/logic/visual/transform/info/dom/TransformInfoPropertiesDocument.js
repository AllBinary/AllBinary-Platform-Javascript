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
import { HashMap } from '../../../../../../../java/util/HashMap.js';
import { DomSearchHelper } from '../../../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js';
import { DomDocumentFileHelper } from '../../../../../../../org/allbinary/data/tree/dom/document/DomDocumentFileHelper.js';
import { LogUtil } from '../../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
import { AbFile } from '../../../../../../../org/allbinary/logic/io/file/AbFile.js';
import { TransformInfoData } from '../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoData.js';
import { TransformInfoPropertiesFactory } from '../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoPropertiesFactory.js';
import { TransformInfosData } from '../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfosData.js';
import { CommonStrings } from '../../../../../../../org/allbinary/string/CommonStrings.js';
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
            var transformInfoPropertiesHashMap = new HashMap();
            ;
            var transformInfosNode = this.document.getElementsByTagName(TransformInfosData.getInstance().NAME).item(0);
            ;
            var transformInfosChildNodeList = transformInfosNode.getChildNodes();
            ;
            var transformInfoNodeVector = DomSearchHelper.getAllNodes(TransformInfoData.getInstance().NAME, transformInfosChildNodeList);
            ;
            if (org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance().VIEW)) {
                this.logUtil.putF("Size: " + transformInfoNodeVector.length, this, "toTransformInfoPropertiesHashMap()");
            }
            var size = transformInfoNodeVector.length;
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
