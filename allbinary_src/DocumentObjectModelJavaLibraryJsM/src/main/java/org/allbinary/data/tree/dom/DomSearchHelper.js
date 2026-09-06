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
import { Exception } from '../../../../../java/lang/Exception.js';
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//not GWT import const NodeList = globalThis.org.w3c.dom.NodeList;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class DomSearchHelper extends Object {
    static getNodeNoThrow(nodeName, nodeList) {
        var numberOfNodes = nodeList.getLength();
        ;
        for (var index = 0; index < numberOfNodes; index++) {
            var node = nodeList.item(index);
            ;
            if (node.getNodeName().compareTo(nodeName) == 0) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return node;
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return null;
    }
    //@Throws(Exception.constructor)
    static getNode(nodeName, nodeList) {
        var node = DomSearchHelper.getNodeNoThrow(nodeName, nodeList);
        ;
        if (node !=
            null) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return node;
        }
        else {
            throw new Exception(nodeName + " Node Not Found in search");
        }
    }
    //@Throws(Exception.constructor)
    static getChildNodeList(nodeName, nodeList) {
        var node = DomSearchHelper.getNode(nodeName, nodeList);
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return node.getChildNodes();
        ;
    }
    //@Throws(Exception.constructor)
    static getAllNodes(nodeName, nodeList) {
        var vector = DomSearchHelper.getAllNodesNoThrow(nodeName, nodeList);
        ;
        if (vector ==
            null) {
            throw new Exception(nodeName + " Node Not Found in search");
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return vector;
        }
    }
    static getAllNodesNoThrow(nodeName, nodeList) {
        var nodeVector = new BasicArrayListD();
        ;
        var numberOfNodes = nodeList.getLength();
        ;
        for (var index = 0; index < numberOfNodes; index++) {
            var node = nodeList.item(index);
            ;
            if (node.getNodeName().compareTo(nodeName) == 0) {
                nodeVector.add(node);
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return nodeVector;
    }
    constructor() {
        super();
    }
}
