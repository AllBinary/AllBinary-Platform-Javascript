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
import { ByteBuffer } from '../../../../java/nio/ByteBuffer.js';
//not GWT import const ByteBuffer = globalThis.java.nio.ByteBuffer;
import { ByteOrder } from '../../../../java/nio/ByteOrder.js';
//not GWT import const ByteOrder = globalThis.java.nio.ByteOrder;
import { FloatBuffer } from '../../../../java/nio/FloatBuffer.js';
//not GWT import const GL = globalThis.javax.microedition.khronos.opengles.GL;
import { GL10 } from '../../../../javax/microedition/khronos/opengles/GL10.js';
//not GWT import const GL10 = globalThis.javax.microedition.khronos.opengles.GL10;
//not plain js import { Image } 
const Image = globalThis.javax.microedition.lcdui.Image;
import { OpenGLLogUtil } from '../../../../org/allbinary/graphics/opengles/OpenGLLogUtil.js';
//not GWT import const OpenGLLogUtil = globalThis.org.allbinary.graphics.opengles.OpenGLLogUtil;
import { DisplayInfoSingleton } from '../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
//not GWT import const DisplayInfoSingleton = globalThis.org.allbinary.graphics.displayable.DisplayInfoSingleton;
import { GLUtil } from '../../../../org/allbinary/opengles/GLUtil.js';
//not GWT import const PlatformTextureBaseFactory = globalThis.org.allbinary.platform.opengles.PlatformTextureBaseFactory;
//Current folder imports from return types, extended types, and scope (deduplicated)
//not plain js - same folder import { OpenGLESImage } 
const OpenGLESImage = globalThis.org.allbinary.image.opengles.OpenGLESImage;
//This is not actually VBO impl
export class OpenGLESGL11VBOImage extends OpenGLESImage {
    constructor(image, bitmapFactory, textureFactory) {
        super(image, bitmapFactory, textureFactory);
        this.glUtil = GLUtil.getInstance();
        this.textureVertexFloatBuffer = ByteBuffer.allocateDirect(4 * 4 * 2).order(ByteOrder.nativeOrder()).asFloatBuffer();
        this.regionRectangleFloatArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.regionRectangleVertexFloatBuffer = ByteBuffer.allocateDirect(4 * 4 * 3).order(ByteOrder.nativeOrder()).asFloatBuffer();
        this.regionTextureRectangleFloatArray = new Array(8);
        this.regionTextureVertexFloatBuffer = ByteBuffer.allocateDirect(4 * 4 * 2).order(ByteOrder.nativeOrder()).asFloatBuffer();
        //For kotlin this is before the body of the constructor.
        this.initVertices();
        this.regionRectangleVertexFloatBuffer.put(FloatBuffer.wrap(this.regionRectangleFloatArray));
        this.regionTextureVertexFloatBuffer.put(FloatBuffer.wrap(this.regionTextureRectangleFloatArray));
    }
    initVertices() {
        this.textureVertexFloatBuffer.put(0);
        this.textureVertexFloatBuffer.put(1);
        this.textureVertexFloatBuffer.put(1);
        this.textureVertexFloatBuffer.put(1);
        this.textureVertexFloatBuffer.put(0);
        this.textureVertexFloatBuffer.put(0);
        this.textureVertexFloatBuffer.put(1);
        this.textureVertexFloatBuffer.put(0);
        this.textureVertexFloatBuffer.rewind();
    }
    set(gl) {
        var gl10 = gl;
        ;
        if (super.initTexture(gl10)) {
            this.textureFactory.load(gl10, GL10.GL_TEXTURE_2D, 0, this, 0, true);
            gl10.glDisable(GL10.GL_TEXTURE_2D);
            OpenGLLogUtil.getInstance().logError(gl10, this);
        }
    }
    drawRegion(gl, viewHeight, x_src, y_src, width, height, x, y, z) {
        this.regionRectangleFloatArray[0] = x;
        this.regionRectangleFloatArray[7] = viewHeight - y;
        this.regionRectangleFloatArray[1] = this.regionRectangleFloatArray[7] - height;
        this.regionRectangleFloatArray[3] = x + width;
        this.regionRectangleFloatArray[4] = this.regionRectangleFloatArray[1];
        this.regionRectangleFloatArray[6] = x;
        this.regionRectangleFloatArray[9] = this.regionRectangleFloatArray[3];
        this.regionRectangleFloatArray[10] = this.regionRectangleFloatArray[7];
        this.regionTextureRectangleFloatArray[0] = x_src / this.getWidth();
        this.regionTextureRectangleFloatArray[1] = () / this.getHeight();
        this.regionTextureRectangleFloatArray[2] = () / this.getWidth();
        this.regionTextureRectangleFloatArray[3] = this.regionTextureRectangleFloatArray[1];
        this.regionTextureRectangleFloatArray[4] = this.regionTextureRectangleFloatArray[0];
        this.regionTextureRectangleFloatArray[5] = y_src / this.getHeight();
        this.regionTextureRectangleFloatArray[6] = this.regionTextureRectangleFloatArray[2];
        this.regionTextureRectangleFloatArray[7] = this.regionTextureRectangleFloatArray[5];
        this.glUtil.position(this.regionRectangleVertexFloatBuffer, 0);
        gl.glVertexPointer(3, GL10.GL_FLOAT, 0, this.regionRectangleVertexFloatBuffer);
        gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
        gl.glEnable(GL10.GL_TEXTURE_2D);
        gl.glBindTexture(GL10.GL_TEXTURE_2D, this.openGLESImageProperties.textureID);
        gl.glEnableClientState(GL10.GL_TEXTURE_COORD_ARRAY);
        this.glUtil.position(this.regionTextureVertexFloatBuffer, 0);
        gl.glTexCoordPointer(2, GL10.GL_FLOAT, 0, this.regionTextureVertexFloatBuffer);
        gl.glDrawArrays(GL10.GL_TRIANGLE_STRIP, 0, 4);
        gl.glDisableClientState(GL10.GL_VERTEX_ARRAY);
        gl.glDisableClientState(GL10.GL_TEXTURE_COORD_ARRAY);
        gl.glDisable(GL10.GL_TEXTURE_2D);
    }
    draw(gl, x, y, z) {
        this.regionRectangleFloatArray[0] = x;
        this.regionRectangleFloatArray[7] = DisplayInfoSingleton.getInstance().getLastHeight() - y;
        this.regionRectangleFloatArray[1] = this.regionRectangleFloatArray[7] - this.getHeight();
        this.regionRectangleFloatArray[3] = x + this.getWidth();
        this.regionRectangleFloatArray[4] = this.regionRectangleFloatArray[1];
        this.regionRectangleFloatArray[6] = x;
        this.regionRectangleFloatArray[9] = this.regionRectangleFloatArray[3];
        this.regionRectangleFloatArray[10] = this.regionRectangleFloatArray[7];
        this.glUtil.position(this.regionRectangleVertexFloatBuffer, 0);
        gl.glVertexPointer(3, GL10.GL_FLOAT, 0, this.regionRectangleVertexFloatBuffer);
        gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
        gl.glEnable(GL10.GL_TEXTURE_2D);
        gl.glBindTexture(GL10.GL_TEXTURE_2D, this.openGLESImageProperties.textureID);
        gl.glEnableClientState(GL10.GL_TEXTURE_COORD_ARRAY);
        this.glUtil.position(this.textureVertexFloatBuffer, 0);
        gl.glTexCoordPointer(2, GL10.GL_FLOAT, 0, this.textureVertexFloatBuffer);
        gl.glDrawArrays(GL10.GL_TRIANGLE_STRIP, 0, 4);
        gl.glDisableClientState(GL10.GL_VERTEX_ARRAY);
        gl.glDisableClientState(GL10.GL_TEXTURE_COORD_ARRAY);
        gl.glDisable(GL10.GL_TEXTURE_2D);
    }
}
