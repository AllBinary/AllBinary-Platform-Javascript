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
import { Exception } from '../../../../java/lang/Exception.js';
import { Integer } from '../../../../java/lang/Integer.js';
import { J2MEUtil } from '../../../../org/allbinary/J2MEUtil.js';
import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
export class SmallIntegerSingletonFactory extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return SmallIntegerSingletonFactory.instance;
    }
    getMin() {
        var minAllowed = (J2MEUtil.isJ2ME()
            ?
                0
            :
                23);
        ;
        ;
        if (this.MIN <= minAllowed) {
            var logUtil = LogUtil.getInstance();
            ;
            logUtil.put("This means you loaded the InputFactory before determining the platform input size requirements.", this, "getMin", new Exception());
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.MIN;
    }
    initWithRange(value, negativeValue) {
        for (var index = value - 1; index >= this.lastMin; index--) {
            this.INTEGER_ARRAY[index + this.NEGATIVE_MAX] = new Integer(index);
        }
        for (var index = negativeValue - 1; index >= this.lastNegativeMin; index--) {
            this.INTEGER_ARRAY[index] = new Integer(-index);
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
        if (this.lastMin < this.POSITIVE_MAX || this.lastNegativeMin < this.NEGATIVE_MAX) {
            for (var index = this.POSITIVE_MAX - 1; index >= this.lastMin; index--) {
                this.INTEGER_ARRAY[index + this.NEGATIVE_MAX] = new Integer(index);
            }
            for (var index = this.NEGATIVE_MAX - 1; index >= this.lastNegativeMin; index--) {
                this.INTEGER_ARRAY[index] = new Integer(-index);
            }
            this.lastMin = this.POSITIVE_MAX;
            this.MIN = this.lastMin;
            this.lastNegativeMin = this.NEGATIVE_MAX;
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
        this.initWithRange(23, 0);
    }
    getAt(index) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.INTEGER_ARRAY[index + this.NEGATIVE_MAX];
    }
    getAtNoThrow(index) {
        if (index + this.NEGATIVE_MAX > this.INTEGER_ARRAY.length - 1) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return this.INTEGER_ARRAY[-1 + this.NEGATIVE_MAX];
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.INTEGER_ARRAY[index + this.NEGATIVE_MAX];
    }
    createInstance(index) {
        var integer = this.getAt(index);
        ;
        if (integer ==
            null) {
            integer = new Integer(index);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return integer;
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
SmallIntegerSingletonFactory.instance = new SmallIntegerSingletonFactory();
