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
//not GWT import const GL10 = globalThis.javax.microedition.khronos.opengles.GL10;
//not plain js import { Image } from '../../../../javax/microedition/lcdui/Image.js';
const Image = globalThis.javax.microedition.lcdui.Image;
import { NullImage } from '../../../../javax/microedition/lcdui/NullImage.js';
//not GWT import const PlatformBitmapBase = globalThis.org.allbinary.platform.graphics.PlatformBitmapBase;
import { PlatformBitmapBaseFactory } from '../../../../org/allbinary/platform/graphics/PlatformBitmapBaseFactory.js';
//not GWT import const PlatformBitmapBaseFactory = globalThis.org.allbinary.platform.graphics.PlatformBitmapBaseFactory;
import { PlatformTextureBaseFactory } from '../../../../org/allbinary/platform/opengles/PlatformTextureBaseFactory.js';
//not GWT import const PlatformTextureBaseFactory = globalThis.org.allbinary.platform.opengles.PlatformTextureBaseFactory;
//not plain js import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not plain js import { BasicArrayList } from '../../../../org/allbinary/util/BasicArrayList.js';
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } from '../../../../org/allbinary/util/BasicArrayListD.js';
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//not GWT import const OpenGLSurfaceChangedInterface = globalThis.org.allbinary.image.opengles.OpenGLSurfaceChangedInterface;
//not plain js import { OpenGLESImageProperties } from './OpenGLESImageProperties.js';
const OpenGLESImageProperties = globalThis.org.allbinary.image.opengles.OpenGLESImageProperties;
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
