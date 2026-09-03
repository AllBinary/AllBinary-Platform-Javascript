/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2025 AllBinary
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
//not GWT import const GL10 = globalThis.javax.microedition.khronos.opengles.GL10;
//Current folder imports from return types, extended types, and scope (deduplicated)
//not plain js import { OpenGLESImage } from './OpenGLESImage.js';
const OpenGLESImage = globalThis.org.allbinary.image.opengles.OpenGLESImage;
export class OpenGLESImageTranslate extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return OpenGLESImageTranslate.instance;
    }
    translate(gl, openGLESImage, x, y) {
    }
    translate2(gl, openGLESImage) {
    }
}
OpenGLESImageTranslate.instance = new OpenGLESImageTranslate();
