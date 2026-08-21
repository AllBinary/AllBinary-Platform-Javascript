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
import { Object } from '../../../java/lang/Object.js';
import { StringMaker } from '../../../org/allbinary/logic/string/StringMaker.js';
import { CommonLabels } from '../../../org/allbinary/string/CommonLabels.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
export class CircularIndexUtil extends Object {
    static createInstance(max) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new CircularIndexUtil(0, max);
    }
    static createInstanceAt(index, max) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new CircularIndexUtil(index, max);
    }
    constructor(index, size) {
        super();
        this.index = 0;
        this.lastIndex = 0;
        this.size = 0;
        this.setSize(size);
        this.setIndex(index);
    }
    next() {
        if (this.index >= this.lastIndex) {
            this.index = 0;
        }
        else {
            this.index++;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.index;
    }
    previous() {
        if (this.index < 1) {
            this.index = this.lastIndex;
        }
        else {
            this.index--;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.index;
    }
    setIndex(index) {
        if (index > this.lastIndex) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return;
        }
        this.index = index;
    }
    getIndex() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.index;
    }
    setSize(size) {
        this.size = size;
        this.lastIndex = size - 1;
        this.index = 0;
    }
    getSize() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.size;
    }
    toString() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new StringMaker().append(CommonLabels.getInstance().INDEX_LABEL).appendint(this.index).append("lastIndex: ").appendint(this.lastIndex).append("size: ").appendint(this.size).toString();
        ;
    }
}
CircularIndexUtil.NULL_CIRCULAR_INDEX_UTIL = new CircularIndexUtil(0, 0);
