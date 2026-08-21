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
//Current folder imports from return types, extended types, and scope (deduplicated)
export class ByteUtil extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return ByteUtil.instance;
    }
    constructor() {
        super();
    }
    xor(array, mask) {
        var bytes = new Array(array.length);
        ;
        var size = array.length;
        ;
        var index = 0;
        ;
        var currentByte;
        ;
        while (index < size) {
            currentByte = array[index];
            bytes[index] = (currentByte ^ mask);
            index++;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return bytes;
    }
    not(array) {
        var bytes = new Array(array.length);
        ;
        var size = array.length;
        ;
        var index = 0;
        ;
        while (index < size) {
            bytes[index] = ~array[index];
            index++;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return bytes;
    }
    xorByte(array, index) {
        var mask = 0;
        ;
        if (index == 0)
            mask = 1;
        if (index == 1)
            mask = 2;
        if (index == 2)
            mask = 4;
        if (index == 3)
            mask = 8;
        if (index == 4)
            mask = 16;
        if (index == 5)
            mask = 32;
        if (index == 6)
            mask = 64;
        if (index == 7)
            mask = -127;
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.xor(array, mask);
        ;
    }
    compare(newByteArray, oldByteArray) {
        if (newByteArray.length != oldByteArray.length) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
        else {
        }
        var size = newByteArray.length;
        ;
        for (var index = 0; index < size; index++) {
            if (newByteArray[index] != oldByteArray[index]) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return false;
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return true;
    }
    compareWithStats(newByteArray, newSize, oldByteArray, stats) {
        if (newSize != oldByteArray.length) {
            stats[0] = -1;
            stats[2] = newSize;
            stats[3] = oldByteArray.length;
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
        else {
            stats[0] = newSize;
        }
        stats[1] = 0;
        var size = newSize;
        ;
        for (var index = 0; index < size; index++) {
            if (newByteArray[index] != oldByteArray[index]) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return false;
            }
            stats[1]++;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return true;
    }
}
ByteUtil.instance = new ByteUtil();
