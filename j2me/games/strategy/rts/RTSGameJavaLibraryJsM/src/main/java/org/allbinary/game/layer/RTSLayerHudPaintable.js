/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2003 AllBinary
        *
        *  By agreeing to this license you and any business entity you represent are
        *  legally bound to the AllBinary Open License Version 1 legal agreement.
        *
        *  You may obtain the AllBinary Open License Version 1 legal agreement from
        *  AllBinary or the root directory of AllBinary's AllBinary Platform repository.
        *
        *  Created By: Travis Berthelot
*/
//not GWT import const Graphics
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
import { AndroidUtil } from '../../../../org/allbinary/AndroidUtil.js';
//not GWT import const AndroidUtil
import { CollidableDestroyableDamageableLayer } from '../../../../org/allbinary/game/layer/special/CollidableDestroyableDamageableLayer.js';
//not GWT import const UpdateMyFontInterface
//Current folder imports from return types, extended types, and scope (deduplicated)
import { SelectionHudPaintable } from './SelectionHudPaintable.js';
//not GWT import - same folder const RTSLayer
export class RTSLayerHudPaintable extends SelectionHudPaintable {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return RTSLayerHudPaintable.instance;
    }
    constructor() {
        super();
        this.weaponProperties = StringUtil.getInstance().getArrayInstance();
        this.rtsLayer = CollidableDestroyableDamageableLayer.getNullInstance();
        this.costY = 0;
        this.costY1 = 0;
        this.fontHeight = 0;
    }
    updateMeasurement(graphics) {
        super.updateMeasurement(graphics);
        var font = graphics.getFont();
        ;
        this.fontHeight = font.getHeight();
        this.costY1 = (this.y + ((this.weaponProperties.length + 1) * this.fontHeight));
        if (!AndroidUtil.isAndroid()) {
            this.costY = this.costY1;
        }
        else {
            this.costY = (this.y + ((this.weaponProperties.length + 2) * this.fontHeight));
        }
    }
    updateSelectionInfo() {
        this.setName(this.getRtsLayer().getName());
        var partInterface = this.getRtsLayer().getPartInterfaceArray()[0];
        ;
        this.weaponProperties = partInterface.getWeaponProperties().toStringArray();
        this.myFontProcessor = this.updateMyFontProcessor;
    }
    paint(graphics) {
        super.paint(graphics);
        var size = this.weaponProperties.length;
        ;
        for (var index = 0; index < size; index++) {
            graphics.drawString(this.weaponProperties[index], this.textX, this.y + ((index + 1) * this.fontHeight), 0);
        }
    }
    setRtsLayer(rtsLayer) {
        this.rtsLayer = rtsLayer;
    }
    getRtsLayer() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.rtsLayer;
    }
}
RTSLayerHudPaintable.instance = new RTSLayerHudPaintable();
