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
//not GWT import const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { LurchRotationAI } from './LurchRotationAI.js';
//not GWT import const LurchRotationAI = globalThis.org.allbinary.game.ag.ai.LurchRotationAI;
export class LurchRotationAIFactory extends Object {
    getInstance(hashtable, ownerLayerInterface, gameInput) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new LurchRotationAI(ownerLayerInterface, gameInput);
    }
}
