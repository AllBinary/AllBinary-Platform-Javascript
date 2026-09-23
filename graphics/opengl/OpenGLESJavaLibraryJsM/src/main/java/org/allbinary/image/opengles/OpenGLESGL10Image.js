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
//not GWT import const ByteBuffer
import { ByteOrder } from '../../../../java/nio/ByteOrder.js';
//not GWT import const GL
import { GL10 } from '../../../../javax/microedition/khronos/opengles/GL10.js';
//not GWT import const Image
import { DisplayInfoSingleton } from '../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
//not GWT import const DisplayInfoSingleton
import { OpenGLLogUtil } from '../../../../org/allbinary/graphics/opengles/OpenGLLogUtil.js';
//not GWT import const OpenGLLogUtil
import { GLUtil } from '../../../../org/allbinary/opengles/GLUtil.js';
//not GWT import const PlatformTextureBaseFactory
//Current folder imports from return types, extended types, and scope (deduplicated)
import { OpenGLESImage } from './OpenGLESImage.js';
//not GWT import - same folder const OpenGLESImage
import { OpenGLESImageDraw } from './OpenGLESImageDraw.js';
//not GWT import - same folder const OpenGLESImageProcessor
export class OpenGLESGL10Image extends OpenGLESImage {
    constructor(image, bitmapFactory, textureFactory) {
        super(image, bitmapFactory, textureFactory);
        this.textureVertexFloatBuffer = ByteBuffer.allocateDirect(4 * 4 * 2).order(ByteOrder.nativeOrder()).asFloatBuffer();
        this.realOpenGLESImageDraw = new class extends OpenGLESImageDraw {
            constructor() {
                super(...arguments);
                this.glUtil = GLUtil.getInstance();
                this.displayInfoSingleton = DisplayInfoSingleton.getInstance();
                this.textureVertexFloatBuffer = OpenGLESGL10Image.prototype.textureVertexFloatBuffer;
                this.regionTextureRectangleFloatArray = new Array(8);
                this.regionTextureVertexFloatBuffer = ByteBuffer.allocateDirect(4 * 4 * 2).order(ByteOrder.nativeOrder()).asFloatBuffer();
                this.regionRectangleFloatArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                this.regionRectangleVertexFloatBuffer = ByteBuffer.allocateDirect(4 * 4 * 3).order(ByteOrder.nativeOrder()).asFloatBuffer();
                this.openGLESImageProperties = OpenGLESGL10Image.prototype.openGLESImageProperties;
            }
            drawRegion(gl, viewHeight, x_src, y_src, width, height, x, y, z) {
                var imageWidth = OpenGLESGL10Image.prototype.getWidth();
                ;
                var imageHeight = OpenGLESGL10Image.prototype.getHeight();
                ;
                this.regionRectangleFloatArray[7] = viewHeight;
                this.regionRectangleFloatArray[1] = this.regionRectangleFloatArray[7] - height;
                this.regionRectangleFloatArray[3] = width;
                this.regionRectangleFloatArray[4] = this.regionRectangleFloatArray[1];
                this.regionRectangleFloatArray[9] = this.regionRectangleFloatArray[3];
                this.regionRectangleFloatArray[10] = this.regionRectangleFloatArray[7];
                this.regionTextureRectangleFloatArray[0] = x_src / imageWidth;
                this.regionTextureRectangleFloatArray[1] = () / imageHeight;
                this.regionTextureRectangleFloatArray[2] = () / imageWidth;
                this.regionTextureRectangleFloatArray[3] = this.regionTextureRectangleFloatArray[1];
                this.regionTextureRectangleFloatArray[4] = this.regionTextureRectangleFloatArray[0];
                this.regionTextureRectangleFloatArray[5] = y_src / imageHeight;
                this.regionTextureRectangleFloatArray[6] = this.regionTextureRectangleFloatArray[2];
                this.regionTextureRectangleFloatArray[7] = this.regionTextureRectangleFloatArray[5];
                var u_center = (this.regionTextureRectangleFloatArray[0] + this.regionTextureRectangleFloatArray[2]) / 2.0;
                ;
                var v_center = (this.regionTextureRectangleFloatArray[5] + this.regionTextureRectangleFloatArray[1]) / 2.0;
                ;
                this.glUtil.rotateUVs(this.regionTextureRectangleFloatArray, -this.openGLESImageProperties.angle, u_center, v_center);
                gl.glPushMatrix();
                var imageProcessor = OpenGLESGL10Image.prototype.imageProcessor;
                ;
                OpenGLESGL10Image.prototype.openGLESImageTranslate.translate(gl, OpenGLESGL10Image.prototype, x, -y);
                imageProcessor.scale(gl, this.openGLESImageProperties.scaleX, this.openGLESImageProperties.scaleY);
                imageProcessor.colorMask(gl, this.openGLESImageProperties.redf, this.openGLESImageProperties.greenf, this.openGLESImageProperties.bluef, this.openGLESImageProperties.alphaf);
                OpenGLESGL10Image.prototype.openGLESImageTranslate.translate2(gl, OpenGLESGL10Image.prototype);
                this.regionRectangleVertexFloatBuffer.put(this.regionRectangleFloatArray);
                this.glUtil.position(this.regionRectangleVertexFloatBuffer, 0);
                gl.glVertexPointer(3, GL10.GL_FLOAT, 0, this.regionRectangleVertexFloatBuffer);
                gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
                gl.glEnable(GL10.GL_TEXTURE_2D);
                gl.glBindTexture(GL10.GL_TEXTURE_2D, this.openGLESImageProperties.textureID);
                gl.glEnableClientState(GL10.GL_TEXTURE_COORD_ARRAY);
                this.regionTextureVertexFloatBuffer.put(this.regionTextureRectangleFloatArray);
                this.glUtil.position(this.regionTextureVertexFloatBuffer, 0);
                gl.glTexCoordPointer(2, GL10.GL_FLOAT, 0, this.regionTextureVertexFloatBuffer);
                gl.glDrawArrays(GL10.GL_TRIANGLE_STRIP, 0, 4);
                gl.glDisableClientState(GL10.GL_VERTEX_ARRAY);
                gl.glDisableClientState(GL10.GL_TEXTURE_COORD_ARRAY);
                gl.glDisable(GL10.GL_TEXTURE_2D);
                gl.glPopMatrix();
            }
            draw(gl, x, y, z) {
                var width = OpenGLESGL10Image.prototype.getWidth();
                ;
                var height = OpenGLESGL10Image.prototype.getHeight();
                ;
                this.regionRectangleFloatArray[7] = this.displayInfoSingleton.getLastHeight();
                this.regionRectangleFloatArray[1] = this.regionRectangleFloatArray[7] - height;
                this.regionRectangleFloatArray[3] = width;
                this.regionRectangleFloatArray[4] = this.regionRectangleFloatArray[1];
                this.regionRectangleFloatArray[9] = this.regionRectangleFloatArray[3];
                this.regionRectangleFloatArray[10] = this.regionRectangleFloatArray[7];
                this.regionTextureRectangleFloatArray[0] = 0;
                this.regionTextureRectangleFloatArray[1] = 1;
                this.regionTextureRectangleFloatArray[2] = 1;
                this.regionTextureRectangleFloatArray[3] = 1;
                this.regionTextureRectangleFloatArray[4] = 0;
                this.regionTextureRectangleFloatArray[5] = 0;
                this.regionTextureRectangleFloatArray[6] = 1;
                this.regionTextureRectangleFloatArray[7] = 0;
                gl.glPushMatrix();
                OpenGLESGL10Image.prototype.openGLESImageTranslate.translate(gl, OpenGLESGL10Image.prototype, x, -y);
                var imageProcessor = OpenGLESGL10Image.prototype.imageProcessor;
                ;
                imageProcessor.scale(gl, this.openGLESImageProperties.scaleX, this.openGLESImageProperties.scaleY);
                imageProcessor.colorMask(gl, this.openGLESImageProperties.redf, this.openGLESImageProperties.greenf, this.openGLESImageProperties.bluef, this.openGLESImageProperties.alphaf);
                OpenGLESGL10Image.prototype.openGLESImageTranslate.translate2(gl, OpenGLESGL10Image.prototype);
                this.regionRectangleVertexFloatBuffer.put(this.regionRectangleFloatArray);
                this.glUtil.position(this.regionRectangleVertexFloatBuffer, 0);
                gl.glVertexPointer(3, GL10.GL_FLOAT, 0, this.regionRectangleVertexFloatBuffer);
                gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
                gl.glEnable(GL10.GL_TEXTURE_2D);
                gl.glBindTexture(GL10.GL_TEXTURE_2D, this.openGLESImageProperties.textureID);
                gl.glEnableClientState(GL10.GL_TEXTURE_COORD_ARRAY);
                this.glUtil.rotateUVs(this.regionTextureRectangleFloatArray, -this.openGLESImageProperties.angle, 0.5, 0.5);
                this.glUtil.position(this.textureVertexFloatBuffer, 0);
                this.textureVertexFloatBuffer.put(this.regionTextureRectangleFloatArray);
                this.glUtil.position(this.textureVertexFloatBuffer, 0);
                gl.glTexCoordPointer(2, GL10.GL_FLOAT, 0, this.textureVertexFloatBuffer);
                gl.glDrawArrays(GL10.GL_TRIANGLE_STRIP, 0, 4);
                gl.glDisableClientState(GL10.GL_VERTEX_ARRAY);
                gl.glDisableClientState(GL10.GL_TEXTURE_COORD_ARRAY);
                gl.glDisable(GL10.GL_TEXTURE_2D);
                gl.glPopMatrix();
            }
        };
        this.openGLESImageDraw = OpenGLESImageDraw.getInstance();
        //For kotlin this is before the body of the constructor.
        this.initVertices();
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
            this.openGLESImageDraw = this.realOpenGLESImageDraw;
            OpenGLLogUtil.getInstance().logError(gl10, this);
        }
    }
    drawRegion(gl, viewHeight, x_src, y_src, width, height, x, y, z) {
        this.openGLESImageDraw.drawRegion(gl, viewHeight, x_src, y_src, width, height, x, y, z);
    }
    draw(gl, x, y, z) {
        this.openGLESImageDraw.draw(gl, x, y, z);
    }
}
