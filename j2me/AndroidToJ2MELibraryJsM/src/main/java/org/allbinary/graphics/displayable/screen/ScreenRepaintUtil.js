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
import { Object } from '../../../../../java/lang/Object.js';
//not plain js import { Canvas } from '../../../../../javax/microedition/lcdui/Canvas.js';
const Canvas = globalThis.javax.microedition.lcdui.Canvas;
//not plain js import { Displayable } from '../../../../../javax/microedition/lcdui/Displayable.js';
const Displayable = globalThis.javax.microedition.lcdui.Displayable;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class ScreenRepaintUtil extends Object {
    static repaint(displayable) {
        var canvas = displayable;
        ;
        canvas.repaint();
    }
}
