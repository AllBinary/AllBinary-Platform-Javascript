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
//not GWT import const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { CollisionHelper } from './CollisionHelper.js';
//not GWT import const CollisionHelper = globalThis.org.allbinary.game.collision.CollisionHelper;
export class SourceCollisionHelper extends CollisionHelper {
    constructor(layerInterface) {
        super(layerInterface);
        //For kotlin this is before the body of the constructor.
    }
    isCollidable(layerInterface) {
        if (this.sourceLayerInterface != layerInterface) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
}
