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
//not GWT import const GL10 = globalThis.javax.microedition.khronos.opengles.GL10;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { OpenGLESImageTranslate } from './OpenGLESImageTranslate.js';
//not GWT import - same folder const OpenGLESImageTranslate = globalThis.org.allbinary.image.opengles.OpenGLESImageTranslate;
//not plain js - same folder import { OpenGLESImage } 
const OpenGLESImage = globalThis.org.allbinary.image.opengles.OpenGLESImage;
export class OpenGLESDeviceImageTranslate extends OpenGLESImageTranslate {
    constructor() {
        super(...arguments);
        this.translateX = 0;
        this.translateY = 0;
        this.translateX2 = 0;
        this.translateY2 = 0;
    }
    translate(gl, openGLESImage, x, y) {
        openGLESImage.imageProcessor.translate(gl, this.translateX + (openGLESImage.openGLESImageProperties.scaleX * x), this.translateY + (openGLESImage.openGLESImageProperties.scaleY * y));
    }
    translate2(gl, openGLESImage) {
        openGLESImage.imageProcessor.translate(gl, this.translateX2, this.translateY2);
    }
}
