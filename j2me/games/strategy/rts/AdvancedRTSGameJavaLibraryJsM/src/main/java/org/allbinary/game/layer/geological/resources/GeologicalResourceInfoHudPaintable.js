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
//not plain js import { Font } 
const Font = globalThis.javax.microedition.lcdui.Font;
//not plain js import { Graphics } 
const Graphics = globalThis.javax.microedition.lcdui.Graphics;
//not GWT import const RTSLayer = globalThis.org.allbinary.game.layer.RTSLayer;
import { WaypointInfoHudPaintable } from '../../../../../../org/allbinary/game/layer/waypoint/WaypointInfoHudPaintable.js';
//not GWT import const WaypointInfoHudPaintable = globalThis.org.allbinary.game.layer.waypoint.WaypointInfoHudPaintable;
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
import { KeyValueDrawCharArray } from '../../../../../../org/allbinary/graphics/draw/KeyValueDrawCharArray.js';
//not GWT import - same folder const GeologicalGeographicMapCellPosition = globalThis.org.allbinary.game.layer.geological.resources.GeologicalGeographicMapCellPosition;
export class GeologicalResourceInfoHudPaintable extends WaypointInfoHudPaintable {
    constructor() {
        super();
        this.fontHeight = 0;
        this.keyvalueDrawString = new KeyValueDrawCharArray(GeologicalResourceInfoHudPaintable.RESOURCES, this.textX);
    }
    updateMeasurement(graphics) {
        super.updateMeasurement(graphics);
        var font = graphics.getFont();
        ;
        this.fontHeight = (2 * font.getHeight());
    }
    updateSelectionInfo() {
        super.updateSelectionInfo();
        var rtsLayer = this.rtsLayerP;
        ;
        var list = rtsLayer.geographicMapCellPositionAreaBase.getOccupyingGeographicMapCellPositionList();
        ;
        var total = 0;
        ;
        for (var index = list.size(); --index >= 0;) {
            var geographicMapCellPosition = list.get(index);
            ;
            total += geographicMapCellPosition.getGeologicalResource().getTotal();
        }
        this.keyvalueDrawString.update(this.getPrimitiveLongUtil().getCharArray(total), this.getPrimitiveLongUtil().getCurrentTotalDigits());
    }
    paint(graphics) {
        super.paint(graphics);
        this.keyvalueDrawString.paint(graphics, (this.y + this.fontHeight));
    }
}
GeologicalResourceInfoHudPaintable.RESOURCES = "Resources: ";
