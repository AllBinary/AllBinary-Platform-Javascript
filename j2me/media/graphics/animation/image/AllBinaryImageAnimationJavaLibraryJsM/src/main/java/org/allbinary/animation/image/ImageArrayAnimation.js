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
import { NullImage } from '../../../../javax/microedition/lcdui/NullImage.js';
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
export class ImageArrayAnimation extends IndexedAnimation {
    constructor(imageArray, animationBehavior) {
        super(animationBehavior);
        this.imageArray = NullImage.NULL_IMAGE_ARRAY;
        this.totalFrames = 0;
        this.circularIndexUtil = CircularIndexUtil.NULL_CIRCULAR_INDEX_UTIL;
        this.anchor = Anchor.TOP_LEFT;
        //For kotlin this is before the body of the constructor.
        this.setImageArray(imageArray);
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
    getImage(index) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.imageArray[index];
    }
    getImageArray() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.imageArray;
    }
    setImageArray(imageArray) {
        this.imageArray = imageArray;
        this.totalFrames = imageArray.length;
        this.circularIndexUtil = CircularIndexUtil.createInstance(this.totalFrames);
    }
    paintXY(graphics, x, y) {
        graphics.drawImage(this.imageArray[this.circularIndexUtil.getIndex()], x, y, this.anchor);
    }
}
