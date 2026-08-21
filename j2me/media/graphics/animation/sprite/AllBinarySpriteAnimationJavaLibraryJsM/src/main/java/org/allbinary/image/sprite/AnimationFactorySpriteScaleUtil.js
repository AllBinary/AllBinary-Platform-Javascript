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
import { SpriteFactory } from '../../../../org/allbinary/game/layer/SpriteFactory.js';
import { OpenGLUtil } from '../../../../org/allbinary/graphics/opengles/OpenGLUtil.js';
import { ImageCacheFactory } from '../../../../org/allbinary/image/ImageCacheFactory.js';
import { OpenGLESImageExclusionUtil } from '../../../../org/allbinary/image/opengles/OpenGLESImageExclusionUtil.js';
import { J2SEMath } from '../../../../org/allbinary/logic/math/J2SEMath.js';
import { ImageScaleUtil } from '../../../../org/allbinary/media/image/ImageScaleUtil.js';
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
