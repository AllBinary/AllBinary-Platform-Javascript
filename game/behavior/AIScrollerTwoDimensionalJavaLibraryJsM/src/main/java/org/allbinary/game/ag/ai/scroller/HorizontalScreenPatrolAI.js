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
/* Generated Code Do Not Modify */
import { Exception } from '../../../../../../java/lang/Exception.js';
import { Integer } from '../../../../../../java/lang/Integer.js';
//not GWT import const Hashtable = globalThis.java.util.Hashtable;
//not plain js import { Canvas } from '../../../../../../javax/microedition/lcdui/Canvas.js';
const Canvas = globalThis.javax.microedition.lcdui.Canvas;
import { BasicAI } from '../../../../../../org/allbinary/game/ai/BasicAI.js';
//not GWT import const AllBinaryGameLayerManager = globalThis.org.allbinary.game.layer.AllBinaryGameLayerManager;
//not plain js import { MyRandomFactory } from '../../../../../../org/allbinary/game/rand/MyRandomFactory.js';
const MyRandomFactory = globalThis.org.allbinary.game.rand.MyRandomFactory;
import { DisplayInfoSingleton } from '../../../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
//not GWT import const AllBinaryLayerManager = globalThis.org.allbinary.layer.AllBinaryLayerManager;
//not plain js import { SmallIntegerSingletonFactory } from '../../../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js';
const SmallIntegerSingletonFactory = globalThis.org.allbinary.logic.math.SmallIntegerSingletonFactory;
//not GWT import const PlayerQueue = globalThis.org.allbinary.media.audio.PlayerQueue;
import { SecondaryPlayerQueueFactory } from '../../../../../../org/allbinary/media/audio/SecondaryPlayerQueueFactory.js';
//not GWT import const Sound = globalThis.org.allbinary.media.audio.Sound;
import { TimeDelayHelper } from '../../../../../../org/allbinary/time/TimeDelayHelper.js';
//not GWT import const TimeDelayHelper = globalThis.org.allbinary.time.TimeDelayHelper;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class HorizontalScreenPatrolAI extends BasicAI {
    constructor(hashtable, ownerLayerInterface, gameInput) {
        super(ownerLayerInterface, gameInput);
        this.keyDirection = Canvas.LEFT;
        this.displayInfoSingleton = DisplayInfoSingleton.getInstance();
        this.firingX = this.displayInfoSingleton.getLastHalfWidth();
        this.firedIndex = 0;
        this.MAX_FIRE = 28;
        this.timeDelayHelper = new TimeDelayHelper(240);
        this.secondaryPlayerQueue = SecondaryPlayerQueueFactory.getInstance();
        //For kotlin this is before the body of the constructor.
        this.sound = hashtable.get(HorizontalScreenPatrolAI.SOUND);
        if (this.sound ==
            null) {
            throw new Exception("No Sound Provided!!");
        }
    }
    //@Throws(Exception.constructor)
    processAI(allBinaryLayerManager) {
        super.processKeyAI(this.keyDirection);
        if (this.timeDelayHelper.isTimeTNT()) {
            var layerInterface = this.getOwnerLayerInterface();
            ;
            var currentOwnerLayerX = layerInterface.getXP();
            ;
            if (currentOwnerLayerX < -layerInterface.getWidth()) {
                var y = MyRandomFactory.getInstance().getAbsoluteNextIntAllowZero(50);
                ;
                layerInterface.setPosition(this.displayInfoSingleton.getLastWidth() + layerInterface.getWidth() + 50, y, layerInterface.getZP());
                this.firedIndex = 0;
                this.firingX = this.displayInfoSingleton.getLastHalfWidth() + MyRandomFactory.getInstance().getNextInt(this.displayInfoSingleton.getLastHalfWidth());
                this.secondaryPlayerQueue.add(this.sound);
            }
            if (currentOwnerLayerX < this.firingX && currentOwnerLayerX > -layerInterface.getWidth()) {
                super.processKeyAI(Canvas.KEY_NUM1);
                var gameLayerManager = allBinaryLayerManager;
                ;
                var FIRE = (gameLayerManager.getGameInfo().getCurrentLevel() + 12) >> 2;
                ;
                if (FIRE > this.MAX_FIRE) {
                    FIRE = this.MAX_FIRE;
                }
                if (this.firedIndex > FIRE) {
                    this.firedIndex = 0;
                    this.firingX = Integer.MIN_VALUE;
                }
                this.firedIndex++;
            }
        }
    }
    nextDirection() {
    }
}
HorizontalScreenPatrolAI.SOUND = SmallIntegerSingletonFactory.getInstance().getAt(433);
