/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2006 AllBinary
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
//not plain js import { Font } from '../../../../../javax/microedition/lcdui/Font.js';
const Font = globalThis.javax.microedition.lcdui.Font;
//not plain js import { Graphics } from '../../../../../javax/microedition/lcdui/Graphics.js';
const Graphics = globalThis.javax.microedition.lcdui.Graphics;
import { NullPathFindingLayer } from '../../../../../org/allbinary/game/layer/NullPathFindingLayer.js';
//not GWT import const RTSLayer = globalThis.org.allbinary.game.layer.RTSLayer;
import { SelectionHudPaintable } from '../../../../../org/allbinary/game/layer/SelectionHudPaintable.js';
//not GWT import const SelectionHudPaintable = globalThis.org.allbinary.game.layer.SelectionHudPaintable;
import { KeyValueDrawString } from '../../../../../org/allbinary/graphics/draw/KeyValueDrawString.js';
//not GWT import const KeyValueDrawString = globalThis.org.allbinary.graphics.draw.KeyValueDrawString;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class WaypointInfoHudPaintable extends SelectionHudPaintable {
    constructor() {
        super();
        this.rtsLayerP = NullPathFindingLayer.NULL_PATH_FINDING_LAYER;
        this.textLine2Y = 0;
        this.keyvalueDrawString = new KeyValueDrawString("Owner: ", this.textX);
    }
    updateMeasurement(graphics) {
        super.updateMeasurement(graphics);
        var font = graphics.getFont();
        ;
        this.textLine2Y = (this.y + font.getHeight());
    }
    updateSelectionInfo() {
        var rtsLayer = this.rtsLayerP;
        ;
        this.setName(rtsLayer.getName());
        this.setAnimationInterface(rtsLayer.getVerticleBuildAnimationInterface());
        this.keyvalueDrawString.update(rtsLayer.getParentLayer().getName());
    }
    setRtsLayer(rtsLayer) {
        this.rtsLayerP = rtsLayer;
    }
    getRtsLayer() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.rtsLayerP;
    }
    paint(graphics) {
        super.paint(graphics);
        this.keyvalueDrawString.paint(graphics, this.textLine2Y);
        this.getAnimationInterface().paintXY(graphics, this.imageX, this.y);
    }
}
