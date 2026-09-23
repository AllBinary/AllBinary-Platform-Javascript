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
//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
//not plain js import { CircularIndexUtil } 
const CircularIndexUtil = globalThis.org.allbinary.util.CircularIndexUtil;
//not GWT import - same folder const AllBinaryObjectFactoryInterface
export class BaseCircularPool extends Object {
    constructor() {
        super(...arguments);
        this.circularIndexUtil = CircularIndexUtil.NULL_CIRCULAR_INDEX_UTIL;
        this.OBJECT_ARRAY = NullUtil.getInstance().NULL_OBJECT_ARRAY;
    }
    //@Throws(Exception.constructor)
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    getNextInstance() {
        var anyType = this.OBJECT_ARRAY[this.circularIndexUtil.getIndex()];
        ;
        this.circularIndexUtil.next();
        //if statement needs to be on the same line and ternary does not work the same way.
        return anyType;
    }
    init(allBinaryObjectFactoryInterface) {
        this.circularIndexUtil.setIndex(0);
        var size = this.circularIndexUtil.getSize();
        ;
        for (var index = 0; index < size; index++) {
            this.OBJECT_ARRAY[index] = allBinaryObjectFactoryInterface.getInstance();
        }
    }
    //@Throws(Exception.constructor)
    getInstance(index) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.OBJECT_ARRAY[index];
    }
}
