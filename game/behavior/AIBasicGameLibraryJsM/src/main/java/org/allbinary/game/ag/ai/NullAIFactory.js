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
//not GWT import const AllBinaryLayer
//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { NullAI } from './NullAI.js';
//sameFolderImports - not GWT import - same folder const NullAI
export class NullAIFactory extends Object {
    static getInstance$overload2() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return NullAIFactory.NULL_AI;
    }
    getInstance(...args) {
        if (args.length === 3)
            return this.getInstance$overload1(args[0], args[1], args[2]);
        if (args.length === 0)
            return this.getInstance$overload2();
        throw new TypeError('No matching overload: getInstance');
    }
    getInstance$overload1(hashtable, ownerLayerInterface, gameInput) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return NullAIFactory.NULL_AI;
    }
}
NullAIFactory.NULL_AI = new NullAI();
