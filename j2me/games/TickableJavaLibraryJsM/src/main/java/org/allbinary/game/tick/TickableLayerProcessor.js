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
//not GWT import const AllBinaryLayerManager
import { LayerProcessor } from '../../../../org/allbinary/layer/LayerProcessor.js';
//not GWT import const LayerProcessor
//Current folder imports from return types, extended types, and scope (deduplicated)
import { TickableLayerManager } from './TickableLayerManager.js';
//not GWT import - same folder const TickableInterface
export class TickableLayerProcessor extends LayerProcessor {
    constructor() {
        super(new TickableLayerManager());
        //For kotlin this is before the body of the constructor.
    }
    //@Throws(Exception.constructor)
    processAt(allBinaryLayerManager, layerInterface, index) {
        var tickableInterface = layerInterface;
        ;
        tickableInterface.processTick(allBinaryLayerManager);
    }
    isProcessorLayer(layerInterface) {
        if (layerInterface.implmentsTickableInterface()) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
    }
}
