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
//not GWT import const AllBinaryGameLayer = globalThis.org.allbinary.game.layer.AllBinaryGameLayer;
import { GravityUtil } from '../../../../org/allbinary/game/physics/acceleration/GravityUtil.js';
//not GWT import const GravityUtil = globalThis.org.allbinary.game.physics.acceleration.GravityUtil;
import { VelocityProperties } from '../../../../org/allbinary/game/physics/velocity/VelocityProperties.js';
//not GWT import const VelocityProperties = globalThis.org.allbinary.game.physics.velocity.VelocityProperties;
//not plain js import { BasicDecimal } 
const BasicDecimal = globalThis.org.allbinary.logic.math.BasicDecimal;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { BasicConstantVelocityMovement } from './BasicConstantVelocityMovement.js';
//not GWT import - same folder const BasicConstantVelocityMovement = globalThis.org.allbinary.physics.movement.BasicConstantVelocityMovement;
export class CustomGravityConstantVelocityMovement extends BasicConstantVelocityMovement {
    constructor(speedBasicDecimal, customGravity) {
        super(speedBasicDecimal, new VelocityProperties(Math.round(speedBasicDecimal.getUnscaled()), Math.round(speedBasicDecimal.getUnscaled())));
        this.gravityUtil = GravityUtil.getInstance();
        //For kotlin this is before the body of the constructor.
        this.customGravity = customGravity;
    }
    //@Throws(Exception.constructor)
    process(layer) {
        super.process(layer);
        this.gravityUtil.process(this.getVelocityProperties(), this.customGravity);
        var velocityProperties = this.getVelocityProperties();
        ;
        velocityProperties.limitMaxYForwardVelocity();
    }
}
