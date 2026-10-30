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
import { Exception } from '../../../../../java/lang/Exception.js';
import { TsUtil } from '../../../../../org/allbinary/TsUtil.js';
//not GWT import const TsUtil
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
import { StringValidationUtil } from '../../../../../org/allbinary/logic/string/StringValidationUtil.js';
//not GWT import const StringValidationUtil
//Current folder imports from return types, extended types, and scope (deduplicated)
import { BooleanFactory } from './BooleanFactory.js';
//sameFolderImports - not GWT import - same folder const BooleanFactory
export class BooleanUtil extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return BooleanUtil.instance;
    }
    constructor() {
        super();
        this.tsUtil = TsUtil.getInstance();
    }
    //@Throws(Exception.constructor)
    getFromString(booleanString) {
        let stringValidationUtil = StringValidationUtil.getInstance();
        ;
        let booleanFactory = BooleanFactory.getInstance();
        ;
        if (stringValidationUtil.isEmpty(booleanString)) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
        let booleanStringLowerCase = booleanString.toLowerCase();
        ;
        if (this.tsUtil.compareTo(booleanStringLowerCase, booleanFactory.TRUE_STRING) == 0) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        else if (this.tsUtil.compareTo(booleanStringLowerCase, booleanFactory.FALSE_STRING) == 0) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
        else {
            throw new Exception("Invalid booleanString - Must be true or false");
        }
    }
    //@Throws(Exception.constructor)
    isStringBoolean(booleanString) {
        let booleanFactory = BooleanFactory.getInstance();
        ;
        let booleanStringLowerCase = booleanString.toLowerCase();
        ;
        if (booleanStringLowerCase.compareTo(booleanFactory.TRUE_STRING) == 0 || booleanStringLowerCase.compareTo(booleanFactory.FALSE_STRING) == 0) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    toStringFromBooleanArray(booleanArray) {
        let stringMaker = new StringMaker();
        ;
        let size = booleanArray.length;
        ;
        for (let index = 0; index < size; index++) {
            stringMaker.appendboolean(booleanArray[index]);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return stringMaker.toString();
        ;
    }
}
BooleanUtil.instance = new BooleanUtil();
