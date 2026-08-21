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
import { NullCanvas } from '../../../../../../javax/microedition/lcdui/NullCanvas.js';
import { NullCommandListener } from '../../../../../../javax/microedition/lcdui/NullCommandListener.js';
import { Processor } from '../../../../../../org/allbinary/canvas/Processor.js';
import { RunnableCanvas } from '../../../../../../org/allbinary/canvas/RunnableCanvas.js';
import { GameCommandsFactory } from '../../../../../../org/allbinary/game/commands/GameCommandsFactory.js';
import { CanvasStrings } from '../../../../../../org/allbinary/graphics/displayable/CanvasStrings.js';
import { MyFontProcessor } from '../../../../../../org/allbinary/graphics/font/MyFontProcessor.js';
import { UpdateMyFontProcessor } from '../../../../../../org/allbinary/graphics/font/UpdateMyFontProcessor.js';
import { ABCustomGaugeItem } from '../../../../../../org/allbinary/graphics/form/item/ABCustomGaugeItem.js';
import { NullPaintable } from '../../../../../../org/allbinary/graphics/paint/NullPaintable.js';
import { Paintable } from '../../../../../../org/allbinary/graphics/paint/Paintable.js';
import { PreLogUtil } from '../../../../../../org/allbinary/logic/communication/log/PreLogUtil.js';
import { SmallIntegerSingletonFactory } from '../../../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js';
import { StringMaker } from '../../../../../../org/allbinary/logic/string/StringMaker.js';
import { StringUtil } from '../../../../../../org/allbinary/logic/string/StringUtil.js';
import { AllBinaryMidlet } from '../../../../../../org/allbinary/midlet/AllBinaryMidlet.js';
import { PathFindingThreadPool } from '../../../../../../org/allbinary/thread/PathFindingThreadPool.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
//import { ProgressPaintable } from './ProgressPaintable.js';
export class ProgressCanvas extends RunnableCanvas {
    constructor(title, backgroundBasicColor, foregroundBasicColor) {
        super(NullCommandListener.NULL_COMMAND_LISTENER, CanvasStrings.getInstance().EMPTY_CHILD_NAME_LIST, false);
        this.hasPainted = false;
        //inner= member=true isStatic=
        this.ProgressPaintable = class extends Paintable {
            constructor(progressCanvas) {
                super();
                this.progressCanvas = progressCanvas;
            }
            paint(graphics) {
                this.progressCanvas.paint2(graphics);
            }
        };
        this.GAUGE_PAINTABLE = new this.ProgressPaintable(this);
        this.maxValue = 100.0;
        this.TEXT = this.commonStrings.LOADING;
        this.updateMyFontProcessor = new UpdateMyFontProcessor(this);
        this.myFontProcessor = this.updateMyFontProcessor;
        this.allbinaryMidlet = AllBinaryMidlet.NULL_ALLBINARY_MIDLET;
        this.value = 0.0;
        this.text = this.TEXT;
        this.background = true;
        this.paintable = this.GAUGE_PAINTABLE;
        this.inProgress = false;
        this.IN_GAME_PROCESSOR = new class extends Processor {
            constructor() {
                super(...arguments);
                this.pathFindingThreadPool = PathFindingThreadPool.getInstance();
            }
            //@Throws(Exception.constructor)
            process() {
                this.pathFindingThreadPool.runAPriorityTask();
            }
        };
        this.inGameProcessor = Processor.getInstance();
        this.backgroundLabel = "Background AI Game Loading...";
        this.START_BACKGROUND = "startBackground";
        this.ADD_PORTION = "addPortion";
        this.ADD_EARLY_PORTION = "addEarlyPortion";
        //For kotlin this is before the body of the constructor.
        this.backgroundBasicColor = backgroundBasicColor;
        this.gauge = new ABCustomGaugeItem(StringUtil.getInstance().EMPTY_STRING, Math.round(this.maxValue), 0, backgroundBasicColor, foregroundBasicColor);
    }
    updateMeasurement(graphics) {
        var font = graphics.getFont();
        ;
        this.gauge.setHeight(font.getHeight() + 2);
        this.myFontProcessor = MyFontProcessor.getInstance();
    }
    init(gameMidlet) {
        this.allbinaryMidlet = gameMidlet;
    }
    //@Throws(Exception.constructor)
    update(graphics) {
    }
    initCommands(cmdListener) {
    }
    getMaxValue() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.maxValue;
    }
    start() {
        this.logUtil.putF(this.commonStrings.START, this, this.commonStrings.START_METHOD_NAME);
        this.setBackground(true);
        this.gauge.setHeight(30);
        this.gauge.setLabel(this.commonStrings.PLEASE_WAIT);
        this.setText(this.TEXT);
        this.setValue(0);
        this.inGameProcessor = Processor.getInstance();
        this.paintable = this.GAUGE_PAINTABLE;
        this.inProgress = true;
    }
    startBackground(background) {
        this.logUtil.putF(this.commonStrings.START, this, this.START_BACKGROUND);
        this.setBackground(background);
        this.myFontProcessor = this.updateMyFontProcessor;
        this.gauge.setLabel(this.backgroundLabel);
        this.setText(this.TEXT);
        this.setValue(0);
        this.inGameProcessor = Processor.getInstance();
        this.paintable = this.GAUGE_PAINTABLE;
    }
    endActual() {
        this.allbinaryMidlet.commandAction(GameCommandsFactory.getInstance().SHOW_GAME_CANVAS, NullCanvas.NULL_CANVAS);
        this.inProgress = false;
        this.inGame();
    }
    inGame() {
        this.inGameProcessor = this.IN_GAME_PROCESSOR;
    }
    end() {
        this.logUtil.putF(this.commonStrings.START, this, this.commonStrings.END_METHOD_NAME);
        this.gauge.setValue(this.getMaxValue());
        this.endActual();
        this.paintable = NullPaintable.getInstance();
    }
    endFromInitialLazyLoadingComplete() {
        this.gauge.setValue(this.getMaxValue());
        this.inGameProcessor = this.IN_GAME_PROCESSOR;
    }
    endIfPaintedSinceStart() {
    }
    addEarlyPortion(value, text, index) {
        this.setText(new StringMaker().append(text).append(SmallIntegerSingletonFactory.getInstance().getAt(index).toString()).toString());
        this.gauge.setValue(this.gauge.getValue() + this.getMaxValue() / value);
    }
    addPortion(value, text, index) {
        this.setText(new StringMaker().append(text).append(SmallIntegerSingletonFactory.getInstance().getAt(index).toString()).toString());
        PreLogUtil.put(this.text, this, this.ADD_PORTION);
        this.gauge.setValue(this.gauge.getValue() + this.getMaxValue() / value);
    }
    addNormalPortion(value, text) {
        if (this.text != text) {
            PreLogUtil.put(text, this, this.ADD_PORTION);
        }
        this.setText(text);
        this.gauge.setValue(this.gauge.getValue() + this.getMaxValue() / value);
    }
    setValue(value) {
        this.value = value;
        this.gauge.setValue(value);
    }
    paint(graphics) {
        this.paintable.paint(graphics);
    }
    paint2(graphics) {
        this.myFontProcessor.process(graphics);
        graphics.setColor(this.backgroundBasicColor.intValue());
        graphics.fillRect(0, 0, this.displayInfo.getLastWidth(), this.displayInfo.getLastHeight());
        this.gauge.paintXY(graphics, 0, 0);
        this.hasPainted = true;
    }
    paintThreed(graphics) {
    }
    getValue() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.value;
    }
    setText(text) {
        this.text = text;
    }
    getText() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.text;
    }
    setBackground(background) {
        this.background = background;
    }
    isBackground() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.background;
    }
}
