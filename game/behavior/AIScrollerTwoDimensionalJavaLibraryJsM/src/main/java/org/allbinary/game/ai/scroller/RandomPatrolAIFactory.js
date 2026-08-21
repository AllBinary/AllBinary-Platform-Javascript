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
//Current folder imports from return types, extended types, and scope (deduplicated)
import { RandomPatrolAI } from './RandomPatrolAI.js';
export class RandomPatrolAIFactory extends Object {
    //@Throws(Exception.constructor)
    getInstance(hashtable, ownerLayerInterface, gameInput) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new RandomPatrolAI(hashtable, ownerLayerInterface, gameInput);
    }
}
