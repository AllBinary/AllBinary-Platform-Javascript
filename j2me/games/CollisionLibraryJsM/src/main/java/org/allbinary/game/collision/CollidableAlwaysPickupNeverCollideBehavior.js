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
import { CollidableNeverCollideBehavior } from './CollidableNeverCollideBehavior.js';
//not GWT import - same folder const CollidableNeverCollideBehavior = globalThis.org.allbinary.game.collision.CollidableNeverCollideBehavior;
import { CollisionTypeFactory } from './CollisionTypeFactory.js';
//not GWT import - same folder const CollisionType = globalThis.org.allbinary.game.collision.CollisionType;
export class CollidableAlwaysPickupNeverCollideBehavior extends CollidableNeverCollideBehavior {
    constructor() {
        super(true);
        //For kotlin this is before the body of the constructor.
    }
    getCollisionTypeWith(layerInterface) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return CollisionTypeFactory.getInstance().PICKUP;
    }
}
