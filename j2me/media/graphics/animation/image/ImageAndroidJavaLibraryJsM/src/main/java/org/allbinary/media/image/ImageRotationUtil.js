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
//not plain js import { Image } 
const Image = globalThis.javax.microedition.lcdui.Image;
import { Anchor } from '../../../../org/allbinary/graphics/Anchor.js';
//not GWT import const Canvas = globalThis.android.graphics.Canvas;
import { Matrix } from '../../../../android/graphics/Matrix.js';
//not GWT import const AndroidImageInterface = globalThis.org.microemu.android.device.AndroidImageInterface;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { ImageCreationUtil } from './ImageCreationUtil.js';
//not GWT import - same folder const ImageCreationUtil = globalThis.org.allbinary.media.image.ImageCreationUtil;
export class ImageRotationUtil extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return ImageRotationUtil.instance;
    }
    constructor() {
        super();
        this.matrix = new Matrix();
        this.anchor = Anchor.TOP_LEFT;
    }
    //@Throws(Exception.constructor)
    createRotatedImage(originalImage, rotationInDegrees) {
        var image = ImageCreationUtil.getInstance().createImageWH(originalImage.getWidth(), originalImage.getHeight());
        ;
        if (image.isMutable()) {
            var bitmap = image.getBitmap();
            ;
            var width = bitmap.getWidth();
            ;
            var height = bitmap.getHeight();
            ;
            this.matrix.setRotate(rotationInDegrees, (width >> 1), (height >> 1));
            var canvas = image.getCanvas();
            ;
            canvas.concat(this.matrix);
            image.getGraphics().drawImage(originalImage, 0, 0, this.anchor);
            //if statement needs to be on the same line and ternary does not work the same way.
            return image;
        }
        else {
            throw new Exception("Not Mutable");
        }
    }
}
ImageRotationUtil.instance = new ImageRotationUtil();
