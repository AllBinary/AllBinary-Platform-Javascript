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
/* Generated Code Do Not Modify */
import { Object } from '../../../../java/lang/Object.js';
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;
//not plain js import { Image } from '../../../../javax/microedition/lcdui/Image.js';
const Image = globalThis.javax.microedition.lcdui.Image;
//not GWT import const AnimationInterfaceFactoryInterface = globalThis.org.allbinary.animation.AnimationInterfaceFactoryInterface;
import { NullAnimationFactory } from '../../../../org/allbinary/animation/NullAnimationFactory.js';
//not GWT import const NullAnimationFactory = globalThis.org.allbinary.animation.NullAnimationFactory;
import { AnimationFactoryImageScaleUtil } from '../../../../org/allbinary/image/AnimationFactoryImageScaleUtil.js';
//not GWT import const AnimationFactoryImageScaleUtil = globalThis.org.allbinary.image.AnimationFactoryImageScaleUtil;
//not plain js import { ForcedLogUtil } from '../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js';
const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;
//not plain js import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
import { ScaleProperties } from '../../../../org/allbinary/media/ScaleProperties.js';
//not GWT import const ScaleProperties = globalThis.org.allbinary.media.ScaleProperties;
//not plain js import { CommonLabels } from '../../../../org/allbinary/string/CommonLabels.js';
const CommonLabels = globalThis.org.allbinary.string.CommonLabels;
//not plain js import { CommonSeps } from '../../../../org/allbinary/string/CommonSeps.js';
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
//not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { AnimationFactoryInitializationVisitor } from './AnimationFactoryInitializationVisitor.js';
//not GWT import const AnimationFactoryInitializationVisitor = globalThis.org.allbinary.animation.image.AnimationFactoryInitializationVisitor;
export class BaseImageAnimationFactory extends Object {
    //@Throws(Exception.constructor)
    static createFactoryBase(image, sequenceArray, width, height, animationBehaviorFactory) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new BaseImageAnimationFactory(image, sequenceArray, width, height, 0, 0, animationBehaviorFactory);
    }
    constructor(image, sequenceArray, width, height, dx, dy, animationBehaviorFactory) {
        super();
        this.animationFactoryImageScaleUtil = AnimationFactoryImageScaleUtil.getInstance();
        this.scaleProperties = ScaleProperties.instance;
        this.animationFactoryInitializationVisitor = new AnimationFactoryInitializationVisitor();
        this.image = image;
        this.animationFactoryInitializationVisitor.width = width;
        this.animationFactoryInitializationVisitor.height = height;
        this.animationBehaviorFactory = animationBehaviorFactory;
        this.sequenceArray = sequenceArray;
        this.animationFactoryInitializationVisitor.dx = dx;
        this.animationFactoryInitializationVisitor.dy = dy;
    }
    //@Throws(Exception.constructor)
    getInstance(instanceId) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return NullAnimationFactory.getFactoryInstance().getInstance(instanceId);
        ;
    }
    getImage() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.image;
    }
    getSequenceArray() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.sequenceArray;
    }
    setInitialScale(scaleProperties) {
        this.scaleProperties = scaleProperties;
        if (this.scaleProperties.shouldScale) {
            this.scaleProperties.scaleWidth = Math.round((this.animationFactoryInitializationVisitor.width * this.scaleProperties.scaleX));
            this.scaleProperties.scaleHeight = Math.round((this.animationFactoryInitializationVisitor.height * this.scaleProperties.scaleY));
        }
        else {
        }
    }
    getAnimationFactoryInitializationVisitorP() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.animationFactoryInitializationVisitor;
    }
    getScalePropertiesP() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.scaleProperties;
    }
    toString() {
        var commonSeps = CommonSeps.getInstance();
        ;
        var commonLabels = CommonLabels.getInstance();
        ;
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append(super.toString());
        stringBuffer.append(commonLabels.HEIGHT_LABEL);
        stringBuffer.appendint(this.image.getHeight());
        stringBuffer.append(commonSeps.SPACE);
        stringBuffer.append(this.animationFactoryInitializationVisitor.toString());
        //if statement needs to be on the same line and ternary does not work the same way.
        return stringBuffer.toString();
        ;
    }
}
