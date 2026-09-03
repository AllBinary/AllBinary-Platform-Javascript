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
//not plain js import { Graphics } from '../../../../../javax/microedition/lcdui/Graphics.js';
const Graphics = globalThis.javax.microedition.lcdui.Graphics;
//not plain js import { Image } from '../../../../../javax/microedition/lcdui/Image.js';
const Image = globalThis.javax.microedition.lcdui.Image;
//not plain js import { Sprite } from '../../../../../javax/microedition/lcdui/game/Sprite.js';
const Sprite = globalThis.javax.microedition.lcdui.game.Sprite;
//not GWT import const BasicColorUtil = globalThis.org.allbinary.graphics.color.BasicColorUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { SpriteIndexedAnimation } from './SpriteIndexedAnimation.js';
//not GWT import const SpriteIndexedAnimation = globalThis.org.allbinary.animation.image.sprite.SpriteIndexedAnimation;
export class AdjustedSpriteIndexedAnimation extends SpriteIndexedAnimation {
    constructor(sprite, image, basicColorArray, dx, dy, animationBehavior) {
        super(sprite, image, basicColorArray, animationBehavior);
        //For kotlin this is before the body of the constructor.
        this.dx = dx;
        this.dy = dy;
    }
    paintFrame(graphics, frame, x, y) {
        this.setFrame(frame);
        this.sprite.setPosition(x + this.dx, y + this.dy);
        super.paint(graphics);
    }
    paintXY(g, x, y) {
        this.sprite.setPosition(x + this.dx, y + this.dy);
        super.paint(g);
    }
    paint(g) {
        this.sprite.setPosition(this.dx, this.dy);
        super.paint(g);
    }
}
