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
//not GWT import const Image
import { Sprite } from '../../../../javax/microedition/lcdui/game/Sprite.js';
//not GWT import const AnimationBehavior
import { Anchor } from '../../../../org/allbinary/graphics/Anchor.js';
//not GWT import const Anchor
//Current folder imports from return types, extended types, and scope (deduplicated)
import { ImageSegmentAnimation } from './ImageSegmentAnimation.js';
//not GWT import - same folder const ImageSegmentAnimation
export class LeftToRightImageAnimation extends ImageSegmentAnimation {
    constructor(image, sequenceArray, animationBehavior) {
        super(image, sequenceArray, animationBehavior);
        this.anchor = Anchor.TOP_LEFT;
        //For kotlin this is before the body of the constructor.
        this.currentWidth = 0;
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
        this.currentWidth = this.getDrawWidth() * this.getFrame() / this.getSize();
    }
    paintXY(graphics, x, y) {
        graphics.drawRegion(this.getImage(), this.getStartX(), this.getStartY(), this.currentWidth, this.getDrawHeight(), Sprite.TRANS_NONE, x, y, this.anchor);
    }
}
