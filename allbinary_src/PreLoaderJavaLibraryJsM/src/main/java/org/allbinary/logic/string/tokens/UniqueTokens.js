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
import { Object } from '../../../../../java/lang/Object.js';
//import { NumberFormatException } from '../../../../../java/lang/NumberFormatException.js';
const NumberFormatException = ((_c = (_b = (_a = globalThis.java) === null || _a === void 0 ? void 0 : _a.lang) === null || _b === void 0 ? void 0 : _b.NumberFormatException) !== null && _c !== void 0 ? _c : class {
});
import { Integer } from '../../../../../java/lang/Integer.js';
import { HashSet } from '../../../../../java/util/HashSet.js';
//not GWT import const HashSet
//not plain js import { AbPathData } 
const AbPathData = globalThis.org.allbinary.logic.io.path.AbPathData;
import { Replace } from '../../../../../org/allbinary/logic/string/regex/replace/Replace.js';
//not GWT import const Replace
//not plain js import { CommonPhoneStrings } 
const CommonPhoneStrings = globalThis.org.allbinary.string.CommonPhoneStrings;
//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { Tokenizer } from './Tokenizer.js';
//sameFolderImports - not GWT import - same folder const Tokenizer
export class UniqueTokens extends Object {
    constructor() {
        super();
        this.specialCharacters = new BasicArrayListD();
        this.specialCharacters.add("!");
        this.specialCharacters.add("@");
        this.specialCharacters.add(CommonPhoneStrings.getInstance().POUND);
        this.specialCharacters.add("$");
        this.specialCharacters.add("%");
        this.specialCharacters.add("^");
        this.specialCharacters.add(CommonSeps.getInstance().AMPERSAND);
        this.specialCharacters.add(CommonPhoneStrings.getInstance().STAR);
        this.specialCharacters.add("(");
        this.specialCharacters.add(")");
        this.specialCharacters.add("-");
        this.specialCharacters.add("_");
        this.specialCharacters.add("+");
        this.specialCharacters.add("=");
        this.specialCharacters.add("\\");
        this.specialCharacters.add("|");
        this.specialCharacters.add(AbPathData.getInstance().EXTENSION_SEP);
        this.specialCharacters.add(",");
        this.specialCharacters.add("<");
        this.specialCharacters.add(">");
        this.specialCharacters.add("?");
        this.specialCharacters.add("/");
        this.specialCharacters.add("~");
        this.specialCharacters.add("`");
    }
    //@Throws(Exception.constructor)
    getWhithoutDashesAndSkipNumberOnlyTokens(stringVector) {
        try {
            let hashSet = new HashSet();
            ;
            let index = 0;
            ;
            let commonSeps = CommonSeps.getInstance();
            ;
            while (index < stringVector.size()) {
                let keywords = stringVector.get(index);
                ;
                let tokenizer = new Tokenizer(commonSeps.COMMA);
                ;
                let keywordVector = tokenizer.getTokensFromString(keywords, new BasicArrayListD());
                ;
                for (let forIndex = 0; forIndex < keywordVector.size(); forIndex++) {
                    let cleanString = keywordVector.get(forIndex);
                    ;
                    cleanString = cleanString.trim();
                    if (cleanString.indexOf('-') != -1)
                        cleanString = new Replace("-", commonSeps.SPACE).all(cleanString);
                    hashSet.add(cleanString);
                    if (cleanString.indexOf(' ') != -1) {
                        let spaceTokenizer = new Tokenizer(commonSeps.SPACE);
                        ;
                        let subKeywordVector = spaceTokenizer.getTokensFromString(cleanString, new BasicArrayListD());
                        ;
                        for (let spaceIndex = 0; spaceIndex < subKeywordVector.size(); spaceIndex++) {
                            let subCleanString = subKeywordVector.get(spaceIndex);
                            ;
                            if (!isSpecialCharacter(subCleanString) && !numberOnly(subCleanString)) {
                                hashSet.add(subCleanString);
                            }
                        }
                    }
                }
                index++;
            }
            //if statement needs to be on the same line and ternary does not work the same way.
            return hashSet;
        }
        catch (caught) {
            {
                const e = caught;
                throw e;
            }
        }
    }
    numberOnly(subCleaningString) {
        try {
            Integer.parseInt(subCleaningString);
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        catch (caught) {
            if (caught instanceof NumberFormatException) {
                const e = caught;
                //if statement needs to be on the same line and ternary does not work the same way.
                return false;
            }
            else {
                throw caught;
            }
        }
    }
    isSpecialCharacter(subCleaningString) {
        for (let index = 0; index < this.specialCharacters.size(); index++) {
            if (subCleaningString.compareTo(this.specialCharacters.get(index)) == 0)
                //if statement needs to be on the same line and ternary does not work the same way.
                return true;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
}
