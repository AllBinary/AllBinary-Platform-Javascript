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
//not GWT import const AllBinaryGameLayer
import { GravityUtil } from '../../../../org/allbinary/game/physics/acceleration/GravityUtil.js';
//not GWT import const GravityUtil
import { VelocityProperties } from '../../../../org/allbinary/game/physics/velocity/VelocityProperties.js';
//not GWT import const BasicDecimal
//Current folder imports from return types, extended types, and scope (deduplicated)
import { BasicConstantVelocityMovement } from './BasicConstantVelocityMovement.js';
//not GWT import - same folder const BasicConstantVelocityMovement
export class SimpleGravityVelocityMovement extends BasicConstantVelocityMovement {
    constructor(speedBasicDecimal) {
        super(speedBasicDecimal, new VelocityProperties(Math.round(speedBasicDecimal.getUnscaled()), Math.round(speedBasicDecimal.getUnscaled())));
        this.gravityUtil = GravityUtil.getInstance();
        //For kotlin this is before the body of the constructor.
    }
    //@Throws(Exception.constructor)
    process(layer) {
        this.gravityUtil.process(this.getVelocityProperties(), this.gravityUtil.GAME_GRAVITY_VELOCITY);
        super.process(layer);
    }
}
