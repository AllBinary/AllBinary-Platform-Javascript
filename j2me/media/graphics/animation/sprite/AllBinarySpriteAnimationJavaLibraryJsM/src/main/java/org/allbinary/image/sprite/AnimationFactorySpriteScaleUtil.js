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
/* Generated Code Do Not Modify */
import { Object } from '../../../../java/lang/Object.js';
//not plain js import { Image } from '../../../../javax/microedition/lcdui/Image.js';
const Image = globalThis.javax.microedition.lcdui.Image;
//not plain js import { Sprite } from '../../../../javax/microedition/lcdui/game/Sprite.js';
const Sprite = globalThis.javax.microedition.lcdui.game.Sprite;
//not plain js import { SpriteFactory } from '../../../../org/allbinary/game/layer/SpriteFactory.js';
const SpriteFactory = globalThis.org.allbinary.game.layer.SpriteFactory;
import { OpenGLUtil } from '../../../../org/allbinary/graphics/opengles/OpenGLUtil.js';
//not GWT import const ImageCache = globalThis.org.allbinary.image.ImageCache;
import { ImageCacheFactory } from '../../../../org/allbinary/image/ImageCacheFactory.js';
//not GWT import const ImageCacheFactory = globalThis.org.allbinary.image.ImageCacheFactory;
//not plain js import { OpenGLESImageExclusionUtil } from '../../../../org/allbinary/image/opengles/OpenGLESImageExclusionUtil.js';
const OpenGLESImageExclusionUtil = globalThis.org.allbinary.image.opengles.OpenGLESImageExclusionUtil;
//not plain js import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
import { J2SEMath } from '../../../../org/allbinary/logic/math/J2SEMath.js';
//not GWT import const J2SEMath = globalThis.org.allbinary.logic.math.J2SEMath;
//not plain js import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { ImageScaleUtil } from '../../../../org/allbinary/media/image/ImageScaleUtil.js';
const ImageScaleUtil = globalThis.org.allbinary.media.image.ImageScaleUtil;
//not plain js import { CommonLabels } from '../../../../org/allbinary/string/CommonLabels.js';
const CommonLabels = globalThis.org.allbinary.string.CommonLabels;
//not plain js import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class AnimationFactorySpriteScaleUtil extends Object {
    constructor() {
        super(...arguments);
        this.imageCache = ImageCacheFactory.getInstance();
        this.imageScaleUtil = ImageScaleUtil.getInstance();
        this.openGLUtil = OpenGLUtil.getInstance();
        this.j2seMath = J2SEMath.getInstance();
        this.openGLESImageExclusionUtil = OpenGLESImageExclusionUtil.getInstance();
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return AnimationFactorySpriteScaleUtil.instance;
    }
    //@Throws(Exception.constructor)
    createImage(image, width, height, scaleWidth, scaleHeight) {
        var spriteFactory = SpriteFactory.getInstance();
        ;
        var sprite;
        ;
        var scaledImage;
        ;
        if (scaleWidth != 0 && scaleHeight != 0) {
            var scaleX = (scaleWidth) / (width);
            ;
            var scaleY = (scaleHeight) / (height);
            ;
            if ((scaleX == 1.0 && scaleY == 1.0) || (scaleX == 0.0 || scaleY == 0.0)) {
                scaledImage = this.openGLUtil.addImage(image);
                sprite = spriteFactory.createSprite(scaledImage, width, height);
            }
            else {
                if (this.openGLESImageExclusionUtil.isCustomScaling(image)) {
                    var width2 = this.j2seMath.round((scaleWidth) - 0.5);
                    ;
                    var height2 = this.j2seMath.round((scaleHeight) - 0.5);
                    ;
                    var multiplesOf16Width = width2 / 16;
                    ;
                    var by16Width = multiplesOf16Width * 16;
                    ;
                    scaleX = (by16Width) / width;
                    var multiplesOf16Height = height2 / 16;
                    ;
                    var by16Height = multiplesOf16Height * 16;
                    ;
                    scaleY = (by16Height) / height;
                    if (scaleWidth < width) {
                        scaleX = scaleX * 2.35;
                    }
                    if (scaleHeight < height) {
                        scaleY = scaleY * 2.35;
                    }
                }
                scaledImage = this.imageScaleUtil.createImage2(this.imageCache, image, scaleX, 1.0, scaleY, 1.0, true);
                sprite = spriteFactory.createSprite(scaledImage, Math.round((width * scaleX)), Math.round((height * scaleY)));
            }
        }
        else {
            scaledImage = this.openGLUtil.addImage(image);
            sprite = spriteFactory.createSprite(scaledImage, width, height);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return sprite;
    }
}
AnimationFactorySpriteScaleUtil.instance = new AnimationFactorySpriteScaleUtil();
