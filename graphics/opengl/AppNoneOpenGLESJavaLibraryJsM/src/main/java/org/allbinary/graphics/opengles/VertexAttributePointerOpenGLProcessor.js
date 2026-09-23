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
import { RuntimeException } from '../../../../java/lang/RuntimeException.js';
//not GWT import const GL10
import { ObjectThreedOpenGLProcessor } from '../../../../org/allbinary/graphics/threed/min3d/renderer/processor/ObjectThreedOpenGLProcessor.js';
//not GWT import const ObjectThreedOpenGLProcessor
//Current folder imports from return types, extended types, and scope (deduplicated)
export class VertexAttributePointerOpenGLProcessor extends ObjectThreedOpenGLProcessor {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return VertexAttributePointerOpenGLProcessor.instance;
    }
    constructor() {
        super();
    }
    process(gl, anyType = {}) {
        throw new RuntimeException();
    }
}
VertexAttributePointerOpenGLProcessor.instance = new VertexAttributePointerOpenGLProcessor();
