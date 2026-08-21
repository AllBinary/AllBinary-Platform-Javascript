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
import { EntryData } from '../../../../../../org/allbinary/business/entry/EntryData.js';
import { DomNodeHelper } from '../../../../../../org/allbinary/data/tree/dom/DomNodeHelper.js';
import { DomSearchHelper } from '../../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js';
import { DomDocumentHelper } from '../../../../../../org/allbinary/data/tree/dom/document/DomDocumentHelper.js';
import { PATH_GLOBALS } from '../../../../../../org/allbinary/globals/PATH_GLOBALS.js';
import { URLGLOBALS } from '../../../../../../org/allbinary/globals/URLGLOBALS.js';
import { LogConfigTypeData } from '../../../../../../org/allbinary/logic/communication/log/config/type/LogConfigTypeData.js';
import { LogConfigTypes } from '../../../../../../org/allbinary/logic/communication/log/config/type/LogConfigTypes.js';
import { LogConfigTypesData } from '../../../../../../org/allbinary/logic/communication/log/config/type/LogConfigTypesData.js';
import { AbFileLocalInputStream } from '../../../../../../org/allbinary/logic/io/AbFileLocalInputStream.js';
import { AbFile } from '../../../../../../org/allbinary/logic/io/file/AbFile.js';
import { BooleanUtil } from '../../../../../../org/allbinary/logic/java/bool/BooleanUtil.js';
import { StringMaker } from '../../../../../../org/allbinary/logic/string/StringMaker.js';
import { BasicArrayListD } from '../../../../../../org/allbinary/util/BasicArrayListD.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { LogConfigData } from './LogConfigData.js';
export class LogConfig extends Object {
    constructor(aName, aDescription, aPath, aFileName) {
        super();
        this.isEnabled = false;
        this.name = aName;
        this.description = aDescription;
        this.path = aPath;
        this.fileName = aFileName;
    }
    constructor(node) {
        super();
        var enabledValueNode = DomSearchHelper.getNode(EntryData.getInstance().ENABLE, node.getChildNodes());
        ;
        var isEnabledString = DomNodeHelper.getTextNodeValue(enabledValueNode);
        ;
        this.isEnabled = BooleanUtil.getInstance().getFromString(isEnabledString);
        var logConfigData = LogConfigData.getInstance();
        ;
        var nameValueNode = DomSearchHelper.getNode(logConfigData.NAME, node.getChildNodes());
        ;
        this.name = DomNodeHelper.getTextNodeValue(nameValueNode);
        var descriptionValueNode = DomSearchHelper.getNode(logConfigData.DESCRIPTION, node.getChildNodes());
        ;
        this.description = DomNodeHelper.getTextNodeValue(descriptionValueNode);
        var fileValueNode = DomSearchHelper.getNode(logConfigData.FILE, node.getChildNodes());
        ;
        this.fileName = DomNodeHelper.getTextNodeValue(fileValueNode);
    }
    getName() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.name;
    }
    isEnabled() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.isEnabled;
    }
    enable() {
        this.isEnabled = true;
    }
    disable() {
        this.isEnabled = false;
    }
    getDescription() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.description;
    }
    getFileName() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.fileName;
    }
    setName(value) {
        this.name = value;
    }
    setDescription(value) {
        this.description = value;
    }
    setPath(value) {
        this.path = value;
    }
    setFileName(value) {
        this.fileName = value;
    }
    //@Throws(Exception.constructor)
    getDoc() {
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append(URLGLOBALS.getWebappPath());
        stringBuffer.append(PATH_GLOBALS.getInstance().INIT_PATH);
        stringBuffer.append(this.getFileName());
        var file = AbFile.createAbFile(stringBuffer.toString());
        ;
        var document = DomDocumentHelper.create(new AbFileLocalInputStream(file));
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return document;
    }
    //@Throws(Exception.constructor)
    getTypeVector() {
        var logKeyVector = new BasicArrayListD();
        ;
        var document = this.getDoc();
        ;
        var logConfigTypesNodeList = document.getElementsByTagName(LogConfigTypesData.getInstance().NAME);
        ;
        var logConfigTypesNode = logConfigTypesNodeList.item(0);
        ;
        var logConfigTypeNodeVector = DomSearchHelper.getAllNodes(LogConfigTypeData.getInstance().NAME, logConfigTypesNode.getChildNodes());
        ;
        var size = logConfigTypeNodeVector.length;
        ;
        for (var i = 0; i < size; i++) {
            var node = logConfigTypeNodeVector.elementAt(i);
            ;
            var logType = LogConfigTypes.getInstance(node);
            ;
            logKeyVector.add(logType);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return logKeyVector;
    }
}
