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
import { HashMap } from '../../../../java/util/HashMap.js';
import { AbPathData } from '../../../../org/allbinary/logic/io/path/AbPathData.js';
import { CommonPhoneStrings } from '../../../../org/allbinary/string/CommonPhoneStrings.js';
import { CommonSeps } from '../../../../org/allbinary/string/CommonSeps.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { StringUtil } from './StringUtil.js';
export class SpecialCharacterUtil extends Object {
    static getHashMap() {
        var commonPhoneStrings = CommonPhoneStrings.getInstance();
        ;
        var stringUtil = StringUtil.getInstance();
        ;
        var hashMap = new HashMap();
        ;
        hashMap.put("!", stringUtil.EMPTY_STRING);
        hashMap.put("@", stringUtil.EMPTY_STRING);
        hashMap.put(commonPhoneStrings.POUND, stringUtil.EMPTY_STRING);
        hashMap.put("$", stringUtil.EMPTY_STRING);
        hashMap.put("%", stringUtil.EMPTY_STRING);
        hashMap.put("^", stringUtil.EMPTY_STRING);
        hashMap.put(CommonSeps.getInstance().AMPERSAND, stringUtil.EMPTY_STRING);
        hashMap.put(commonPhoneStrings.STAR, stringUtil.EMPTY_STRING);
        hashMap.put("(", stringUtil.EMPTY_STRING);
        hashMap.put(")", stringUtil.EMPTY_STRING);
        hashMap.put("-", stringUtil.EMPTY_STRING);
        hashMap.put("_", stringUtil.EMPTY_STRING);
        hashMap.put("+", stringUtil.EMPTY_STRING);
        hashMap.put("=", stringUtil.EMPTY_STRING);
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
