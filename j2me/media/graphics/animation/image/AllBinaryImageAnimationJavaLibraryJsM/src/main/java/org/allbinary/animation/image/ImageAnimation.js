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
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;
//not plain js import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
const Graphics = globalThis.javax.microedition.lcdui.Graphics;
//not plain js import { Image } from '../../../../javax/microedition/lcdui/Image.js';
const Image = globalThis.javax.microedition.lcdui.Image;
//not plain js import { DisposalUtil } from '../../../../org/allbinary/DisposalUtil.js';
const DisposalUtil = globalThis.org.allbinary.DisposalUtil;
//not GWT import const AnimationBehavior = globalThis.org.allbinary.animation.AnimationBehavior;
import { IndexedAnimation } from '../../../../org/allbinary/animation/IndexedAnimation.js';
//not GWT import const IndexedAnimation = globalThis.org.allbinary.animation.IndexedAnimation;
import { Anchor } from '../../../../org/allbinary/graphics/Anchor.js';
//not GWT import const Anchor = globalThis.org.allbinary.graphics.Anchor;
//not plain js import { PrimitiveIntUtil } from '../../../../org/allbinary/logic/math/PrimitiveIntUtil.js';
const PrimitiveIntUtil = globalThis.org.allbinary.logic.math.PrimitiveIntUtil;
//not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class ImageAnimation extends IndexedAnimation {
    constructor(image, animationBehavior) {
        super(animationBehavior);
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
    nextFrame() {
    }
    previousFrame() {
    }
    setFrame(index) {
    }
    getFrame() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return 0;
    }
    getSize() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return 1;
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
    close() {
        DisposalUtil.getInstance().disposeImage(this.image);
    }
    //@Throws(Throwable.constructor)
    finalize() {
        DisposalUtil.getInstance().disposeImage(this.image);
    }
}
