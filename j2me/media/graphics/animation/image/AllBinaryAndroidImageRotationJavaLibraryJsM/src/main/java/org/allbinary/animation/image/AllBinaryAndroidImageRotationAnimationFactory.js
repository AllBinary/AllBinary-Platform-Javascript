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
//not plain js import { Image } 
const Image = globalThis.javax.microedition.lcdui.Image;
//not GWT import const AnimationBehaviorFactory = globalThis.org.allbinary.animation.AnimationBehaviorFactory;
import { GameConfigurationCentral } from '../../../../org/allbinary/game/configuration/GameConfigurationCentral.js';
//not GWT import const GameConfigurationCentral = globalThis.org.allbinary.game.configuration.GameConfigurationCentral;
import { Features } from '../../../../org/allbinary/game/configuration/feature/Features.js';
//not GWT import const Features = globalThis.org.allbinary.game.configuration.feature.Features;
import { OpenGLFeatureFactory } from '../../../../org/allbinary/graphics/opengles/OpenGLFeatureFactory.js';
//not GWT import const OpenGLFeatureFactory = globalThis.org.allbinary.graphics.opengles.OpenGLFeatureFactory;
//not plain js import { PrimitiveIntUtil } 
const PrimitiveIntUtil = globalThis.org.allbinary.logic.math.PrimitiveIntUtil;
import { ImageCopyUtil } from '../../../../org/allbinary/media/image/ImageCopyUtil.js';
//not GWT import const ImageCopyUtil = globalThis.org.allbinary.media.image.ImageCopyUtil;
//not plain js import { AngleFactory } 
const AngleFactory = globalThis.org.allbinary.math.AngleFactory;
//not plain js import { AngleInfo } 
const AngleInfo = globalThis.org.allbinary.math.AngleInfo;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { BaseImageAnimationFactory } from './BaseImageAnimationFactory.js';
//not GWT import - same folder const BaseImageAnimationFactory = globalThis.org.allbinary.animation.image.BaseImageAnimationFactory;
import { AllBinaryFlickerAndroidImageRotationAnimation } from './AllBinaryFlickerAndroidImageRotationAnimation.js';
//not GWT import - same folder const AllBinaryFlickerAndroidImageRotationAnimation = globalThis.org.allbinary.animation.image.AllBinaryFlickerAndroidImageRotationAnimation;
import { AllBinaryAdjustedAndroidImageRotationAnimation } from './AllBinaryAdjustedAndroidImageRotationAnimation.js';
//not GWT import - same folder const AllBinaryAdjustedAndroidImageRotationAnimation = globalThis.org.allbinary.animation.image.AllBinaryAdjustedAndroidImageRotationAnimation;
export class AllBinaryAndroidImageRotationAnimationFactory extends BaseImageAnimationFactory {
    //@Throws(Exception.constructor)
    static createFactory(image, width, height, animationBehaviorFactory) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new AllBinaryAndroidImageRotationAnimationFactory(image, width, height, (AngleFactory.getInstance().TOTAL_ANGLE / GameConfigurationCentral.getInstance().getGameControlFidelity()), animationBehaviorFactory, false);
    }
    //@Throws(Exception.constructor)
    static createFactoryA(image, width, height, angleIncrement, animationBehaviorFactory) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new AllBinaryAndroidImageRotationAnimationFactory(image, width, height, angleIncrement, animationBehaviorFactory, false);
    }
    //@Throws(Exception.constructor)
    static createFactoryU(image, animationBehaviorFactory) {
        var androidImageRotationAnimationFactory = new AllBinaryAndroidImageRotationAnimationFactory(image, image.getWidth(), image.getHeight(), (AngleFactory.getInstance().TOTAL_ANGLE / GameConfigurationCentral.getInstance().getGameControlFidelity()), animationBehaviorFactory, false);
        ;
        androidImageRotationAnimationFactory.init(-(image.getWidth() >> 2), -(image.getHeight() >> 2));
        //if statement needs to be on the same line and ternary does not work the same way.
        return androidImageRotationAnimationFactory;
    }
    //@Throws(Exception.constructor)
    static createFactoryDXYU(image, dx, dy, animationBehaviorFactory) {
        var androidImageRotationAnimationFactory = new AllBinaryAndroidImageRotationAnimationFactory(image, image.getWidth(), image.getHeight(), (AngleFactory.getInstance().TOTAL_ANGLE / GameConfigurationCentral.getInstance().getGameControlFidelity()), animationBehaviorFactory, false);
        ;
        androidImageRotationAnimationFactory.init(dx, dy);
        //if statement needs to be on the same line and ternary does not work the same way.
        return androidImageRotationAnimationFactory;
    }
    //@Throws(Exception.constructor)
    static createFactoryADXY(image, width, height, dx, dy, angleIncrement, animationBehaviorFactory, resizeCanvasForRotation) {
        var androidImageRotationAnimationFactory = new AllBinaryAndroidImageRotationAnimationFactory(image, width, height, angleIncrement, animationBehaviorFactory, resizeCanvasForRotation);
        ;
        androidImageRotationAnimationFactory.init(dx, dy);
        //if statement needs to be on the same line and ternary does not work the same way.
        return androidImageRotationAnimationFactory;
    }
    init(dx, dy) {
        this.animationFactoryInitializationVisitor.dx = dx;
        this.animationFactoryInitializationVisitor.dy = dy;
        this.animationFactoryInitializationVisitor.originalDx = dx;
        this.animationFactoryInitializationVisitor.originalDy = dy;
    }
    constructor(image, width, height, angleIncrement, animationBehaviorFactory, resizeCanvasForRotation) {
        super(image, PrimitiveIntUtil.getArrayInstance(), width, height, 0, 0, animationBehaviorFactory);
        //For kotlin this is before the body of the constructor.
        this.angleIncrement = angleIncrement;
        this.resizeCanvasForRotation = resizeCanvasForRotation;
    }
    //@Throws(Exception.constructor)
    getCanvasImage() {
        var features = Features.getInstance();
        ;
        if (this.resizeCanvasForRotation && !features.isDefault(OpenGLFeatureFactory.getInstance().OPENGL)) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return ImageCopyUtil.getInstance().createImageScale(this.getImage(), 1.44, false);
            ;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return this.getImage();
            ;
        }
    }
    //@Throws(Exception.constructor)
    getInstance(instanceId) {
        var canvasImage = this.getCanvasImage();
        ;
        var scaledImage = this.animationFactoryImageScaleUtil.createImage(canvasImage, this.animationFactoryInitializationVisitor.width, this.animationFactoryInitializationVisitor.height, this.scaleProperties.scaleWidth, this.scaleProperties.scaleHeight);
        ;
        var copyOfScaledImage = ImageCopyUtil.getInstance().createImage(scaledImage);
        ;
        if (this.animationFactoryInitializationVisitor.dx != 0 || this.animationFactoryInitializationVisitor.dy != 0) {
            this.animationFactoryImageScaleUtil.processAdjust(this);
            //if statement needs to be on the same line and ternary does not work the same way.
            return new AllBinaryAdjustedAndroidImageRotationAnimation(scaledImage, copyOfScaledImage, AngleInfo.getInstance(this.angleIncrement), AngleFactory.getInstance().TOTAL_ANGLE, this.animationFactoryInitializationVisitor.dx, this.animationFactoryInitializationVisitor.dy, animationBehaviorFactory.getOrCreateInstance());
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return new AllBinaryFlickerAndroidImageRotationAnimation(scaledImage, copyOfScaledImage, AngleInfo.getInstance(this.angleIncrement), AngleFactory.getInstance().TOTAL_ANGLE, this.animationBehaviorFactory.getOrCreateInstance());
        }
    }
}
