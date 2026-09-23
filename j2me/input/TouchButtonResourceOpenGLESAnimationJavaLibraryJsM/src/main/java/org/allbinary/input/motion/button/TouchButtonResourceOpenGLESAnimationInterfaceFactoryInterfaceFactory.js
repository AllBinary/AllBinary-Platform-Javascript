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
import { Features } from '../../../../../org/allbinary/game/configuration/feature/Features.js';
//not GWT import const Features
import { OpenGLFeatureFactory } from '../../../../../org/allbinary/graphics/opengles/OpenGLFeatureFactory.js';
//not GWT import const OpenGLFeatureFactory
import { OpenGLImageCacheFactory } from '../../../../../org/allbinary/image/opengles/OpenGLImageCacheFactory.js';
//not GWT import const OpenGLImageCacheFactory
//Current folder imports from return types, extended types, and scope (deduplicated)
import { TouchButtonResourceAnimationInterfaceFactoryInterfaceFactory } from './TouchButtonResourceAnimationInterfaceFactoryInterfaceFactory.js';
//not GWT import - same folder const TouchButtonResourceAnimationInterfaceFactoryInterfaceFactory
export class TouchButtonResourceOpenGLESAnimationInterfaceFactoryInterfaceFactory extends TouchButtonResourceAnimationInterfaceFactoryInterfaceFactory {
    constructor() {
        super("OpenGL TouchButton Animations");
        //For kotlin this is before the body of the constructor.
    }
    //@Throws(Exception.constructor)
    init(level) {
        super.initImageCache(OpenGLImageCacheFactory.getInstance(), level);
    }
    isFeature() {
        if (Features.getInstance().isDefault(OpenGLFeatureFactory.getInstance().OPENGL)) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
    }
}
