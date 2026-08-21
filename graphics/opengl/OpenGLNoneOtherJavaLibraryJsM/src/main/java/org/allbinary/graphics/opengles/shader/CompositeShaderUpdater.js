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
import { NullUtil } from '../../../../../org/allbinary/logic/NullUtil.js';
import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
import { CommonSeps } from '../../../../../org/allbinary/string/CommonSeps.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { ShaderUpdater } from './ShaderUpdater.js';
export class CompositeShaderUpdater extends ShaderUpdater {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return CompositeShaderUpdater.instanceC;
    }
    constructor(uniformBlockArray, uniformArray, attributeArray, attributeHandleArray) {
        super();
        this.commonSeps = CommonSeps.getInstance();
    }
    onSurfaceCreated(gl, eglConfig, programHandle) {
    }
    onSurfaceDestroyed(gl) {
    }
}
CompositeShaderUpdater.instanceC = new CompositeShaderUpdater(StringUtil.getInstance().getArrayInstance(), StringUtil.getInstance().getArrayInstance(), StringUtil.getInstance().getArrayInstance(), NullUtil.getInstance().NULL_INT_ARRAY);
