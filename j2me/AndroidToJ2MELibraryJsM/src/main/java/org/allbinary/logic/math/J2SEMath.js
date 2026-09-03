/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2025 AllBinary
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
import { Math } from '../../../../java/lang/Math.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
export class J2SEMath extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return J2SEMath.instance;
    }
    round(value) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return Math.round(value);
        ;
    }
    abs(value) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return (value < 0)
            ?
                -value
            :
                value;
        ;
    }
    absdouble(value) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return (value < 0)
            ?
                -value
            :
                value;
        ;
    }
}
J2SEMath.instance = new J2SEMath();
