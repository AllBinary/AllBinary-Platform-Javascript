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
//Current folder imports from return types, extended types, and scope (deduplicated)
import { ShaderUpdater } from './ShaderUpdater.js';
//not GWT import - same folder const ShaderOpenGLProcessor
export class AppRendererShaderUpdaterFactory extends ShaderUpdater {
    constructor() {
        super(...arguments);
        this.NULL_SHADER_COMPOSITE_ARRAY = [];
        this.shaderCompositeArray = this.NULL_SHADER_COMPOSITE_ARRAY;
        this.shaderOpenGLProcessorArray = [];
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return AppRendererShaderUpdaterFactory.instanceC;
    }
    getTestShaders() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.shaderOpenGLProcessorArray;
    }
    setShaderComposite(object3d = {}) {
    }
}
AppRendererShaderUpdaterFactory.instanceC = new AppRendererShaderUpdaterFactory();
