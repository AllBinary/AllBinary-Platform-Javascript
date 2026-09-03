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
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;
//not plain js import { Font } from '../../../../../javax/microedition/lcdui/Font.js';
const Font = globalThis.javax.microedition.lcdui.Font;
//not plain js import { Graphics } from '../../../../../javax/microedition/lcdui/Graphics.js';
const Graphics = globalThis.javax.microedition.lcdui.Graphics;
//not GWT import const GameKey = globalThis.org.allbinary.game.input.GameKey;
import { GameKeyFactory } from '../../../../../org/allbinary/game/input/GameKeyFactory.js';
//not GWT import const Input = globalThis.org.allbinary.game.input.Input;
import { PlatformInputMappingFactory } from '../../../../../org/allbinary/game/input/PlatformInputMappingFactory.js';
//not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;
import { BasicColorFactory } from '../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
//not GWT import const BasicColorFactory = globalThis.org.allbinary.graphics.color.BasicColorFactory;
//not plain js import { NullUtil } from '../../../../../org/allbinary/logic/NullUtil.js';
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
//not plain js import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//not plain js import { CommonLabels } from '../../../../../org/allbinary/string/CommonLabels.js';
const CommonLabels = globalThis.org.allbinary.string.CommonLabels;
//not plain js import { CommonSeps } from '../../../../../org/allbinary/string/CommonSeps.js';
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
//not plain js import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not plain js import { BasicArrayList } from '../../../../../org/allbinary/util/BasicArrayList.js';
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { HelpPaintable } from './HelpPaintable.js';
//not GWT import const HelpPaintable = globalThis.org.allbinary.game.paint.help.HelpPaintable;
//import { UpdateMyFontProperties } from './UpdateMyFontProperties.js';
//not GWT import const UpdateMyFontProperties = globalThis.org.allbinary.game.paint.help.UpdateMyFontProperties;
export class InputMappingHelpPaintable extends HelpPaintable {
    constructor(gameInputMappingArray, backgroundBasicColor, basicColor) {
        super("Input Mapping", backgroundBasicColor, basicColor);
        this.logUtil = LogUtil.getInstance();
        this.commonStrings = CommonStrings.getInstance();
        this.commonSeps = CommonSeps.getInstance();
        this.stringUtil = StringUtil.getInstance();
        this.basicColorFactory = BasicColorFactory.getInstance();
        this.NONE = GameKeyFactory.getInstance().NONE;
        this.EMPTY_STRING = StringUtil.getInstance().EMPTY_STRING;
        this.keyMappingArray = [];
        this.actionBasicColor = [];
        this.inputBasicColorArray = new Array(0).fill(null).map(() => new Array(0).fill(0));
        //inner= member=true isStatic=
        this.UpdateMyFontProperties = class extends Object {
            constructor() {
                /*Static stuff is not allowed for TypeScript inner classes*/ /**/
                super(...arguments);
                this.actionStringArray = StringUtil.getInstance().getArrayInstance();
                this.keymappingBeginWidthArray = NullUtil.getInstance().NULL_INT_ARRAY;
                this.actionStringDeltaXArray = NullUtil.getInstance().NULL_INT_ARRAY;
                this.inputDeltaXArray = NullUtil.getInstance().NULL_INT_ARRAY_ARRAY;
                this.sepArray = new Array(0).fill(null).map(() => new Array(0).fill(0));
                this.sepWidthArray = NullUtil.getInstance().NULL_INT_ARRAY_ARRAY;
                this.charHeight = 0;
            }
        };
        this.updateMyFontProperties = new this.UpdateMyFontProperties();
        //For kotlin this is before the body of the constructor.
        this.gameInputMappingArray = gameInputMappingArray;
        this.update(this.NONE, this.NONE);
        if (backgroundBasicColor == this.basicColorFactory.WHITE || basicColor == this.basicColorFactory.WHITE) {
            this.selectedBasicColor = this.basicColorFactory.RED;
        }
        else {
            this.selectedBasicColor = this.basicColorFactory.WHITE;
        }
    }
    updateMeasurement(graphics) {
        var font = graphics.getFont();
        ;
        var updateMyFontProperties = new this.UpdateMyFontProperties();
        ;
        updateMyFontProperties.charHeight = font.getHeight();
        var stringMaker = new StringMaker();
        ;
        var inputInfo = this.inputInfo;
        ;
        var size = inputInfo.length;
        ;
        updateMyFontProperties.actionStringArray = new Array(size);
        updateMyFontProperties.keymappingBeginWidthArray = new Array(size);
        updateMyFontProperties.actionStringDeltaXArray = new Array(size);
        updateMyFontProperties.inputDeltaXArray = new Array(size).fill(null).map(() => new Array(0).fill(0));
        updateMyFontProperties.sepArray = new Array(size).fill(null).map(() => new Array(0).fill(0));
        updateMyFontProperties.sepWidthArray = new Array(size).fill(null).map(() => new Array(0).fill(0));
        var list;
        ;
        var keyMappings;
        ;
        var actionString;
        ;
        var input;
        ;
        var size2 = 0;
        ;
        for (var index = 0; index < size; index++) {
            list = this.keyMappingArray[index];
            keyMappings = this.get(list);
            stringMaker.delete(0, stringMaker.length());
            actionString = stringMaker.append(inputInfo[index]).append(commonSeps.COLON).append(commonSeps.SPACE).append(commonSeps.SPACE).toString();
            updateMyFontProperties.actionStringArray[index] = actionString;
            stringMaker.delete(0, stringMaker.length());
            updateMyFontProperties.keymappingBeginWidthArray[index] = (font.stringWidth(stringMaker.append(updateMyFontProperties.actionStringArray[index]).append(keyMappings).toString()) >> 1);
            updateMyFontProperties.actionStringDeltaXArray[index] = font.stringWidth(actionString);
            size2 = list.size();
            updateMyFontProperties.inputDeltaXArray[index] = new Array(size2);
            updateMyFontProperties.sepArray[index] = new Array(size2);
            updateMyFontProperties.sepWidthArray[index] = new Array(size2);
            for (var index2 = 0; index2 < size2; index2++) {
                input = list.objectArray[index2];
                updateMyFontProperties.inputDeltaXArray[index][index2] = font.stringWidth(input.getName());
                updateMyFontProperties.sepArray[index][index2] = EMPTY_STRING;
                if (index2 + 1 < list.size()) {
                    if (list.size() == 2) {
                        updateMyFontProperties.sepArray[index][index2] = InputMappingHelpPaintable.AND;
                    }
                    else {
                        if (index2 + 2 == list.size()) {
                            updateMyFontProperties.sepArray[index][index2] = InputMappingHelpPaintable.MORE_THAN_TWO_IN_LIST_AND;
                        }
                        else {
                            updateMyFontProperties.sepArray[index][index2] = InputMappingHelpPaintable.SEP;
                        }
                    }
                }
                if (updateMyFontProperties.sepArray[index][index2] != EMPTY_STRING) {
                    updateMyFontProperties.sepWidthArray[index][index2] = font.stringWidth(updateMyFontProperties.sepArray[index][index2]);
                }
            }
        }
        this.updateMyFontProperties = updateMyFontProperties;
        super.updateMeasurement(graphics);
    }
    update(selectedGameKey, selectedInput) {
        var stringMaker = new StringMaker();
        ;
        this.logUtil.putF(stringMaker.append(CommonLabels.getInstance().START_LABEL).append("selected GameKey: ").append(this.stringUtil.toString(selectedGameKey)).append(" Input: ").append(this.stringUtil.toString(selectedInput)).toString(), this, this.commonStrings.UPDATE);
        var gameKeyMapping = PlatformInputMappingFactory.getInstance().getPersistentInputMappingInstance();
        ;
        var size = this.gameInputMappingArray.length;
        ;
        var keyInfo = new Array(size);
        ;
        var keyMappingArray = new Array(size);
        ;
        var actionBasicColor = new Array(size);
        ;
        var inputBasicColorArray = new Array(size);
        ;
        var gameInputMapping;
        ;
        var gameKey;
        ;
        var list;
        ;
        for (var index = 0; index < size; index++) {
            gameInputMapping = this.gameInputMappingArray[index];
            gameKey = gameInputMapping.getGameKey();
            list = gameKeyMapping.getInputMapping().getMappedInput(gameKey);
            var size2 = list.size();
            ;
            inputBasicColorArray[index] = new Array(size2);
            for (var index2 = 0; index2 < size2; index2++) {
                inputBasicColorArray[index][index2] = this.basicColor;
            }
            if (gameKey == selectedGameKey) {
                stringMaker.delete(0, stringMaker.length());
                this.logUtil.putF(stringMaker.append("Found: selected GameKey: ").append(this.stringUtil.toString(selectedGameKey)).toString(), this, this.commonStrings.UPDATE);
                actionBasicColor[index] = this.selectedBasicColor;
                var indexOfSelectedInput = list.indexOf(selectedInput);
                ;
                if (indexOfSelectedInput >= 0) {
                    stringMaker.delete(0, stringMaker.length());
                    this.logUtil.putF(stringMaker.append("Found: selected Input: ").append(this.stringUtil.toString(selectedInput)).toString(), this, this.commonStrings.UPDATE);
                    inputBasicColorArray[index][indexOfSelectedInput] = this.selectedBasicColor;
                }
            }
            else {
                actionBasicColor[index] = this.basicColor;
            }
            keyInfo[index] = gameInputMapping.getName();
            keyMappingArray[index] = list;
        }
        this.keyMappingArray = keyMappingArray;
        this.actionBasicColor = actionBasicColor;
        this.inputBasicColorArray = inputBasicColorArray;
        super.setInputInfoP(keyInfo);
        this.myFontProcessor = this.updateMyFontProcessor;
    }
    get(keyList) {
        var stringBuffer = new StringMaker();
        ;
        var key;
        ;
        var size = keyList.size();
        ;
        for (var index = 0; index < size; index++) {
            key = keyList.objectArray[index];
            stringBuffer.append(key.getName());
            if (index + 1 < keyList.size()) {
                if (keyList.size() == 2) {
                    stringBuffer.append(InputMappingHelpPaintable.AND);
                }
                else {
                    if (index + 2 == keyList.size()) {
                        stringBuffer.append(InputMappingHelpPaintable.MORE_THAN_TWO_IN_LIST_AND);
                    }
                    else {
                        stringBuffer.append(InputMappingHelpPaintable.SEP);
                    }
                }
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return stringBuffer.toString();
        ;
    }
    paint(graphics) {
        this.myFontProcessor.process(graphics);
        var halfWidth = this.displayInfo.getLastHalfWidth();
        ;
        graphics.setColor(this.basicColor.intValue());
        graphics.drawString(this.title, halfWidth - this.titleBeginWidth, this.updateMyFontProperties.charHeight, this.anchor);
        var inputInfo = this.inputInfo;
        ;
        var size = inputInfo.length;
        ;
        var y = 0;
        ;
        var deltaX = 0;
        ;
        var size2 = 0;
        ;
        var actionString;
        ;
        var input;
        ;
        var list;
        ;
        var sep;
        ;
        var beginWidth = 0;
        ;
        for (var index = 0; index < size; index++) {
            y = (index + 3) * this.updateMyFontProperties.charHeight;
            deltaX = 0;
            list = this.keyMappingArray[index];
            size2 = list.size();
            beginWidth = this.updateMyFontProperties.keymappingBeginWidthArray[index];
            graphics.setColor(this.actionBasicColor[index].intValue());
            actionString = this.updateMyFontProperties.actionStringArray[index];
            graphics.drawString(actionString, halfWidth - beginWidth + deltaX, y, this.anchor);
            deltaX += this.updateMyFontProperties.actionStringDeltaXArray[index];
            for (var index2 = 0; index2 < size2; index2++) {
                input = list.objectArray[index2];
                graphics.setColor(this.inputBasicColorArray[index][index2].intValue());
                graphics.drawString(input.getName(), halfWidth - beginWidth + deltaX, y, this.anchor);
                deltaX += this.updateMyFontProperties.inputDeltaXArray[index][index2];
                sep = this.updateMyFontProperties.sepArray[index][index2];
                graphics.setColor(this.basicColor.intValue());
                graphics.drawString(sep, halfWidth - beginWidth + deltaX, y, this.anchor);
                deltaX += this.updateMyFontProperties.sepWidthArray[index][index2];
            }
        }
    }
}
InputMappingHelpPaintable.AND = " and ";
InputMappingHelpPaintable.SEP = ", ";
InputMappingHelpPaintable.MORE_THAN_TWO_IN_LIST_AND = ", and ";
