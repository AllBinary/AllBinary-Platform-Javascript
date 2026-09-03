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
//not plain js import { Font } from '../../../../javax/microedition/lcdui/Font.js';
const Font = globalThis.javax.microedition.lcdui.Font;
//not plain js import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
const Graphics = globalThis.javax.microedition.lcdui.Graphics;
//not plain js import { Image } from '../../../../javax/microedition/lcdui/Image.js';
const Image = globalThis.javax.microedition.lcdui.Image;
import { NullImage } from '../../../../javax/microedition/lcdui/NullImage.js';
//not GWT import const NullImage = globalThis.javax.microedition.lcdui.NullImage;
import { ABCustomImageItem } from '../../../../org/allbinary/graphics/form/item/ABCustomImageItem.js';
//not GWT import const ABCustomImageItem = globalThis.org.allbinary.graphics.form.item.ABCustomImageItem;
import { CharArrayFactory } from '../../../../org/allbinary/logic/java/character/CharArrayFactory.js';
//not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;
import { MyFontProcessor } from '../../../../org/allbinary/graphics/font/MyFontProcessor.js';
//not GWT import const UpdateMyFontInterface = globalThis.org.allbinary.graphics.font.UpdateMyFontInterface;
import { UpdateMyFontProcessor } from '../../../../org/allbinary/graphics/font/UpdateMyFontProcessor.js';
//not GWT import const UpdateMyFontProcessor = globalThis.org.allbinary.graphics.font.UpdateMyFontProcessor;
//not plain js import { PrimitiveLongUtil } from '../../../../org/allbinary/logic/math/PrimitiveLongUtil.js';
const PrimitiveLongUtil = globalThis.org.allbinary.logic.math.PrimitiveLongUtil;
//not GWT import const RTSInterface = globalThis.org.allbinary.game.layer.RTSInterface;
export class TechnologyRTSInterfaceImageItem extends ABCustomImageItem {
    constructor(label, img, layout, altText, basicColor, rtsInterface) {
        super(label, img, layout, altText, basicColor, 0);
        this.primitiveLongUtil = PrimitiveLongUtil.createPowerOfTen(10000);
        this.LEVEL = "Level";
        this.COST = "Cost";
        this.DOLLAR = "$";
        this.myFontProcessor = new UpdateMyFontProcessor(this);
        this.costString = CharArrayFactory.getInstance().getZeroCharArray();
        this.costLength = 0;
        this.levelString = CharArrayFactory.getInstance().getZeroCharArray();
        this.levelLength = 0;
        this.adjustedCostLabelY = 0;
        this.adjustedCostX = 0;
        this.adjustedCostY = 0;
        this.adjustedLevelX = 0;
        this.adjustedLevelY = 0;
        //For kotlin this is before the body of the constructor.
        this.rtsInterface = rtsInterface;
        this.update();
    }
    updateMeasurement(graphics) {
        var font = graphics.getFont();
        ;
        var fontHeight = font.getHeight();
        ;
        var imageHeight = 0;
        ;
        var image = this.getImage();
        ;
        if (image != NullImage.NULL_IMAGE) {
            imageHeight = image.getHeight();
        }
        this.adjustedCostLabelY = -this.yOffset + imageHeight - (3 * fontHeight);
        this.adjustedCostY = -this.yOffset + imageHeight - (2 * fontHeight);
        this.adjustedCostX = 2 + (this.DOLLAR.length * (fontHeight - 1));
        this.adjustedLevelY = -this.yOffset + imageHeight - fontHeight;
        this.adjustedLevelX = 2 + (this.LEVEL.length * (fontHeight - 1));
        this.myFontProcessor = MyFontProcessor.getInstance();
    }
    getRtsInterface() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.rtsInterface;
    }
    update() {
        this.costString = this.primitiveLongUtil.getCharArray(this.getRtsInterface().getUpgradeCost());
        this.levelString = this.primitiveLongUtil.getCharArray(this.getRtsInterface().getLevel());
    }
    paintXY(graphics, x, y) {
        this.myFontProcessor.process(graphics);
        super.paintXY(graphics, x, y);
        var xa = x + 2;
        ;
        graphics.drawString(this.COST, xa, y + this.adjustedCostLabelY, 0);
        graphics.drawString(this.DOLLAR, xa, y + this.adjustedCostY, 0);
        graphics.drawChars(this.costString, 0, this.costLength, x + this.adjustedCostX, y + this.adjustedCostY, 0);
        graphics.drawString(this.LEVEL, xa, y + this.adjustedLevelY, 0);
        graphics.drawChars(this.levelString, 0, this.levelLength, x + this.adjustedLevelX, y + this.adjustedLevelY, 0);
    }
}
