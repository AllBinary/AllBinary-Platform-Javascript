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
var _a, _b;
var _c;
/* Generated Code Do Not Modify */
import { Object } from '../../../java/lang/Object.js';
//not plain js import { Character }
const Character = ((_c = (_b = (_a = globalThis.java) === null || _a === void 0 ? void 0 : _a.lang) === null || _b === void 0 ? void 0 : _b.Character) !== null && _c !== void 0 ? _c : class {
});
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
import { StringValidationUtil } from '../../../org/allbinary/logic/string/StringValidationUtil.js';
//not GWT import const StringValidationUtil
import { Tokenizer } from '../../../org/allbinary/logic/string/tokens/Tokenizer.js';
//not GWT import const Tokenizer
//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } 
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
        let stringValidationUtil = StringValidationUtil.getInstance();
        ;
        stringBuilder.delete(0, stringBuilder.length());
        let list = new BasicArrayListD();
        ;
        let tokenizer = new Tokenizer(this.commonSeps.UNDERSCORE);
        ;
        tokenizer.getTokensFromString(string, list);
        let size = list.size();
        ;
        let word;
        ;
        for (let i = 0; i < size; i++) {
            word = list.get(i);
            word = (stringValidationUtil.isEmpty(word) ? word : new StringMaker().appendchar(Character.toUpperCase(word[0])).append(word.substring(1).toLowerCase()).toString());
            stringBuilder.append(word);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return stringBuilder.toString();
        ;
    }
}
CamelCaseUtil.instance = new CamelCaseUtil();
