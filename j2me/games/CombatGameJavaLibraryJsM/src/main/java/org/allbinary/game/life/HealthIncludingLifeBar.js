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
//not plain js import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
const Graphics = globalThis.javax.microedition.lcdui.Graphics;
//not GWT import const HealthBarAnimation = globalThis.org.allbinary.game.health.HealthBarAnimation;
import { HealthBarTwodAnimation } from '../../../../org/allbinary/game/health/HealthBarTwodAnimation.js';
//not GWT import const HealthListenerInterface = globalThis.org.allbinary.game.health.HealthListenerInterface;
import { Paintable } from '../../../../org/allbinary/graphics/paint/Paintable.js';
//not GWT import const Life = globalThis.org.allbinary.game.life.Life;
export class HealthIncludingLifeBar extends Paintable {
    constructor(layerInterface, life, healthInterface, animationInterface, direction) {
        super();
        this.allbinaryLayer = layerInterface;
        this.animationInterface = animationInterface;
        this.life = life;
        this.healthInterface = healthInterface;
        this.healthInterface.addListener(this);
        this.onHealthChange();
    }
    constructor(layerInterface, life, healthInterface, location, direction) {
        this(layerInterface, life, healthInterface, new HealthBarTwodAnimation(layerInterface, location), direction);
        //For kotlin this is before the body of the constructor.
    }
    onHealthChange() {
        this.animationInterface.onHealthChange(((this.healthInterface.getHealth() + (this.healthInterface.getMaxHealth() * this.life.get())) * this.allbinaryLayer.getWidth()) / (this.healthInterface.getMaxHealth() + (this.healthInterface.getMaxHealth() * this.life.getStartLives())));
    }
    paint(graphics) {
        this.animationInterface.paintXY(graphics, 0, 0);
    }
    paintThreed(graphics) {
        this.animationInterface.paintThreedXYZ(graphics, 0, 0, 0);
    }
}
