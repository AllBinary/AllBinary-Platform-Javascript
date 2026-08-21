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
import { DisposalUtil } from '../../../../org/allbinary/DisposalUtil.js';
import { RotationAnimation } from '../../../../org/allbinary/animation/RotationAnimation.js';
import { Anchor } from '../../../../org/allbinary/graphics/Anchor.js';
import { PrimitiveIntUtil } from '../../../../org/allbinary/logic/math/PrimitiveIntUtil.js';
import { CircularIndexUtil } from '../../../../org/allbinary/util/CircularIndexUtil.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
export class ImageBaseRotationAnimation extends RotationAnimation {
    constructor(image, angleInfo, totalAngle, animationBehavior) {
        super(angleInfo, CircularIndexUtil.createInstance(totalAngle / angleInfo.getAngleIncrementInfo().getAngleIncrement()), animationBehavior);
        this.anchor = Anchor.TOP_LEFT;
        //For kotlin this is before the body of the constructor.
        this.image = image;
    }
    //@Throws(Exception.constructor)
    getAnimationSize() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.getSize();
        ;
    }
    setSequence(sequence) {
    }
    getSequence() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return PrimitiveIntUtil.getArrayInstance();
        ;
    }
    paintXY(graphics, x, y) {
        graphics.drawImage(this.image, x, y, this.anchor);
    }
    getImage() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.image;
    }
    getWidth() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.image.getWidth();
        ;
    }
    getHeight() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.image.getHeight();
        ;
    }
    close() {
        DisposalUtil.getInstance().disposeImage(this.image);
    }
    //@Throws(Throwable.constructor)
    finalize() {
        DisposalUtil.getInstance().disposeImage(this.image);
    }
}
