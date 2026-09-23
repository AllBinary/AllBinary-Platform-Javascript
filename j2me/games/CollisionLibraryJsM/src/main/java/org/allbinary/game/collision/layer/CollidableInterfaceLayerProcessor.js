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
import { LayerProcessor } from '../../../../../org/allbinary/layer/LayerProcessor.js';
//not GWT import const LayerProcessor
//Current folder imports from return types, extended types, and scope (deduplicated)
import { CollidableInterfaceLayerManager } from './CollidableInterfaceLayerManager.js';
//not GWT import - same folder const CollidableInterfaceLayerManager
import { AllBinaryCollisionManager } from './AllBinaryCollisionManager.js';
//not GWT import - same folder const AllBinaryCollisionManager
export class CollidableInterfaceLayerProcessor extends LayerProcessor {
    constructor() {
        super(new CollidableInterfaceLayerManager());
        //For kotlin this is before the body of the constructor.
    }
    //@Throws(Exception.constructor)
    processAt(allBinaryLayerManager, layerInterface, index) {
        var collidableInterfaceCompositeInterface = layerInterface;
        ;
        if (collidableInterfaceCompositeInterface.getCollidableInferface().isCollidable(collidableInterfaceCompositeInterface)) {
            AllBinaryCollisionManager.getInstance().process(this.getLayerManager(), collidableInterfaceCompositeInterface, index);
        }
    }
    isProcessorLayer(layerInterface) {
        if (layerInterface.implmentsCollidableInterface()) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
    }
}
