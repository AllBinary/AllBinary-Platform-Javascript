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
import { RuntimeException } from '../../../../java/lang/RuntimeException.js';
//not GWT import const BasicColor
import { OpenGLESImage } from '../../../../org/allbinary/image/opengles/OpenGLESImage.js';
//not GWT import const OpenGLESImage
//Current folder imports from return types, extended types, and scope (deduplicated)
import { TrueTypeFontUtilBase } from './TrueTypeFontUtilBase.js';
//not GWT import - same folder const TrueTypeFontUtilBase
export class TrueTypeFontUtil extends TrueTypeFontUtilBase {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return TrueTypeFontUtil.instance;
    }
    constructor() {
        super(1);
        this.fontImage = OpenGLESImage.NULL_OPENGL_IMAGE;
        //For kotlin this is before the body of the constructor.
    }
    getAsTextureSize(textureSize) {
        throw new RuntimeException();
    }
    getCellSize(cellSize) {
        throw new RuntimeException();
    }
    getFontBitmap(filename, fontSize, cellSize, basicColor) {
        throw new RuntimeException();
    }
    saveFontAtlasAsFile() {
    }
    getFontBitmapGL(gl, filename, cellSize, basicColor) {
        throw new RuntimeException();
    }
    getFontWidths(filename, fontSize) {
        throw new RuntimeException();
    }
}
TrueTypeFontUtil.instance = new TrueTypeFontUtil();
