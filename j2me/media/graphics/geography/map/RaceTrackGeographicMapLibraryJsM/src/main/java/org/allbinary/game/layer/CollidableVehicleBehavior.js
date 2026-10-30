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
//not GWT import const PickedUpLayerInterface
//not plain js import { ForcedLogUtil } 
const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;
//not GWT import const CollisionType
import { CollisionTypeFactory } from '../../../../org/allbinary/game/collision/CollisionTypeFactory.js';
//not GWT import const CollisionTypeFactory
import { CollidableDestroyableDamageableBehavior } from '../../../../org/allbinary/game/layer/special/CollidableDestroyableDamageableBehavior.js';
//sameFolderImports - not GWT import - same folder const VehicleFrictionProperties
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
        let collisionTypeFactory = CollisionTypeFactory.getInstance();
        ;
        let collisionType = collidableInterfaceCompositeInterface.getCollidableInferface().getCollisionTypeWith(ownerLayer);
        ;
        if (collisionType == collisionTypeFactory.PICKUP) {
            let collidableDestroyableDamageableLayer = ownerLayer;
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
        let ownerVehicleLayerInterface = ownerLayer;
        ;
        let ownerVehicleProperties = ownerVehicleLayerInterface.getVehicleProperties();
        ;
        let vehicleProperties = vehiclePropertiesCompositeInterface.getVehicleProperties();
        ;
        let impactVelocityX = ownerVehicleProperties.getVelocityProperties().getVelocityXBasicDecimalP().getUnscaled() - vehicleProperties.getVelocityProperties().getVelocityXBasicDecimalP().getUnscaled();
        ;
        let impactVelocityY = ownerVehicleProperties.getVelocityProperties().getVelocityYBasicDecimalP().getUnscaled() - vehicleProperties.getVelocityProperties().getVelocityYBasicDecimalP().getUnscaled();
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
        let vehicleFrictionProperties = vehiclePropertiesCompositeInterface.getVehicleProperties().getVehicleFrictionProperties();
        ;
        vehiclePropertiesCompositeInterface.getVehicleProperties().getVehicleFrictionProperties().friction(vehiclePropertiesCompositeInterface.getVehicleProperties().getVelocityProperties(), vehicleFrictionProperties.getCrashFrictionNominator());
    }
}
