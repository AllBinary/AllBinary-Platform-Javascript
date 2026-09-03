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
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;
//not plain js import { Canvas } from '../../../javax/microedition/lcdui/Canvas.js';
const Canvas = globalThis.javax.microedition.lcdui.Canvas;
//not plain js import { CommandListener } from '../../../javax/microedition/lcdui/CommandListener.js';
const CommandListener = globalThis.javax.microedition.lcdui.CommandListener;
import { Features } from '../../../org/allbinary/game/configuration/feature/Features.js';
//not GWT import const Features = globalThis.org.allbinary.game.configuration.feature.Features;
import { MainFeatureFactory } from '../../../org/allbinary/game/configuration/feature/MainFeatureFactory.js';
//not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class FullScreenUtil extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return FullScreenUtil.instance;
    }
    //@Throws(Exception.constructor)
    initOnRun(fullScreenInterface, commandListener) {
        if (commandListener !=
            null) {
            this.init(fullScreenInterface);
        }
    }
    init(fullScreenInterface) {
    }
    isScreenChange(isFullScreen) {
        var mainFeatureFactory = MainFeatureFactory.getInstance();
        ;
        var features = Features.getInstance();
        ;
        if (features.isFeature(mainFeatureFactory.FULL_SCREEN) != isFullScreen) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    isScreenChangeCanvas(fullScreenInterface) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.isScreenChange(false);
        ;
    }
}
FullScreenUtil.instance = new FullScreenUtil();
