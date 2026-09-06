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
//not plain js import { Canvas } 
const Canvas = globalThis.javax.microedition.lcdui.Canvas;
import { BasicAI } from '../../../../../../org/allbinary/game/ai/BasicAI.js';
//not GWT import const AllBinaryLayerManager = globalThis.org.allbinary.layer.AllBinaryLayerManager;
//not plain js import { SmallIntegerSingletonFactory } 
const SmallIntegerSingletonFactory = globalThis.org.allbinary.logic.math.SmallIntegerSingletonFactory;
import { GameTickTimeDelayHelperFactory } from '../../../../../../org/allbinary/time/GameTickTimeDelayHelperFactory.js';
//not GWT import const GameTickTimeDelayHelperFactory = globalThis.org.allbinary.time.GameTickTimeDelayHelperFactory;
import { TimeDelayHelper } from '../../../../../../org/allbinary/time/TimeDelayHelper.js';
//not GWT import - same folder const TimeFiredInterface = globalThis.org.allbinary.game.ag.ai.scroller.TimeFiredInterface;
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
