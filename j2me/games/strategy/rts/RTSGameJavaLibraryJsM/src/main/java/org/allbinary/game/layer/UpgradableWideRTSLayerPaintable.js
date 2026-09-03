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
//not plain js import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
const Graphics = globalThis.javax.microedition.lcdui.Graphics;
//not plain js import { CommonSeps } from '../../../../org/allbinary/string/CommonSeps.js';
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
//not plain js import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { RTSLayerCompositePaintable } from './RTSLayerCompositePaintable.js';
//not GWT import const RTSLayer = globalThis.org.allbinary.game.layer.RTSLayer;
export class UpgradableWideRTSLayerPaintable extends RTSLayerCompositePaintable {
    constructor(upgradableRTSLayerHudPaintable) {
        super(upgradableRTSLayerHudPaintable);
        this.cost = StringUtil.getInstance().EMPTY_STRING;
        //For kotlin this is before the body of the constructor.
    }
    update(rtsLayer) {
        super.update(rtsLayer);
        this.setCost(new StringMaker().append(this.getUpgradeCost()).append(CommonSeps.getInstance().SPACE).append(this.getDownGradeCost()).toString());
    }
    paint(graphics) {
        graphics.drawString(this.getCost(), this.upgradableRTSLayerHudPaintable.textX, this.upgradableRTSLayerHudPaintable.costY, 0);
    }
    setCost(cost) {
        this.cost = cost;
    }
    getCost() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.cost;
    }
}
