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
import { TsUtil } from '../../../../org/allbinary/TsUtil.js';
//not GWT import const TsUtil
//Current folder imports from return types, extended types, and scope (deduplicated)
//not plain js - same folder import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
export class StringValidationUtil extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return StringValidationUtil.instance;
    }
    constructor() {
        super();
        this.stringUtil = StringUtil.getInstance();
        this.tsUtil = TsUtil.getInstance();
    }
    containsSpaces(value) {
        if (value.indexOf(' ') >= 0) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    isNumber(value) {
        var numberOfDecimalPoints = 0;
        ;
        for (var index = 0; index < value.length; index++) {
            var digit = value[index];
            ;
            if (!this.isNumberFromChar(digit) && digit != '.') {
                //if statement needs to be on the same line and ternary does not work the same way.
                return false;
            }
            if (digit == '.') {
                numberOfDecimalPoints++;
                if (numberOfDecimalPoints > 1) {
                    //if statement needs to be on the same line and ternary does not work the same way.
                    return false;
                }
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return true;
    }
    isNumberFromChar(digit) {
        if (digit != '0' && digit != '1' && digit != '2' && digit != '3' && digit != '4' && digit != '5' && digit != '6' && digit != '7' && digit != '8' && digit != '9') {
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return true;
    }
    isValidRequired(value, min, max) {
        if (value ==
            null
            || value.length < min || value.length > max) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return true;
    }
    isValidRequiredNumber(value, min, max) {
        if (this.isEmpty(value) || value.length < min || value.length > max) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
        if (!this.isNumber(value)) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return true;
    }
    isValidNotRequired(value, min, max) {
        if (value !=
            null) {
            if (value.length < min || value.length > max) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return false;
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return true;
    }
    isValidNotRequiredNumber(value, min, max) {
        if (value !=
            null) {
            if (this.tsUtil.compareTo(value, this.stringUtil.NULL_STRING) == 0 || value.length < min || value.length > max) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return false;
            }
            if (!this.isNumber(value)) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return false;
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return true;
    }
    isEmpty(string) {
        if (string !=
            null
            && this.tsUtil.compareTo(string, this.stringUtil.NULL_STRING) != 0 && this.tsUtil.compareTo(string, this.stringUtil.EMPTY_STRING) != 0) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
    }
}
StringValidationUtil.instance = new StringValidationUtil();
