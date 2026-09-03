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
//not plain js import { BasicArrayList } from '../../../../../../org/allbinary/util/BasicArrayList.js';
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } from '../../../../../../org/allbinary/util/BasicArrayListD.js';
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
import { EntryData } from '../../../../../../org/allbinary/business/entry/EntryData.js';
//not GWT import const EntryData = globalThis.org.allbinary.business.entry.EntryData;
import { DomNodeHelper } from '../../../../../../org/allbinary/data/tree/dom/DomNodeHelper.js';
//not GWT import const DomNodeHelper = globalThis.org.allbinary.data.tree.dom.DomNodeHelper;
import { DomSearchHelper } from '../../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js';
//not GWT import const DomSearchHelper = globalThis.org.allbinary.data.tree.dom.DomSearchHelper;
import { DomDocumentHelper } from '../../../../../../org/allbinary/data/tree/dom/document/DomDocumentHelper.js';
//not GWT import const DomDocumentHelper = globalThis.org.allbinary.data.tree.dom.document.DomDocumentHelper;
import { PATH_GLOBALS } from '../../../../../../org/allbinary/globals/PATH_GLOBALS.js';
//not GWT import const PATH_GLOBALS = globalThis.org.allbinary.globals.PATH_GLOBALS;
import { URLGLOBALS } from '../../../../../../org/allbinary/globals/URLGLOBALS.js';
//not GWT import const LogConfigType = globalThis.org.allbinary.logic.communication.log.config.type.LogConfigType;
import { LogConfigTypeData } from '../../../../../../org/allbinary/logic/communication/log/config/type/LogConfigTypeData.js';
//not GWT import const LogConfigTypeData = globalThis.org.allbinary.logic.communication.log.config.type.LogConfigTypeData;
import { LogConfigTypes } from '../../../../../../org/allbinary/logic/communication/log/config/type/LogConfigTypes.js';
//not GWT import const LogConfigTypes = globalThis.org.allbinary.logic.communication.log.config.type.LogConfigTypes;
import { LogConfigTypesData } from '../../../../../../org/allbinary/logic/communication/log/config/type/LogConfigTypesData.js';
//not GWT import const LogConfigTypesData = globalThis.org.allbinary.logic.communication.log.config.type.LogConfigTypesData;
import { AbFileLocalInputStream } from '../../../../../../org/allbinary/logic/io/AbFileLocalInputStream.js';
//not GWT import const AbFileLocalInputStream = globalThis.org.allbinary.logic.io.AbFileLocalInputStream;
import { AbFile } from '../../../../../../org/allbinary/logic/io/file/AbFile.js';
//not GWT import const AbFile = globalThis.org.allbinary.logic.io.file.AbFile;
import { BooleanUtil } from '../../../../../../org/allbinary/logic/java/bool/BooleanUtil.js';
//not GWT import const BooleanUtil = globalThis.org.allbinary.logic.java.bool.BooleanUtil;
//not plain js import { StringMaker } from '../../../../../../org/allbinary/logic/string/StringMaker.js';
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { BasicArrayList } from '../../../../../../org/allbinary/util/BasicArrayList.js';
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } from '../../../../../../org/allbinary/util/BasicArrayListD.js';
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//not GWT import const NodeList = globalThis.org.w3c.dom.NodeList;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { LogConfigData } from './LogConfigData.js';
//not GWT import const LogConfigData = globalThis.org.allbinary.logic.communication.log.config.LogConfigData;
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
        var size = logConfigTypeNodeVector.size();
        ;
        for (var i = 0; i < size; i++) {
            var node = logConfigTypeNodeVector.get(i);
            ;
            var logType = LogConfigTypes.getInstance(node);
            ;
            logKeyVector.add(logType);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return logKeyVector;
    }
}
