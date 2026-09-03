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
//not plain js import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { CommonPhoneStrings } from '../../../../../org/allbinary/string/CommonPhoneStrings.js';
const CommonPhoneStrings = globalThis.org.allbinary.string.CommonPhoneStrings;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { LongData } from './LongData.js';
//not GWT import const LongData = globalThis.org.allbinary.logic.java.number.LongData;
export class LongUtil extends Object {
    static fillIn(end) {
        var frameStringBuffer = new StringMaker();
        ;
        if (frameStringBuffer.length() < LongData.MAX_LONG_LENGTH) {
            var commonPhoneStrings = CommonPhoneStrings.getInstance();
            ;
            var size = LongData.MAX_LONG_LENGTH - frameStringBuffer.length();
            ;
            for (var index = 0; index < size; index++) {
                frameStringBuffer.append(commonPhoneStrings.ZERO);
            }
        }
        frameStringBuffer.append(end);
        //if statement needs to be on the same line and ternary does not work the same way.
        return frameStringBuffer.toString();
        ;
    }
    constructor() {
        super();
    }
}
