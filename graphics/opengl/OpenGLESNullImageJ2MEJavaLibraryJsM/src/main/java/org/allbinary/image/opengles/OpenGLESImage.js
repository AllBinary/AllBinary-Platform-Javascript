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
import { NullImage } from '../../../../javax/microedition/lcdui/NullImage.js';
import { PlatformBitmapBaseFactory } from '../../../../org/allbinary/platform/graphics/PlatformBitmapBaseFactory.js';
import { PlatformTextureBaseFactory } from '../../../../org/allbinary/platform/opengles/PlatformTextureBaseFactory.js';
import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
import { BasicArrayListD } from '../../../../org/allbinary/util/BasicArrayListD.js';
import { OpenGLESImageProperties } from './OpenGLESImageProperties.js';
//OpenGLESNullImageJ2MEJavaLibrary
export class OpenGLESImage extends Object {
    constructor(image, bitmapFactory, textureFactory) {
        super();
        this.commonStrings = CommonStrings.getInstance();
        this.openGLESImageProperties = new OpenGLESImageProperties();
        this.openGLBitmap = bitmapFactory.createBitmap(image);
        this.textureFactory = textureFactory;
    }
    //@Throws(Exception.constructor)
    set(gl) {
        throw new Exception(this.commonStrings.NOT_IMPLEMENTED);
    }
    initTexture(gl) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    drawRegion(gl, viewHeight, x_src, y_src, width, height, x, y, z) {
    }
    draw(gl, x, y, z) {
    }
    getType() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return OpenGLESImage.TYPE;
    }
}
OpenGLESImage.NULL_OPENGL_IMAGE = new OpenGLESImage(NullImage.NULL_IMAGE, PlatformBitmapBaseFactory.NULL_PLATFORM_BITMAP_BASE_FACTORY, PlatformTextureBaseFactory.NULL_PLATFORM_TEXTURE_BASE_FACTORY);
OpenGLESImage.texture2dList = new BasicArrayListD();
OpenGLESImage.TYPE = 4;
