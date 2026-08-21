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
import { PreLogUtil } from '../../../../org/allbinary/logic/communication/log/PreLogUtil.js';
import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { OpenGLImageFactory } from './OpenGLImageFactory.js';
export class OpenGLImageSpecificFactory extends Object {
    constructor() {
        super(...arguments);
        this.imageFactory = OpenGLImageFactory.NULL_OPENGL_IMAGE_FACTORY;
        this.updating = false;
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return OpenGLImageSpecificFactory.instance;
    }
    setImageFactory(imageFactory) {
        this.imageFactory = imageFactory;
        PreLogUtil.put(new StringMaker().append("Selected Image Factory: ").append(StringUtil.getInstance().toString(this.imageFactory)).toString(), this, "setImageFactory");
    }
    getImageFactory() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.imageFactory;
    }
}
OpenGLImageSpecificFactory.instance = new OpenGLImageSpecificFactory();
