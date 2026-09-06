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
import { Paintable } from '../../../../org/allbinary/graphics/paint/Paintable.js';
//not GWT import const Paintable = globalThis.org.allbinary.graphics.paint.Paintable;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class MainGameDemoStatePaintable extends Paintable {
    constructor(ownershipPaintableInterface, menuPaintableInterface) {
        super();
        this.ownershipPaintableInterface = ownershipPaintableInterface;
        this.menuPaintableInterface = menuPaintableInterface;
    }
    paint(graphics) {
        this.menuPaintableInterface.paint(graphics);
        this.ownershipPaintableInterface.paint(graphics);
    }
    getOwnershipPaintableInterface() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.ownershipPaintableInterface;
    }
    getMenuPaintableInterface() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.menuPaintableInterface;
    }
}
