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
/* Generated Code Do Not Modify */
//not plain js import { Graphics } 
const Graphics = globalThis.javax.microedition.lcdui.Graphics;
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
import { Paintable } from '../../../../org/allbinary/graphics/paint/Paintable.js';
//not GWT import const Paintable = globalThis.org.allbinary.graphics.paint.Paintable;
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not GWT import - same folder const RTSLayer = globalThis.org.allbinary.game.layer.RTSLayer;
export class RTSLayerCompositePaintable extends Paintable {
    constructor(upgradableRTSLayerHudPaintable) {
        super();
        this.upgradeCost = StringUtil.getInstance().EMPTY_STRING;
        this.downGradeCost = StringUtil.getInstance().EMPTY_STRING;
        this.UPGRADE = "Up: $";
        this.DOWNGRADE = "Down: $-";
        this.upgradableRTSLayerHudPaintable = upgradableRTSLayerHudPaintable;
    }
    update(rtsLayer) {
        if (rtsLayer.isUpgradeable()) {
            this.setUpgradeCost(new StringMaker().append(this.UPGRADE).appendint(rtsLayer.getUpgradeCost()).toString());
        }
        else {
            this.setUpgradeCost(StringUtil.getInstance().EMPTY_STRING);
        }
        if (rtsLayer.isDowngradeable()) {
            this.setDownGradeCost(new StringMaker().append(this.DOWNGRADE).appendint(rtsLayer.getDowngradeCost()).toString());
        }
        else {
            this.setDownGradeCost(StringUtil.getInstance().EMPTY_STRING);
        }
    }
    paint(graphics) {
        graphics.drawString(this.getDownGradeCost(), this.upgradableRTSLayerHudPaintable.textX, this.upgradableRTSLayerHudPaintable.costY1, 0);
        graphics.drawString(this.getUpgradeCost(), this.upgradableRTSLayerHudPaintable.textX, this.upgradableRTSLayerHudPaintable.costY, 0);
    }
    setUpgradeCost(upgradeCost) {
        this.upgradeCost = upgradeCost;
    }
    getUpgradeCost() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.upgradeCost;
    }
    setDownGradeCost(downGradeCost) {
        this.downGradeCost = downGradeCost;
    }
    getDownGradeCost() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.downGradeCost;
    }
}
