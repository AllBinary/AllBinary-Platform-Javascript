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
//not plain js import { Canvas } 
const Canvas = globalThis.javax.microedition.lcdui.Canvas;
//not plain js import { CommandListener } 
const CommandListener = globalThis.javax.microedition.lcdui.CommandListener;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class FullScreenUtil extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return FullScreenUtil.instance;
    }
    //@Throws(Exception.constructor)
    initOnRun(fullScreenInterface, commandListener) {
    }
    init(fullScreenInterface) {
    }
    isScreenChange(isFullScreen) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    isScreenChangeCanvas(fullScreenInterface) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.isScreenChange(fullScreenInterface.isFullScreenMode());
        ;
    }
}
FullScreenUtil.instance = new FullScreenUtil();
