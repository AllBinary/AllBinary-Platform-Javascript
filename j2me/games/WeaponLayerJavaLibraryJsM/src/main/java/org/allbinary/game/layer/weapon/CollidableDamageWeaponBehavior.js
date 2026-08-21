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
import { CollidableHelperFactory } from '../../../../../org/allbinary/game/collision/CollidableHelperFactory.js';
import { CollisionTypeFactory } from '../../../../../org/allbinary/game/collision/CollisionTypeFactory.js';
import { CollidableDestroyableDamageableBehavior } from '../../../../../org/allbinary/game/layer/special/CollidableDestroyableDamageableBehavior.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
export class CollidableDamageWeaponBehavior extends CollidableDestroyableDamageableBehavior {
    constructor(collidable) {
        super(collidable);
        this.collided = false;
        //For kotlin this is before the body of the constructor.
        this.setCollided(false);
        this.setCollidable(true);
        this.collisionHelper = CollidableHelperFactory.getInstance();
    }
    init(sourceLayerInterface) {
        this.setCollided(false);
        this.collisionHelper.setOwnerLayerInterface(sourceLayerInterface);
    }
    isCollision(ownerLayer, collisionLayer) {
        if (this.collisionHelper.isCollidable(collisionLayer)) {
            if (ownerLayer.getGroupInterface()[0] != collisionLayer.getGroupInterface()[0]) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return super.isCollision(ownerLayer, collisionLayer);
                ;
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    //@Throws(Exception.constructor)
    collide(ownerLayer, collisionLayer) {
        super.collide(ownerLayer, collisionLayer);
        this.collided = true;
    }
    isCollisionInterface(ownerLayer, collidableInterfaceCompositeInterface) {
        if (this.collisionHelper.isCollidable(collidableInterfaceCompositeInterface)) {
            var layerInterface = collidableInterfaceCompositeInterface;
            ;
            if (ownerLayer.getGroupInterface()[0] != layerInterface.getGroupInterface()[0]) {
                if (this.layerCollisionUtil.isCollision(ownerLayer, layerInterface)) {
                    //if statement needs to be on the same line and ternary does not work the same way.
                    return true;
                }
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    //@Throws(Exception.constructor)
    collideInterface(ownerLayer, collidableInterfaceCompositeInterface) {
        this.damageUtil.process(ownerLayer, collidableInterfaceCompositeInterface);
        this.collided = true;
    }
    getCollisionTypeWith(layerInterface) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return CollisionTypeFactory.getInstance().COLLISION;
    }
    isCollided() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.collided;
    }
    setCollided(collided) {
        this.collided = collided;
    }
}
