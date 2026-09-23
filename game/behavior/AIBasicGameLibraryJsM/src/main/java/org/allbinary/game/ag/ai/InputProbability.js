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
//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
import { SmallIntegerSingletonFactory } from '../../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js';
//not GWT import const TimeDelayHelper
//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class InputProbability extends Object {
    constructor(likelyhoodIntegerArray, repeatLikelyhoodIntegerArray, max, timeDelayHelper) {
        super();
        this.likelyhoodIntegerArray = likelyhoodIntegerArray;
        this.repeatLikelyhoodIntegerArray = repeatLikelyhoodIntegerArray;
        this.max = max;
        this.timeDelayHelper = timeDelayHelper;
    }
    getLikelyhoodIntegerArray() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.likelyhoodIntegerArray;
    }
    getRepeatLikelyhoodIntegerArray() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.repeatLikelyhoodIntegerArray;
    }
    getMax() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.max;
    }
    getTimeDelayHelper() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.timeDelayHelper;
    }
    toHashtable() {
        var hashtable = StdUtil.getInstance().createHashtable();
        ;
        hashtable.put(InputProbability.INPUT_PROBABILITY, this);
        //if statement needs to be on the same line and ternary does not work the same way.
        return hashtable;
    }
}
InputProbability.INPUT_PROBABILITY = SmallIntegerSingletonFactory.getInstance().getAt(0);
