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
//not GWT import const EntryData = globalThis.org.allbinary.business.entry.EntryData;
import { DomNodeHelper } from '../../../../../../org/allbinary/data/tree/dom/DomNodeHelper.js';
//not GWT import const DomNodeHelper = globalThis.org.allbinary.data.tree.dom.DomNodeHelper;
import { DomSearchHelper } from '../../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js';
//not GWT import const DomSearchHelper = globalThis.org.allbinary.data.tree.dom.DomSearchHelper;
import { BooleanUtil } from '../../../../../../org/allbinary/logic/java/bool/BooleanUtil.js';
//not GWT import const BooleanUtil = globalThis.org.allbinary.logic.java.bool.BooleanUtil;
//not plain js import { BasicArrayList } from '../../../../../../org/allbinary/util/BasicArrayList.js';
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } from '../../../../../../org/allbinary/util/BasicArrayListD.js';
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//not GWT import const Node = globalThis.org.w3c.dom.Node;
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
    getTypeVector() {
        var logKeyVector = new BasicArrayListD();
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return logKeyVector;
    }
}
