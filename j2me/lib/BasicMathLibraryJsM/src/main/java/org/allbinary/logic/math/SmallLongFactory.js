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
import { Long } from '../../../../java/lang/Long.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
export class SmallLongFactory extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return SmallLongFactory.instance;
    }
    initWithRange(value, negativeValue) {
        for (var index = value - 1; index >= this.lastMin; index--) {
            this.INTEGER_ARRAY[index + this.NEGATIVE_MAX] = new Long(index);
        }
        for (var index = negativeValue - 1; index >= this.lastNegativeMin; index--) {
            this.INTEGER_ARRAY[index] = new Long(-index);
        }
        if (this.lastMin < value) {
            this.lastMin = value;
            this.MIN = value;
        }
        if (this.lastNegativeMin < negativeValue) {
            this.lastNegativeMin = negativeValue;
        }
    }
    init() {
        if (this.INTEGER_ARRAY[0] ==
            null) {
            if (this.lastMin < this.POSITIVE_MAX || this.lastNegativeMin < this.NEGATIVE_MAX) {
                for (var index = this.POSITIVE_MAX - 1; index >= this.lastMin; index--) {
                    this.INTEGER_ARRAY[index + this.NEGATIVE_MAX] = new Long(index);
                }
                for (var index = this.NEGATIVE_MAX - 1; index >= this.lastNegativeMin; index--) {
                    this.INTEGER_ARRAY[index] = new Long(-index);
                }
                this.lastMin = this.POSITIVE_MAX;
                this.lastNegativeMin = this.NEGATIVE_MAX;
            }
        }
    }
    constructor() {
        super();
        this.NEGATIVE_MAX = 500;
        this.POSITIVE_MAX = 0x2D1;
        this.INTEGER_ARRAY = new Array(this.NEGATIVE_MAX + this.POSITIVE_MAX);
        this.STRING_ARRAY = new Array(this.NEGATIVE_MAX + this.POSITIVE_MAX);
        this.MIN = 0;
        this.lastMin = 0;
        this.lastNegativeMin = 0;
    }
    getInstanceNoThrow(index) {
        if (index + this.NEGATIVE_MAX > this.INTEGER_ARRAY.length - 1) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return this.INTEGER_ARRAY[-1 + this.NEGATIVE_MAX];
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.INTEGER_ARRAY[(Math.round(index)) + this.NEGATIVE_MAX];
    }
    getString(index) {
        var i = index + this.NEGATIVE_MAX;
        ;
        if (this.STRING_ARRAY[i] ==
            null) {
            this.STRING_ARRAY[i] = this.INTEGER_ARRAY[i].toString();
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.STRING_ARRAY[i];
    }
}
SmallLongFactory.instance = new SmallLongFactory();
