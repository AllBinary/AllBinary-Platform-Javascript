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
//not GWT import const CollisionType
import { CollisionTypeFactory } from '../../../../../org/allbinary/game/collision/CollisionTypeFactory.js';
//not GWT import const PickedUpLayerInterface
//not plain js import { ForcedLogUtil } 
const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { CollidableDestroyableDamageableBehavior } from './CollidableDestroyableDamageableBehavior.js';
//not GWT import - same folder const CollidableDestroyableDamageableLayer
export class CollidableCharacterNoDamageBehavior extends CollidableDestroyableDamageableBehavior {
    constructor(collidable) {
        super(collidable);
        //For kotlin this is before the body of the constructor.
    }
    //@Throws(Exception.constructor)
    collide(ownerLayer, collidableInterfaceCompositeInterface) {
        var collisionTypeFactory = CollisionTypeFactory.getInstance();
        ;
        var collisionType = collidableInterfaceCompositeInterface.getCollidableInferface().getCollisionTypeWith(ownerLayer);
        ;
        if (collisionType == collisionTypeFactory.PICKUP) {
            var collidableDestroyableDamageableLayer = ownerLayer;
            ;
            collidableDestroyableDamageableLayer.getPickupBehavior().doPickupLayer(collidableInterfaceCompositeInterface);
        }
        else {
        }
    }
    //@Throws(Exception.constructor)
    collideInterface(ownerLayer, collidableInterfaceCompositeInterface) {
        ForcedLogUtil.log(this.commonStrings.NOT_IMPLEMENTED, this);
    }
}
