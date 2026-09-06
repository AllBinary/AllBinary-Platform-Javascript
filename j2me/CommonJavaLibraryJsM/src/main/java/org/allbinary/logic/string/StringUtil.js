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
//Current folder imports from return types, extended types, and scope (deduplicated)
export class StringUtil extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return StringUtil.instance;
    }
    constructor() {
        super();
        this.INIT_STRING = .toCharArray();
        this.NULL_STRING = "null";
        this.EMPTY_STRING = "";
        this.ONE_EMPTY_STRING_ARRAY = [
            this.EMPTY_STRING
        ];
        this.stringArray = [];
    }
    getNonNull(string) {
        if (string ==
            null) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return this.EMPTY_STRING;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return string;
        }
    }
    getArrayInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.stringArray;
    }
    count(string, aChar) {
        var count = 0;
        ;
        var size = string.length;
        ;
        for (var index = 0; index < size; index++) {
            if (string[index] == aChar) {
                count++;
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return count;
    }
    toString(anyType = {}) {
        if (anyType !=
            null) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return anyType.toString();
            ;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return this.NULL_STRING;
        }
    }
}
StringUtil.instance = new StringUtil();
