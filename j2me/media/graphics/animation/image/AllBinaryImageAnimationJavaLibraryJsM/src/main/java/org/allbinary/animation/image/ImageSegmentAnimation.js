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
//not GWT import const AnimationBehavior = globalThis.org.allbinary.animation.AnimationBehavior;
//not plain js import { CircularIndexUtil } 
const CircularIndexUtil = globalThis.org.allbinary.util.CircularIndexUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { ImageAnimation } from './ImageAnimation.js';
//not GWT import - same folder const ImageAnimation = globalThis.org.allbinary.animation.image.ImageAnimation;
export class ImageSegmentAnimation extends ImageAnimation {
    constructor(image, sequenceArray, animationBehavior) {
        super(image, animationBehavior);
        //For kotlin this is before the body of the constructor.
        this.startX = 0;
        this.startY = 0;
        this.drawWidth = this.getImage().getWidth();
        this.drawHeight = this.getImage().getHeight();
        this.circularIndexUtil = CircularIndexUtil.createInstance(this.drawHeight);
        this.sequenceArray = sequenceArray;
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
        return this.circularIndexUtil.getSize();
        ;
    }
    setSequence(sequenceArray) {
        this.sequenceArray = sequenceArray;
    }
    getSequence() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.sequenceArray;
    }
    paintXY(graphics, x, y) {
    }
    getStartX() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.startX;
    }
    setStartX(startX) {
        this.startX = startX;
    }
    getStartY() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.startY;
    }
    setStartY(startY) {
        this.startY = startY;
    }
    getDrawWidth() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.drawWidth;
    }
    setDrawWidth(drawWidth) {
        this.drawWidth = drawWidth;
    }
    getDrawHeight() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.drawHeight;
    }
    setDrawHeight(drawHeight) {
        this.drawHeight = drawHeight;
    }
}
