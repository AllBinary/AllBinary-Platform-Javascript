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
//not GWT import const ArtificialIntelligenceInterfaceFactoryInterface = globalThis.org.allbinary.game.ai.ArtificialIntelligenceInterfaceFactoryInterface;
import { InputFeatureFactory } from '../../../../../org/allbinary/game/configuration/feature/InputFeatureFactory.js';
//not GWT import const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;
//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { MultiKeyPressesAI } from './MultiKeyPressesAI.js';
//not GWT import - same folder const MultiKeyPressesAI = globalThis.org.allbinary.game.ag.ai.MultiKeyPressesAI;
import { KeyPressesAI } from './KeyPressesAI.js';
//not GWT import - same folder const KeyPressesAI = globalThis.org.allbinary.game.ag.ai.KeyPressesAI;
export class KeyPressesAIFactory extends Object {
    //@Throws(Exception.constructor)
    getInstance(hashtable, ownerLayerInterface, gameInput) {
        var isSingleKeyProcessing = InputFeatureFactory.getInstance().isSingleKeyProcessing();
        ;
        if (isSingleKeyProcessing) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return new KeyPressesAI(hashtable, ownerLayerInterface, gameInput);
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return new MultiKeyPressesAI(hashtable, ownerLayerInterface, gameInput);
        }
    }
}
