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
import { Object } from '../../../../../../java/lang/Object.js';
import { Exception } from '../../../../../../java/lang/Exception.js';
//not GWT import const ArtificialIntelligenceInterfaceFactoryInterface = globalThis.org.allbinary.game.ai.ArtificialIntelligenceInterfaceFactoryInterface;
import { BasicAI } from '../../../../../../org/allbinary/game/ai/BasicAI.js';
//not GWT import const BasicAI = globalThis.org.allbinary.game.ai.BasicAI;
import { InputProbability } from '../../../../../../org/allbinary/game/ag/ai/InputProbability.js';
//not GWT import const Visitor = globalThis.org.allbinary.logic.util.visitor.Visitor;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { BasicRandomAI } from './BasicRandomAI.js';
//not GWT import const BasicRandomAI = globalThis.org.allbinary.game.ag.ai.tactical.BasicRandomAI;
export class BasicRandomAIFactory extends Object {
    //@Throws(Exception.constructor)
    getInstance(hashtable, ownerLayerInterface, gameInput) {
        var visitor = hashtable.get(BasicAI.AI_VISITOR);
        ;
        if (visitor ==
            null) {
            throw new Exception("No Visitor Provided");
        }
        var inputProbability = hashtable.get(InputProbability.INPUT_PROBABILITY);
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return new BasicRandomAI(ownerLayerInterface, gameInput, inputProbability, visitor);
    }
}
