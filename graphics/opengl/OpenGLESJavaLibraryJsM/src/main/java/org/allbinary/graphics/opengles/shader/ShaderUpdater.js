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
//not GWT import const GL10 = globalThis.javax.microedition.khronos.opengles.GL10;
import { RendererStrings } from '../../../../../org/allbinary/graphics/opengles/renderer/RendererStrings.js';
//not GWT import const RendererStrings = globalThis.org.allbinary.graphics.opengles.renderer.RendererStrings;
//not plain js import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class ShaderUpdater extends Object {
    constructor() {
        super(...arguments);
        this.commonStrings = CommonStrings.getInstance();
        this.rendererStrings = RendererStrings.getInstance();
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return ShaderUpdater.instance;
    }
    onSurfaceCreated(gl, eglConfig) {
    }
}
ShaderUpdater.instance = new ShaderUpdater();
