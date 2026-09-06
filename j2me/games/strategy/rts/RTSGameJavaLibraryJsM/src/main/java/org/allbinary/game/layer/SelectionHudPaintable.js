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
//not plain js import { Font } 
const Font = globalThis.javax.microedition.lcdui.Font;
//not plain js import { Graphics } 
const Graphics = globalThis.javax.microedition.lcdui.Graphics;
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//not GWT import const Animation = globalThis.org.allbinary.animation.Animation;
import { NullAnimationFactory } from '../../../../org/allbinary/animation/NullAnimationFactory.js';
//not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;
import { BasicColorFactory } from '../../../../org/allbinary/graphics/color/BasicColorFactory.js';
//not GWT import const BasicColorFactory = globalThis.org.allbinary.graphics.color.BasicColorFactory;
import { DisplayInfoSingleton } from '../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
//not GWT import const DisplayInfoSingleton = globalThis.org.allbinary.graphics.displayable.DisplayInfoSingleton;
import { MyFontProcessor } from '../../../../org/allbinary/graphics/font/MyFontProcessor.js';
//not GWT import const UpdateMyFontInterface = globalThis.org.allbinary.graphics.font.UpdateMyFontInterface;
import { UpdateMyFontProcessor } from '../../../../org/allbinary/graphics/font/UpdateMyFontProcessor.js';
//not GWT import const UpdateMyFontProcessor = globalThis.org.allbinary.graphics.font.UpdateMyFontProcessor;
import { InitUpdatePaintable } from '../../../../org/allbinary/graphics/paint/InitUpdatePaintable.js';
//not GWT import const InitUpdatePaintable = globalThis.org.allbinary.graphics.paint.InitUpdatePaintable;
import { CommonButtons } from '../../../../org/allbinary/input/motion/button/CommonButtons.js';
//not GWT import const CommonButtons = globalThis.org.allbinary.input.motion.button.CommonButtons;
import { TouchButtonLocationHelper } from '../../../../org/allbinary/input/motion/button/TouchButtonLocationHelper.js';
//not GWT import const TouchButtonLocationHelper = globalThis.org.allbinary.input.motion.button.TouchButtonLocationHelper;
//not plain js import { PrimitiveLongUtil } 
const PrimitiveLongUtil = globalThis.org.allbinary.logic.math.PrimitiveLongUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class SelectionHudPaintable extends InitUpdatePaintable {
    constructor() {
        super();
        this.y = CommonButtons.getInstance().STANDARD_BUTTON_SIZE + 17;
        this.updateMyFontProcessor = new UpdateMyFontProcessor(this);
        this.myFontProcessor = updateMyFontProcessor;
        this.x = 0;
        this.textX = 0;
        this.imageX = 0;
        this.basicColor = BasicColorFactory.getInstance().BLACK;
        this.color = 0;
        this.width = 0;
        this.height = 0;
        this.name = StringUtil.getInstance().EMPTY_STRING;
        this.animationInterface = NullAnimationFactory.getFactoryInstance().getInstance(0);
        this.backgroundColor = BasicColorFactory.getInstance().GREY.intValue();
        this.update();
        this.primitiveLongUtil = PrimitiveLongUtil.createPowerOfTen(10000);
    }
    updateMeasurement(graphics) {
        var commonButtons = CommonButtons.getInstance();
        ;
        var font = graphics.getFont();
        ;
        this.setHeight(commonButtons.STANDARD_BUTTON_SIZE + font.getHeight());
        this.myFontProcessor = MyFontProcessor.getInstance();
    }
    update() {
        var commonButtons = CommonButtons.getInstance();
        ;
        var touchButtonLocationHelper = new TouchButtonLocationHelper();
        ;
        var displayInfoSingleton = DisplayInfoSingleton.getInstance();
        ;
        this.x = commonButtons.STANDARD_BUTTON_SIZE + touchButtonLocationHelper.getColumnsRemainderHalf();
        this.textX = this.getX() + 4;
        this.width = displayInfoSingleton.getLastWidth() - this.getX() * 2;
        this.imageX = this.getWidth() + touchButtonLocationHelper.getColumnsRemainderHalf() - 10;
        this.myFontProcessor = this.updateMyFontProcessor;
    }
    updateSelectionInfo() {
    }
    updateInfo() {
    }
    getPrimitiveLongUtil() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.primitiveLongUtil;
    }
    setAnimationInterface(animationInterface) {
        this.animationInterface = animationInterface;
    }
    getAnimationInterface() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.animationInterface;
    }
    setName(name) {
        this.name = name;
    }
    getName() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.name;
    }
    setBasicColorP(basicColor) {
        this.basicColor = basicColor;
        this.setColor(basicColor.intValue());
    }
    getBasicColorP() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.basicColor;
    }
    setColor(color) {
        this.color = color;
    }
    getColor() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.color;
    }
    getWidth() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.width;
    }
    setHeight(height) {
        this.height = height;
    }
    getHeight() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.height;
    }
    getX() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.x;
    }
    paint(graphics) {
        this.myFontProcessor.process(graphics);
        graphics.setColor(this.backgroundColor);
        graphics.drawRect(this.getX(), this.y, this.getWidth(), this.getHeight());
        graphics.setColor(this.getColor());
        graphics.drawString(this.getName(), this.textX, this.y, 0);
    }
}
