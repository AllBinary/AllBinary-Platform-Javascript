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
import { Exception } from '../../../../java/lang/Exception.js';
//not GWT import const Image
import { Features } from '../../../../org/allbinary/game/configuration/feature/Features.js';
//not GWT import const Features
import { GameFeatureFactory } from '../../../../org/allbinary/game/configuration/feature/GameFeatureFactory.js';
//not GWT import const GameFeatureFactory
import { Anchor } from '../../../../org/allbinary/graphics/Anchor.js';
//not GWT import const Anchor
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { ImageCreationUtil } from './ImageCreationUtil.js';
//sameFolderImports - not GWT import - same folder const ImageCreationUtil
export class ImageCopyUtil extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return ImageCopyUtil.instance;
    }
    constructor() {
        super();
        this.logUtil = LogUtil.getInstance();
        this.commonStrings = CommonStrings.getInstance();
        this.imageCreationUtil = ImageCreationUtil.getInstance();
        this.anchor = Anchor.TOP_LEFT;
        this.gameFeatureFactory = GameFeatureFactory.getInstance();
        this.features = Features.getInstance();
        this.NO_COPY = "J2ME does not need to copy images after initial loading";
    }
    //@Throws(Exception.constructor)
    createImageForRotation(originalImage) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.createImage(originalImage);
        ;
    }
    //@Throws(Exception.constructor)
    createImage(originalImage) {
        if (!this.features.isFeature(this.gameFeatureFactory.POST_IMAGE_LOADING_MODIFICATION)) {
            this.logUtil.put(this.NO_COPY, this, this.commonStrings.CONSTRUCTOR, new Exception());
            //if statement needs to be on the same line and ternary does not work the same way.
            return originalImage;
        }
        let image = this.imageCreationUtil.createImageWH(originalImage.getWidth(), originalImage.getHeight());
        ;
        if (image.isMutable()) {
            image.getGraphics().drawImage(originalImage, 0, 0, this.anchor);
            //if statement needs to be on the same line and ternary does not work the same way.
            return image;
        }
        else {
            throw new Exception("Not Mutable");
        }
    }
    //@Throws(Exception.constructor)
    createImageScale(originalImage, canvasScale, resize) {
        if (!this.features.isFeature(this.gameFeatureFactory.POST_IMAGE_LOADING_MODIFICATION)) {
            this.logUtil.put(this.NO_COPY, this, this.commonStrings.CONSTRUCTOR, new Exception());
            //if statement needs to be on the same line and ternary does not work the same way.
            return originalImage;
        }
        let newWidth = globalThis.Math.trunc((originalImage.getWidth() * canvasScale));
        ;
        let newHeight = globalThis.Math.trunc((originalImage.getHeight() * canvasScale));
        ;
        if (resize) {
            if (newWidth < newHeight) {
                newWidth = newHeight;
            }
            if (newHeight < newWidth) {
                newHeight = newWidth;
            }
        }
        let image = this.imageCreationUtil.createImageWH(newWidth, newHeight);
        ;
        if (image.isMutable()) {
            let halfWidthDelta = (newWidth - originalImage.getWidth()) / 2;
            ;
            let halfHeightDelta = (newHeight - originalImage.getHeight()) / 2;
            ;
            let graphics = image.getGraphics();
            ;
            graphics.drawImage(originalImage, halfWidthDelta, halfHeightDelta, this.anchor);
            //if statement needs to be on the same line and ternary does not work the same way.
            return image;
        }
        else {
            throw new Exception("Not Mutable");
        }
    }
}
ImageCopyUtil.instance = new ImageCopyUtil();
