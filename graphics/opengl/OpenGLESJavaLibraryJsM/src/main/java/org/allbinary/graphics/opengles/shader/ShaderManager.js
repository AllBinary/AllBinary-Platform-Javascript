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
//not GWT import const GL10
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class ShaderManager extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return ShaderManager.instance;
    }
    constructor(GL_VERTEX_SHADER, GL_FRAGMENT_SHADER) {
        super();
        this.commonStrings = CommonStrings.getInstance();
        this.LOAD_SHADER = "loadShader";
        this.__VERSION__ = "__VERSION__";
        this.GL_VERTEX_SHADER = GL_VERTEX_SHADER;
        this.GL_FRAGMENT_SHADER = GL_FRAGMENT_SHADER;
    }
    load(gl, resource, shaderAsStringArray, shaderType) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return -1;
    }
    loadShader(gl, resource, stringList, shaderType) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return -1;
    }
}
ShaderManager.instance = new ShaderManager(-1, -1);
