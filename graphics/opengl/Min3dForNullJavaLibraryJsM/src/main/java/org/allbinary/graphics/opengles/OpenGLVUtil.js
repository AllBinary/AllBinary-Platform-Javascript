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
import { OpenGLVUtilBase } from './OpenGLVUtilBase.js';
//not GWT import const OpenGLVUtilBase = globalThis.org.allbinary.graphics.opengles.OpenGLVUtilBase;
export class OpenGLVUtil extends OpenGLVUtilBase {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return OpenGLVUtil.instance;
    }
}
OpenGLVUtil.instance = new OpenGLVUtil();
