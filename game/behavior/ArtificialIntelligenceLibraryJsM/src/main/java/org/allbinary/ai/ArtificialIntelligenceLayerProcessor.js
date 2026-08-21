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
import { LayerProcessor } from '../../../org/allbinary/layer/LayerProcessor.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { ArtificialIntelligenceLayerManager } from './ArtificialIntelligenceLayerManager.js';
export class ArtificialIntelligenceLayerProcessor extends LayerProcessor {
    constructor() {
        super(new ArtificialIntelligenceLayerManager());
        //For kotlin this is before the body of the constructor.
    }
    //@Throws(Exception.constructor)
    processAt(allBinaryLayerManager, layerInterface, index) {
        var artificialIntelligenceCompositeInterface = layerInterface;
        ;
        artificialIntelligenceCompositeInterface.getArtificialIntelligenceInterface().processAI(allBinaryLayerManager);
    }
    //@Throws(Exception.constructor)
    isProcessorLayer(layerInterface) {
        if (layerInterface.implmentsArtificialIntelligenceCompositeInterface()) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
    }
}
