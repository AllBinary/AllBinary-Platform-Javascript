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
//not plain js import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
const Graphics = globalThis.javax.microedition.lcdui.Graphics;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { Paintable } from './Paintable.js';
//not GWT import const PaintableInterface = globalThis.org.allbinary.graphics.paint.PaintableInterface;
export class PaintableComposite extends Paintable {
    constructor(paintableArray) {
        super();
        this.paintableArray = paintableArray;
    }
    paint(graphics) {
        for (var index = this.paintableArray.length - 1; index >= 0; index--) {
            this.paintableArray[index].paint(graphics);
        }
    }
    paintThreed(graphics) {
        for (var index = this.paintableArray.length - 1; index >= 0; index--) {
            this.paintableArray[index].paintThreed(graphics);
        }
    }
}
