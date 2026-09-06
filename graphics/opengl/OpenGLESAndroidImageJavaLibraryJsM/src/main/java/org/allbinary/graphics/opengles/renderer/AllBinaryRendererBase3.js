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
import { Object } from '../../../../../java/lang/Object.js';
//not GWT import const GL10 = globalThis.javax.microedition.khronos.opengles.GL10;
//not plain js import { Image } 
const Image = globalThis.javax.microedition.lcdui.Image;
//not plain js import { OpenGLESImage } 
const OpenGLESImage = globalThis.org.allbinary.image.opengles.OpenGLESImage;
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class AllBinaryRendererBase3 extends Object {
    constructor() {
        super(...arguments);
        this.list = new BasicArrayListD();
    }
    //@Throws(Exception.constructor)
    update(gl) {
        while (this.list.size() > 0) {
            var openGLESImage = this.list.removeAt(0);
            ;
            if (openGLESImage !=
                null) {
                openGLESImage.set(gl);
            }
        }
    }
    add(image) {
        this.list.add(image);
    }
}
