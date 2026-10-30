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
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
import { Node } from '../../../../../org/w3c/dom/Node.js';
//not GWT import const NodeList
//Current folder imports from return types, extended types, and scope (deduplicated)
import { DomSearchHelper } from './DomSearchHelper.js';
//sameFolderImports - not GWT import - same folder const DomSearchHelper
export class DomNodeHelper extends Object {
    static getFirstChildElement(parentNode) {
        let node = parentNode.getFirstChild();
        ;
        if (node !=
            null
            && node.getNodeType() != Node.ELEMENT_NODE) {
            let nodeList = parentNode.getChildNodes();
            ;
            for (let index = 0; index < nodeList.getLength(); index++) {
                node = nodeList.item(index);
                if (node.getNodeType() == 1) {
                    break;
                }
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return node;
    }
    static getTextNodeValue(...args) {
        if (args.length === 1)
            return this.getTextNodeValue$overload1(args[0]);
        if (args.length === 2 && typeof args[0] === 'string')
            return this.getTextNodeValue$overload2(args[0], args[1]);
        throw new TypeError('No matching overload: getTextNodeValue');
    }
    static getTextNodeValue$overload1(node) {
        let nodeTextNode = node.getFirstChild();
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
    static getTextNodeValue$overload2(nodeName, nodeList) {
        let node = DomSearchHelper.getNode(nodeName, nodeList);
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return DomNodeHelper.getTextNodeValue(node);
        ;
    }
    static getTextNodesValue(node) {
        let stringBuffer = new StringMaker();
        ;
        let nodeList = node.getChildNodes();
        ;
        for (let index = 0; index < nodeList.getLength(); index++) {
            let nodeTextNode = nodeList.item(index);
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
