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
//not GWT import const LayerManager
//Current folder imports from return types, extended types, and scope (deduplicated)
export class AllBinaryCollisionManager extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return AllBinaryCollisionManager.allBinaryCollisionManager;
    }
    constructor() {
        super();
    }
    //@Throws(Exception.constructor)
    process(layerManager, collidableInterfaceCompositeInterface, startIndex) {
        let size = layerManager.getSize();
        ;
        for (let index = startIndex + 1; index < size; index++) {
            let collidableInterfaceCompositeInterface2 = layerManager.getLayerAt(index);
            ;
            this.collide(layerManager, collidableInterfaceCompositeInterface, collidableInterfaceCompositeInterface2);
        }
    }
    //@Throws(Exception.constructor)
    collide(layerManager, collidableInterfaceCompositeInterface, collidableInterfaceCompositeInterface2) {
        let collidableBase2 = collidableInterfaceCompositeInterface2.getCollidableInferface();
        ;
        let collidableBase = collidableInterfaceCompositeInterface.getCollidableInferface();
        ;
        if (collidableBase2.isCollidable(collidableInterfaceCompositeInterface)) {
            if (collidableBase.isCollisionInterface(collidableInterfaceCompositeInterface, collidableInterfaceCompositeInterface2)) {
                collidableBase.collideInterface(collidableInterfaceCompositeInterface, collidableInterfaceCompositeInterface2);
                collidableBase2.collideInterface(collidableInterfaceCompositeInterface, collidableInterfaceCompositeInterface);
            }
        }
    }
}
AllBinaryCollisionManager.allBinaryCollisionManager = new AllBinaryCollisionManager();
