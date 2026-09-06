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
//not plain js import { Image } 
const Image = globalThis.javax.microedition.lcdui.Image;
//not GWT import const PlatformTextureBaseFactory = globalThis.org.allbinary.platform.opengles.PlatformTextureBaseFactory;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { OpenGLImageFactory } from './OpenGLImageFactory.js';
//not GWT import - same folder const OpenGLImageFactory = globalThis.org.allbinary.image.opengles.OpenGLImageFactory;
import { OpenGLESGL10Image } from './OpenGLESGL10Image.js';
//not GWT import - same folder const OpenGLESGL10Image = globalThis.org.allbinary.image.opengles.OpenGLESGL10Image;
export class OpenGLESGL11VBOImageFactory extends OpenGLImageFactory {
    getInstance(image, bitmapFactory, textureFactory) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new OpenGLESGL10Image(image, bitmapFactory, textureFactory);
    }
}
