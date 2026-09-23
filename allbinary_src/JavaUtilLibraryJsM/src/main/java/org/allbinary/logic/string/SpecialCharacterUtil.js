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
//not GWT import const HashMap
//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
//not plain js import { AbPathData } 
const AbPathData = globalThis.org.allbinary.logic.io.path.AbPathData;
//not plain js import { MathData } 
const MathData = globalThis.org.allbinary.logic.math.MathData;
//not plain js import { CommonPhoneStrings } 
const CommonPhoneStrings = globalThis.org.allbinary.string.CommonPhoneStrings;
//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
//Current folder imports from return types, extended types, and scope (deduplicated)
//not plain js - same folder import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
export class SpecialCharacterUtil extends Object {
    static getHashMap() {
        var commonSeps = CommonSeps.getInstance();
        ;
        var commonPhoneStrings = CommonPhoneStrings.getInstance();
        ;
        var stringUtil = StringUtil.getInstance();
        ;
        var hashMap = StdUtil.getInstance().createHashMap();
        ;
        hashMap.put("!", stringUtil.EMPTY_STRING);
        hashMap.put("@", stringUtil.EMPTY_STRING);
        hashMap.put(commonPhoneStrings.POUND, stringUtil.EMPTY_STRING);
        hashMap.put("$", stringUtil.EMPTY_STRING);
        hashMap.put("%", stringUtil.EMPTY_STRING);
        hashMap.put("^", stringUtil.EMPTY_STRING);
        hashMap.put(commonSeps.AMPERSAND, stringUtil.EMPTY_STRING);
        hashMap.put(commonPhoneStrings.STAR, stringUtil.EMPTY_STRING);
        hashMap.put(commonSeps.PARENTHESIS_OPEN, stringUtil.EMPTY_STRING);
        hashMap.put(commonSeps.PARENTHESIS_CLOSE, stringUtil.EMPTY_STRING);
        hashMap.put(commonSeps.DASH, stringUtil.EMPTY_STRING);
        hashMap.put(commonSeps.UNDERSCORE, stringUtil.EMPTY_STRING);
        hashMap.put(MathData.getInstance().PLUS, stringUtil.EMPTY_STRING);
        hashMap.put(commonSeps.EQUALS, stringUtil.EMPTY_STRING);
        hashMap.put("\\", stringUtil.EMPTY_STRING);
        hashMap.put("|", stringUtil.EMPTY_STRING);
        hashMap.put(AbPathData.getInstance().EXTENSION_SEP, stringUtil.EMPTY_STRING);
        hashMap.put(",", stringUtil.EMPTY_STRING);
        hashMap.put("<", stringUtil.EMPTY_STRING);
        hashMap.put(">", stringUtil.EMPTY_STRING);
        hashMap.put("?", stringUtil.EMPTY_STRING);
        hashMap.put(AbPathData.getInstance().SEPARATOR, stringUtil.EMPTY_STRING);
        hashMap.put("~", stringUtil.EMPTY_STRING);
        hashMap.put("`", stringUtil.EMPTY_STRING);
        //if statement needs to be on the same line and ternary does not work the same way.
        return hashMap;
    }
}
