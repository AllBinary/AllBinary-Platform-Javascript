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
import { CollidableDestroyableDamageableLayer } from '../../../../org/allbinary/game/layer/special/CollidableDestroyableDamageableLayer.js';
//not GWT import const CollidableDestroyableDamageableLayer
import { CharArrayFactory } from '../../../../org/allbinary/logic/java/character/CharArrayFactory.js';
//not GWT import const CharArrayFactory
import { DisplayInfoSingleton } from '../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
//not GWT import const DisplayInfoSingleton
import { MyFontProcessor } from '../../../../org/allbinary/graphics/font/MyFontProcessor.js';
//not GWT import const MyFontProcessor
import { CommonButtons } from '../../../../org/allbinary/input/motion/button/CommonButtons.js';
//not GWT import const CommonButtons
//Current folder imports from return types, extended types, and scope (deduplicated)
import { SelectionHudPaintable } from './SelectionHudPaintable.js';
//not GWT import - same folder const SelectionHudPaintable
import { RTSLayerCompositePaintable } from './RTSLayerCompositePaintable.js';
//not GWT import - same folder const RTSLayerCompositePaintable
import { UpgradableWideRTSLayerPaintable } from './UpgradableWideRTSLayerPaintable.js';
//not GWT import - same folder const RTSLayer
export class UpgradableRTSLayerHudPaintable extends SelectionHudPaintable {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return UpgradableRTSLayerHudPaintable.instance;
    }
    constructor() {
        super();
        this.PERCENT = "%";
        this.rtsLayer = CollidableDestroyableDamageableLayer.getNullInstance();
        this.costY = 0;
        this.costY1 = 0;
        this.percentCompleteX2 = 0;
        this.charHeight = 0;
        this.charWidth = 0;
        this.percentComplete = 0;
        this.percentCompleteX = 0;
        this.percentCompleteArray = CharArrayFactory.getInstance().getZeroCharArray();
        this.currentTotalDigits = 0;
    }
    updateMeasurement(graphics) {
        super.updateMeasurement(graphics);
        var font = graphics.getFont();
        ;
        this.charHeight = font.getHeight();
        this.charWidth = MyFontProcessor.defaultCharWidth(font);
    }
    update() {
        super.update();
        var commonButtons = CommonButtons.getInstance();
        ;
        this.costY = (this.y + commonButtons.STANDARD_BUTTON_SIZE);
        this.costY1 = (this.y + commonButtons.STANDARD_BUTTON_SIZE - this.charHeight);
        this.percentCompleteX2 = this.imageX + commonButtons.STANDARD_BUTTON_SIZE - this.charWidth;
        var displayInfoSingleton = DisplayInfoSingleton.getInstance();
        ;
        if (displayInfoSingleton.getLastWidth() > 320) {
            this.rtsLayerCompositePaintableLateInit = new UpgradableWideRTSLayerPaintable(this);
        }
        else {
            this.rtsLayerCompositePaintableLateInit = new RTSLayerCompositePaintable(this);
        }
    }
    updateSelectionInfo() {
        var rtsLayer = this.getRtsLayer();
        ;
        this.rtsLayerCompositePaintableLateInit.update(rtsLayer);
        this.setAnimationInterface(rtsLayer.getVerticleBuildAnimationInterface());
        this.setName(rtsLayer.getName());
    }
    updateInfo() {
        var rtsLayer = this.getRtsLayer();
        ;
        this.percentComplete = rtsLayer.getPercentComplete();
        if (this.percentComplete < 10) {
            this.percentCompleteX = 32;
        }
        else if (this.percentComplete < 100) {
            this.percentCompleteX = 24;
        }
        else {
            this.percentCompleteX = 16;
        }
        this.percentCompleteArray = this.getPrimitiveLongUtil().getCharArray(this.percentComplete);
        this.currentTotalDigits = this.getPrimitiveLongUtil().getCurrentTotalDigits();
    }
    paint(graphics) {
        super.paint(graphics);
        this.rtsLayerCompositePaintableLateInit.paint(graphics);
        graphics.drawChars(this.percentCompleteArray, 0, this.currentTotalDigits, this.imageX + this.percentCompleteX, this.costY, 0);
        graphics.drawString(this.PERCENT, this.percentCompleteX2, this.costY, 0);
        this.getAnimationInterface().paintXY(graphics, this.imageX, this.y);
    }
    setRtsLayer(rtsLayer) {
        this.rtsLayer = rtsLayer;
    }
    getRtsLayer() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.rtsLayer;
    }
}
UpgradableRTSLayerHudPaintable.instance = new UpgradableRTSLayerHudPaintable();
