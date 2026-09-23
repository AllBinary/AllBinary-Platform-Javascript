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
import { PrimitiveIntUtil } from '../../../../org/allbinary/logic/math/PrimitiveIntUtil.js';
//not GWT import const PrimitiveIntUtil
//Current folder imports from return types, extended types, and scope (deduplicated)
import { ImageSegmentAnimation } from './ImageSegmentAnimation.js';
//not GWT import - same folder const ImageSegmentAnimation
export class RightToLeftImageAnimation extends ImageSegmentAnimation {
    constructor(image, animationBehavior) {
        super(image, PrimitiveIntUtil.getArrayInstance(), animationBehavior);
        this.startWidth = 0;
        this.currentWidth = 0;
        this.anchor = Anchor.TOP_LEFT;
        //For kotlin this is before the body of the constructor.
        this.setFrame(this.getSize() - 1);
    }
    nextFrame() {
        super.previousFrame();
        this.update();
    }
    previousFrame() {
        super.nextFrame();
        this.update();
    }
    setFrame(index) {
        super.setFrame(index);
        this.update();
    }
    update() {
        this.startWidth = this.getDrawWidth() * this.getFrame() / this.getSize();
        this.currentWidth = this.getDrawWidth() - this.startWidth;
    }
    paintXY(graphics, x, y) {
        graphics.drawRegion(this.getImage(), this.startWidth, this.getStartY(), this.currentWidth, this.getDrawHeight(), Sprite.TRANS_NONE, x + this.startWidth, y, this.anchor);
    }
}
