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
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;
import { CollidableBaseBehavior } from '../../../../../org/allbinary/game/collision/CollidableBaseBehavior.js';
//not GWT import const CollidableInterfaceCompositeInterface = globalThis.org.allbinary.game.collision.CollidableInterfaceCompositeInterface;
import { DamageUtil } from '../../../../../org/allbinary/game/combat/damage/DamageUtil.js';
//not GWT import const CollidableCompositeLayer = globalThis.org.allbinary.game.layer.CollidableCompositeLayer;
//not plain js import { ForcedLogUtil } from '../../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js';
const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;
//not GWT import const CollidableDestroyableDamageableLayer = globalThis.org.allbinary.game.layer.special.CollidableDestroyableDamageableLayer;
export class CollidableDestroyableDamageableBehavior extends CollidableBaseBehavior {
    constructor(collidable) {
        super(collidable);
        this.damageUtil = DamageUtil.getInstance();
        //For kotlin this is before the body of the constructor.
    }
    isCollision(ownerLayer, collisionLayer) {
        if (ownerLayer.getGroupInterface()[0] != collisionLayer.getGroupInterface()[0]) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return super.isCollision(ownerLayer, collisionLayer);
            ;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    //@Throws(Exception.constructor)
    collide(ownerLayer, collidableInterfaceCompositeInterface) {
        var ownerCollidableDestroyableDamageableLayer = ownerLayer;
        ;
        var collidableDestroyableDamageableLayer = collidableInterfaceCompositeInterface;
        ;
        ownerCollidableDestroyableDamageableLayer.damage(collidableDestroyableDamageableLayer.getDamage(0), 0);
    }
    isCollisionInterface(ownerLayer, collidableInterfaceCompositeInterface) {
        ForcedLogUtil.log("No Longer Used", this);
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    //@Throws(Exception.constructor)
    collideInterface(ownerLayer, collidableInterfaceCompositeInterface) {
        ForcedLogUtil.log("No Longer Used", this);
    }
}
