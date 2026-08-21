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
import { Sprite } from '../../../../javax/microedition/lcdui/game/Sprite.js';
import { Anchor } from '../../../../org/allbinary/graphics/Anchor.js';
import { PrimitiveIntUtil } from '../../../../org/allbinary/logic/math/PrimitiveIntUtil.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { ImageSegmentAnimation } from './ImageSegmentAnimation.js';
export class BottomToTopImageAnimation extends ImageSegmentAnimation {
    constructor(image, animationBehavior) {
        super(image, PrimitiveIntUtil.getArrayInstance(), animationBehavior);
        this.startHeight = 0;
        this.currentHeight = 0;
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
        this.startHeight = this.getDrawHeight() * this.getFrame() / this.getSize();
        this.currentHeight = this.getDrawHeight() - this.startHeight;
    }
    paintXY(graphics, x, y) {
        graphics.drawRegion(this.getImage(), this.getStartX(), this.startHeight, this.getDrawWidth(), this.currentHeight, Sprite.TRANS_NONE, x, y + this.startHeight, this.anchor);
    }
}
