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
//not GWT import const Set
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
import { ClassUtil } from '../../../../../org/allbinary/logic/java/anyType/clazz/ClassUtil.js';
//not GWT import const ClassUtil
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
//not GWT import const Node
//Current folder imports from return types, extended types, and scope (deduplicated)
import { DomData } from './DomData.js';
//sameFolderImports - not GWT import - same folder const DomData
export class ModDomHelper extends Object {
    //@Throws(Exception.constructor)
    static createTextNode(document, name, text) {
        let newValueNode = document.createElement(name);
        ;
        let newValueTextNode = document.createTextNode(text);
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
    static createNameValueNodes(...args) {
        if (args.length === 4 && typeof args[1] === 'string' && typeof args[2] === 'string' && typeof args[3] === 'string')
            return this.createNameValueNodes$overload1(args[0], args[1], args[2], args[3]);
        if (args.length === 3 && typeof args[1] === 'string' && typeof args[2] === 'string')
            return this.createNameValueNodes$overload2(args[0], args[1], args[2]);
        if (args.length === 3 && typeof args[1] === 'string')
            return this.createNameValueNodes$overload3(args[0], args[1], args[2]);
        if (args.length === 3)
            return this.createNameValueNodes$overload4(args[0], args[1], args[2]);
        if (args.length === 4 && typeof args[1] === 'string' && typeof args[2] === 'string')
            return this.createNameValueNodes$overload5(args[0], args[1], args[2], args[3]);
        throw new TypeError('No matching overload: createNameValueNodes');
    }
    //@Throws(Exception.constructor)
    static createNameValueNodes$overload1(document, elementName, nameText, valueText) {
        let newNode = document.createElement(elementName);
        ;
        newNode.appendChild(ModDomHelper.createNameNode(document, nameText));
        newNode.appendChild(ModDomHelper.createValueNode(document, valueText));
        //if statement needs to be on the same line and ternary does not work the same way.
        return newNode;
    }
    //@Throws(Exception.constructor)
    static createNameValueNodes$overload2(document, elementNameAndNameText, valueText) {
        let newNode = ModDomHelper.createNameValueNodes(document, elementNameAndNameText, elementNameAndNameText, valueText);
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return newNode;
    }
    static createNameValueIndexNodes(...args) {
        if (args.length === 4 && typeof args[1] === 'string' && typeof args[2] === 'number' && typeof args[3] === 'string')
            return this.createNameValueIndexNodes$overload1(args[0], args[1], args[2], args[3]);
        if (args.length === 4 && typeof args[1] === 'string' && typeof args[2] === 'string')
            return this.createNameValueIndexNodes$overload2(args[0], args[1], args[2], args[3]);
        throw new TypeError('No matching overload: createNameValueIndexNodes');
    }
    //@Throws(Exception.constructor)
    static createNameValueIndexNodes$overload1(document, elementNameAndNameText, index, valueText) {
        let newNode = ModDomHelper.createNameValueNodes(document, elementNameAndNameText, valueText);
        ;
        newNode.appendChild(ModDomHelper.createIndexNode(document, index));
        //if statement needs to be on the same line and ternary does not work the same way.
        return newNode;
    }
    //@Throws(Exception.constructor)
    static createNameValueNodes$overload3(document, rootNode, hashMap) {
        let node = document.createElement(rootNode);
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return ModDomHelper.createNameValueNodes(document, node, hashMap);
        ;
    }
    //@Throws(Exception.constructor)
    static createNameValueNodes$overload4(document, node, hashMap) {
        let stringUtil = StringUtil.getInstance();
        ;
        let keySet = hashMap.keys();
        ;
        let keyArray = keySet.();
        ;
        let size = keyArray.length;
        ;
        for (let i = 0; i < size; i++) {
            let objectKey = keyArray[i];
            ;
            let name = objectKey;
            ;
            let anyType = hashMap.get(objectKey);
            ;
            if (anyType ==
                null) {
                let value = stringUtil.EMPTY_STRING;
                ;
                node.appendChild(ModDomHelper.createNameValueNodes(document, name, value));
            }
            else if (((value) => typeof value === 'string' || value instanceof String)(anyType)) {
                let value = stringUtil.getNonNull(anyType);
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
    static createNameValueNodes$overload5(document, rootNodeName, duplicateNodeName, valueVector) {
        let stringUtil = StringUtil.getInstance();
        ;
        let node = document.createElement(rootNodeName);
        ;
        let size = valueVector.size();
        ;
        for (let i = 0; i < size; i++) {
            let value = stringUtil.getNonNull(valueVector.get(i));
            ;
            node.appendChild(ModDomHelper.createNameValueNodes(document, duplicateNodeName, value));
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return node;
    }
    //@Throws(Exception.constructor)
    static createNameValueIndexNodes$overload2(document, rootNodeName, duplicateNodeName, valueVector) {
        let stringUtil = StringUtil.getInstance();
        ;
        let node = document.createElement(rootNodeName);
        ;
        let size = valueVector.size();
        ;
        for (let index = 0; index < size; index++) {
            let value = stringUtil.getNonNull(valueVector.get(index));
            ;
            node.appendChild(ModDomHelper.createNameValueIndexNodes(document, duplicateNodeName, index, value));
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return node;
    }
    static createNodeWithValueNodes(...args) {
        if (args.length === 3 && typeof args[1] === 'string')
            return this.createNodeWithValueNodes$overload1(args[0], args[1], args[2]);
        if (args.length === 3)
            return this.createNodeWithValueNodes$overload2(args[0], args[1], args[2]);
        throw new TypeError('No matching overload: createNodeWithValueNodes');
    }
    //@Throws(Exception.constructor)
    static createNodeWithValueNodes$overload1(document, rootNode, hashMap) {
        let node = document.createElement(rootNode);
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return ModDomHelper.createNodeWithValueNodes(document, node, hashMap);
        ;
    }
    //@Throws(Exception.constructor)
    static createNodeWithValueNodes$overload2(document, node, hashMap) {
        let stringUtil = StringUtil.getInstance();
        ;
        let keySet = hashMap.keys();
        ;
        let keyArray = keySet.();
        ;
        let size = keyArray.length;
        ;
        for (let i = 0; i < size; i++) {
            let name = keyArray[i];
            ;
            let anyType = hashMap.get(name);
            ;
            let value = stringUtil.getNonNull(anyType);
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
