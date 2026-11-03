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
//not GWT import const GL10
import { NullOpenGLProcessorFactory } from '../../../../../org/allbinary/graphics/opengles/NullOpenGLProcessorFactory.js';
//not GWT import const NullOpenGLProcessorFactory
import { OpenGLCapabilities } from '../../../../../org/allbinary/graphics/opengles/OpenGLCapabilities.js';
//not GWT import const OpenGLProcessor
//Current folder imports from return types, extended types, and scope (deduplicated)
import { ShaderComposite } from './ShaderComposite.js';
//sameFolderImports - not GWT import - same folder const ShaderComposite
import { Shader } from './Shader.js';
//sameFolderImports - not GWT import - same folder const Shader
import { CompositeShaderUpdater } from './CompositeShaderUpdater.js';
//sameFolderImports - not GWT import - same folder const CompositeShaderUpdater
import { ShaderInitializer } from './ShaderInitializer.js';
//sameFolderImports - not GWT import - same folder const ShaderInitializer
import { ModelViewProjection } from './ModelViewProjection.js';
//sameFolderImports - not GWT import - same folder const ModelViewProjection
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
}(OpenGLCapabilities.getInstance().VERSION_2_0, [
    new Shader(), new Shader()
], CompositeShaderUpdater.getInstance(), ShaderInitializer.getInstance(), ModelViewProjection.getInstance(), NullOpenGLProcessorFactory.getInstance(), NullOpenGLProcessorFactory.getInstance(), NullOpenGLProcessorFactory.getInstance());
