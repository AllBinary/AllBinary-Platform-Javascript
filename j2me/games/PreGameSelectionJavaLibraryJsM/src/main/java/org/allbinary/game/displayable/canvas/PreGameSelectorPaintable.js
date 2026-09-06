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
import { BasicColorFactory } from '../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
//not GWT import const BasicColorFactory = globalThis.org.allbinary.graphics.color.BasicColorFactory;
import { DisplayInfoSingleton } from '../../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
//not GWT import const DisplayInfoSingleton = globalThis.org.allbinary.graphics.displayable.DisplayInfoSingleton;
import { CanvasDrawLineString } from '../../../../../org/allbinary/graphics/draw/CanvasDrawLineString.js';
//not GWT import const CanvasDrawLineString = globalThis.org.allbinary.graphics.draw.CanvasDrawLineString;
import { InitUpdatePaintable } from '../../../../../org/allbinary/graphics/paint/InitUpdatePaintable.js';
//not GWT import - same folder const PreGameScrollSelectionForm = globalThis.org.allbinary.game.displayable.canvas.PreGameScrollSelectionForm;
export class PreGameSelectorPaintable extends InitUpdatePaintable {
    constructor(title, preGameScrollSelectionForm) {
        super();
        this.title = title;
        var displayInfo = DisplayInfoSingleton.getInstance();
        ;
        this.canvasDrawLineString = new CanvasDrawLineString(displayInfo.getLastHalfWidth(), 0);
        this.preGameScrollSelectionForm = preGameScrollSelectionForm;
    }
    update() {
        var displayInfo = DisplayInfoSingleton.getInstance();
        ;
        this.canvasDrawLineString = new CanvasDrawLineString(displayInfo.getLastHalfWidth(), 0);
    }
    paint(graphics) {
        graphics.setColor(BasicColorFactory.getInstance().WHITE.intValue());
        this.canvasDrawLineString.paint(graphics, title, 0);
        this.getPreGameSelectionForm().paint(graphics);
    }
    getPreGameSelectionForm() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.preGameScrollSelectionForm;
    }
}
