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
//not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;
import { BasicColorFactory } from '../../../../org/allbinary/graphics/color/BasicColorFactory.js';
//not GWT import const ColorCompositeInterface = globalThis.org.allbinary.graphics.color.ColorCompositeInterface;
import { Paintable } from '../../../../org/allbinary/graphics/paint/Paintable.js';
//not GWT import const Paintable = globalThis.org.allbinary.graphics.paint.Paintable;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class ColorFillBasePaintable extends Paintable {
    constructor(basicColor) {
        super();
        this.basicColor = BasicColorFactory.getInstance().WHITE;
        this.colorP = 0;
        this.setBasicColorP(basicColor);
    }
    setBasicColorP(basicColor) {
        this.basicColor = basicColor;
        this.setColor(this.getBasicColorP().intValue());
    }
    getBasicColorP() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.basicColor;
    }
    getColor() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.colorP;
    }
    setColor(color) {
        this.colorP = color;
    }
    paint(graphics) {
    }
}
