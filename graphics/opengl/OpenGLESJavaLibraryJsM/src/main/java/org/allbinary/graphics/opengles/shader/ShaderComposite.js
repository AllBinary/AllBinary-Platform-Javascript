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
//not GWT import const OpenGLProcessor = globalThis.org.allbinary.graphics.opengles.OpenGLProcessor;
import { NullOpenGLProcessorFactory } from '../../../../../org/allbinary/graphics/opengles/NullOpenGLProcessorFactory.js';
//not GWT import const ModelViewProjection = globalThis.org.allbinary.graphics.opengles.shader.ModelViewProjection;
import { NullOpenGLTextureProcessor } from './NullOpenGLTextureProcessor.js';
//not GWT import const OpenGLObject3dProcessor = globalThis.org.allbinary.graphics.opengles.shader.OpenGLObject3dProcessor;
export class ShaderComposite extends Object {
    constructor(requiresOpenGLVersion, shaderArray, compositeShaderUpdater, shaderInitializer, modelViewProjection, colorOpenGLProcessor, vertexOpenGLProcessor, disableProgramShaderOpenGLProcessor) {
        super();
        this.useProgramShaderOpenGLProcessor = null;
        this.shaderMatrixOpenGLProcessor = NullOpenGLProcessorFactory.getInstance();
        this.colorEnableVertexAttribArrayOpenGLProcessor = NullOpenGLProcessorFactory.getInstance();
        this.normalEnableVertexAttribArrayOpenGLProcessor = NullOpenGLProcessorFactory.getInstance();
        this.vertexEnableVertexAttribArrayOpenGLProcessor = NullOpenGLProcessorFactory.getInstance();
        this.textureEnableVertexAttribArrayOpenGLProcessor = NullOpenGLProcessorFactory.getInstance();
        this.colorDisableVertexAttribArrayOpenGLProcessor = NullOpenGLProcessorFactory.getInstance();
        this.normalDisableVertexAttribArrayOpenGLProcessor = NullOpenGLProcessorFactory.getInstance();
        this.vertexDisableVertexAttribArrayOpenGLProcessor = NullOpenGLProcessorFactory.getInstance();
        this.textureDisableVertexAttribArrayOpenGLProcessor = NullOpenGLProcessorFactory.getInstance();
        this.uniformLightPositionOpenGLProcessor = NullOpenGLTextureProcessor.getInstance();
        this.uniformLightColorOpenGLProcessor = NullOpenGLTextureProcessor.getInstance();
        this.uniformCameraPositionOpenGLProcessor = NullOpenGLTextureProcessor.getInstance();
        this.uniformTextureUnitOpenGLProcessor = NullOpenGLTextureProcessor.getInstance();
        this.programHandle = 0;
        this.requiresOpenGLVersion = requiresOpenGLVersion;
        this.shaderArray = shaderArray;
        this.shaderInitializer = shaderInitializer;
        this.compositeShaderUpdater = compositeShaderUpdater;
        this.modelViewProjection = modelViewProjection;
        this.colorOpenGLProcessor = colorOpenGLProcessor;
        this.vertexOpenGLProcessor = vertexOpenGLProcessor;
        this.disableProgramShaderOpenGLProcessor = disableProgramShaderOpenGLProcessor;
    }
    init(gl) {
        this.programHandle = this.shaderInitializer.init(gl, this.shaderArray, this.compositeShaderUpdater.attributeArray);
    }
}
