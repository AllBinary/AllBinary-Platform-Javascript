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
//Current folder imports from return types, extended types, and scope (deduplicated)
import { DestroyableBaseBehavior } from './DestroyableBaseBehavior.js';
import { DestroyedLayerProcessor } from './DestroyedLayerProcessor.js';
export class DestroyableSimpleBehavior extends DestroyableBaseBehavior {
    constructor(ownerLayer) {
        super();
        this.destroyed = false;
        this.ownerLayer = ownerLayer;
    }
    isDestroyed() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.destroyed;
    }
    setDestroyed(destroyed) {
        this.destroyed = destroyed;
        if (this.isDestroyed()) {
            DestroyedLayerProcessor.getInstance().add(this.ownerLayer);
        }
    }
}
