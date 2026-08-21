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
import { Character } from '../../../../java/lang/Character.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
export class StringValidationJSEUtil extends Object {
    static isBlank(string) {
        var len = string.length;
        ;
        for (var i = 0; i < len; i++) {
            var c = string[i];
            ;
            if (Character.isWhitespace(c) == false) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return false;
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return true;
    }
    constructor() {
        super();
    }
}
