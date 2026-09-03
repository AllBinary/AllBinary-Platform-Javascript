/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2003 AllBinary
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
//not GWT import const Hashtable = globalThis.java.util.Hashtable;
//not plain js import { CommonSeps } from '../../../../org/allbinary/string/CommonSeps.js';
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
//not plain js import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//not plain js import { PositionStrings } from '../../../../org/allbinary/math/PositionStrings.js';
const PositionStrings = globalThis.org.allbinary.math.PositionStrings;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class LayerUtil extends Object {
    static toString(hashtable, x, y, z) {
        var commonSeps = CommonSeps.getInstance();
        ;
        var positionStrings = PositionStrings.getInstance();
        ;
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append(LayerUtil.HASHTABLE);
        stringBuffer.append(StringUtil.getInstance().toString(hashtable));
        stringBuffer.append(commonSeps.SPACE);
        stringBuffer.append(positionStrings.X_LABEL);
        stringBuffer.appendint(x);
        stringBuffer.append(commonSeps.SPACE);
        stringBuffer.append(positionStrings.Y_LABEL);
        stringBuffer.appendint(y);
        stringBuffer.append(commonSeps.SPACE);
        stringBuffer.append(positionStrings.Z_LABEL);
        stringBuffer.appendint(z);
        //if statement needs to be on the same line and ternary does not work the same way.
        return stringBuffer.toString();
        ;
    }
}
LayerUtil.HASHTABLE = "Hashtable: ";
