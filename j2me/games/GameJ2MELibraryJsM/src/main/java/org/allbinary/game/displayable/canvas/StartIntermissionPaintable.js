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
//not GWT import const Graphics
import { Anchor } from '../../../../../org/allbinary/graphics/Anchor.js';
//not GWT import const BasicColor
import { BasicColorFactory } from '../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
//not GWT import const BasicColorFactory
import { BasicColorSetUtil } from '../../../../../org/allbinary/graphics/color/BasicColorSetUtil.js';
//not GWT import const BasicColorSetUtil
import { DisplayInfoSingleton } from '../../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
//not GWT import const DisplayInfoSingleton
import { FontDebugFactory } from '../../../../../org/allbinary/graphics/font/FontDebugFactory.js';
//not GWT import const FontDebugFactory
import { MyFontProcessor } from '../../../../../org/allbinary/graphics/font/MyFontProcessor.js';
//not GWT import const UpdateMyFontInterface
import { UpdateMyFontProcessor } from '../../../../../org/allbinary/graphics/font/UpdateMyFontProcessor.js';
//not GWT import const UpdateMyFontProcessor
import { InitUpdatePaintable } from '../../../../../org/allbinary/graphics/paint/InitUpdatePaintable.js';
//not GWT import const InitUpdatePaintable
//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//not GWT import - same folder const AllBinaryGameCanvas
export class StartIntermissionPaintable extends InitUpdatePaintable {
    constructor(gameCanvas, stringArray, basicColor, font) {
        super();
        this.fontDebugFactory = FontDebugFactory.getInstance();
        this.basicSetColorUtil = BasicColorSetUtil.getInstance();
        this.updateMyFontProcessor = new UpdateMyFontProcessor(this);
        this.myFontProcessor = this.updateMyFontProcessor;
        this.basicColor = BasicColorFactory.getInstance().BLACK;
        this.lineYOffsetArray = NullUtil.getInstance().NULL_INT_ARRAY;
        this.hasChanged = true;
        this.anchor = Anchor.TOP_LEFT;
        this.fontHeightP = 0;
        this.BEGIN_LEVEL = "Begin Level ";
        this.EMPTY_STRING = StringUtil.getInstance().EMPTY_STRING;
        this.gameCanvas = gameCanvas;
        this.stringArray = stringArray;
        this.lastWidth = new Array(this.stringArray.length);
        this.setBasicColorP(basicColor);
        this.color = basicColor.intValue();
        this.fontSize = font.getSize();
        this.font = font;
    }
    updateMeasurement(graphics) {
        var font = graphics.getFont();
        ;
        this.fontHeightP = font.getHeight();
        this.myFontProcessor = MyFontProcessor.getInstance();
    }
    paint(graphics) {
        this.myFontProcessor.process(graphics);
        var existingFont = graphics.getFont();
        ;
        this.fontDebugFactory.setFont(this.font, graphics);
        var displayInfo = DisplayInfoSingleton.getInstance();
        ;
        this.basicSetColorUtil.setBasicColorP3(graphics, this.basicColor, this.color);
        var beginWidth = 0;
        ;
        for (var index = this.lineYOffsetArray.length - 1; index >= 0; index--) {
            if (this.hasChanged) {
                this.lastWidth[index] = (graphics.getFont().stringWidth(this.stringArray[index]) >> 1);
            }
            beginWidth = this.lastWidth[index];
            graphics.drawString(this.stringArray[index], displayInfo.getLastHalfWidth() - beginWidth, displayInfo.getLastHalfHeight() - this.lineYOffsetArray[index], this.anchor);
        }
        this.hasChanged = false;
        this.fontDebugFactory.setFont(existingFont, graphics);
    }
    update() {
        var level = this.gameCanvas.getLayerManager().getGameInfo().getCurrentLevel();
        ;
        this.stringArray[0] = new StringMaker().append(this.BEGIN_LEVEL).appendint(level).toString();
        for (var index = this.stringArray.length - 1; index >= 1; index--) {
            this.stringArray[index] = this.EMPTY_STRING;
        }
    }
    setBasicColorP(basicColor) {
        this.basicColor = basicColor;
    }
    getBasicColorP() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.basicColor;
    }
}
