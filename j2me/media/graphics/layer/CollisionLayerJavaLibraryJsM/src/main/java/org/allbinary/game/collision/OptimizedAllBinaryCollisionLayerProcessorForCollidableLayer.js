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
//not GWT import const LayerManager = globalThis.org.allbinary.layer.LayerManager;
import { LayerProcessor } from '../../../../org/allbinary/layer/LayerProcessor.js';
//not GWT import const LayerProcessor = globalThis.org.allbinary.layer.LayerProcessor;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { OptimizedAllBinaryCollisionLayerManager } from './OptimizedAllBinaryCollisionLayerManager.js';
//not GWT import - same folder const CollidableBaseBehavior = globalThis.org.allbinary.game.collision.CollidableBaseBehavior;
export class OptimizedAllBinaryCollisionLayerProcessorForCollidableLayer extends LayerProcessor {
    constructor() {
        super(new OptimizedAllBinaryCollisionLayerManager());
        //For kotlin this is before the body of the constructor.
    }
    //@Throws(Exception.constructor)
    processAt(allBinaryLayerManager, layerInterface, startIndex) {
        var collidableInterfaceCompositeInterface = layerInterface;
        ;
        var collidableBase = collidableInterfaceCompositeInterface.getCollidableInferface();
        ;
        if (collidableBase.isCollidable(collidableInterfaceCompositeInterface)) {
            var layerManager = this.getLayerManager();
            ;
            var size = layerManager.getSize();
            ;
            var collidableInterfaceCompositeInterface2;
            ;
            var collidableBase2;
            ;
            for (var index = startIndex + 1; index < size; index++) {
                collidableInterfaceCompositeInterface2 = layerManager.getLayerAt(index);
                collidableBase2 = collidableInterfaceCompositeInterface2.getCollidableInferface();
                if (collidableBase2.isCollidable(collidableInterfaceCompositeInterface) && collidableBase.isCollision(collidableInterfaceCompositeInterface, collidableInterfaceCompositeInterface2)) {
                    collidableBase.collide(collidableInterfaceCompositeInterface, collidableInterfaceCompositeInterface2);
                    collidableBase2.collide(collidableInterfaceCompositeInterface2, collidableInterfaceCompositeInterface);
                }
            }
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
