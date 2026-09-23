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
//not GWT import const ColorFillBasePaintable
import { ColorFillPaintableFactory } from '../../../../../org/allbinary/game/paint/ColorFillPaintableFactory.js';
//not GWT import const Paintable
//Current folder imports from return types, extended types, and scope (deduplicated)
import { GameCommandCanvas } from './GameCommandCanvas.js';
//not GWT import - same folder const GameCommandCanvas
export class BasicPaintablesCanvas extends GameCommandCanvas {
    constructor(cmdListener, name, allBinaryGameLayerManager, paintableArray) {
        super(cmdListener, name, allBinaryGameLayerManager.getBackgroundBasicColor(), allBinaryGameLayerManager.getForegroundBasicColor());
        //For kotlin this is before the body of the constructor.
        this.paintableArray = paintableArray;
        this.colorFillPaintable = ColorFillPaintableFactory.getInstance().getInstance(allBinaryGameLayerManager.getBackgroundBasicColor(), false);
    }
    paint(graphics) {
        this.colorFillPaintable.paint(graphics);
        graphics.setColor(this.foregroundColor);
        for (var index = this.paintableArray.length - 1; index >= 0; index--) {
            this.paintableArray[index].paint(graphics);
        }
        super.paint(graphics);
    }
}
