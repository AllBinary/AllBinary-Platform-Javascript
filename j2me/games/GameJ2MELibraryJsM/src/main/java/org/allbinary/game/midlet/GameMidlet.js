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
/* Generated Code Do Not Modify */
import { Exception } from '../../../../java/lang/Exception.js';
//not GWT import const Enumeration
import { Canvas } from '../../../../javax/microedition/lcdui/Canvas.js';
//not GWT import const Displayable
import { NullCanvas } from '../../../../javax/microedition/lcdui/NullCanvas.js';
//not GWT import const MIDletStateChangeException
import { J2MEUtil } from '../../../../org/allbinary/J2MEUtil.js';
//not GWT import const J2MEUtil
import { TsUtil } from '../../../../org/allbinary/TsUtil.js';
//not GWT import const TsUtil
import { GameAdStateFactory } from '../../../../org/allbinary/business/advertisement/GameAdStateFactory.js';
//not GWT import const GameAdStateFactory
import { FullScreenUtil } from '../../../../org/allbinary/canvas/FullScreenUtil.js';
//not GWT import const FullScreenUtil
import { GameStatisticsFactory } from '../../../../org/allbinary/canvas/GameStatisticsFactory.js';
//not GWT import const GameStatisticsFactory
import { DebugFactory } from '../../../../org/allbinary/debug/DebugFactory.js';
//not GWT import const GameAdState
import { GameInfo } from '../../../../org/allbinary/game/GameInfo.js';
//not GWT import const GameInfo
import { GameMode } from '../../../../org/allbinary/game/GameMode.js';
//not GWT import const GameMode
import { GameStrings } from '../../../../org/allbinary/game/GameStrings.js';
//not GWT import const GameStrings
import { GameTypeFactory } from '../../../../org/allbinary/game/GameTypeFactory.js';
//not GWT import const GameTypeFactory
import { PlayerTypesFactory } from '../../../../org/allbinary/game/PlayerTypesFactory.js';
//not GWT import const PlayerTypesFactory
import { GameCommandsFactory } from '../../../../org/allbinary/game/commands/GameCommandsFactory.js';
//not GWT import const GameCommandsFactory
import { GameOptionsForm } from '../../../../org/allbinary/game/configuration/GameOptionsForm.js';
//not GWT import const GameOptionsForm
import { GameOptionsFormFactory } from '../../../../org/allbinary/game/configuration/GameOptionsFormFactory.js';
//not GWT import const GameOptionsFormFactory
import { InGameFeatures } from '../../../../org/allbinary/game/configuration/InGameFeatures.js';
//not GWT import const InGameFeatures
import { InGameOptionsForm } from '../../../../org/allbinary/game/configuration/InGameOptionsForm.js';
//not GWT import const InGameOptionsForm
import { InGameOptionsFormFactory } from '../../../../org/allbinary/game/configuration/InGameOptionsFormFactory.js';
//not GWT import const InGameOptionsFormFactory
import { LoadGameForm } from '../../../../org/allbinary/game/configuration/LoadGameForm.js';
//not GWT import const LoadGameForm
import { ChangedGameFeatureListener } from '../../../../org/allbinary/game/configuration/event/ChangedGameFeatureListener.js';
//not GWT import const ChangedGameFeatureListener
import { GameFeatureEventHandler } from '../../../../org/allbinary/game/configuration/event/GameFeatureEventHandler.js';
//not GWT import const GameFeatureEventHandler
import { Features } from '../../../../org/allbinary/game/configuration/feature/Features.js';
//not GWT import const Features
import { GameFeatureFormUtil } from '../../../../org/allbinary/game/configuration/feature/GameFeatureFormUtil.js';
//not GWT import const GameFeatureFormUtil
import { MainFeatureFactory } from '../../../../org/allbinary/game/configuration/feature/MainFeatureFactory.js';
//not GWT import const MainFeatureFactory
import { GamePersistanceSingleton } from '../../../../org/allbinary/game/configuration/persistance/GamePersistanceSingleton.js';
//not GWT import const AllBinaryGameCanvas
import { BasicPaintablesCanvas } from '../../../../org/allbinary/game/displayable/canvas/BasicPaintablesCanvas.js';
//not GWT import const BasicPaintablesCanvas
import { DemoCanvas } from '../../../../org/allbinary/game/displayable/canvas/DemoCanvas.js';
//not GWT import const GameCanvasRunnableInterface
import { GameEventHandlerUtil } from '../../../../org/allbinary/game/displayable/canvas/GameEventHandlerUtil.js';
//not GWT import const GameEventHandlerUtil
import { GameInputMappingCanvas } from '../../../../org/allbinary/game/displayable/canvas/GameInputMappingCanvas.js';
//not GWT import const GameInputMappingCanvas
import { GameInputMappingInstructionsCanvas } from '../../../../org/allbinary/game/displayable/canvas/GameInputMappingInstructionsCanvas.js';
//not GWT import const MenuListener
import { NullGameCanvasRunnable } from '../../../../org/allbinary/game/displayable/canvas/NullGameCanvasRunnable.js';
//not GWT import const NullGameCanvasRunnable
import { TextNotificationUtil } from '../../../../org/allbinary/game/input/TextNotificationUtil.js';
//not GWT import const TextNotificationUtil
import { AllBinaryGameLayerManager } from '../../../../org/allbinary/game/layer/AllBinaryGameLayerManager.js';
//not GWT import const AllBinaryGameLayerManager
import { GameNotificationEventHandler } from '../../../../org/allbinary/game/layer/hud/event/GameNotificationEventHandler.js';
//not GWT import const HelpPaintable
import { HighScoreCommands } from '../../../../org/allbinary/game/score/HighScoreCommands.js';
//not GWT import const HighScoreCommands
import { HighScoreCommandsFactory } from '../../../../org/allbinary/game/score/HighScoreCommandsFactory.js';
//not GWT import const HighScoreCommandsFactory
import { HighScoreTextBox } from '../../../../org/allbinary/game/score/displayable/HighScoreTextBox.js';
//not GWT import const HighScoreTextBox
import { HighScoreUtil } from '../../../../org/allbinary/game/score/displayable/HighScoreUtil.js';
//not GWT import const HighScoreUtil
import { HighScoresCanvas } from '../../../../org/allbinary/game/score/displayable/HighScoresCanvas.js';
//not GWT import const HighScoresCanvas
import { GameStateFactory } from '../../../../org/allbinary/game/state/GameStateFactory.js';
//not GWT import const GameStateFactory
import { ResizableListenerHandler } from '../../../../org/allbinary/graphics/ResizableListenerHandler.js';
//not GWT import const ProgressCanvas
import { ProgressCanvasFactory } from '../../../../org/allbinary/graphics/canvas/transition/progress/ProgressCanvasFactory.js';
//not GWT import const ProgressCanvasFactory
import { BasicColorFactory } from '../../../../org/allbinary/graphics/color/BasicColorFactory.js';
//not GWT import const BasicColorFactory
import { ColorChangeEventHandler } from '../../../../org/allbinary/graphics/color/ColorChangeEventHandler.js';
//not GWT import const ColorChangeEventHandler
import { CanvasStrings } from '../../../../org/allbinary/graphics/displayable/CanvasStrings.js';
//not GWT import const MyCanvas
import { MyCommandsFactory } from '../../../../org/allbinary/graphics/displayable/command/MyCommandsFactory.js';
//not GWT import const MyCommandsFactory
import { AboutCommandProcessor } from '../../../../org/allbinary/graphics/displayable/screen/AboutCommandProcessor.js';
//not GWT import const AboutCommandProcessor
import { AboutPaintableFactory } from '../../../../org/allbinary/graphics/displayable/screen/AboutPaintableFactory.js';
//not GWT import const AboutPaintableFactory
import { CommandForm } from '../../../../org/allbinary/graphics/displayable/screen/CommandForm.js';
//not GWT import const CommandForm
import { WebCommandProcessor } from '../../../../org/allbinary/graphics/displayable/screen/WebCommandProcessor.js';
//not GWT import const WebCommandProcessor
import { AllBinarySensorManager } from '../../../../org/allbinary/input/AllBinarySensorManager.js';
//not GWT import const AllBinarySensorManager
import { VirtualKeyboardEventHandler } from '../../../../org/allbinary/input/event/VirtualKeyboardEventHandler.js';
//not GWT import const VirtualKeyboardEventHandler
import { BasicMotionGesturesHandler } from '../../../../org/allbinary/input/motion/gesture/observer/BasicMotionGesturesHandler.js';
//not GWT import const BasicMotionGesturesHandler
//not plain js import { ForcedLogUtil } 
const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;
//not plain js import { PreLogUtil } 
const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;
import { SmallIntegerSingletonFactory } from '../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js';
//not GWT import const SmallIntegerSingletonFactory
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not GWT import const ClientInformationFactory
import { InApplicationPurchaseFactory } from '../../../../org/allbinary/logic/system/security/licensing/InApplicationPurchaseFactory.js';
//not GWT import const LockableFeature
import { LockableFeatureFactory } from '../../../../org/allbinary/logic/system/security/licensing/LockableFeatureFactory.js';
//not GWT import const AllBinaryEventObject
import { EventStrings } from '../../../../org/allbinary/logic/util/event/EventStrings.js';
//not GWT import const EventStrings
import { AllBinaryMediaManager } from '../../../../org/allbinary/media/audio/AllBinaryMediaManager.js';
//not GWT import const AllBinaryMediaManager
import { MidletStrings } from '../../../../org/allbinary/midlet/MidletStrings.js';
//not GWT import const MidletStrings
import { ProgressMidlet } from '../../../../org/allbinary/midlet/ProgressMidlet.js';
//not GWT import const ProgressMidlet
import { NullThread } from '../../../../org/allbinary/thread/NullThread.js';
//not GWT import const NullThread
import { ThreadFactoryUtil } from '../../../../org/allbinary/thread/ThreadFactoryUtil.js';
//not GWT import const ThreadFactoryUtil
import { ThreadUtil } from '../../../../org/allbinary/thread/ThreadUtil.js';
//not GWT import const ThreadUtil
import { TimeDelayHelper } from '../../../../org/allbinary/time/TimeDelayHelper.js';
//not GWT import const TimeDelayHelper
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { EnumerationUtil } 
const EnumerationUtil = globalThis.org.allbinary.util.EnumerationUtil;
//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { GameMidletStateFactory } from './GameMidletStateFactory.js';
//not GWT import - same folder const GameMidletStateFactory
import { GameMidletEventHandler } from './GameMidletEventHandler.js';
//not GWT import - same folder const GameMidletEventHandler
import { DemoGameMidletEvent } from './DemoGameMidletEvent.js';
//not GWT import - same folder const DemoGameMidletEvent
import { DemoGameMidletStateFactory } from './DemoGameMidletStateFactory.js';
//not GWT import - same folder const DemoGameMidletStateFactory
export class GameMidlet extends ProgressMidlet {
    constructor(clientInformationFactory) {
        super(clientInformationFactory);
        this.enumerationUtil = EnumerationUtil.getInstance();
        this.basicColorFactory = BasicColorFactory.getInstance();
        this.features = Features.getInstance();
        this.midletStrings = MidletStrings.getInstance();
        this.myCommandsFactory = MyCommandsFactory.getInstance();
        this.gameStrings = GameStrings.getInstance();
        this.gameAdStateFactory = GameAdStateFactory.getInstance();
        this.gameStateFactory = GameStateFactory.getInstance();
        this.tsUtil = TsUtil.getInstance();
        this.DISPLAYABLE = " Displayable: ";
        this.COMMAND_NAME = "command Name/Label: ";
        this.NO_COMMAND = "No Command";
        this.NO_DISPLAYABLE = "No Displayable";
        this.COMMAND_ACTION = new StringMaker().append("GameMidlet::").append(this.midletStrings.COMMAND_ACTION).toString();
        this.PAUSE_APP_BACKGROUND = "pauseAppBackground";
        this.UN_PAUSE_APP_BACKGROUND = "unPauseAppBackground";
        this.aboutCommandProcessor = AboutCommandProcessor.getInstance();
        this.webCommandProcessor = WebCommandProcessor.getInstance();
        this.gameMidletStateFactory = GameMidletStateFactory.getInstance();
        this.gameStartTimeHelper = new TimeDelayHelper(240);
        this.fullScreenUtil = FullScreenUtil.getInstance();
        this.allbinaryGameCanvasRunnableInterface = NullGameCanvasRunnable.NULL_GAME_CANVAS_RUNNABLE;
        this.thread = NullThread.NULL_THREAD;
        this.isFullScreen = false;
        this.resized = false;
        this.startedBefore = false;
        //For kotlin this is before the body of the constructor.
        SmallIntegerSingletonFactory.getInstance().initWithRange(0x291, 6);
        this.loadGameForm = CommandForm.getNullCommandForm();
        var progressCanvas = ProgressCanvasFactory.getInstance();
        ;
        progressCanvas.init(this);
        GameFeatureEventHandler.getInstance().addListenerInterface(ChangedGameFeatureListener.getInstance());
        GamePersistanceSingleton.getInstance().clear();
        this.debugInterface = DebugFactory.getInstance();
        this.init();
    }
    init() {
    }
    //@Throws(Exception.constructor)
    setDemo() {
        throw new Exception(this.commonStrings.NOT_IMPLEMENTED);
    }
    //@Throws(Exception.constructor)
    createGame() {
        throw new Exception(this.commonStrings.NOT_IMPLEMENTED);
    }
    //@Throws(Exception.constructor)
    mediaShutdown() {
        throw new Exception(this.commonStrings.NOT_IMPLEMENTED);
    }
    stopAll() {
    }
    pauseApp() {
        this.pauseAppBackground(true);
        var gameAdState = this.gameAdStateFactory.getCurrentInstance();
        ;
        gameAdState.getAdvertisements().stopAll();
    }
    pauseAppBackground(background) {
        this.logUtil.putF(this.commonStrings.START, this, this.PAUSE_APP_BACKGROUND);
        if (this.allbinaryGameCanvasRunnableInterface != NullGameCanvasRunnable.NULL_GAME_CANVAS_RUNNABLE) {
            this.allbinaryGameCanvasRunnableInterface.pause();
        }
        else {
            this.logUtil.putF("<<<<<< Null", this, this.PAUSE_APP_BACKGROUND);
        }
        AllBinarySensorManager.getInstance().shutdown();
    }
    unPauseApp() {
        this.unPauseAppBackground(true);
        var gameAdState = this.gameAdStateFactory.getCurrentInstance();
        ;
        gameAdState.getAdvertisements().startAll();
    }
    unPauseAppBackground(background) {
        this.logUtil.putF(this.commonStrings.START, this, this.UN_PAUSE_APP_BACKGROUND);
        AllBinarySensorManager.getInstance().init();
        var gameCanvasRunnableInterface = this.allbinaryGameCanvasRunnableInterface;
        ;
        if (gameCanvasRunnableInterface != NullGameCanvasRunnable.NULL_GAME_CANVAS_RUNNABLE) {
            gameCanvasRunnableInterface.unPause();
        }
        else {
            this.logUtil.putF("<<<<<< Null", this, this.UN_PAUSE_APP_BACKGROUND);
        }
    }
    destroyAppInRunnable(unconditional, isProgress) {
        var progressCanvas = ProgressCanvasFactory.getInstance();
        ;
        if (isProgress) {
            progressCanvas.start();
            this.commandAction(this.myCommandsFactory.SET_DISPLAYABLE, progressCanvas);
        }
        this.destroyApp(unconditional);
        if (isProgress) {
            progressCanvas.end();
        }
    }
    destroyApp(unconditional) {
        var METHOD_NAME = "GameMidlet::destroyApp";
        ;
        try {
            PreLogUtil.put(GameStatisticsFactory.getInstance().toString(), this, METHOD_NAME);
            var gameAdState = this.gameAdStateFactory.getCurrentInstance();
            ;
            gameAdState.getAdvertisements().stopAll();
            if (!this.isDestroyed()) {
                this.stopGameCanvasRunnableInterface();
                this.setGameCanvasRunnableInterface(NullGameCanvasRunnable.NULL_GAME_CANVAS_RUNNABLE);
                this.mediaShutdown();
            }
            else {
                this.logUtil.putF("Midlet Managment Error: Midlet Should Only Be Destroyed Once", this, METHOD_NAME);
            }
            super.destroyApp(true);
            PreLogUtil.put(this.commonStrings.END, this, METHOD_NAME);
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, METHOD_NAME, e);
        }
        this.logUtil.putF(this.commonStrings.END, this, METHOD_NAME);
    }
    //@Throws(MIDletStateChangeException.constructor)
    startApp() {
        try {
            var gameAdState = this.gameAdStateFactory.getCurrentInstance();
            ;
            gameAdState.getAdvertisements().startAll();
            var START_APP = "startApp";
            ;
            this.logUtil.putF(this.commonStrings.START, this, START_APP);
            var gameCanvasRunnableInterface = this.allbinaryGameCanvasRunnableInterface;
            ;
            if (gameCanvasRunnableInterface == NullGameCanvasRunnable.NULL_GAME_CANVAS_RUNNABLE) {
                this.gameMidletStateFactory.setCurrentGameState(this.gameStateFactory.NO_GAME_STATE);
                this.setDemo();
            }
            else {
                this.logUtil.putF("GameCanvasRunnableInterface is available", this, START_APP);
                if (gameCanvasRunnableInterface == this.getCurrentDisplayable()) {
                    this.unPauseAppBackground(false);
                }
                else {
                    this.logUtil.putF("GameCanvasRunnableInterface is not current displayable", this, START_APP);
                }
            }
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, "startApp", e);
            this.destroyApp(false);
            this.notifyDestroyed();
        }
    }
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    commandAction(command, displayable) {
        try {
            var displayableAsString = this.NO_DISPLAYABLE;
            ;
            if (displayable !=
                null) {
                displayableAsString = displayable.toString();
            }
            var label = this.NO_COMMAND;
            ;
            if (command !=
                null) {
                label = command.getLabel();
            }
            PreLogUtil.put(new StringMaker().append(this.COMMAND_NAME).append(label).append(this.DISPLAYABLE).append(displayableAsString).toString(), this, this.COMMAND_ACTION);
            var gameCommandsFactory = GameCommandsFactory.getInstance();
            ;
            var allbinaryGameCanvasRunnableInterface = this.allbinaryGameCanvasRunnableInterface;
            ;
            var gameCanvasRunnableInterface = allbinaryGameCanvasRunnableInterface;
            ;
            if (command == gameCommandsFactory.SHOW_GAME_CANVAS) {
                if (this.getDisplay().getCurrent() != gameCanvasRunnableInterface && allbinaryGameCanvasRunnableInterface.getType() != NullGameCanvasRunnable.NULL_GAME_CANVAS_RUNNABLE.getType()) {
                    this.setDisplay(gameCanvasRunnableInterface);
                }
                this.unPauseAppBackground(false);
            }
            else if (command == gameCommandsFactory.CLOSE_AND_SHOW_GAME_CANVAS) {
                var menuListener = displayable;
                ;
                menuListener.close();
                this.setDisplay(gameCanvasRunnableInterface);
                this.unPauseAppBackground(false);
            }
            else if (command == gameCommandsFactory.EXIT_COMMAND) {
                if (GameMidletEventHandler.getInstance().getEventListenerInterfaceListP().size() == 0) {
                    this.exitProgress(true);
                }
                GameMidletEventHandler.getInstance().fireEvent(new DemoGameMidletEvent(this, DemoGameMidletStateFactory.getInstance().NONE));
            }
            else if (command == gameCommandsFactory.EXIT_WITHOUT_PROGRESS_COMMAND) {
                this.exitProgress(false);
            }
            else if (command == gameCommandsFactory.START_COMMAND || command == gameCommandsFactory.RESTART_COMMAND || command == gameCommandsFactory.CONTINUE_COMMAND) {
                if (this.gameMidletStateFactory.getCurrentGameState() != this.gameStateFactory.PLAYING_GAME_STATE || command == gameCommandsFactory.RESTART_COMMAND) {
                    if (this.gameStartTimeHelper.isTimeTNT()) {
                        if (command == gameCommandsFactory.START_COMMAND && this.isDemoLoading()) {
                            this.logUtil.putF("Trying to Start Game Before Loading Complete", this, this.midletStrings.COMMAND_ACTION);
                        }
                        else {
                            this.startedBefore = true;
                            this.createGame();
                            this.gameMidletStateFactory.setCurrentGameState(this.gameStateFactory.PLAYING_GAME_STATE);
                        }
                    }
                    else {
                        this.logUtil.putF("Starting Game Too Often", this, this.midletStrings.COMMAND_ACTION);
                    }
                }
                else {
                    this.logUtil.putF("Already in playing state", this, this.COMMAND_ACTION);
                }
            }
            else if (command == gameCommandsFactory.BUY_COMMAND) {
                var inApplicationPurchaseFactory = InApplicationPurchaseFactory.getInstance();
                ;
                var list = LockableFeatureFactory.getInstance().getList();
                ;
                var lockableFeature = list.get(0);
                ;
                if (list.size() > 0 && !inApplicationPurchaseFactory.isPurchased(lockableFeature)) {
                    inApplicationPurchaseFactory.purchase(lockableFeature);
                }
                else {
                    TextNotificationUtil.getInstance().fireSuccess("Already Purchased");
                }
            }
            else if (command == gameCommandsFactory.QUIT_COMMAND) {
                if (this.gameStartTimeHelper.isTimeTNT()) {
                    if (displayable instanceof HighScoreTextBox) {
                        var menuListener = displayable;
                        ;
                        menuListener.close();
                    }
                    this.stopGameCanvasRunnableInterface();
                    this.gameMidletStateFactory.setCurrentGameState(this.gameStateFactory.NO_GAME_STATE);
                    this.setDemo();
                }
            }
            else if (command == this.myCommandsFactory.RESUME_COMMAND) {
                this.unPauseAppBackground(false);
            }
            else if (command == this.myCommandsFactory.PAUSE_COMMAND) {
                this.pauseAppBackground(false);
            }
            else if (command == this.myCommandsFactory.SET_DISPLAYABLE) {
                this.pauseAppBackground(false);
                this.setDisplay(displayable);
            }
            else if (command == gameCommandsFactory.SET_MENU_DISPLAYABLE) {
                this.pauseAppBackground(false);
                var menuListener = displayable;
                ;
                menuListener.open();
                this.setDisplay(displayable);
            }
            else if (command == gameCommandsFactory.START_TRACE) {
                this.debugInterface.start();
                var gameCanvas = allbinaryGameCanvasRunnableInterface;
                ;
                gameCanvas.addCommand(gameCommandsFactory.STOP_TRACE);
                gameCanvas.removeCommand(gameCommandsFactory.START_TRACE);
            }
            else if (command == gameCommandsFactory.STOP_TRACE) {
                this.pauseAppBackground(false);
                this.debugInterface.stop();
                this.unPauseAppBackground(false);
                var gameCanvas = allbinaryGameCanvasRunnableInterface;
                ;
                gameCanvas.addCommand(gameCommandsFactory.START_TRACE);
                gameCanvas.removeCommand(gameCommandsFactory.STOP_TRACE);
            }
            else if (command == gameCommandsFactory.DEFAULT_OPTIONS) {
                var tempDisplayable = displayable;
                ;
                if (tempDisplayable instanceof GameOptionsForm) {
                    GameFeatureFormUtil.getInstance().setDefault(tempDisplayable);
                }
            }
            else if (command == GameInputMappingInstructionsCanvas.DISPLAY) {
                var tempDisplayable = displayable;
                ;
                if (tempDisplayable instanceof GameInputMappingCanvas) {
                    var gameInputMappingCanvas = tempDisplayable;
                    ;
                    gameInputMappingCanvas.update();
                }
                this.commandAction(gameCommandsFactory.SET_MENU_DISPLAYABLE, this.getInputMappingInstructionsCanvas());
            }
            else if (HighScoreCommandsFactory.getInstance().isHighScoreCommand(command)) {
                var tempDisplayable = displayable;
                ;
                if (tempDisplayable instanceof HighScoresCanvas) {
                    var highScoresCanvas = tempDisplayable;
                    ;
                    highScoresCanvas.updateCommand(command);
                }
            }
            else if (command == HighScoreCommands.getInstance().DISPLAY) {
                this.commandAction(gameCommandsFactory.SET_MENU_DISPLAYABLE, this.createHighScoresCanvas());
            }
            else if (command == GameInputMappingInstructionsCanvas.CLOSE) {
                var menuListener = displayable;
                ;
                menuListener.close();
                this.commandAction(GameInputMappingCanvas.DISPLAY, NullCanvas.NULL_CANVAS);
            }
            else if (command == GameInputMappingCanvas.DISPLAY) {
                if (J2MEUtil.isHTML()) {
                    this.pauseAppBackground(false);
                }
                this.commandAction(gameCommandsFactory.SET_MENU_DISPLAYABLE, this.getInputMappingCanvas());
            }
            else if (command == GameInputMappingCanvas.DEFAULT) {
                var tempDisplayable = displayable;
                ;
                if (tempDisplayable instanceof GameInputMappingCanvas) {
                    var gameInputMappingCanvas = tempDisplayable;
                    ;
                    gameInputMappingCanvas.setDefault();
                }
            }
            else if (command == InGameOptionsForm.DISPLAY) {
                this.pauseAppBackground(false);
                var progressCanvas = ProgressCanvasFactory.getInstance();
                ;
                progressCanvas.addNormalPortion(50, "In Game Options");
                var layerManager = this.createGameLayerManager();
                ;
                var inGameOptionsFormFactory = InGameOptionsFormFactory.getInstance();
                ;
                inGameOptionsFormFactory.init(this, new InGameFeatures(), "Options In Game", layerManager.getBackgroundBasicColor(), layerManager.getForegroundBasicColor());
                var inGameOptionsForm = inGameOptionsFormFactory.get();
                ;
                inGameOptionsForm.setItemStateListener(allbinaryGameCanvasRunnableInterface);
                this.commandAction(gameCommandsFactory.SET_MENU_DISPLAYABLE, inGameOptionsForm);
            }
            else if (command == InGameOptionsForm.DEFAULT) {
                var inGameOptionsForm = InGameOptionsFormFactory.getInstance().get();
                ;
                GameFeatureFormUtil.getInstance().setDefault(inGameOptionsForm);
            }
            else if (command == gameCommandsFactory.DISPLAY_OPTIONS) {
                AllBinaryMediaManager.setMuted(true);
                this.stopAll();
                var mainFeatureFactory = MainFeatureFactory.getInstance();
                ;
                this.isFullScreen = this.features.isFeature(mainFeatureFactory.FULL_SCREEN);
                ResizableListenerHandler.getInstance().fireEvent(true);
                this.setResized(false);
                this.commandAction(gameCommandsFactory.SET_MENU_DISPLAYABLE, this.getGameOptionsForm());
            }
            else if (command == gameCommandsFactory.CLOSE_OPTIONS) {
                ResizableListenerHandler.getInstance().fireEvent(false);
                this.commandAction(gameCommandsFactory.CLOSE_AND_SHOW_GAME_CANVAS, displayable);
                var stringBuffer = new StringMaker();
                ;
                stringBuffer.append("Close isFullScreen/change: ");
                stringBuffer.appendboolean(this.isFullScreen);
                stringBuffer.appendboolean(this.fullScreenUtil.isScreenChange(this.isFullScreen));
                stringBuffer.append(" isResized: ");
                stringBuffer.appendboolean(this.isResized());
                PreLogUtil.put(stringBuffer.toString(), this, this.COMMAND_ACTION);
                if (this.isResized() || this.fullScreenUtil.isScreenChange(this.isFullScreen)) {
                    this.updateFullScreen();
                }
                AllBinaryMediaManager.setMuted(false);
            }
            else if (command == gameCommandsFactory.DISPLAY_LOAD_FORM) {
                this.pauseAppBackground(false);
                var keyValuePersistance = GamePersistanceSingleton.getInstance();
                ;
                keyValuePersistance.clear();
                keyValuePersistance.loadAll(this.abeClientInformation);
                if (this.getLoadGameForm() == CommandForm.getNullCommandForm()) {
                    var layerManager = this.createGameLayerManager();
                    ;
                    this.setLoadGameForm(new LoadGameForm(this, "Load Game", layerManager.getBackgroundBasicColor(), layerManager.getForegroundBasicColor()));
                }
                else {
                    this.getLoadGameForm().update();
                }
                this.commandAction(gameCommandsFactory.SET_MENU_DISPLAYABLE, this.getLoadGameForm());
            }
            else if (command == gameCommandsFactory.LOAD_FILE) {
                var loadGameForm = this.getLoadGameForm();
                ;
                var index = loadGameForm.getSelectedId();
                ;
                if (index != -1) {
                    var keyValuePersistance = GamePersistanceSingleton.getInstance();
                    ;
                    this.setStartStateHashtable(keyValuePersistance.get(index));
                    var menuListener = this.getLoadGameForm();
                    ;
                    menuListener.close();
                    PreLogUtil.put(BasicMotionGesturesHandler.getInstance().toString(), this, this.COMMAND_ACTION);
                    this.commandAction(gameCommandsFactory.START_COMMAND, NullCanvas.NULL_CANVAS);
                    PreLogUtil.put(BasicMotionGesturesHandler.getInstance().toString(), this, this.COMMAND_ACTION);
                }
            }
            else if (command == gameCommandsFactory.DELETE_FILE) {
                var loadGameForm = this.getLoadGameForm();
                ;
                var index = loadGameForm.getSelectedText();
                ;
                if (index != -1) {
                    var keyValuePersistance = GamePersistanceSingleton.getInstance();
                    ;
                    keyValuePersistance.delete(this.abeClientInformation, index);
                    keyValuePersistance.clear();
                    keyValuePersistance.loadAllSize(this.abeClientInformation, 1);
                    this.getLoadGameForm().update();
                }
            }
            else if (command == gameCommandsFactory.SAVE) {
                var keyValuePersistance = GamePersistanceSingleton.getInstance();
                ;
                this.pauseAppBackground(false);
                keyValuePersistance.save(this.abeClientInformation, this.getCurrentStateHashtable());
                this.unPauseAppBackground(false);
            }
            else if (command == HighScoreUtil.SUBMIT_TEXTBOX_COMMAND) {
                this.logUtil.putF("Submitted Score", this, this.COMMAND_ACTION);
                if (displayable instanceof HighScoreTextBox) {
                    var highScoreTextBox = displayable;
                    ;
                    highScoreTextBox.submitted = true;
                }
                allbinaryGameCanvasRunnableInterface.setHighScoreSubmitted(true);
                this.commandAction(gameCommandsFactory.CLOSE_AND_SHOW_GAME_CANVAS, displayable);
            }
            else if (command == gameCommandsFactory.DISPLAY_ABOUT) {
                this.aboutCommandProcessor.process(this, gameCommandsFactory.SET_MENU_DISPLAYABLE, this.getAboutCanvas());
            }
            else if (command == gameCommandsFactory.OPEN_WEB_URL) {
                this.webCommandProcessor.process(this, gameCommandsFactory.OPEN_WEB_URL, NullCanvas.NULL_CANVAS);
            }
            else if (command == gameCommandsFactory.TOGGLE_KEYBOARD) {
                var virtualKeyboardEventHandler = VirtualKeyboardEventHandler.getInstance();
                ;
                virtualKeyboardEventHandler.fireEvent(virtualKeyboardEventHandler.SHOW_EVENT);
            }
            else if (this.tsUtil.compareTo(command.getLabel(), gameCommandsFactory.TOGGLE_FULLSCREEN.getLabel()) == 0) {
                var mainFeatureFactory = MainFeatureFactory.getInstance();
                ;
                var isFullScreen = this.features.isFeature(mainFeatureFactory.FULL_SCREEN);
                ;
                if (isFullScreen) {
                    this.features.removeDefault(mainFeatureFactory.FULL_SCREEN);
                }
                else {
                    this.features.addDefault(mainFeatureFactory.FULL_SCREEN);
                }
                this.updateFullScreen();
            }
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION_LABEL + command.getLabel(), this, this.midletStrings.COMMAND_ACTION, e);
            if (command != GameCommandsFactory.getInstance().EXIT_COMMAND) {
                this.exitProgress(false);
            }
        }
    }
    updateFullScreen() {
        var mainFeatureFactory = MainFeatureFactory.getInstance();
        ;
        var isFullScreen = this.features.isFeature(mainFeatureFactory.FULL_SCREEN);
        ;
        var displayable = this.getDisplay().getCurrent();
        ;
        if (displayable instanceof Canvas) {
            var canvas = displayable;
            ;
            canvas.setFullScreenMode(isFullScreen);
        }
    }
    onEvent(eventObject) {
        ForcedLogUtil.log(EventStrings.getInstance().PERFORMANCE_MESSAGE, this);
    }
    //@Throws(Exception.constructor)
    getInputMappingInstructionsCanvas() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new GameInputMappingInstructionsCanvas(this, this.createGameLayerManager());
    }
    //@Throws(Exception.constructor)
    getInputMappingCanvas() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new GameInputMappingCanvas(this.abeClientInformation, this, this.createGameLayerManager(), this.getHelpPaintable());
    }
    //@Throws(Exception.constructor)
    getAboutCanvas() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new BasicPaintablesCanvas(this, CanvasStrings.getInstance().ABOUT, this.createGameLayerManager(), AboutPaintableFactory.getInstance().paintableArray);
    }
    //@Throws(Exception.constructor)
    getHelpPaintable() {
        throw new Exception(this.commonStrings.NOT_IMPLEMENTED);
    }
    //@Throws(Exception.constructor)
    createHighScoresCanvas() {
        throw new Exception(this.commonStrings.NOT_IMPLEMENTED);
    }
    //@Throws(Exception.constructor)
    startGameCanvasRunnableInterface() {
        var threadFactoryUtil = ThreadFactoryUtil.getInstance();
        ;
        this.thread = threadFactoryUtil.getInstanceGameCanvasRunnable(this.allbinaryGameCanvasRunnableInterface);
        this.logUtil.putF(new StringMaker().append("Thread Priority: ").appendint(this.thread.getPriority()).toString(), this, "startGameCanvasRunnableInterface");
        this.allbinaryGameCanvasRunnableInterface.setThread(this.thread);
        threadFactoryUtil.start(this.thread);
    }
    //@Throws(Exception.constructor)
    stopGameCanvasRunnableInterface() {
        this.logUtil.putF(this.commonStrings.START, this, this.gameStrings.STOP_GAME_CANVAS_RUNNABLE_INTERFACE);
        GameNotificationEventHandler.getInstance().removeAllListeners();
        ColorChangeEventHandler.getInstance().removeAllListeners();
        GameEventHandlerUtil.removeAllListeners();
        var gameCanvasRunnableInterface = this.allbinaryGameCanvasRunnableInterface;
        ;
        if (gameCanvasRunnableInterface != NullGameCanvasRunnable.NULL_GAME_CANVAS_RUNNABLE) {
            this.logUtil.putF(new StringMaker().append("Set Running False: ").append(gameCanvasRunnableInterface.toString()).toString(), this, this.gameStrings.STOP_GAME_CANVAS_RUNNABLE_INTERFACE);
            gameCanvasRunnableInterface.setRunning(false);
        }
        else {
            this.logUtil.putF("StopGame - Could Not Stop", this, this.gameStrings.STOP_GAME_CANVAS_RUNNABLE_INTERFACE);
        }
        ThreadUtil.getInstance().join(this.thread);
        var progressCanvas = ProgressCanvasFactory.getInstance();
        ;
        if (this.features.isFeature(MainFeatureFactory.getInstance().LOAD_ALL)) {
            progressCanvas.addNormalPortion(50, "Stopped Game Runnable");
        }
        else {
            progressCanvas.addNormalPortion(50, "Stopped Main Runnable");
        }
        this.logUtil.putF(this.commonStrings.END, this, this.gameStrings.STOP_GAME_CANVAS_RUNNABLE_INTERFACE);
    }
    getGameCanvasRunnableInterface() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.allbinaryGameCanvasRunnableInterface;
    }
    setGameCanvasRunnableInterface(gameCanvasRunnableInterface) {
        this.allbinaryGameCanvasRunnableInterface = gameCanvasRunnableInterface;
    }
    createGameLayerManager() {
        var gameInfo = new GameInfo(GameTypeFactory.getInstance().SINGLE_PLAYER, GameMode.SERVER, PlayerTypesFactory.getInstance().PLAYER_TYPE_ONE, 1, 1);
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return new AllBinaryGameLayerManager(this.basicColorFactory.BLACK, this.basicColorFactory.WHITE, gameInfo);
    }
    getGameOptionsForm() {
        var layerManager = this.createGameLayerManager();
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return GameOptionsFormFactory.getInstance().init(this, "Game Options", layerManager.getBackgroundBasicColor(), layerManager.getForegroundBasicColor());
        ;
    }
    //@Throws(Exception.constructor)
    save() {
        this.logUtil.putF(this.commonStrings.START, this, this.commonStrings.SAVE);
        var hashtable = this.getCurrentStateHashtable();
        ;
        GamePersistanceSingleton.getInstance().save(this.abeClientInformation, hashtable);
    }
    //@Throws(Exception.constructor)
    getCurrentStateHashtable() {
        this.logUtil.putF(this.commonStrings.START, this, "getCurrentStateHashtable");
        var hashtable = StdUtil.getInstance().createHashtable();
        ;
        if (this.allbinaryGameCanvasRunnableInterface != NullGameCanvasRunnable.NULL_GAME_CANVAS_RUNNABLE) {
            var currentHashtable = this.allbinaryGameCanvasRunnableInterface.getCurrentStateHashtable();
            ;
            var enumeration = currentHashtable.keys();
            ;
            var key;
            ;
            while (this.enumerationUtil.hasMoreElements(enumeration)) {
                key = this.enumerationUtil.nextElement(enumeration);
                hashtable.put(key, currentHashtable.get(key));
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return hashtable;
    }
    setLoadGameForm(loadGameForm) {
        this.loadGameForm = loadGameForm;
    }
    getLoadGameForm() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.loadGameForm;
    }
    setResized(resized) {
        this.resized = resized;
    }
    isResized() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.resized;
    }
    isDemoLoading() {
        if (this.startedBefore) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
        var displayable = this.getDisplay().getCurrent();
        ;
        if (displayable instanceof DemoCanvas) {
            var demoCanvas = displayable;
            ;
            if (demoCanvas.isDemoLoading()) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return true;
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
}
