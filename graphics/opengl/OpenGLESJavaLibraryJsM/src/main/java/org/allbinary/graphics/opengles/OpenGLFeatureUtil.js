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
import { Features } from '../../../../org/allbinary/game/configuration/feature/Features.js';
//not GWT import const Features = globalThis.org.allbinary.game.configuration.feature.Features;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { OpenGLConfiguration } from './OpenGLConfiguration.js';
//not GWT import - same folder const OpenGLConfiguration = globalThis.org.allbinary.graphics.opengles.OpenGLConfiguration;
import { OpenGLFeatureFactory } from './OpenGLFeatureFactory.js';
//not GWT import - same folder const OpenGLFeatureFactory = globalThis.org.allbinary.graphics.opengles.OpenGLFeatureFactory;
export class OpenGLFeatureUtil extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return OpenGLFeatureUtil.instance;
    }
    constructor() {
        super();
        var openGLConfiguration = OpenGLConfiguration.getInstance();
        ;
        var features = Features.getInstance();
        ;
        var openGLFeatureFactory = OpenGLFeatureFactory.getInstance();
        ;
        this.anyThreed = openGLConfiguration.isOpenGL() && (features.isFeature(openGLFeatureFactory.OPENGL_2D_AND_3D) || features.isFeature(openGLFeatureFactory.OPENGL_3D));
    }
    isAnyThreed() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.anyThreed;
    }
}
OpenGLFeatureUtil.instance = new OpenGLFeatureUtil();
