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
//not GWT import const Hashtable = globalThis.java.util.Hashtable;
import { StdUtil } from '../../../../../org/allbinary/logic/StdUtil.js';
//not GWT import const StdUtil = globalThis.org.allbinary.logic.StdUtil;
import { BooleanFactory } from '../../../../../org/allbinary/logic/java/bool/BooleanFactory.js';
//not GWT import const BooleanFactory = globalThis.org.allbinary.logic.java.bool.BooleanFactory;
//not plain js import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//not plain js import { BasicArrayList } from '../../../../../org/allbinary/util/BasicArrayList.js';
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListUtil } from '../../../../../org/allbinary/util/BasicArrayListUtil.js';
const BasicArrayListUtil = globalThis.org.allbinary.util.BasicArrayListUtil;
//not GWT import const ValidatorBaseInterface = globalThis.org.allbinary.logic.control.validate.ValidatorBaseInterface;
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
