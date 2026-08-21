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
import { ArrayAI } from '../../../../../org/allbinary/game/ai/ArrayAI.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { RandomPatrolAI } from './RandomPatrolAI.js';
import { TimedFireAI } from './TimedFireAI.js';
export class RandomPatrolFlockingFiringAIFactory extends Object {
    //@Throws(Exception.constructor)
    getInstance(hashtable, ownerLayerInterface, gameInput) {
        var artificialIntelligenceInterface = new Array(2);
        ;
        artificialIntelligenceInterface[0] = new RandomPatrolAI(hashtable, ownerLayerInterface, gameInput);
        artificialIntelligenceInterface[1] = new TimedFireAI(1800, ownerLayerInterface, gameInput);
        //if statement needs to be on the same line and ternary does not work the same way.
        return new ArrayAI(artificialIntelligenceInterface, ownerLayerInterface, gameInput);
    }
}
