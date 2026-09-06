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
import { Object } from '../../../../../java/lang/Object.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { OpenGLObject3dProcessor } from './OpenGLObject3dProcessor.js';
//not GWT import - same folder const OpenGLObject3dProcessor = globalThis.org.allbinary.graphics.opengles.shader.OpenGLObject3dProcessor;
export class NullOpenGLTextureProcessor extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return NullOpenGLTextureProcessor.instance;
    }
}
NullOpenGLTextureProcessor.instance = new OpenGLObject3dProcessor();
