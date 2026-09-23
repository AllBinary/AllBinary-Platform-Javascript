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
import { NullOpenGLProcessorFactory } from '../../../../../org/allbinary/graphics/opengles/NullOpenGLProcessorFactory.js';
//not GWT import const OpenGLProcessor
//Current folder imports from return types, extended types, and scope (deduplicated)
import { ShaderComposite } from './ShaderComposite.js';
//not GWT import - same folder const ModelViewProjection
export class PlatformShaderComposite extends ShaderComposite {
    constructor(requiresOpenGLVersion, shaderArray, compositeShaderUpdater, shaderInitializer, modelViewProjection, colorOpenGLProcessor, vertexOpenGLProcessor) {
        super(requiresOpenGLVersion, shaderArray, compositeShaderUpdater, shaderInitializer, modelViewProjection, colorOpenGLProcessor, vertexOpenGLProcessor, NullOpenGLProcessorFactory.getInstance());
        //For kotlin this is before the body of the constructor.
    }
}
