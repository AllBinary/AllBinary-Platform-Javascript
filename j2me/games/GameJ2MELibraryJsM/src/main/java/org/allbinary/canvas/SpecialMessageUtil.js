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
import { Object } from '../../../java/lang/Object.js';
import { Features } from '../../../org/allbinary/game/configuration/feature/Features.js';
//not GWT import const Features = globalThis.org.allbinary.game.configuration.feature.Features;
import { OpenGLFeatureFactory } from '../../../org/allbinary/graphics/opengles/OpenGLFeatureFactory.js';
//not GWT import const OpenGLFeatureFactory = globalThis.org.allbinary.graphics.opengles.OpenGLFeatureFactory;
//not plain js import { StringMaker } from '../../../org/allbinary/logic/string/StringMaker.js';
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { CommonSeps } from '../../../org/allbinary/string/CommonSeps.js';
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
import { Memory } from '../../../org/allbinary/system/Memory.js';
//not GWT import const Memory = globalThis.org.allbinary.system.Memory;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { GameStatisticsFactory } from './GameStatisticsFactory.js';
//not GWT import const GameStatisticsFactory = globalThis.org.allbinary.canvas.GameStatisticsFactory;
export class SpecialMessageUtil extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return SpecialMessageUtil.SINGLETON;
    }
    get() {
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append(Memory.getInfo());
        stringBuffer.append(CommonSeps.getInstance().SPACE);
        stringBuffer.append(GameStatisticsFactory.getInstance().toString());
        stringBuffer.append(CommonSeps.getInstance().SPACE);
        stringBuffer.append(" Option: ");
        if (Features.getInstance().isDefault(OpenGLFeatureFactory.getInstance().OPENGL_AUTO_SELECT)) {
            stringBuffer.append(OpenGLFeatureFactory.getInstance().OPENGL_AUTO_SELECT.getName());
        }
        else {
            stringBuffer.append(OpenGLFeatureFactory.getInstance().OPENGL_MINIMUM.getName());
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return stringBuffer.toString();
        ;
    }
}
SpecialMessageUtil.SINGLETON = new SpecialMessageUtil();
