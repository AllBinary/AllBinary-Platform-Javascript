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
import { Object } from '../../../../java/lang/Object.js';
//not plain js import { CircularIndexUtil } 
const CircularIndexUtil = globalThis.org.allbinary.util.CircularIndexUtil;
//not GWT import - same folder const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;
export class BasicColorArrayIndexer extends Object {
    constructor(basicColorArray) {
        super();
        this.basicColorArray = basicColorArray;
        this.circularIndexUtil = CircularIndexUtil.createInstance(this.basicColorArray.length);
    }
    next() {
        this.circularIndexUtil.next();
    }
    get() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.basicColorArray[this.circularIndexUtil.getIndex()];
    }
    getBasicColorArray() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.basicColorArray;
    }
}
