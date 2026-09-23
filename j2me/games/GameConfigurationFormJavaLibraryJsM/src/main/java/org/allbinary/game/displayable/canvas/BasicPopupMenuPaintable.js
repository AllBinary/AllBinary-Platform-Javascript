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
import { AndroidUtil } from '../../../../../org/allbinary/AndroidUtil.js';
//not GWT import const AndroidUtil
import { J2MEUtil } from '../../../../../org/allbinary/J2MEUtil.js';
//not GWT import const Animation
import { NullAnimationFactory } from '../../../../../org/allbinary/animation/NullAnimationFactory.js';
//not GWT import const NullAnimationFactory
import { RectangleFilledAnimation } from '../../../../../org/allbinary/animation/vector/RectangleFilledAnimation.js';
//not GWT import const RectangleFilledAnimation
import { Features } from '../../../../../org/allbinary/game/configuration/feature/Features.js';
//not GWT import const Features
import { SWTUtil } from '../../../../../org/allbinary/game/layer/SWTUtil.js';
//not GWT import const BasicColor
import { BasicColorFactory } from '../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
//not GWT import const BasicColorFactory
import { BasicColorSetUtil } from '../../../../../org/allbinary/graphics/color/BasicColorSetUtil.js';
//not GWT import const BasicColorSetUtil
import { DrawVerticalStringUtil } from '../../../../../org/allbinary/graphics/draw/DrawVerticalStringUtil.js';
//not GWT import const DrawVerticalStringUtil
import { MyFontProcessor } from '../../../../../org/allbinary/graphics/font/MyFontProcessor.js';
//not GWT import const UpdateMyFontInterface
import { UpdateMyFontProcessor } from '../../../../../org/allbinary/graphics/font/UpdateMyFontProcessor.js';
//not GWT import const UpdateMyFontProcessor
import { OpenGLFeatureFactory } from '../../../../../org/allbinary/graphics/opengles/OpenGLFeatureFactory.js';
//not GWT import const OpenGLFeatureFactory
import { OpenGLFeatureUtil } from '../../../../../org/allbinary/graphics/opengles/OpenGLFeatureUtil.js';
//not GWT import const OpenGLFeatureUtil
import { Paintable } from '../../../../../org/allbinary/graphics/paint/Paintable.js';
//not GWT import const Paintable
import { SWTJOGLProcessor } from '../../../../../org/allbinary/graphics/threed/SWTJOGLProcessor.js';
//not GWT import const SWTJOGLProcessor
//Current folder imports from return types, extended types, and scope (deduplicated)
export class BasicPopupMenuPaintable extends Paintable {
    constructor(rectangle, backgroundBasicColor, foregroundBasicColor) {
        super();
        this.basicSetColorUtil = BasicColorSetUtil.getInstance();
        this.drawStringUtil = DrawVerticalStringUtil.getInstance();
        this.myFontProcessor = new UpdateMyFontProcessor(this);
        this.BORDER = 0;
        this.heightOffset = 0;
        this.offset = 0;
        this.foregroundBasicColor = foregroundBasicColor;
        this.label = BasicPopupMenuPaintable.NAME;
        this.rectangle = rectangle;
        if (J2MEUtil.isJ2ME() || J2MEUtil.isHTML()) {
            this.animationInterface = NullAnimationFactory.getFactoryInstance().getInstance(0);
        }
        else {
            this.animationInterface = new RectangleFilledAnimation(this.rectangle.getWidth(), this.rectangle.getHeight(), BasicColorFactory.getInstance().TRANSPARENT_GREY);
        }
        this.init(rectangle);
    }
    updateMeasurement(graphics) {
        var font = graphics.getFont();
        ;
        var features = Features.getInstance();
        ;
        var isOpenGL = features.isDefault(OpenGLFeatureFactory.getInstance().OPENGL);
        ;
        this.drawStringUtil.updateMeasurement(graphics, this.label);
        var BORDER = 0;
        ;
        if (J2MEUtil.isHTML() || isOpenGL) {
            BORDER = MyFontProcessor.defaultCharWidth(font) / 2;
        }
        else if (AndroidUtil.isAndroid() || J2MEUtil.isJ2SE() || SWTUtil.isSWT) {
            BORDER = MyFontProcessor.defaultCharWidth(font);
        }
        else {
            BORDER = MyFontProcessor.defaultCharWidth(font) * 2;
        }
        this.BORDER = BORDER;
        this.heightOffset = this.rectangle.getHeight() - (font.getHeight() * BasicPopupMenuPaintable.NAME.length);
        if (OpenGLFeatureUtil.getInstance().isAnyThreed()) {
            this.heightOffset -= font.getHeight() + 2;
            if (AndroidUtil.isAndroid()) {
                this.heightOffset = font.getHeight();
            }
            else {
                this.heightOffset -= font.getHeight() + 2;
            }
        }
        this.offset = (this.heightOffset >> 1) + (SWTJOGLProcessor.getInstance().isJOGL()
            ?
                4
            :
                0);
        ;
        this.myFontProcessor = MyFontProcessor.getInstance();
    }
    //@Throws(Exception.constructor)
    init(rectangle) {
        this.rectangle = rectangle;
        var width = this.rectangle.getWidth();
        ;
        var height = this.rectangle.getHeight();
        ;
        if (J2MEUtil.isJ2ME() || J2MEUtil.isHTML()) {
        }
        else {
            var rectangleFilledAnimation = this.animationInterface;
            ;
            rectangleFilledAnimation.setWidth(width);
            rectangleFilledAnimation.setHeight(height);
        }
    }
    paint(graphics) {
        this.myFontProcessor.process(graphics);
        var point = this.rectangle.getPoint();
        ;
        var x = point.getX();
        ;
        var y = point.getY();
        ;
        var width = this.rectangle.getWidth();
        ;
        var height = this.rectangle.getHeight();
        ;
        this.animationInterface.paintXY(graphics, x, y);
        this.basicSetColorUtil.setBasicColorP(graphics, this.foregroundBasicColor);
        this.drawStringUtil.paintVerticle(graphics, this.label, x + this.BORDER, y + this.offset, 0);
        graphics.drawRect(x, y, width, height);
    }
}
BasicPopupMenuPaintable.NAME = "MENU";
