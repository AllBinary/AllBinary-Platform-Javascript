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
import { Object } from '../../../../../java/lang/Object.js';
//not plain js import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
import { Node } from '../../../../../org/w3c/dom/Node.js';
//not GWT import const NodeList = globalThis.org.w3c.dom.NodeList;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { DomSearchHelper } from './DomSearchHelper.js';
//not GWT import const DomSearchHelper = globalThis.org.allbinary.data.tree.dom.DomSearchHelper;
export class DomNodeHelper extends Object {
    static getFirstChildElement(parentNode) {
        var node = parentNode.getFirstChild();
        ;
        if (node !=
            null
            && node.getNodeType() != Node.ELEMENT_NODE) {
            var nodeList = parentNode.getChildNodes();
            ;
            for (var index = 0; index < nodeList.getLength(); index++) {
                node = nodeList.item(index);
                if (node.getNodeType() == 1) {
                    break;
                }
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return node;
    }
    static getTextNodeValue(node) {
        var nodeTextNode = node.getFirstChild();
        ;
        if (nodeTextNode !=
            null) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return nodeTextNode.getNodeValue();
            ;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return StringUtil.getInstance().EMPTY_STRING;
        }
    }
    //@Throws(Exception.constructor)
    static getTextNodeValue(nodeName, nodeList) {
        var node = DomSearchHelper.getNode(nodeName, nodeList);
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return DomNodeHelper.getTextNodeValue(node);
        ;
    }
    static getTextNodesValue(node) {
        var stringBuffer = new StringMaker();
        ;
        var nodeList = node.getChildNodes();
        ;
        for (var index = 0; index < nodeList.getLength(); index++) {
            var nodeTextNode = nodeList.item(index);
            ;
            if (nodeTextNode.getNodeType() == Node.TEXT_NODE) {
                if (nodeTextNode !=
                    null) {
                    stringBuffer.append(nodeTextNode.getNodeValue());
                }
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return stringBuffer.toString();
        ;
    }
    constructor() {
        super();
    }
}
