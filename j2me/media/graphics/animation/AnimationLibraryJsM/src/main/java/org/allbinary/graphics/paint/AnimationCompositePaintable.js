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
//not plain js import { Graphics } 
const Graphics = globalThis.javax.microedition.lcdui.Graphics;
//not GWT import const Animation = globalThis.org.allbinary.animation.Animation;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { InitUpdatePaintable } from './InitUpdatePaintable.js';
//not GWT import - same folder const InitUpdatePaintable = globalThis.org.allbinary.graphics.paint.InitUpdatePaintable;
export class AnimationCompositePaintable extends InitUpdatePaintable {
    constructor(animationInterface) {
        super();
        this.animationInterface = animationInterface;
    }
    paint(graphics) {
        this.animationInterface.paintXY(graphics, 0, 0);
    }
    paintThreed(graphics) {
        this.animationInterface.paintThreedXYZ(graphics, 0, 0, 0);
    }
}
