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
//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { ShaderUpdater } from './ShaderUpdater.js';
//not GWT import - same folder const ShaderUpdater
import { ShaderStrings } from './ShaderStrings.js';
//not GWT import - same folder const ShaderStrings
export class CompositeShaderUpdater extends ShaderUpdater {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return CompositeShaderUpdater.instanceC;
    }
    constructor(uniformBlockArray, uniformArray, attributeArray, attributeHandleArray) {
        super();
        this.commonSeps = CommonSeps.getInstance();
        this.shaderStrings = ShaderStrings.getInstance();
        this.uniformBlockArray = uniformBlockArray;
        this.uniformBlockHandleArray = new Array(this.uniformBlockArray.length);
        this.uniformArray = uniformArray;
        this.uniformHandleArray = new Array(this.uniformArray.length);
        this.attributeArray = attributeArray;
        this.attributeHandleArray = attributeHandleArray;
    }
    onSurfaceCreated(gl, eglConfig, programHandle) {
    }
    onSurfaceDestroyed(gl) {
    }
}
CompositeShaderUpdater.instanceC = new CompositeShaderUpdater(StringUtil.getInstance().getArrayInstance(), StringUtil.getInstance().getArrayInstance(), StringUtil.getInstance().getArrayInstance(), NullUtil.getInstance().NULL_INT_ARRAY);
