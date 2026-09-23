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
import { Object } from '../../../../java/lang/Object.js';
//not GWT import const ShaderComposite
//Current folder imports from return types, extended types, and scope (deduplicated)
export class OpenGLVersionValidator extends Object {
    constructor() {
        super(...arguments);
        this.EGL_CONTEXT_CLIENT_VERSION_VALUE = -1;
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return OpenGLVersionValidator.instance;
    }
    isGL31OrHigher() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    isAvailable(glVersionRequired) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    setShaderComposite(shaderComposite, anyType = {}) {
    }
}
OpenGLVersionValidator.instance = new OpenGLVersionValidator();
