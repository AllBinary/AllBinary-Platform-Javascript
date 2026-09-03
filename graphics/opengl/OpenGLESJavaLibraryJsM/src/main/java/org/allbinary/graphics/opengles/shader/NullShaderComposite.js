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
import { NullOpenGLProcessorFactory } from '../../../../../org/allbinary/graphics/opengles/NullOpenGLProcessorFactory.js';
//not GWT import const OpenGLProcessor = globalThis.org.allbinary.graphics.opengles.OpenGLProcessor;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { ShaderComposite } from './ShaderComposite.js';
//not GWT import const ModelViewProjection = globalThis.org.allbinary.graphics.opengles.shader.ModelViewProjection;
export class NullShaderComposite extends ShaderComposite {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return NullShaderComposite.instance;
    }
    constructor(requiresOpenGLVersion, shaderArray, compositeShaderUpdater, shaderInitializer, modelViewProjection, colorOpenGLProcessor, vertexOpenGLProcessor, disableProgramShaderOpenGLProcessor) {
        super(requiresOpenGLVersion, shaderArray, compositeShaderUpdater, shaderInitializer, modelViewProjection, colorOpenGLProcessor, vertexOpenGLProcessor, disableProgramShaderOpenGLProcessor);
        //For kotlin this is before the body of the constructor.
        this.useProgramShaderOpenGLProcessor = NullOpenGLProcessorFactory.getInstance();
    }
}
NullShaderComposite.instance = new class extends NullShaderComposite {
    init(gl) {
    }
};
