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
import { Exception } from '../../../../../java/lang/Exception.js';
//not plain js import { Graphics } 
const Graphics = globalThis.javax.microedition.lcdui.Graphics;
//not plain js import { Image } 
const Image = globalThis.javax.microedition.lcdui.Image;
//not plain js import { Sprite } 
const Sprite = globalThis.javax.microedition.lcdui.game.Sprite;
//not GWT import const AnimationBehavior = globalThis.org.allbinary.animation.AnimationBehavior;
import { IndexedAnimation } from '../../../../../org/allbinary/animation/IndexedAnimation.js';
//not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;
import { BasicColorFactory } from '../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
//not GWT import const ColorCompositeInterface = globalThis.org.allbinary.graphics.color.ColorCompositeInterface;
//not plain js import { PrimitiveIntUtil } 
const PrimitiveIntUtil = globalThis.org.allbinary.logic.math.PrimitiveIntUtil;
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { CommonLabels } 
const CommonLabels = globalThis.org.allbinary.string.CommonLabels;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class SpriteIndexedAnimation extends IndexedAnimation {
    constructor(sprite, image, basicColorArray, animationBehavior) {
        super(animationBehavior);
        //For kotlin this is before the body of the constructor.
        this.sprite = sprite;
        this.image = image;
        this.basicColorArray = basicColorArray;
        if (this.basicColorArray.length != 0 && this.getSize() != this.basicColorArray.length) {
            throw new Exception(new StringMaker().append(CommonLabels.getInstance().TOTAL_LABEL).appendint(this.getSize()).append("!=").appendint(this.basicColorArray.length).toString());
        }
    }
    //@Throws(Exception.constructor)
    getAnimationSize() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.getSize();
        ;
    }
    setBasicColorP(basicColor) {
        for (var index = 0; index < this.basicColorArray.length; index++) {
            if (basicColor == this.basicColorArray[index]) {
                this.setFrame(index);
                break;
            }
        }
    }
    getBasicColorP() {
        if (this.basicColorArray.length < this.getFrame()) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return this.basicColorArray[this.getFrame()];
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return BasicColorFactory.getInstance().WHITE;
        }
    }
    paintFrame(graphics, frame, x, y) {
        this.setFrame(frame);
        this.sprite.setPosition(x, y);
        this.sprite.paint(graphics);
    }
    paintXY(graphics, x, y) {
        this.sprite.setPosition(x, y);
        this.sprite.paint(graphics);
    }
    paint(graphics) {
        this.sprite.paint(graphics);
    }
    nextFrame() {
        this.sprite.nextFrame();
    }
    previousFrame() {
        this.sprite.prevFrame();
    }
    getSize() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.sprite.getRawFrameCount();
        ;
    }
    setFrame(frame) {
        this.sprite.setFrame(frame);
    }
    getFrame() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.sprite.getFrame();
        ;
    }
    isLastFrame() {
        if (this.sprite.getFrame() == this.getSize() - 1) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
    }
    getLastFrame() {
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
    close() {
    }
    //@Throws(Throwable.constructor)
    finalize() {
    }
}
