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
//not plain js import { PreLogUtil } 
const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;
//not GWT import const J2SEMutableImage
//Current folder imports from return types, extended types, and scope (deduplicated)
import { ImageJ2SERotationUtil } from './ImageJ2SERotationUtil.js';
//sameFolderImports - not GWT import - same folder const ImageJ2SERotationUtil
import { ImageCreationUtil } from './ImageCreationUtil.js';
//sameFolderImports - not GWT import - same folder const ImageCreationUtil
export class ImageRotationUtil extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return ImageRotationUtil.instance;
    }
    constructor() {
        super();
        this.imageJ2SERotationUtil = ImageJ2SERotationUtil.getInstance();
    }
    rotateImage(originalImage, image, totalAngle) {
        if (image.isMutable()) {
            let j2seImage = image;
            ;
            let newBufferedImage = j2seImage.getImage();
            ;
            let originalAwtImage = null;
            ;
            if (originalImage.isMutable()) {
                let originalJ2SEImage = originalImage;
                ;
                originalAwtImage = originalJ2SEImage.getImage();
            }
            else {
                let originalJ2SEImage = originalImage;
                ;
                originalAwtImage = originalJ2SEImage.getImage();
            }
            this.imageJ2SERotationUtil.rotateImage(originalAwtImage, newBufferedImage, totalAngle);
        }
        else {
            PreLogUtil.putOE("Not Mutable", this, "getRotatedImage", new Exception());
        }
    }
    //@Throws(Exception.constructor)
    createRotatedImage(originalImage, rotationInDegrees) {
        let image = ImageCreationUtil.getInstance().createImageWH(originalImage.getWidth(), originalImage.getHeight());
        ;
        if (image.isMutable()) {
            let originalAwtImage = null;
            ;
            if (originalImage.isMutable()) {
                let originalJ2SEImage = originalImage;
                ;
                originalAwtImage = originalJ2SEImage.getImage();
            }
            else {
                let originalJ2SEImage = originalImage;
                ;
                originalAwtImage = originalJ2SEImage.getImage();
            }
            let j2seImage = image;
            ;
            let newBufferedImage = j2seImage.getImage();
            ;
            let bufferedImage = this.imageJ2SERotationUtil.createRotatedImage(originalAwtImage, newBufferedImage, rotationInDegrees);
            ;
            //if statement needs to be on the same line and ternary does not work the same way.
            return image;
        }
        else {
            throw new Exception("Not Mutable");
        }
    }
}
ImageRotationUtil.instance = new ImageRotationUtil();
