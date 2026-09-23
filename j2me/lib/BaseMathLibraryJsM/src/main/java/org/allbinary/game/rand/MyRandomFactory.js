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
import { RuntimeException } from '../../../../java/lang/RuntimeException.js';
import { Integer } from '../../../../java/lang/Integer.js';
import { Random } from '../../../../java/util/Random.js';
//not GWT import const Random
//not plain js import { MathUtil } 
const MathUtil = globalThis.org.allbinary.logic.math.MathUtil;
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
//Current folder imports from return types, extended types, and scope (deduplicated)
//Do not use in client code for money related things.
export class MyRandomFactory extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return MyRandomFactory.instance;
    }
    static main(args) {
        var randomFactory = MyRandomFactory.getInstance();
        ;
        var stringBuilder = new StringMaker();
        ;
        var commonSeps = CommonSeps.getInstance();
        ;
        var size2 = 100;
        ;
        for (var index = 0; index < size2; index++) {
            stringBuilder.appendint(randomFactory.getAbsoluteNextInt(3)).append(commonSeps.COMMA);
        }
        console.log(stringBuilder.toString());
        stringBuilder.delete(0, stringBuilder.length());
        var intArray = new Array(52);
        ;
        var intArray2 = new Array(52);
        ;
        var size = intArray.length;
        ;
        for (var index = 0; index < size; index++) {
            intArray[index] = index;
            intArray2[index] = index;
        }
        randomFactory.shuffle2(intArray, intArray2);
        for (var index = 0; index < size; index++) {
            stringBuilder.appendint(intArray[index]).append(commonSeps.COMMA);
        }
        console.log(stringBuilder.toString());
        stringBuilder.delete(0, stringBuilder.length());
        for (var index = 0; index < size; index++) {
            stringBuilder.appendint(intArray2[index]).append(commonSeps.COMMA);
        }
        console.log(stringBuilder.toString());
        var found = false;
        ;
        for (var index = 0; index < size; index++) {
            found = false;
            for (var index2 = 0; index2 < size; index2++) {
                if (intArray[index2] == index) {
                    found = true;
                }
            }
            if (!found)
                throw new RuntimeException();
        }
    }
    constructor() {
        super();
        this.mathUtil = MathUtil.getInstance();
        this.rand = new Random(Date.now());
    }
    setSeed(seed) {
        this.rand = new Random(seed);
    }
    getNextInt(range) {
        var div = (Integer.MAX_VALUE / range) + 1;
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return Math.round((this.rand.nextInt() / div));
    }
    getAbsoluteNextInt(range) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.mathUtil.abs(this.getNextInt(range));
        ;
    }
    getAbsoluteNextIntAllowZero(range) {
        if (range == 0) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return 0;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return this.mathUtil.abs(this.getNextInt(range));
            ;
        }
    }
    shuffle(intArray) {
        this.shuffleTotal(intArray, intArray.length * 7);
    }
    shuffleTotal(intArray, shuffleTotal) {
        var size = intArray.length;
        ;
        var randomIndex = 0;
        ;
        var randomIndex2 = 0;
        ;
        var value = 0;
        ;
        for (var index = 0; index < shuffleTotal; index++) {
            randomIndex = this.getAbsoluteNextIntAllowZero(size);
            randomIndex2 = this.getAbsoluteNextIntAllowZero(size);
            value = intArray[randomIndex];
            intArray[randomIndex] = intArray[randomIndex2];
            intArray[randomIndex2] = value;
        }
    }
    shuffle2(intArray, intArray2) {
        this.shuffle2Total(intArray, intArray2, intArray.length * 7);
    }
    shuffle2Total(intArray, intArray2, shuffleTotal) {
        var size = intArray.length;
        ;
        var randomIndex = 0;
        ;
        var randomIndex2 = 0;
        ;
        var value = 0;
        ;
        var value2 = 0;
        ;
        for (var index = 0; index < shuffleTotal; index++) {
            randomIndex = this.getAbsoluteNextIntAllowZero(size);
            randomIndex2 = this.getAbsoluteNextIntAllowZero(size);
            value = intArray[randomIndex];
            value2 = intArray2[randomIndex];
            intArray[randomIndex] = intArray[randomIndex2];
            intArray[randomIndex2] = value;
            intArray2[randomIndex] = intArray2[randomIndex2];
            intArray2[randomIndex2] = value2;
        }
    }
}
MyRandomFactory.instance = new MyRandomFactory();
