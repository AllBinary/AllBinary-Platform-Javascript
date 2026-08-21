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
import { SmallIntegerSingletonFactory } from '../../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { BasePatrolAI } from './BasePatrolAI.js';
import { TerrainPatrolAI } from './TerrainPatrolAI.js';
export class TerrainPatrolAIFactory extends Object {
    //@Throws(Exception.constructor)
    getInstance(hashtable, ownerLayerInterface, gameInput) {
        hashtable.put(BasePatrolAI.MAX_DISTANCE, SmallIntegerSingletonFactory.getInstance().getAt(220));
        //if statement needs to be on the same line and ternary does not work the same way.
        return new TerrainPatrolAI(hashtable, ownerLayerInterface, gameInput);
    }
}
