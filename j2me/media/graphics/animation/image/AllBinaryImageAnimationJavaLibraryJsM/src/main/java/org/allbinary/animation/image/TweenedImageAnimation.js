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
import { DisposalUtil } from '../../../../org/allbinary/DisposalUtil.js';
//not GWT import const AnimationBehavior
import { IndexedAnimation } from '../../../../org/allbinary/animation/IndexedAnimation.js';
//not GWT import const IndexedAnimation
import { Anchor } from '../../../../org/allbinary/graphics/Anchor.js';
//not GWT import const Anchor
import { PrimitiveIntUtil } from '../../../../org/allbinary/logic/math/PrimitiveIntUtil.js';
//not GWT import const PrimitiveIntUtil
//not plain js import { CircularIndexUtil } 
const CircularIndexUtil = globalThis.org.allbinary.util.CircularIndexUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class TweenedImageAnimation extends IndexedAnimation {
    constructor(image, dx, dy, totalFrames, animationBehavior) {
        super(animationBehavior);
        this.anchor = Anchor.TOP_LEFT;
        //For kotlin this is before the body of the constructor.
        this.image = image;
        this.dx = dx;
        this.dy = dy;
        this.totalFrames = totalFrames;
        this.circularIndexUtil = CircularIndexUtil.createInstance(this.totalFrames);
    }
    //@Throws(Exception.constructor)
    getAnimationSize() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.getSize();
        ;
    }
    nextFrame() {
        this.circularIndexUtil.next();
    }
    previousFrame() {
        this.circularIndexUtil.previous();
    }
    setFrame(index) {
        this.circularIndexUtil.setIndex(index);
    }
    getFrame() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.circularIndexUtil.getIndex();
        ;
    }
    getSize() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.totalFrames;
    }
    setSequence(sequence) {
    }
    getSequence() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return PrimitiveIntUtil.getArrayInstance();
        ;
    }
    paintXY(graphics, x, y) {
        var frame = this.getFrame();
        ;
        var currentX = this.dx * frame;
        ;
        var currentY = this.dy * frame;
        ;
        graphics.drawImage(this.image, x + currentX, y + currentY, this.anchor);
    }
    close() {
        DisposalUtil.getInstance().disposeImage(this.image);
    }
    //@Throws(Throwable.constructor)
    finalize() {
        DisposalUtil.getInstance().disposeImage(this.image);
    }
}
