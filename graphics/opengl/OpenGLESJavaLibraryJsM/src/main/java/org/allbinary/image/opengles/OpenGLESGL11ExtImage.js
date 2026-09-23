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
//not GWT import const GL
import { GL10 } from '../../../../javax/microedition/khronos/opengles/GL10.js';
//not GWT import const GL11
import { GL11Ext } from '../../../../javax/microedition/khronos/opengles/GL11Ext.js';
//not GWT import const Image
import { DisplayInfoSingleton } from '../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
//not GWT import const DisplayChangeEvent
import { OpenGLLogUtil } from '../../../../org/allbinary/graphics/opengles/OpenGLLogUtil.js';
//not GWT import const OpenGLLogUtil
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not GWT import const PlatformTextureBaseFactory
//Current folder imports from return types, extended types, and scope (deduplicated)
import { OpenGLESImage } from './OpenGLESImage.js';
//not GWT import - same folder const OpenGLESImage
//Many devices don't support this even though it is supposed to
export class OpenGLESGL11ExtImage extends OpenGLESImage {
    constructor(image, bitmapFactory, textureFactory) {
        super(image, bitmapFactory, textureFactory);
        this.logUtil = LogUtil.getInstance();
        this.a = 0;
        //For kotlin this is before the body of the constructor.
        this.onDisplayChangeEvent(null);
        this.rectangle = [0, this.getHeight(), this.getWidth(), -this.getHeight(),];
    }
    onDisplayChangeEvent(displayChangeEvent) {
        try {
            this.logUtil.putF(this.commonStrings.START, this, "onResize");
            this.a = DisplayInfoSingleton.getInstance().getLastHeight() - this.getHeight();
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, "onResize", e);
        }
    }
    set(gl) {
        this.onDisplayChangeEvent(null);
        var gl11 = gl;
        ;
        if (super.initTexture(gl11)) {
            this.textureFactory.load(gl11, GL10.GL_TEXTURE_2D, 0, this, 0, true);
            gl11.glTexParameteriv(GL10.GL_TEXTURE_2D, GL11Ext.GL_TEXTURE_CROP_RECT_OES, this.rectangle, 0);
            gl11.glDisable(GL10.GL_TEXTURE_2D);
            OpenGLLogUtil.getInstance().logError(gl11, this);
        }
    }
    draw(gl, x, y, z) {
        gl.glEnable(GL10.GL_TEXTURE_2D);
        gl.glBindTexture(GL10.GL_TEXTURE_2D, this.openGLESImageProperties.textureID);
        gl = glgl;
        gl.
            glDrawTexfOES(x, this.a - y, z, this.getWidth(), this.getHeight());
        gl.glDisable(GL10.GL_TEXTURE_2D);
    }
}
