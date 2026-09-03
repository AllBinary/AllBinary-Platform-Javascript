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
//not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { OpenGLFeature } from './OpenGLFeature.js';
//not GWT import const OpenGLFeature = globalThis.org.allbinary.graphics.opengles.OpenGLFeature;
export class OpenGLFeatureFactory extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return OpenGLFeatureFactory.instance;
    }
    constructor() {
        super();
        this.OPENGL_OPTIONS = new OpenGLFeature("OpenGL Options");
        this.OPENGL = new OpenGLFeature("OpenGL");
        this.OPENGL_SURFACE_VIEW = new OpenGLFeature("GLSurfaceView");
        this.OPENGL_2D = new OpenGLFeature("OpenGL 2D");
        this.OPENGL_3D = new OpenGLFeature("OpenGL 3D");
        this.OPENGL_2D_AND_3D = new OpenGLFeature("OpenGL 2D/3D");
        this.OPENGL_AUTO_SELECT = new OpenGLFeature("Auto Select");
        this.OPENGL_MINIMUM = new OpenGLFeature("Minimum");
        this.OPENGL_AS_GAME_THREAD = new OpenGLFeature("As game thread");
        this.OPENGL_AND_GAME_HAVE_DIFFERENT_THREADS = new OpenGLFeature("As different threads");
        this.IMAGE_COLOR_DEPTH_4444 = new OpenGLFeature("4444");
        this.IMAGE_COLOR_DEPTH_8888 = new OpenGLFeature("8888");
        this.IMAGE_COLOR_DEPTH_565 = new OpenGLFeature("565");
        this.OPENGL_COLOR_DEPTH_4444 = new OpenGLFeature("4444");
        this.OPENGL_COLOR_DEPTH_8888 = new OpenGLFeature("8888");
        this.OPENGL_COLOR_DEPTH_565 = new OpenGLFeature("565");
        this.OPENGL_DRAW_TEXTURE = new OpenGLFeature("GL_OES_draw_texture");
        this.OPENGL_VERTEX_BUFFER_OBJECT = new OpenGLFeature("vertex_buffer_object");
        this.OPENGL_SIMPLE_OBJECT3D_PROCESSOR = new OpenGLFeature("Simple Object3d Processor");
        this.OPENGL_COMPLEX_OBJECT3D_PROCESSOR = new OpenGLFeature("Complex Object3d Processor");
        this.OPENGL_SIMPLE_TEXTURE_PROCESSOR = new OpenGLFeature("Simple Texture Processor");
        this.OPENGL_COMPLEX_TEXTURE_PROCESSOR = new OpenGLFeature("Complex Texture Processor");
    }
}
OpenGLFeatureFactory.instance = new OpenGLFeatureFactory();
