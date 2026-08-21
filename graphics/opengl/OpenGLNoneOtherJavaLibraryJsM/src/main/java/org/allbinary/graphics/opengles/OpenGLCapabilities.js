/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2011 AllBinary
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
import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
export class OpenGLCapabilities extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return OpenGLCapabilities.instance;
    }
    constructor() {
        super();
        this.VERSION_1_0 = "1.0";
        this.VERSION_1_1 = "1.1";
        this.VERSION_2_0 = "2.0";
        this.VERSION_3_0 = "3.0";
        this.VERSION_3_1 = "3.1";
        this.VERSION_3_2 = "3.2";
        this.VERSION_HIGHER_THAN_EXISTS = "999.999";
        this.glVersion = StringUtil.getInstance().EMPTY_STRING;
        this.shaderVersion = 0;
        this.glInstanceVersion = StringUtil.getInstance().EMPTY_STRING;
        this.maxTextureSize = 64;
    }
    initCapabilities(gl = {}) {
    }
    isGlExtensionDrawTexture() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    getGlVersion() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.glVersion;
    }
    isVertexBufferObjectSupport() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    isTextureSizeValid(widthAndHeight) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return true;
    }
}
OpenGLCapabilities.instance = new OpenGLCapabilities();
