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
//not GWT import const AnimationBehavior
import { IndexedAnimation } from '../../../../org/allbinary/animation/IndexedAnimation.js';
//not GWT import const IndexedAnimation
import { Anchor } from '../../../../org/allbinary/graphics/Anchor.js';
//not GWT import const Anchor
import { MyFontProcessor } from '../../../../org/allbinary/graphics/font/MyFontProcessor.js';
//not GWT import const UpdateMyFontInterface
import { UpdateMyFontProcessor } from '../../../../org/allbinary/graphics/font/UpdateMyFontProcessor.js';
//not GWT import const UpdateMyFontProcessor
import { SWTJOGLProcessor } from '../../../../org/allbinary/graphics/threed/SWTJOGLProcessor.js';
//not GWT import const SWTJOGLProcessor
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { TextChangeListener } from './TextChangeListener.js';
//not GWT import - same folder const TextChangeListener
export class TextAnimation extends IndexedAnimation {
    constructor(text, animationBehavior) {
        super(animationBehavior);
        this.logUtil = LogUtil.getInstance();
        this.updateMyFontProcessor = new UpdateMyFontProcessor(this);
        this.myFontProcessor = this.updateMyFontProcessor;
        this.textArrayP = StringUtil.getInstance().ONE_EMPTY_STRING_ARRAY;
        this.anchor = Anchor.TOP_LEFT;
        this.fontHeight = 0;
        this.offsetY = 0;
        this.textChangeListener = TextChangeListener.getInstance();
        //For kotlin this is before the body of the constructor.
        this.setText(text);
    }
    updateMeasurement(graphics) {
        var font = graphics.getFont();
        ;
        this.fontHeight = font.getHeight();
        var adjustedFontHeight = Math.round(-(this.fontHeight * 2.00));
        ;
        this.offsetY = SWTJOGLProcessor.getInstance().isJOGL()
            ?
                adjustedFontHeight
            :
                0;
        ;
        this.textChangeListener.onMeasure();
        this.textChangeListener = TextChangeListener.getInstance();
        this.myFontProcessor = MyFontProcessor.getInstance();
    }
    //@Throws(Exception.constructor)
    nextFrame() {
    }
    paintXY(graphics, x, y) {
        this.myFontProcessor.process(graphics);
        this.paintXYNoUpdate(graphics, x, y);
    }
    paintXYNoUpdate(graphics, x, y) {
        this.basicSetColorUtil.setBasicColorP3(graphics, this.getBasicColorP(), this.getColor());
        var size = this.textArrayP.length;
        ;
        for (var index = 0; index < size; index++) {
            graphics.drawString(this.textArrayP[index], x, y + this.offsetY + (index * this.fontHeight), this.anchor);
        }
    }
    setTextWithOnMeasure(text, textChangeListener) {
        this.setText(text);
        this.textChangeListener = textChangeListener;
    }
    setText(text) {
        var list = new BasicArrayListD();
        ;
        if (text !=
            null
            && text.length > 0) {
            var index = 0;
            ;
            var startIndex = 0;
            ;
            var endIndex = 0;
            ;
            while (index >= 0) {
                startIndex = index;
                index = text.indexOf('\n', startIndex);
                endIndex = index;
                if (index < 0) {
                    endIndex = text.length;
                }
                list.add(text.substring(startIndex, endIndex));
                if (index < 0) {
                    break;
                }
                index++;
            }
        }
        if (list.size() > 0) {
            var textArray = new Array(list.size());
            ;
            var size = list.size();
            ;
            for (var index = 0; index < size; index++) {
                textArray[index] = list.get(index);
            }
            this.textArrayP = textArray;
        }
        else {
            this.textArrayP = StringUtil.getInstance().ONE_EMPTY_STRING_ARRAY;
        }
        this.myFontProcessor = this.updateMyFontProcessor;
    }
    getTextArray() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.textArrayP;
    }
    getFontHeight() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.fontHeight;
    }
}
