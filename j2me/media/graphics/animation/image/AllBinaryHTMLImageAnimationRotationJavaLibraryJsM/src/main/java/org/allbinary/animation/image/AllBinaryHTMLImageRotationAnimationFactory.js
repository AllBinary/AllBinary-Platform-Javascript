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
//not plain js import { Image } from '../../../../javax/microedition/lcdui/Image.js';
const Image = globalThis.javax.microedition.lcdui.Image;
//not GWT import const GameConfigurationCentral = globalThis.org.allbinary.game.configuration.GameConfigurationCentral;
//not plain js import { PrimitiveIntUtil } from '../../../../org/allbinary/logic/math/PrimitiveIntUtil.js';
const PrimitiveIntUtil = globalThis.org.allbinary.logic.math.PrimitiveIntUtil;
//not plain js import { ImageCopyUtil } from '../../../../org/allbinary/media/image/ImageCopyUtil.js';
const ImageCopyUtil = globalThis.org.allbinary.media.image.ImageCopyUtil;
//not plain js import { AngleFactory } from '../../../../org/allbinary/math/AngleFactory.js';
const AngleFactory = globalThis.org.allbinary.math.AngleFactory;
//not plain js import { AngleInfo } from '../../../../org/allbinary/math/AngleInfo.js';
const AngleInfo = globalThis.org.allbinary.math.AngleInfo;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { BaseImageAnimationFactory } from './BaseImageAnimationFactory.js';
//not GWT import const BaseImageAnimationFactory = globalThis.org.allbinary.animation.image.BaseImageAnimationFactory;
import { AllBinaryHTMLImageRotationAnimation } from './AllBinaryHTMLImageRotationAnimation.js';
//not GWT import const AllBinaryHTMLImageRotationAnimation = globalThis.org.allbinary.animation.image.AllBinaryHTMLImageRotationAnimation;
import { AllBinaryAdjustedHTMLImageRotationAnimation } from './AllBinaryAdjustedHTMLImageRotationAnimation.js';
//not GWT import const AllBinaryAdjustedHTMLImageRotationAnimation = globalThis.org.allbinary.animation.image.AllBinaryAdjustedHTMLImageRotationAnimation;
export class AllBinaryHTMLImageRotationAnimationFactory extends BaseImageAnimationFactory {
    //@Throws(Exception.constructor)
    static createFactoryADXY(image, width, height, dx, dy, angleIncrement, animationBehaviorFactory) {
        var htmlImageRotationAnimationFactory = new AllBinaryHTMLImageRotationAnimationFactory(image, width, height, angleIncrement, animationBehaviorFactory);
        ;
        htmlImageRotationAnimationFactory.init(dx, dy);
        //if statement needs to be on the same line and ternary does not work the same way.
        return htmlImageRotationAnimationFactory;
    }
    constructor(image, width, height, angleIncrement, animationBehaviorFactory) {
        super(image, PrimitiveIntUtil.getArrayInstance(), width, height, 0, 0, animationBehaviorFactory);
        //For kotlin this is before the body of the constructor.
        this.angleIncrement = angleIncrement;
    }
    init(dx, dy) {
        this.animationFactoryInitializationVisitor.dx = dx;
        this.animationFactoryInitializationVisitor.dy = dy;
        this.animationFactoryInitializationVisitor.originalDx = dx;
        this.animationFactoryInitializationVisitor.originalDy = dy;
    }
    //@Throws(Exception.constructor)
    getInstance(instanceId) {
        var scaledImage = this.animationFactoryImageScaleUtil.createImage(this.getImage(), this.animationFactoryInitializationVisitor.width, this.animationFactoryInitializationVisitor.height, this.scaleProperties.scaleWidth, this.scaleProperties.scaleHeight);
        ;
        var copyOfScaledImage = ImageCopyUtil.getInstance().createImage(scaledImage);
        ;
        if (this.animationFactoryInitializationVisitor.dx != 0 || this.animationFactoryInitializationVisitor.dy != 0) {
            this.animationFactoryImageScaleUtil.processAdjust(this);
            //if statement needs to be on the same line and ternary does not work the same way.
            return new AllBinaryAdjustedHTMLImageRotationAnimation(scaledImage, copyOfScaledImage, AngleInfo.getInstance(this.getAngleIncrement()), AngleFactory.getInstance().TOTAL_ANGLE, this.animationFactoryInitializationVisitor.dx, this.animationFactoryInitializationVisitor.dy, this.animationBehaviorFactory.getOrCreateInstance());
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return new AllBinaryHTMLImageRotationAnimation(scaledImage, copyOfScaledImage, AngleInfo.getInstance(this.angleIncrement), AngleFactory.getInstance().TOTAL_ANGLE, this.animationBehaviorFactory.getOrCreateInstance());
        }
    }
    getAngleIncrement() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.angleIncrement;
    }
}
