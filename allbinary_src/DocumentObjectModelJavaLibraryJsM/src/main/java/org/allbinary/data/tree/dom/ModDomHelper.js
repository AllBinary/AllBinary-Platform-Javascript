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
import { Integer } from '../../../../../java/lang/Integer.js';
import { HashMap } from '../../../../../java/util/HashMap.js';
import { ClassUtil } from '../../../../../org/allbinary/logic/java/anyType/clazz/ClassUtil.js';
import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
import { CommonSeps } from '../../../../../org/allbinary/string/CommonSeps.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { DomData } from './DomData.js';
export class ModDomHelper extends Object {
    //@Throws(Exception.constructor)
    static createTextNode(document, name, text) {
        var newValueNode = document.createElement(name);
        ;
        var newValueTextNode = document.createTextNode(text);
        ;
        newValueNode.appendChild(newValueTextNode);
        //if statement needs to be on the same line and ternary does not work the same way.
        return newValueNode;
    }
    //@Throws(Exception.constructor)
    static createValueNode(document, text) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return ModDomHelper.createTextNode(document, DomData.VALUE, text);
        ;
    }
    //@Throws(Exception.constructor)
    static createNameNode(document, text) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return ModDomHelper.createTextNode(document, DomData.NAME, text);
        ;
    }
    //@Throws(Exception.constructor)
    static createIndexNode(document, index) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return ModDomHelper.createTextNode(document, DomData.INDEX, new Integer(index).toString());
        ;
    }
    //@Throws(Exception.constructor)
    static createNameValueNodes(document, elementName, nameText, valueText) {
        var newNode = document.createElement(elementName);
        ;
        newNode.appendChild(ModDomHelper.createNameNode(document, nameText));
        newNode.appendChild(ModDomHelper.createValueNode(document, valueText));
        //if statement needs to be on the same line and ternary does not work the same way.
        return newNode;
    }
    //@Throws(Exception.constructor)
    static createNameValueNodes(document, elementNameAndNameText, valueText) {
        var newNode = ModDomHelper.createNameValueNodes(document, elementNameAndNameText, elementNameAndNameText, valueText);
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return newNode;
    }
    //@Throws(Exception.constructor)
    static createNameValueIndexNodes(document, elementNameAndNameText, index, valueText) {
        var newNode = ModDomHelper.createNameValueNodes(document, elementNameAndNameText, valueText);
        ;
        newNode.appendChild(ModDomHelper.createIndexNode(document, index));
        //if statement needs to be on the same line and ternary does not work the same way.
        return newNode;
    }
    //@Throws(Exception.constructor)
    static createNameValueNodes(document, rootNode, hashMap) {
        var node = document.createElement(rootNode);
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return ModDomHelper.createNameValueNodes(document, node, hashMap);
        ;
    }
    //@Throws(Exception.constructor)
    static createNameValueNodes(document, node, hashMap) {
        var stringUtil = StringUtil.getInstance();
        ;
        var keySet = hashMap.keys();
        ;
        var keyArray = keySet.();
        ;
        var size = keyArray.length;
        ;
        for (var i = 0; i < size; i++) {
            var objectKey = keyArray[i];
            ;
            var name = objectKey;
            ;
            var anyType = hashMap.get(objectKey);
            ;
            if (anyType ==
                null) {
                var value = stringUtil.EMPTY_STRING;
                ;
                node.appendChild(ModDomHelper.createNameValueNodes(document, name, value));
            }
            else if (anyType instanceof String) {
                var value = stringUtil.getNonNull(anyType);
                ;
                node.appendChild(ModDomHelper.createNameValueNodes(document, name, value));
            }
            else if (anyType instanceof HashMap) {
                node.appendChild(ModDomHelper.createNameValueNodes(document, name, hashMap));
            }
            else {
                throw new Exception("HashMap value is the wrong instance and is: " + ClassUtil.viewAll(anyType, CommonSeps.getInstance().NEW_LINE));
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return node;
    }
    //@Throws(Exception.constructor)
    static createNameValueNodes(document, rootNodeName, duplicateNodeName, valueVector) {
        var stringUtil = StringUtil.getInstance();
        ;
        var node = document.createElement(rootNodeName);
        ;
        var size = valueVector.length;
        ;
        for (var i = 0; i < size; i++) {
            var value = stringUtil.getNonNull(valueVector.get(i));
            ;
            node.appendChild(ModDomHelper.createNameValueNodes(document, duplicateNodeName, value));
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return node;
    }
    //@Throws(Exception.constructor)
    static createNameValueIndexNodes(document, rootNodeName, duplicateNodeName, valueVector) {
        var stringUtil = StringUtil.getInstance();
        ;
        var node = document.createElement(rootNodeName);
        ;
        var size = valueVector.length;
        ;
        for (var index = 0; index < size; index++) {
            var value = stringUtil.getNonNull(valueVector.get(index));
            ;
            node.appendChild(ModDomHelper.createNameValueIndexNodes(document, duplicateNodeName, index, value));
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return node;
    }
    //@Throws(Exception.constructor)
    static createNodeWithValueNodes(document, rootNode, hashMap) {
        var node = document.createElement(rootNode);
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return ModDomHelper.createNodeWithValueNodes(document, node, hashMap);
        ;
    }
    //@Throws(Exception.constructor)
    static createNodeWithValueNodes(document, node, hashMap) {
        var stringUtil = StringUtil.getInstance();
        ;
        var keySet = hashMap.keys();
        ;
        var keyArray = keySet.();
        ;
        var size = keyArray.length;
        ;
        for (var i = 0; i < size; i++) {
            var name = keyArray[i];
            ;
            var anyType = hashMap.get(name);
            ;
            var value = stringUtil.getNonNull(anyType);
            ;
            node.appendChild(ModDomHelper.createTextNode(document, name, value));
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return node;
    }
    constructor() {
        super();
    }
}
