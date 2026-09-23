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
import { Canvas } from '../../../../../../javax/microedition/lcdui/Canvas.js';
//not GWT import const Canvas
import { BasicAI } from '../../../../../../org/allbinary/game/ai/BasicAI.js';
//not GWT import const AllBinaryLayerManager
import { SmallIntegerSingletonFactory } from '../../../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js';
//not GWT import const SmallIntegerSingletonFactory
import { GameTickTimeDelayHelperFactory } from '../../../../../../org/allbinary/time/GameTickTimeDelayHelperFactory.js';
//not GWT import const GameTickTimeDelayHelperFactory
import { TimeDelayHelper } from '../../../../../../org/allbinary/time/TimeDelayHelper.js';
//not GWT import - same folder const TimeFiredInterface
export class TimedFireAI extends BasicAI {
    constructor(delay, ownerLayerInterface, gameInput) {
        super(ownerLayerInterface, gameInput);
        this.maxFireDelayTimeHelper = new TimeDelayHelper(0);
        //For kotlin this is before the body of the constructor.
        this.delay = delay;
    }
    //@Throws(Exception.constructor)
    processAI(allBinaryLayerManager) {
        var timeFiredInterface = this.getOwnerLayerInterface();
        ;
        if (this.maxFireDelayTimeHelper.isTime(GameTickTimeDelayHelperFactory.getInstance().startTime) && timeFiredInterface.getLastFireTime() + this.maxFireDelayTimeHelper.delay < this.maxFireDelayTimeHelper.getStartTime()) {
            super.processKeyAI(Canvas.KEY_NUM1);
            this.maxFireDelayTimeHelper.delay = this.delay;
        }
    }
}
TimedFireAI.TIME = SmallIntegerSingletonFactory.getInstance().getAt(1);
