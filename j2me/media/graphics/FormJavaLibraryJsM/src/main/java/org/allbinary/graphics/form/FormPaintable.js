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
//not GWT import - same folder const PaintableForm = globalThis.org.allbinary.graphics.form.PaintableForm;
export class FormPaintable extends Paintable {
    constructor(form) {
        super();
        this.form = form;
    }
    paint(graphics) {
        this.form.paint(graphics);
    }
    getForm() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.form;
    }
}
