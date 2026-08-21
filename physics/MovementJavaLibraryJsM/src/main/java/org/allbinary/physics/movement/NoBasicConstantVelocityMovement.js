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
import { BasicVelocityProperties } from '../../../../org/allbinary/game/physics/velocity/BasicVelocityProperties.js';
import { BasicDecimal } from '../../../../org/allbinary/logic/math/BasicDecimal.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { BasicConstantVelocityMovement } from './BasicConstantVelocityMovement.js';
export class NoBasicConstantVelocityMovement extends BasicConstantVelocityMovement {
    constructor() {
        super(BasicDecimal.ZERO_BIGDECIMAL, new BasicVelocityProperties());
        //For kotlin this is before the body of the constructor.
    }
    //@Throws(Exception.constructor)
    process(layer) {
    }
}
