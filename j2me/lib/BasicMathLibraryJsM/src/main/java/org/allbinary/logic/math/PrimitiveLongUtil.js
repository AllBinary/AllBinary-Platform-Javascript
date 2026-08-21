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
import { NullUtil } from '../../../../org/allbinary/logic/NullUtil.js';
import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { PrimitiveLongSingleton } from './PrimitiveLongSingleton.js';
import { MathUtil } from './MathUtil.js';
export class PrimitiveLongUtil extends Object {
    static createPowerOfTen(powerOfTen) {
        var primitiveLongUtil = new PrimitiveLongUtil(powerOfTen, NullUtil.getInstance().NULL_OBJECT);
        ;
        if (powerOfTen % 10 != 0) {
            var logUtil = LogUtil.getInstance();
            ;
            var commonStrings = CommonStrings.getInstance();
            ;
            logUtil.put(commonStrings.EXCEPTION, primitiveLongUtil, commonStrings.CONSTRUCTOR, new Exception("Max must be power of 10"));
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return primitiveLongUtil;
    }
    constructor(powerOfTen, unused = {}) {
        super();
        this.logUtil = LogUtil.getInstance();
        this.currentTotalDigits = 0;
        this.primitiveLongSingleton = PrimitiveLongSingleton.getInstance();
        this.maxDigits = MathUtil.getInstance().getTotalDigits(powerOfTen);
        this.powerOfTen = powerOfTen;
        this.maxValue = (powerOfTen * 10) - 1;
        this.charArray = new Array(this.maxDigits);
    }
    getCharArray(value) {
        if (value < 10) {
            this.setCurrentTotalDigits(1);
            //if statement needs to be on the same line and ternary does not work the same way.
            return this.primitiveLongSingleton.NUMBER_CHAR_ARRAYS[value];
        }
        if (value > this.maxValue) {
            this.setCurrentTotalDigits(3);
            //if statement needs to be on the same line and ternary does not work the same way.
            return this.primitiveLongSingleton.UNK;
        }
        var index = 0;
        ;
        var div = this.powerOfTen;
        ;
        var lastValue = 0;
        ;
        while (div >= 1) {
            var digit = (value - lastValue) / div;
            ;
            if (digit >= 0 && digit < 10) {
                if (digit == 0 && index == 0) {
                }
                else {
                    this.charArray[index++] = this.primitiveLongSingleton.NUMBER_CHAR_ARRAY[digit];
                }
                lastValue += digit * div;
            }
            div = div / 10;
        }
        this.setCurrentTotalDigits(index);
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.charArray;
    }
    setCurrentTotalDigits(currentTotalDigits) {
        this.currentTotalDigits = currentTotalDigits;
    }
    getCurrentTotalDigits() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.currentTotalDigits;
    }
    getMaxDigits() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.maxDigits;
    }
}
