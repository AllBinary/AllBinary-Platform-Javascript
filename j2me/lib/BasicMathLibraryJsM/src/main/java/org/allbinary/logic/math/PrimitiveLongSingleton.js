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
import { Exception } from '../../../../java/lang/Exception.js';
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class PrimitiveLongSingleton extends Object {
    constructor() {
        super(...arguments);
        this.UNK = ['U', 'n', 'k'];
        this.NUMBER_ARRAY = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        this.NUMBER_CHAR_ARRAY = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        this.NUMBER_CHAR_ARRAYS = [
            ['0'], ['1'], ['2'], ['3'], ['4'], ['5'], ['6'], ['7'], ['8'], ['9']
        ];
        this.ZERO = [this.NUMBER_CHAR_ARRAY[0]];
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return PrimitiveLongSingleton.instance;
    }
    //@Throws(Exception.constructor)
    getNumberFromChar(numberAsChar) {
        var size = this.NUMBER_CHAR_ARRAY.length;
        ;
        for (var index = 0; index < size; index++) {
            if (this.NUMBER_CHAR_ARRAY[index] == numberAsChar) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return this.NUMBER_ARRAY[index];
            }
        }
        throw new Exception(new StringMaker().append("numberAsChar was not in array: ").appendchar(numberAsChar).toString());
    }
}
PrimitiveLongSingleton.instance = new PrimitiveLongSingleton();
