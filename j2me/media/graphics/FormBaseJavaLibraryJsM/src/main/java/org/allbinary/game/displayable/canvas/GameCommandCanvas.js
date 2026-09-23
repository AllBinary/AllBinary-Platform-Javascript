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
import { RuntimeException } from '../../../../../java/lang/RuntimeException.js';
//not GWT import const Graphics
import { NullCommandListener } from '../../../../../javax/microedition/lcdui/NullCommandListener.js';
//not GWT import const Processor
import { GameCommandsFactory } from '../../../../../org/allbinary/game/commands/GameCommandsFactory.js';
//not GWT import const GameCommandsFactory
import { Features } from '../../../../../org/allbinary/game/configuration/feature/Features.js';
//not GWT import const Features
import { InputFeatureFactory } from '../../../../../org/allbinary/game/configuration/feature/InputFeatureFactory.js';
//not GWT import const InputFeatureFactory
import { RepaintBehavior } from '../../../../../org/allbinary/game/displayable/RepaintBehavior.js';
//not GWT import const RepaintBehavior
import { GameInputStrings } from '../../../../../org/allbinary/game/input/GameInputStrings.js';
//not GWT import const GameKey
import { GameKeyFactory } from '../../../../../org/allbinary/game/input/GameKeyFactory.js';
//not GWT import const GameKeyFactory
import { PlatformInputMappingFactory } from '../../../../../org/allbinary/game/input/PlatformInputMappingFactory.js';
//not GWT import const PlatformInputMappingFactory
import { DownGameKeyEventHandler } from '../../../../../org/allbinary/game/input/event/DownGameKeyEventHandler.js';
//not GWT import const GameKeyEvent
import { GameKeyEventFactory } from '../../../../../org/allbinary/game/input/event/GameKeyEventFactory.js';
//not GWT import const GameKeyEventFactory
import { GameKeyEventHandler } from '../../../../../org/allbinary/game/input/event/GameKeyEventHandler.js';
//not GWT import const GameKeyEventHandler
import { UpGameKeyEventHandler } from '../../../../../org/allbinary/game/input/event/UpGameKeyEventHandler.js';
//not GWT import const InputToGameKeyMapping
import { PointFactory } from '../../../../../org/allbinary/graphics/PointFactory.js';
//not GWT import const PointFactory
import { Rectangle } from '../../../../../org/allbinary/graphics/Rectangle.js';
//not GWT import const BasicColor
import { CanvasStrings } from '../../../../../org/allbinary/graphics/displayable/CanvasStrings.js';
//not GWT import const CanvasStrings
import { DisplayInfoSingleton } from '../../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
//not GWT import const DisplayInfoSingleton
import { MyCanvas } from '../../../../../org/allbinary/graphics/displayable/MyCanvas.js';
//not GWT import const DisplayChangeEvent
import { DisplayChangeEventHandler } from '../../../../../org/allbinary/graphics/displayable/event/DisplayChangeEventHandler.js';
//not GWT import const DisplayChangeEventListener
import { ScreenRepaintProcessorFactory } from '../../../../../org/allbinary/graphics/displayable/screen/ScreenRepaintProcessorFactory.js';
//not GWT import const ScreenRepaintProcessorFactory
import { MyFontProcessor } from '../../../../../org/allbinary/graphics/font/MyFontProcessor.js';
//not GWT import const UpdateMyFontInterface
import { UpdateMyFontProcessor } from '../../../../../org/allbinary/graphics/font/UpdateMyFontProcessor.js';
//not GWT import const UpdateMyFontProcessor
import { CommandCurrentSelectionFormFactory } from '../../../../../org/allbinary/graphics/form/CommandCurrentSelectionFormFactory.js';
//not GWT import const CommandCurrentSelectionFormFactory
import { FormPaintable } from '../../../../../org/allbinary/graphics/form/FormPaintable.js';
//not GWT import const FormPaintable
import { FormTypeFactory } from '../../../../../org/allbinary/graphics/form/FormTypeFactory.js';
//not GWT import const FormTypeFactory
import { PaintableForm } from '../../../../../org/allbinary/graphics/form/PaintableForm.js';
//not GWT import const ScrollSelectionForm
import { ScrollSelectionFormNoneFactory } from '../../../../../org/allbinary/graphics/form/ScrollSelectionFormNoneFactory.js';
//not GWT import const ScrollSelectionFormNoneFactory
import { CommandTextItemArrayFactory } from '../../../../../org/allbinary/graphics/form/item/CommandTextItemArrayFactory.js';
//not GWT import const ABCustomItem
import { AllCommandsVisitor } from '../../../../../org/allbinary/graphics/form/item/validation/AllCommandsVisitor.js';
//not GWT import const AllCommandsVisitor
import { NullPaintable } from '../../../../../org/allbinary/graphics/paint/NullPaintable.js';
//not GWT import const Paintable
import { BasicMotionGesturesHandler } from '../../../../../org/allbinary/input/motion/gesture/observer/BasicMotionGesturesHandler.js';
//not GWT import const BasicMotionGesturesHandler
//not plain js import { ForcedLogUtil } 
const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//not GWT import const AllBinaryEventObject
import { EventStrings } from '../../../../../org/allbinary/logic/util/event/EventStrings.js';
//not GWT import const EventStrings
//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//not GWT import - same folder const MenuListener
import { NoMenuInputProcessor } from './NoMenuInputProcessor.js';
//not GWT import - same folder const BasicMenuInputProcessor
import { ImmediateCommandFormInputProcessor } from './ImmediateCommandFormInputProcessor.js';
//not GWT import - same folder const ImmediateCommandFormInputProcessor
export class GameCommandCanvas extends MyCanvas {
    constructor(cmdListener, name, backgroundBasicColor, foregroundBasicColor) {
        super(name, CanvasStrings.getInstance().EMPTY_CHILD_NAME_LIST);
        this.repaintProcessor = ScreenRepaintProcessorFactory.getInstance().create(this);
        this.gameInputStrings = GameInputStrings.getInstance();
        this.inputToGameKeyMapping = PlatformInputMappingFactory.getInstance().getPersistentInputMappingInstance().getInputMapping();
        this.gameKeyFactory = GameKeyFactory.getInstance();
        this.gameKeyEventFactory = GameKeyEventFactory.getInstance();
        this.downGameKeyEventHandler = DownGameKeyEventHandler.getInstance();
        this.upGameKeyEventHandler = UpGameKeyEventHandler.getInstance();
        this.updateMyFontProcessor = new UpdateMyFontProcessor(this);
        this.myFontProcessor = this.updateMyFontProcessor;
        this.menuInputProcessor = NoMenuInputProcessor.getInstance();
        this.menuPaintable = NullPaintable.getInstance();
        this.menuForm = PaintableForm.getNullPaintableForm();
        this.isSingleKeyRepeatableProcessing = Features.getInstance().isFeature(InputFeatureFactory.getInstance().SINGLE_KEY_REPEAT_PRESS);
        this.fontHeight = 0;
        //For kotlin this is before the body of the constructor.
        this.repaintBehavior = RepaintBehavior.getInstance();
        this.foregroundBasicColor = foregroundBasicColor;
        this.backgroundBasicColor = backgroundBasicColor;
        this.foregroundColor = this.foregroundBasicColor.intValue();
        this.backgroundColor = this.backgroundBasicColor.intValue();
        this.initCommands(cmdListener);
        if (cmdListener != NullCommandListener.NULL_COMMAND_LISTENER) {
            try {
                this.initMenu();
                this.repaintProcessor.process();
                //: 
            }
            catch (e) {
                throw new RuntimeException();
            }
        }
    }
    updateMeasurement(graphics) {
        try {
            var font = graphics.getFont();
            ;
            this.logUtil.putF(new StringMaker().append(this.commonStrings.START).append(this.canvasStrings.FD_WIDTH).appendint(MyFontProcessor.defaultCharWidth(font)).append(this.canvasStrings.FD_HEIGHT).appendint(font.getHeight()).toString(), this, this.canvasStrings.UPDATE_MEASUREMENT);
            this.fontHeight = font.getHeight();
            var rectangle = this.createRectangle(this.menuForm.size());
            ;
            this.menuForm.init(rectangle, FormTypeFactory.getInstance().VERTICAL_CENTER_FORM);
            this.update();
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, this.canvasStrings.ON_DISPLAY_CHANGE_EVENT, e);
        }
        this.myFontProcessor = MyFontProcessor.getInstance();
    }
    onEvent(eventObject) {
        ForcedLogUtil.log(EventStrings.getInstance().PERFORMANCE_MESSAGE, this);
    }
    onDisplayChangeEvent(displayChangeEvent) {
        this.logUtil.putF(new StringMaker().append(this.commonStrings.START).append(DisplayInfoSingleton.getInstance().toString()).toString(), this, this.canvasStrings.ON_DISPLAY_CHANGE_EVENT);
        this.myFontProcessor = this.updateMyFontProcessor;
    }
    initCommands(cmdListener) {
        this.removeAllCommands();
        this.addCommand(GameCommandsFactory.getInstance().CLOSE_AND_SHOW_GAME_CANVAS);
        this.setCommandListener(cmdListener);
    }
    //@Throws(Exception.constructor)
    initMenu() {
        var form = this.createForm();
        ;
        this.menuForm = form;
        if (form != ScrollSelectionFormNoneFactory.getInstance()) {
            this.setMenuInputProcessor(new ImmediateCommandFormInputProcessor(new BasicArrayListD(), -1, this, form));
            this.menuPaintable = new FormPaintable(form);
        }
        this.repaintBehavior.onChangeRepaint(this);
    }
    //@Throws(Exception.constructor)
    createForm() {
        var items = new CommandTextItemArrayFactory(new AllCommandsVisitor()).getInstance(this.getCommandStack(), this.backgroundBasicColor, this.foregroundBasicColor);
        ;
        var rectangle = this.createRectangle(items.length);
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return CommandCurrentSelectionFormFactory.getInstance(StringUtil.getInstance().EMPTY_STRING, items, rectangle, FormTypeFactory.getInstance().VERTICAL_CENTER_FORM, 15, false, this.backgroundBasicColor, this.foregroundBasicColor);
        ;
    }
    createRectangle(size) {
        var height = size * this.fontHeight;
        ;
        var startY = (this.displayInfo.getLastHeight() * 2 / 3) - height;
        ;
        var pointFactory = PointFactory.getInstance();
        ;
        var rectangle = new Rectangle(pointFactory.createXY(30, startY), this.displayInfo.getLastWidth() - 30, startY);
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return rectangle;
    }
    open() {
        this.logUtil.putF(this.commonStrings.START, this, "open");
        BasicMotionGesturesHandler.getInstance().addListenerInterface(this.getMenuInputProcessor());
        GameKeyEventHandler.getInstance().addListener(this.getMenuInputProcessor());
        DisplayChangeEventHandler.getInstance().addListenerInterface(this);
    }
    close() {
        this.logUtil.putF(this.commonStrings.START, this, this.commonStrings.CLOSE);
        BasicMotionGesturesHandler.getInstance().removeListener(this.getMenuInputProcessor());
        GameKeyEventHandler.getInstance().removeListener(this.getMenuInputProcessor());
        DisplayChangeEventHandler.getInstance().removeListener(this);
    }
    //@Throws(Exception.constructor)
    update() {
        this.repaintProcessor.process();
    }
    getSourceId() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return GameCommandCanvas.id;
    }
    keyPressed(keyCode) {
        this.keyPressedByDevice(keyCode, 0);
    }
    keyReleased(keyCode) {
        this.keyReleasedByDevice(keyCode, 0);
    }
    keyRepeated(keyCode) {
        this.keyRepeatedByDevice(keyCode, 0);
    }
    keyPressedByDevice(keyCode, deviceId) {
        this.logUtil.putF(new StringMaker().append(CommonSeps.getInstance().SPACE).appendint(keyCode).toString(), this, this.gameInputStrings.KEY_PRESSED);
        this.addGameKeyEvent(keyCode, 0, false);
    }
    keyReleasedByDevice(keyCode, deviceId) {
        this.removeGameKeyEvent(keyCode, deviceId, false);
    }
    keyRepeatedByDevice(keyCode, deviceId) {
        if (this.isSingleKeyRepeatableProcessing) {
            this.addGameKeyEvent(keyCode, deviceId, true);
        }
    }
    addGameKeyEvent(keyCode, deviceId, repeated) {
        try {
            var gameKey = this.inputToGameKeyMapping.getInstanceForCanvas(this, keyCode);
            ;
            if (gameKey != this.gameKeyFactory.NONE) {
                var gameKeyEvent = this.gameKeyEventFactory.getInstanceForInput(this, gameKey);
                ;
                this.downGameKeyEventHandler.fireEvent(gameKeyEvent);
                this.downGameKeyEventHandler.getInstanceForDevice(deviceId).fireEvent(gameKeyEvent);
            }
            else {
                this.logUtil.putF(new StringMaker().append(this.gameInputStrings.NO_KEY).appendint(keyCode).toString(), this, this.gameInputStrings.ADD_KEY_EVENT);
            }
            //: 
        }
        catch (e) {
            this.logUtil.put("Key Event Error", this, this.gameInputStrings.ADD_KEY_EVENT, e);
        }
    }
    removeGameKeyEvent(keyCode, deviceId, repeated) {
        try {
            var gameKey = this.inputToGameKeyMapping.getInstanceForCanvas(this, keyCode);
            ;
            if (gameKey != this.gameKeyFactory.NONE) {
                var gameKeyEvent = this.gameKeyEventFactory.getInstanceForInput(this, gameKey);
                ;
                this.upGameKeyEventHandler.fireEvent(gameKeyEvent);
                this.upGameKeyEventHandler.getInstanceForDevice(deviceId).fireEvent(gameKeyEvent);
            }
            else {
                this.logUtil.putF(new StringMaker().append(this.gameInputStrings.NO_KEY).appendint(keyCode).toString(), this, this.gameInputStrings.REMOVE_KEY_EVENT);
            }
            //: 
        }
        catch (e) {
            this.logUtil.put("Key Event Error", this, this.gameInputStrings.REMOVE_KEY_EVENT, e);
        }
    }
    paint(graphics) {
        this.myFontProcessor.process(graphics);
        this.menuPaintable.paint(graphics);
        this.repaintBehavior.repaint(this);
    }
    setMenuInputProcessor(menuInputProcessor) {
        this.menuInputProcessor = menuInputProcessor;
    }
    getMenuInputProcessor() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.menuInputProcessor;
    }
}
GameCommandCanvas.id = 0;
