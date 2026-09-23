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
import { Integer } from '../../../../java/lang/Integer.js';
//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;
//not GWT import - same folder const BasicColor
import { BasicColorFactory } from './BasicColorFactory.js';
//not GWT import - same folder const BasicColorFactory
export class BasicColorCacheFactory extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return BasicColorCacheFactory.instance;
    }
    constructor() {
        super();
        this.hashtable = StdUtil.getInstance().createHashtable();
    }
    add(basicDefaultColor) {
        this.hashtable.put(new Integer(basicDefaultColor.intValue()), basicDefaultColor);
    }
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    getAndOrCreate(integer) {
        var basicColor = this.hashtable.get(integer);
        ;
        if (basicColor ==
            null) {
            basicColor = BasicColorFactory.getInstance().createInstance(integer.intValue());
            this.hashtable.put(integer, basicColor);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return basicColor;
    }
}
BasicColorCacheFactory.instance = new BasicColorCacheFactory();
