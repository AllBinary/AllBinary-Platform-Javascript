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
//not plain js import { Graphics } 
const Graphics = globalThis.javax.microedition.lcdui.Graphics;
//not plain js import { Image } 
const Image = globalThis.javax.microedition.lcdui.Image;
//not plain js import { Sprite } 
const Sprite = globalThis.javax.microedition.lcdui.game.Sprite;
//not GWT import const AnimationBehavior = globalThis.org.allbinary.animation.AnimationBehavior;
import { Anchor } from '../../../../org/allbinary/graphics/Anchor.js';
//not GWT import const Anchor = globalThis.org.allbinary.graphics.Anchor;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { ImageSegmentAnimation } from './ImageSegmentAnimation.js';
//not GWT import - same folder const ImageSegmentAnimation = globalThis.org.allbinary.animation.image.ImageSegmentAnimation;
export class TopToBottomImageAnimation extends ImageSegmentAnimation {
    constructor(image, sequenceArray, animationBehavior) {
        super(image, sequenceArray, animationBehavior);
        this.anchor = Anchor.TOP_LEFT;
        //For kotlin this is before the body of the constructor.
        this.currentHeight = 0;
        if (this.getSequence()[0] == -1) {
            this.setFrame(this.getSize() - 1);
        }
    }
    nextFrame() {
        if (this.getSequence()[0] == -1) {
            super.previousFrame();
        }
        else {
            super.nextFrame();
        }
        this.update();
    }
    previousFrame() {
        if (this.getSequence()[0] == -1) {
            super.nextFrame();
        }
        else {
            super.previousFrame();
        }
        this.update();
    }
    setFrame(index) {
        super.setFrame(index);
        this.update();
    }
    update() {
        this.currentHeight = this.getDrawHeight() * this.getFrame() / this.getSize();
    }
    paintXY(graphics, x, y) {
        graphics.drawRegion(this.getImage(), this.getStartX(), this.getStartY(), this.getDrawWidth(), this.currentHeight, Sprite.TRANS_NONE, x, y, this.anchor);
    }
}
