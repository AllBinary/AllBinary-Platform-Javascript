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
//not GWT import const BasicDecimal
import { GameTickTimeDelayHelperFactory } from '../../../../org/allbinary/time/GameTickTimeDelayHelperFactory.js';
//not GWT import const GameTickTimeDelayHelperFactory
import { TimeDelayHelper } from '../../../../org/allbinary/time/TimeDelayHelper.js';
//not GWT import const TimeDelayHelper
//Current folder imports from return types, extended types, and scope (deduplicated)
import { BasicConstantVelocityMovement } from './BasicConstantVelocityMovement.js';
//not GWT import - same folder const BasicConstantVelocityMovement
export class DelayedConstantVelocityMovement extends BasicConstantVelocityMovement {
    constructor(basicDecimal, velocityProperties) {
        super(basicDecimal, velocityProperties);
        this.timeDelayHelper = new TimeDelayHelper(60);
        //For kotlin this is before the body of the constructor.
    }
    init(speedBasicDecimal, angle, otherAngle) {
    }
    //@Throws(Exception.constructor)
    process(layer) {
        if (this.timeDelayHelper.isTime(GameTickTimeDelayHelperFactory.getInstance().startTime)) {
            super.process(layer);
        }
    }
}
