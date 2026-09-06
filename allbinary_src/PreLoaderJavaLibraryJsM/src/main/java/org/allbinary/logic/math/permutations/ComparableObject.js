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
import { TsUtil } from '../../../../../org/allbinary/TsUtil.js';
//not GWT import - same folder const Comparable = globalThis.org.allbinary.logic.math.permutations.Comparable;
export class ComparableObject extends Object {
    compareTo(anyType = {}) {
        if (TsUtil.getInstance().hashCode(this) < TsUtil.getInstance().hashCode(anyType)) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return -1;
        }
        else if (TsUtil.getInstance().hashCode(this) > TsUtil.getInstance().hashCode(anyType)) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return 1;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return 0;
    }
}
