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
//not GWT import const Life = globalThis.org.allbinary.game.ag.life.Life;
import { BasicHud } from '../../../../../../../../org/allbinary/game/graphics/hud/BasicHud.js';
//not GWT import const BasicHud = globalThis.org.allbinary.game.graphics.hud.BasicHud;
import { BasicColorFactory } from '../../../../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
//not GWT import const PaintableInterface = globalThis.org.allbinary.graphics.paint.PaintableInterface;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class LivesHudWidget extends BasicHud {
    constructor(animationInterface, lifeInterface, location, direction) {
        super(location, direction, 2, BasicColorFactory.getInstance().WHITE);
        //For kotlin this is before the body of the constructor.
        this.lifeInterface = lifeInterface;
        var size = Math.round(this.getLifeInterface().getMaxlives());
        ;
        this.xArray = new Array(size);
        this.animationInterface = animationInterface;
        this.updateMaxWidth = this.lifeInterface.getMaxlives() * 16;
        this.updateMaxHeight = 16;
    }
    updateMeasurement(graphics) {
        super.updateMeasurement(graphics);
        var maxLives = Math.round(this.getLifeInterface().getMaxlives());
        ;
        for (var index = 0; index < maxLives; index++) {
            this.xArray[index] = this.getX() + (index * 16);
        }
    }
    onDisplayChangeEvent(displayChangeEvent) {
        super.onDisplayChangeEvent(displayChangeEvent);
        this.myFontProcessor = this.updateMyFontProcessor;
    }
    setX(x) {
        super.setX(x);
        this.myFontProcessor = this.updateMyFontProcessor;
    }
    paint(graphics) {
        this.myFontProcessor.process(graphics);
        for (var index = Math.round(this.getLifeInterface().get()); --index >= 0;) {
            this.animationInterface.paintXY(graphics, this.xArray[index], this.getY());
        }
    }
    paintThreed(graphics) {
    }
    getLifeInterface() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.lifeInterface;
    }
}
