/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2022 AllBinary
        *
        *  By agreeing to this license you and any business entity you represent are
        *  legally bound to the AllBinary Open License Version 1 legal agreement.
        *
        *  You may obtain the AllBinary Open License Version 1 legal agreement from
        *  AllBinary or the root directory of AllBinary's AllBinary Platform repository.
        *
        *  Created By: Travis Berthelot
*/
//not GWT import const IndexedAnimation
import { NullRotationAnimationFactory } from '../../../../org/allbinary/animation/NullRotationAnimationFactory.js';
//not GWT import const NullRotationAnimationFactory
import { RotationAnimation } from '../../../../org/allbinary/animation/RotationAnimation.js';
//not GWT import const ImageCache
import { ImageCacheFactory } from '../../../../org/allbinary/image/ImageCacheFactory.js';
//not GWT import const ImageCacheFactory
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
import { AngleFactory } from '../../../../org/allbinary/math/AngleFactory.js';
//not GWT import const AngleFactory
import { AngleInfo } from '../../../../org/allbinary/math/AngleInfo.js';
//not GWT import const AngleInfo
//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
import { ScaleProperties } from '../../../../org/allbinary/media/ScaleProperties.js';
//not GWT import const ScaleProperties
//not plain js import { CircularIndexUtil } 
const CircularIndexUtil = globalThis.org.allbinary.util.CircularIndexUtil;
//not GWT import - same folder const BaseImageAnimationFactory
export class LazyImageRotationAnimation extends RotationAnimation {
    constructor(layoutIndex, instanceId, scaleProperties, animationInterfaceFactoryInterface, animationBehavior) {
        super(AngleInfo.getInstance(AngleFactory.getInstance().QUARTER_TOTAL_ANGLE), CircularIndexUtil.createInstance(4), animationBehavior);
        this.logUtil = LogUtil.getInstance();
        this.commonStrings = CommonStrings.getInstance();
        this.scaleProperties = ScaleProperties.instance;
        //For kotlin this is before the body of the constructor.
        this.layoutIndex = layoutIndex;
        this.instanceId = instanceId;
        this.animationInterfaceFactoryInterface = animationInterfaceFactoryInterface;
        var imageCache = ImageCacheFactory.getInstance();
        ;
        imageCache.add(this);
        this.scaleProperties = scaleProperties;
        this.NULL_INDEX_ANIMATION = NullRotationAnimationFactory.getFactoryInstance().getInstance(0);
        this.animation = new class extends RotationAnimation {
            constructor() {
                super(...arguments);
                this.index = 0;
            }
            setFrame(index) {
                this.index = index;
            }
            getFrame() {
                //if statement needs to be on the same line and ternary does not work the same way.
                return this.index;
            }
            paintXY(graphics, x, y) {
                try {
                    ImageCacheFactory.getInstance().insertFirst(LazyImageRotationAnimation.prototype);
                    animation = NULL_INDEX_ANIMATION;
                    //: 
                }
                catch (e) {
                    var logUtil = LogUtil.getInstance();
                    ;
                    logUtil.put(this.commonStrings.EXCEPTION, this, this.commonStrings.PROCESS, e);
                }
            }
            paintThreedXYZ(graphics, x, y, z) {
                try {
                    ImageCacheFactory.getInstance().insertFirst(LazyImageRotationAnimation.prototype);
                    animation = NULL_INDEX_ANIMATION;
                    //: 
                }
                catch (e) {
                    var logUtil = LogUtil.getInstance();
                    ;
                    logUtil.put(this.commonStrings.EXCEPTION, this, this.commonStrings.PROCESS, e);
                }
            }
        };
    }
    setRealAnimation() {
        try {
            var animation = this.animation;
            ;
            this.animationInterfaceFactoryInterface.setInitialScale(this.scaleProperties);
            this.animation = this.animationInterfaceFactoryInterface.getInstance(this.instanceId);
            this.animation.setState(animation);
            //: 
        }
        catch (e) {
            this.logUtil.put(commonStrings.EXCEPTION, this, SET_REAL_ANIMATION, e);
        }
    }
    setScale(scaleX, scaleY) {
        this.animation.setScale(scaleX, scaleY);
    }
    getAnimationBehavior() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.animation.getAnimationBehavior();
        ;
    }
    //@Throws(Exception.constructor)
    set(gl) {
        this.animation.set(gl);
    }
    setAlpha(alpha) {
        this.animation.setAlpha(alpha);
    }
    setDx(dx) {
        this.animation.setDx(dx);
    }
    setDy(dy) {
        this.animation.setDy(dy);
    }
    setMaxScale(maxScaleX, maxScaleY) {
        this.animation.setMaxScale(maxScaleX, maxScaleY);
    }
    nextRotation() {
        animation = this.animationanimation;
        animation.
            nextRotation();
    }
    previousRotation() {
        animation = this.animationanimation;
        animation.
            previousRotation();
    }
    nextRotationX() {
        animation = this.animationanimation;
        animation.
            nextRotationX();
    }
    previousRotationX() {
        animation = this.animationanimation;
        animation.
            previousRotationX();
    }
    nextRotationZ() {
        animation = this.animationanimation;
        animation.
            nextRotationZ();
    }
    previousRotationZ() {
        animation = this.animationanimation;
        animation.
            previousRotationZ();
    }
    changeBasicColor(basicColor) {
        this.animation.changeBasicColor(basicColor);
    }
    getBasicColorP() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.animation.getBasicColorP();
        ;
    }
    getChangeBasicColor() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.animation.getChangeBasicColor();
        ;
    }
    getChangeColor() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.animation.getChangeColor();
        ;
    }
    getColor() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.animation.getColor();
        ;
    }
    getDx() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.animation.getDx();
        ;
    }
    getDy() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.animation.getDy();
        ;
    }
    isThreed() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.animation.isThreed();
        ;
    }
    //@Throws(Exception.constructor)
    nextFrame() {
        this.animation.nextFrame();
    }
    reset() {
        this.animation.reset();
    }
    setFrame(index) {
        this.animation.setFrame(index);
    }
    getFrame() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.animation.getFrame();
        ;
    }
    //@Throws(Exception.constructor)
    getAnimationSize() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.animation.getAnimationSize();
        ;
    }
    getSize() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.animation.getSize();
        ;
    }
    previousFrame() {
        this.animation.previousFrame();
    }
    isLastFrame() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.animation.isLastFrame();
        ;
    }
    setSequence(sequence) {
        this.animation.setSequence(sequence);
    }
    getSequence() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.animation.getSequence();
        ;
    }
    getWidth() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.animation.getWidth();
        ;
    }
    paintXY(graphics, x, y) {
        try {
            this.animation.paintXY(graphics, x, y);
            //: 
        }
        catch (e) {
            this.logUtil.put(commonStrings.EXCEPTION, this, this.commonStrings.PROCESS, e);
        }
    }
    paintThreedXYZ(graphics, x, y, z) {
        try {
            this.animation.paintThreedXYZ(graphics, x, y, z);
            //: 
        }
        catch (e) {
            this.logUtil.put(commonStrings.EXCEPTION, this, this.commonStrings.PROCESS, e);
        }
    }
    toString() {
        var commonSeps = CommonSeps.getInstance();
        ;
        var image = this.animationInterfaceFactoryInterface.getImage();
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return new StringMaker().append(super.toString()).append(commonSeps.SPACE).append(image.getName()).append(commonSeps.SPACE).appendint(image.getWidth()).append(commonSeps.SPACE).appendint(image.getHeight()).toString();
        ;
    }
}
LazyImageRotationAnimation.SET_REAL_ANIMATION = "setRealAnimation";
