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
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
//not GWT import const NodeList
//Current folder imports from return types, extended types, and scope (deduplicated)
import { DomNodeHelper } from './DomNodeHelper.js';
//not GWT import - same folder const DomNodeHelper
export class DomNodeListHelper extends Object {
    static getVector(nodeList) {
        var vector = new BasicArrayListD();
        ;
        var size = nodeList.getLength();
        ;
        for (var index = 0; index < size; index++) {
            vector.add(DomNodeHelper.getTextNodeValue(nodeList.item(index)));
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return vector;
    }
}
