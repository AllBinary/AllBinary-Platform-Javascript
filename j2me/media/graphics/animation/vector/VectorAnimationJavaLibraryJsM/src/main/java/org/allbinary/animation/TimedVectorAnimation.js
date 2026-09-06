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
//not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;
import { GameTickTimeDelayHelperFactory } from '../../../org/allbinary/time/GameTickTimeDelayHelperFactory.js';
//not GWT import const GameTickTimeDelayHelperFactory = globalThis.org.allbinary.time.GameTickTimeDelayHelperFactory;
import { TimeDelayHelper } from '../../../org/allbinary/time/TimeDelayHelper.js';
//not GWT import const TimeDelayHelper = globalThis.org.allbinary.time.TimeDelayHelper;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { VectorAnimation } from './VectorAnimation.js';
//not GWT import - same folder const AnimationBehavior = globalThis.org.allbinary.animation.AnimationBehavior;
export class TimedVectorAnimation extends VectorAnimation {
    constructor(currentPoints, basicColor, animationBehavior) {
        super(currentPoints, basicColor, animationBehavior);
        this.timeElapsedHelper = new TimeDelayHelper(200);
        //For kotlin this is before the body of the constructor.
    }
    nextFrame() {
        if (this.timeElapsedHelper.isTime(GameTickTimeDelayHelperFactory.getInstance().startTime)) {
            super.nextFrame();
        }
    }
}
