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
import { Exception } from '../../../../java/lang/Exception.js';
//not GWT import const GL10
import { Image } from '../../../../javax/microedition/lcdui/Image.js';
//not GWT import const Image
import { NullImage } from '../../../../javax/microedition/lcdui/NullImage.js';
//not GWT import const PlatformBitmapBase
import { PlatformBitmapBaseFactory } from '../../../../org/allbinary/platform/graphics/PlatformBitmapBaseFactory.js';
//not GWT import const PlatformBitmapBaseFactory
import { PlatformTextureBaseFactory } from '../../../../org/allbinary/platform/opengles/PlatformTextureBaseFactory.js';
//not GWT import const PlatformTextureBaseFactory
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//not GWT import - same folder const OpenGLSurfaceChangedInterface
import { OpenGLESImageProperties } from './OpenGLESImageProperties.js';
//not GWT import - same folder const OpenGLESImageProperties
import { OpenGLESImageProcessor } from './OpenGLESImageProcessor.js';
//not GWT import - same folder const OpenGLESImageProcessor
import { OpenGLESImageTranslate } from './OpenGLESImageTranslate.js';
//not GWT import - same folder const OpenGLESImageTranslate
//OpenGLESNullImageJavaLibrary
export class OpenGLESImage extends Image {
    constructor(image, bitmapFactory, textureFactory) {
        super();
        this.commonStrings = CommonStrings.getInstance();
        this.openGLESImageProperties = new OpenGLESImageProperties();
        this.imageProcessor = OpenGLESImageProcessor.getInstance();
        this.openGLESImageTranslate = OpenGLESImageTranslate.getInstance();
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
