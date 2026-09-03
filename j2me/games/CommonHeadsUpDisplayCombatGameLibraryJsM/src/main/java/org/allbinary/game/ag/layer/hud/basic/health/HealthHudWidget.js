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
//not plain js import { Graphics } from '../../../../../../../../javax/microedition/lcdui/Graphics.js';
const Graphics = globalThis.javax.microedition.lcdui.Graphics;
//not GWT import const Animation = globalThis.org.allbinary.animation.Animation;
import { BasicHud } from '../../../../../../../../org/allbinary/game/graphics/hud/BasicHud.js';
//not GWT import const HealthListenerInterface = globalThis.org.allbinary.game.health.HealthListenerInterface;
import { BasicColorFactory } from '../../../../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
//not GWT import const GameTickTimeDelayHelper = globalThis.org.allbinary.time.GameTickTimeDelayHelper;
import { GameTickTimeDelayHelperFactory } from '../../../../../../../../org/allbinary/time/GameTickTimeDelayHelperFactory.js';
//not GWT import const GameTickTimeDelayHelperFactory = globalThis.org.allbinary.time.GameTickTimeDelayHelperFactory;
import { NoTimeDelayHelper } from '../../../../../../../../org/allbinary/time/NoTimeDelayHelper.js';
//not GWT import const NoTimeDelayHelper = globalThis.org.allbinary.time.NoTimeDelayHelper;
import { TimeDelayHelper } from '../../../../../../../../org/allbinary/time/TimeDelayHelper.js';
//not GWT import const TimeDelayHelper = globalThis.org.allbinary.time.TimeDelayHelper;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class HealthHudWidget extends BasicHud {
    constructor(animationInterface, healthInterface, location, direction) {
        super(location, direction, 2, BasicColorFactory.getInstance().WHITE);
        this.max = 0;
        this.gameTickTimeDelayHelper = GameTickTimeDelayHelperFactory.getInstance();
        this.timeDelayHelper = NoTimeDelayHelper.SINGLETON;
        this.slowBeatTimeDelayHelper = new TimeDelayHelper(1280);
        this.mediumBeatTimeDelayHelper = new TimeDelayHelper(640);
        this.fastBeatTimeDelayHelper = new TimeDelayHelper(320);
        //For kotlin this is before the body of the constructor.
        this.animationInterface = animationInterface;
        this.healthInterface = healthInterface;
        this.healthInterface.addListener(this);
        this.healthScale = (this.healthInterface.getMaxHealth() / 6) + 1;
        this.onHealthChange();
        this.updateMaxWidth = healthInterface.getMaxHealth() * 16;
        this.updateMaxHeight = 16;
        this.xArray = new Array(30);
        this.update();
    }
    update() {
        if (this.xArray !=
            null) {
            for (var index = 0; index < this.xArray.length; index++) {
                this.xArray[index] = this.getX() + (index * 16);
            }
        }
    }
    setX(x) {
        super.setX(x);
        this.update();
    }
    onHealthChange() {
        this.max = (this.healthInterface.getHealth() / this.healthScale);
        this.timeDelayHelper = NoTimeDelayHelper.SINGLETON;
        if (this.max <= 1 && this.healthInterface.isAlive()) {
            this.max = 1;
            if (this.healthScale - this.healthInterface.getHealth() > (this.healthScale * 2) / 3) {
                this.timeDelayHelper = this.slowBeatTimeDelayHelper;
            }
            else if (this.healthScale - this.healthInterface.getHealth() > this.healthScale / 3) {
                this.timeDelayHelper = this.mediumBeatTimeDelayHelper;
            }
            else {
                this.timeDelayHelper = this.fastBeatTimeDelayHelper;
            }
        }
    }
    paint(graphics) {
        this.myFontProcessor.process(graphics);
        for (var index = 0; index < this.max; index++) {
            if (this.timeDelayHelper.isTime(this.gameTickTimeDelayHelper.startTime)) {
                this.animationInterface.paintXY(graphics, this.xArray[index], this.getY());
            }
        }
    }
    paintThreed(graphics) {
    }
}
