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
import { BooleanFactory } from '../../../../../org/allbinary/logic/java/bool/BooleanFactory.js';
//not GWT import const BooleanFactory
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListUtil } 
const BasicArrayListUtil = globalThis.org.allbinary.util.BasicArrayListUtil;
//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;
//not GWT import - same folder const ValidatorBaseInterface
export class ValidatorBase extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return ValidatorBase.instance;
    }
    constructor() {
        super();
    }
    isValid() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return BooleanFactory.getInstance().TRUE;
    }
    validationInfo() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return StringUtil.getInstance().EMPTY_STRING;
    }
    toHashtable() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return StdUtil.getInstance().NULL_TABLE;
    }
    toList() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return BasicArrayListUtil.getInstance().getImmutableInstance();
        ;
    }
}
ValidatorBase.instance = new ValidatorBase();
