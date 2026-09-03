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
import { Object } from '../../../java/lang/Object.js';
import { Character } from '../../../java/lang/Character.js';
//not plain js import { StringMaker } from '../../../org/allbinary/logic/string/StringMaker.js';
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { StringUtil } from '../../../org/allbinary/logic/string/StringUtil.js';
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
import { StringValidationUtil } from '../../../org/allbinary/logic/string/StringValidationUtil.js';
//not GWT import const StringValidationUtil = globalThis.org.allbinary.logic.string.StringValidationUtil;
import { Tokenizer } from '../../../org/allbinary/logic/string/tokens/Tokenizer.js';
//not GWT import const Tokenizer = globalThis.org.allbinary.logic.string.tokens.Tokenizer;
//not plain js import { CommonSeps } from '../../../org/allbinary/string/CommonSeps.js';
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
//not plain js import { BasicArrayList } from '../../../org/allbinary/util/BasicArrayList.js';
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } from '../../../org/allbinary/util/BasicArrayListD.js';
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class CamelCaseUtil extends Object {
    constructor() {
        super(...arguments);
        this.commonSeps = CommonSeps.getInstance();
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return CamelCaseUtil.instance;
    }
    //@Throws(Exception.constructor)
    getAsCamelCase(string, stringBuilder) {
        if (string ==
            null) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return StringUtil.getInstance().EMPTY_STRING;
        }
        var stringValidationUtil = StringValidationUtil.getInstance();
        ;
        stringBuilder.delete(0, stringBuilder.length());
        var list = new BasicArrayListD();
        ;
        var tokenizer = new Tokenizer(this.commonSeps.UNDERSCORE);
        ;
        tokenizer.getTokensFromString(string, list);
        var size = list.size();
        ;
        var word;
        ;
        for (var i = 0; i < size; i++) {
            word = list.get(i);
            word = stringValidationUtil.isEmpty(word)
                ?
                    word
                :
                    new StringMaker().appendchar(Character.toUpperCase(word[0])).append(word.substring(1).toLowerCase()).toString();
            ;
            stringBuilder.append(word);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return stringBuilder.toString();
        ;
    }
}
CamelCaseUtil.instance = new CamelCaseUtil();
