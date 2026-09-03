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
//not GWT import const Hashtable = globalThis.java.util.Hashtable;
import { TsUtil } from '../../../../../org/allbinary/TsUtil.js';
//not GWT import const TsUtil = globalThis.org.allbinary.TsUtil;
import { StdUtil } from '../../../../../org/allbinary/logic/StdUtil.js';
//not GWT import const StdUtil = globalThis.org.allbinary.logic.StdUtil;
//not plain js import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//not plain js import { BasicArrayList } from '../../../../../org/allbinary/util/BasicArrayList.js';
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } from '../../../../../org/allbinary/util/BasicArrayListD.js';
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class Tokenizer extends Object {
    constructor(sep) {
        super();
        this.endSep = StringUtil.getInstance().EMPTY_STRING;
        if (sep ==
            null
            || TsUtil.getInstance().compareTo(sep, StringUtil.getInstance().EMPTY_STRING) == 0) {
            throw new Exception("Sep provided is not valid");
        }
        this.sep = sep;
    }
    setSep(sep) {
        this.sep = sep;
    }
    setEndSep(endSep) {
        this.endSep = endSep;
    }
    getInsideSep(string) {
        var tokenList = new BasicArrayListD();
        ;
        var index = 0;
        ;
        var size = string.length;
        ;
        while (index < size) {
            index = string.indexOf(this.sep, index);
            if (index != -1) {
                var end = string.indexOf(this.endSep, index + this.sep.length);
                ;
                if (end != -1) {
                    tokenList.add(string.substring(index + this.sep.length, end - (this.endSep.length - 1)));
                    index = end + this.endSep.length;
                }
                else {
                }
            }
            else {
                break;
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return tokenList;
    }
    getTokensFromString(string, tokenVector) {
        var index = 0;
        ;
        var end = 0;
        ;
        while (index < string.length) {
            end = string.indexOf(this.sep, index);
            if (end != -1) {
                tokenVector.add(string.substring(index, end));
                index = end + this.sep.length;
            }
            else {
                tokenVector.add(string.substring(index, string.length));
                break;
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return tokenVector;
    }
    getTokens(stringVector) {
        var tokenHashtable = StdUtil.getInstance().createHashtable();
        ;
        var string = StringUtil.getInstance().EMPTY_STRING;
        ;
        var end = 0;
        ;
        var size = stringVector.size();
        ;
        for (var index = 0; index < size; index++) {
            string = stringVector.objectArray[index];
            end = string.indexOf(this.sep);
            if (end >= 0) {
                tokenHashtable.put(string.substring(0, end), string.substring(end + 1, string.length));
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return tokenHashtable;
    }
}
