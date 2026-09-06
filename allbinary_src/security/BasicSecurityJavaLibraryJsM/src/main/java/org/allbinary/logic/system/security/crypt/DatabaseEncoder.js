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
import { Object } from '../../../../../../java/lang/Object.js';
//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
//not plain js import { PreLogUtil } 
const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
import { Tokenizer } from '../../../../../../org/allbinary/logic/string/tokens/Tokenizer.js';
//not GWT import const Tokenizer = globalThis.org.allbinary.logic.string.tokens.Tokenizer;
//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class DatabaseEncoder extends Object {
    static encode(value) {
        try {
            var array = value;
            ;
            var stringBuffer = new StringMaker();
            ;
            for (var index = 0; index < array.length; index++) {
                stringBuffer.append(Number(array[index]).toString());
                if (index < array.length - 1) {
                    stringBuffer.append(CommonSeps.getInstance().SPACE);
                }
            }
            //if statement needs to be on the same line and ternary does not work the same way.
            return stringBuffer.toString();
            ;
            //: 
        }
        catch (e) {
            var commonStrings = CommonStrings.getInstance();
            ;
            PreLogUtil.putOE(commonStrings.EXCEPTION, "DatabaseEncoder", "decode", e);
            //if statement needs to be on the same line and ternary does not work the same way.
            return StringUtil.getInstance().EMPTY_STRING;
        }
    }
    static decode(value) {
        try {
            var tokenizer = new Tokenizer(CommonSeps.getInstance().SPACE);
            ;
            var vector = tokenizer.getTokensFromString(value, new BasicArrayListD());
            ;
            var byteVector = new BasicArrayListD();
            ;
            var size = vector.size();
            ;
            var byteOfData;
            ;
            for (var index = 0; index < size; index++) {
                byteOfData = vector.objectArray[index];
                byteVector.add(Number(byteOfData));
            }
            var decode = new Array(byteVector.size());
            ;
            var decodeIndex = 0;
            ;
            var aByte;
            ;
            for (var index = 0; index < size; index++) {
                aByte = byteVector.objectArray[index];
                decode[decodeIndex] = aByte;
                decodeIndex++;
            }
            //if statement needs to be on the same line and ternary does not work the same way.
            return decode;
            //: 
        }
        catch (e) {
            var commonStrings = CommonStrings.getInstance();
            ;
            PreLogUtil.putSE(commonStrings.EXCEPTION, "DatabaseEncoder", "decode", e);
            //if statement needs to be on the same line and ternary does not work the same way.
            return NullUtil.getInstance().NULL_BYTE_ARRAY;
        }
    }
    constructor() {
        super();
    }
}
