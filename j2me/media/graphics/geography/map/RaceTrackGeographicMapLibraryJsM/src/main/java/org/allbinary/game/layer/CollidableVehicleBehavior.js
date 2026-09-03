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
//not GWT import const PickedUpLayerInterface = globalThis.org.allbinary.game.layer.pickup.PickedUpLayerInterface;
//not plain js import { ForcedLogUtil } from '../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js';
const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;
//not GWT import const CollisionType = globalThis.org.allbinary.game.collision.CollisionType;
import { CollisionTypeFactory } from '../../../../org/allbinary/game/collision/CollisionTypeFactory.js';
//not GWT import const CollisionTypeFactory = globalThis.org.allbinary.game.collision.CollisionTypeFactory;
import { CollidableDestroyableDamageableBehavior } from '../../../../org/allbinary/game/layer/special/CollidableDestroyableDamageableBehavior.js';
//not GWT import const VehicleFrictionProperties = globalThis.org.allbinary.game.layer.VehicleFrictionProperties;
export class CollidableVehicleBehavior extends CollidableDestroyableDamageableBehavior {
    constructor(collidable) {
        super(collidable);
        this.totalImpactVelocity = 0;
        this.halfImpactVelocityX = 0;
        this.halfImpactVelocityY = 0;
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
        else if (collisionType == collisionTypeFactory.COLLISION) {
            super.collide(ownerLayer, collidableInterfaceCompositeInterface);
        }
        else {
            this.collideVehicle(ownerLayer, collidableInterfaceCompositeInterface);
        }
    }
    collideInterface(ownerLayer, collidableInterfaceCompositeInterface) {
        ForcedLogUtil.log("Don't Use Interface Version It Is Slower", this);
    }
    collideVehicle(ownerLayer, vehiclePropertiesCompositeInterface) {
        var ownerVehicleLayerInterface = ownerLayer;
        ;
        var ownerVehicleProperties = ownerVehicleLayerInterface.getVehicleProperties();
        ;
        var vehicleProperties = vehiclePropertiesCompositeInterface.getVehicleProperties();
        ;
        var impactVelocityX = ownerVehicleProperties.getVelocityProperties().getVelocityXBasicDecimalP().getUnscaled() - vehicleProperties.getVelocityProperties().getVelocityXBasicDecimalP().getUnscaled();
        ;
        var impactVelocityY = ownerVehicleProperties.getVelocityProperties().getVelocityYBasicDecimalP().getUnscaled() - vehicleProperties.getVelocityProperties().getVelocityYBasicDecimalP().getUnscaled();
        ;
        if (impactVelocityX != 0) {
            this.halfImpactVelocityX = (impactVelocityX >> 1);
            ownerVehicleProperties.getVelocityProperties().getVelocityXBasicDecimalP().addlong(this.halfImpactVelocityX);
            vehicleProperties.getVelocityProperties().getVelocityXBasicDecimalP().addlong(this.halfImpactVelocityX);
        }
        else {
        }
        if (impactVelocityY != 0) {
            this.halfImpactVelocityY = (impactVelocityY >> 1);
            ownerVehicleProperties.getVelocityProperties().getVelocityYBasicDecimalP().addlong(this.halfImpactVelocityY);
            vehicleProperties.getVelocityProperties().getVelocityXBasicDecimalP().addlong(this.halfImpactVelocityY);
        }
        else {
        }
        this.collideFriction(ownerVehicleLayerInterface);
        this.collideFriction(vehiclePropertiesCompositeInterface);
        this.totalImpactVelocity = impactVelocityX + impactVelocityY;
    }
    collideFriction(vehiclePropertiesCompositeInterface) {
        var vehicleFrictionProperties = vehiclePropertiesCompositeInterface.getVehicleProperties().getVehicleFrictionProperties();
        ;
        vehiclePropertiesCompositeInterface.getVehicleProperties().getVehicleFrictionProperties().friction(vehiclePropertiesCompositeInterface.getVehicleProperties().getVelocityProperties(), vehicleFrictionProperties.getCrashFrictionNominator());
    }
}
