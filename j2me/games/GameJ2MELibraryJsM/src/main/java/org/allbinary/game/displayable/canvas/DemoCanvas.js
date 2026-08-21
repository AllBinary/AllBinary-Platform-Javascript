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
import { Exception } from '../../../../../java/lang/Exception.js';
import { J2MEUtil } from '../../../../../org/allbinary/J2MEUtil.js';
import { SpecialAnimation } from '../../../../../org/allbinary/animation/special/SpecialAnimation.js';
import { GameAdStateFactory } from '../../../../../org/allbinary/business/advertisement/GameAdStateFactory.js';
import { CustomGameMenuUtil } from '../../../../../org/allbinary/canvas/CustomGameMenuUtil.js';
import { FullScreenUtil } from '../../../../../org/allbinary/canvas/FullScreenUtil.js';
import { GameStatisticsFactory } from '../../../../../org/allbinary/canvas/GameStatisticsFactory.js';
import { RunnableCanvas } from '../../../../../org/allbinary/canvas/RunnableCanvas.js';
import { GameCommandsFactory } from '../../../../../org/allbinary/game/commands/GameCommandsFactory.js';
import { ChangedGameFeatureListener } from '../../../../../org/allbinary/game/configuration/event/ChangedGameFeatureListener.js';
import { Features } from '../../../../../org/allbinary/game/configuration/feature/Features.js';
import { GameFeatureFactory } from '../../../../../org/allbinary/game/configuration/feature/GameFeatureFactory.js';
import { InputFeatureFactory } from '../../../../../org/allbinary/game/configuration/feature/InputFeatureFactory.js';
import { MainFeatureFactory } from '../../../../../org/allbinary/game/configuration/feature/MainFeatureFactory.js';
import { GameInitializationUtil } from '../../../../../org/allbinary/game/init/GameInitializationUtil.js';
import { GameInputStrings } from '../../../../../org/allbinary/game/input/GameInputStrings.js';
import { GameKeyFactory } from '../../../../../org/allbinary/game/input/GameKeyFactory.js';
import { PlatformInputMappingFactory } from '../../../../../org/allbinary/game/input/PlatformInputMappingFactory.js';
import { DownGameKeyEventHandler } from '../../../../../org/allbinary/game/input/event/DownGameKeyEventHandler.js';
import { GameKeyEventFactory } from '../../../../../org/allbinary/game/input/event/GameKeyEventFactory.js';
import { GameKeyEventHandler } from '../../../../../org/allbinary/game/input/event/GameKeyEventHandler.js';
import { UpGameKeyEventHandler } from '../../../../../org/allbinary/game/input/event/UpGameKeyEventHandler.js';
import { SWTUtil } from '../../../../../org/allbinary/game/layer/SWTUtil.js';
import { HighScoreCommands } from '../../../../../org/allbinary/game/score/HighScoreCommands.js';
import { HighScoresHelper } from '../../../../../org/allbinary/game/score/HighScoresHelper.js';
import { HighScoresPaintable } from '../../../../../org/allbinary/game/score/HighScoresPaintable.js';
import { NullHighScoresSingletonFactory } from '../../../../../org/allbinary/game/score/NullHighScoresSingletonFactory.js';
import { GameStateFactory } from '../../../../../org/allbinary/game/state/GameStateFactory.js';
import { ResizableListenerHandler } from '../../../../../org/allbinary/graphics/ResizableListenerHandler.js';
import { ProgressCanvasFactory } from '../../../../../org/allbinary/graphics/canvas/transition/progress/ProgressCanvasFactory.js';
import { BasicColorFactory } from '../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
import { MyCommandsFactory } from '../../../../../org/allbinary/graphics/displayable/command/MyCommandsFactory.js';
import { DisplayChangeEventHandler } from '../../../../../org/allbinary/graphics/displayable/event/DisplayChangeEventHandler.js';
import { FullScreenPaintableFactory } from '../../../../../org/allbinary/graphics/displayable/screen/FullScreenPaintableFactory.js';
import { CommandCurrentSelectionFormFactory } from '../../../../../org/allbinary/graphics/form/CommandCurrentSelectionFormFactory.js';
import { FormTypeFactory } from '../../../../../org/allbinary/graphics/form/FormTypeFactory.js';
import { ScrollSelectionForm } from '../../../../../org/allbinary/graphics/form/ScrollSelectionForm.js';
import { ScrollSelectionFormNoneFactory } from '../../../../../org/allbinary/graphics/form/ScrollSelectionFormNoneFactory.js';
import { CurrentDisplayableFactory } from '../../../../../org/allbinary/graphics/opengles/CurrentDisplayableFactory.js';
import { OpenGLFeatureFactory } from '../../../../../org/allbinary/graphics/opengles/OpenGLFeatureFactory.js';
import { OpenGLFeatureUtil } from '../../../../../org/allbinary/graphics/opengles/OpenGLFeatureUtil.js';
import { OpenGLThreadUtil } from '../../../../../org/allbinary/graphics/opengles/OpenGLThreadUtil.js';
import { NullPaintable } from '../../../../../org/allbinary/graphics/paint/NullPaintable.js';
import { StatePaintableFactory } from '../../../../../org/allbinary/graphics/paint/StatePaintableFactory.js';
import { BasicMotionGesturesHandler } from '../../../../../org/allbinary/input/motion/gesture/observer/BasicMotionGesturesHandler.js';
import { ForcedLogUtil } from '../../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js';
import { PreLogUtil } from '../../../../../org/allbinary/logic/communication/log/PreLogUtil.js';
import { SmallIntegerSingletonFactory } from '../../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js';
import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
import { OperatingSystemFactory } from '../../../../../org/allbinary/logic/system/os/OperatingSystemFactory.js';
import { InApplicationPurchaseFactory } from '../../../../../org/allbinary/logic/system/security/licensing/InApplicationPurchaseFactory.js';
import { LockableFeatureFactory } from '../../../../../org/allbinary/logic/system/security/licensing/LockableFeatureFactory.js';
import { EventStrings } from '../../../../../org/allbinary/logic/util/event/EventStrings.js';
import { AllBinaryMediaManager } from '../../../../../org/allbinary/media/audio/AllBinaryMediaManager.js';
import { EarlySoundsFactory } from '../../../../../org/allbinary/media/audio/EarlySoundsFactory.js';
import { PrimaryPlayerQueueFactory } from '../../../../../org/allbinary/media/audio/PrimaryPlayerQueueFactory.js';
import { SecondaryPlayerQueueFactory } from '../../../../../org/allbinary/media/audio/SecondaryPlayerQueueFactory.js';
import { CommonSeps } from '../../../../../org/allbinary/string/CommonSeps.js';
import { NullThread } from '../../../../../org/allbinary/thread/NullThread.js';
import { ThreadFactoryUtil } from '../../../../../org/allbinary/thread/ThreadFactoryUtil.js';
import { ThreadUtil } from '../../../../../org/allbinary/thread/ThreadUtil.js';
import { TimeDelayHelper } from '../../../../../org/allbinary/time/TimeDelayHelper.js';
import { BasicArrayListD } from '../../../../../org/allbinary/util/BasicArrayListD.js';
import { FormUtil } from './FormUtil.js';
import { NullGameCanvas } from './NullGameCanvas.js';
import { NoMenuInputProcessor } from './NoMenuInputProcessor.js';
import { DemoGameStartupRunnable } from './DemoGameStartupRunnable.js';
import { NullWaitGameRunnable } from './NullWaitGameRunnable.js';
import { GameInputMappingCanvas } from './GameInputMappingCanvas.js';
import { DemoLimitedCommandTextItemArrayFactory } from './DemoLimitedCommandTextItemArrayFactory.js';
import { CommandFormInputProcessor } from './CommandFormInputProcessor.js';
import { DemoCanvasProgressUtil } from './DemoCanvasProgressUtil.js';
import { DemoGameRunnable } from './DemoGameRunnable.js';
export class DemoCanvas extends RunnableCanvas {
    constructor(abeClientInformation, commandListener, highScoresFactoryInterface, paintable, overlayPaintable, gameInitializationInterfaceFactoryInterface, isContinue) {
        super(commandListener, CurrentDisplayableFactory.getInstance().DEFAULT_CHILD_NAME_LIST, true);
        this.basicColorFactory = BasicColorFactory.getInstance();
        this.myCommandsFactory = MyCommandsFactory.getInstance();
        this.gameAdStateFactory = GameAdStateFactory.getInstance();
        this.gameInputStrings = GameInputStrings.getInstance();
        this.gameStateFactory = GameStateFactory.getInstance();
        this.threadFactoryUtil = ThreadFactoryUtil.getInstance();
        this.formUtil = FormUtil.getInstance();
        this.fullscreenPaintable = FullScreenPaintableFactory.getInstance().paintable;
        this.basicGameDemoPaintable = StatePaintableFactory.getInstance();
        this.specialAnimationInterface = SpecialAnimation.getInstance();
        this.paintedSpecialAnimationInterface = SpecialAnimation.getInstance();
        this.fullScreenUtil = FullScreenUtil.getInstance();
        this.gameCanvas = NullGameCanvas.getInstance();
        this.highScoresHelper = new HighScoresHelper();
        this.realHighScoresPaintable = new HighScoresPaintable();
        this.highScoresPaintable = NullPaintable.getInstance();
        this.state = 0;
        this.canvasThread = NullThread.NULL_THREAD;
        this.timeDelayHelper = new TimeDelayHelper(6000);
        this.basicColor = this.basicColorFactory.RED;
        this.menuInputProcessor = NoMenuInputProcessor.getInstance();
        this.menuForm = ScrollSelectionForm.getNullScrollSelectionForm();
        this.initialized = false;
        this.defaultPaintableInterface = NullPaintable.getInstance();
        this.paintableInterface = NullPaintable.getInstance();
        this.progressPaintable = ProgressCanvasFactory.getLazyInstance();
        this.tempWait = NullWaitGameRunnable.getInstance().WAIT;
        this.inputToGameKeyMapping = PlatformInputMappingFactory.getInstance().getPersistentInputMappingInstance().getInputMapping();
        this.gameRunnable = NullWaitGameRunnable.getInstance();
        this.isSingleKeyRepeatableProcessing = Features.getInstance().isFeature(InputFeatureFactory.getInstance().SINGLE_KEY_REPEAT_PRESS);
        this.NONE = GameKeyFactory.getInstance().NONE;
        this.gameKeyEventFactory = GameKeyEventFactory.getInstance();
        this.lastKeyNotMapped = -1;
        this.SET_STATE = "setState";
        this.baseGameStatistics = GameStatisticsFactory.getInstance();
        //For kotlin this is before the body of the constructor.
        this.abeClientInformation = abeClientInformation;
        this.setWait(NullWaitGameRunnable.getInstance().WAIT);
        this.gameInitializationInterfaceFactoryInterface = gameInitializationInterfaceFactoryInterface;
        GameInitializationUtil.getInstance().initDemo(abeClientInformation, this, gameInitializationInterfaceFactoryInterface);
        ResizableListenerHandler.getInstance().fireEvent(false);
        this.overlayPaintable = overlayPaintable;
        this.highScoresFactoryInterface = highScoresFactoryInterface;
        this.setDefaultPaintableInterface(paintable);
        this.setPaintableInterface(this.getDefaultPaintableInterface());
        if (isContinue) {
            this.addCommand(GameCommandsFactory.getInstance().CONTINUE_COMMAND);
        }
        if (ChangedGameFeatureListener.getInstance().isChangedFeature(GameFeatureFactory.getInstance().SOUND)) {
            this.mediaInit();
        }
        this.demoGameRunnable = new DemoGameStartupRunnable(this);
        DisplayChangeEventHandler.getInstance().addListenerInterface(this);
    }
    onEvent(eventObject) {
        ForcedLogUtil.log(EventStrings.getInstance().PERFORMANCE_MESSAGE, this);
    }
    onDisplayChangeEvent(displayChangeEvent) {
        try {
            this.logUtil.putF(new StringMaker().append(this.commonLabels.START_LABEL).append(this.displayInfo.toString()).toString(), this, this.canvasStrings.ON_DISPLAY_CHANGE_EVENT);
            var scrollSelectionForm = this.getMenuForm();
            ;
            if (scrollSelectionForm !=
                null) {
                var formType = FormTypeFactory.getInstance().getFormType();
                ;
                var rectangle = this.formUtil.createFormRectangle();
                ;
                scrollSelectionForm.init(rectangle, formType);
            }
            this.overlayPaintable.init();
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, this.canvasStrings.ON_DISPLAY_CHANGE_EVENT, e);
        }
    }
    getCustomCommands() {
        var gameCommandsFactory = GameCommandsFactory.getInstance();
        ;
        if (J2MEUtil.isHTML()) {
            var commandArray = [
                gameCommandsFactory.START_COMMAND, HighScoreCommands.getInstance().DISPLAY, GameInputMappingCanvas.DISPLAY, gameCommandsFactory.DISPLAY_ABOUT
            ];
            ;
            //if statement needs to be on the same line and ternary does not work the same way.
            return commandArray;
        }
        else {
            var commandList = new BasicArrayListD();
            ;
            commandList.add(gameCommandsFactory.START_COMMAND);
            var inApplicationPurchaseFactory = InApplicationPurchaseFactory.getInstance();
            ;
            if (inApplicationPurchaseFactory.isEnabled()) {
                var list = LockableFeatureFactory.getInstance().getList();
                ;
                if (list.size() > 0 && !inApplicationPurchaseFactory.isPurchased(list.get(0))) {
                    commandList.add(gameCommandsFactory.BUY_COMMAND);
                }
            }
            commandList.add(HighScoreCommands.getInstance().DISPLAY);
            try {
                var isOverScan = OperatingSystemFactory.getInstance().getOperatingSystemInstance().isOverScan();
                ;
                if (SWTUtil.isSWT) {
                    commandList.add(GameInputMappingCanvas.DISPLAY);
                }
                else if (!isOverScan) {
                    commandList.add(gameCommandsFactory.DISPLAY_OPTIONS);
                    commandList.add(gameCommandsFactory.DISPLAY_LOAD_FORM);
                    commandList.add(GameInputMappingCanvas.DISPLAY);
                }
                //: 
            }
            catch (e) {
            }
            commandList.add(gameCommandsFactory.DISPLAY_ABOUT);
            var commandArray = commandList.toArray();
            ;
            //if statement needs to be on the same line and ternary does not work the same way.
            return commandArray;
        }
    }
    initCommands(cmdListener) {
        this.removeAllCommands();
        var commandArray = this.getCustomCommands();
        ;
        var size = commandArray.length;
        ;
        for (var index = 0; index < size; index++) {
            this.addCommand(commandArray[index]);
        }
        CustomGameMenuUtil.add(this);
        this.setCommandListener(cmdListener);
    }
    //@Throws(Exception.constructor)
    initPostPaint() {
    }
    //@Throws(Exception.constructor)
    mediaInit() {
        AllBinaryMediaManager.init(EarlySoundsFactory.getInstance());
    }
    itemStateChanged(item) {
        ForcedLogUtil.log(this.commonStrings.NOT_IMPLEMENTED, this);
    }
    //@Throws(Exception.constructor)
    initMenu() {
        this.close();
        var commandTextItemArrayFactory = DemoLimitedCommandTextItemArrayFactory.getInstance().getCommandTextItemArrayFactory();
        ;
        var items = commandTextItemArrayFactory.getInstance(this.getCommandStack(), this.basicColorFactory.BLACK, this.basicColorFactory.WHITE);
        ;
        var formType = FormTypeFactory.getInstance().getFormType();
        ;
        var rectangle = this.formUtil.createFormRectangle();
        ;
        PreLogUtil.put(new StringMaker().append(this.commonLabels.START_LABEL).append(this.displayInfo.toString()).toString(), this, "initMenu");
        var scrollSelectionForm = CommandCurrentSelectionFormFactory.getInstance(StringUtil.getInstance().EMPTY_STRING, items, rectangle, formType, 15, true, this.basicColorFactory.BLACK, this.basicColorFactory.WHITE);
        ;
        this.setMenuForm(scrollSelectionForm);
        var formType2 = FormTypeFactory.getInstance().getFormType();
        ;
        var rectangle2 = this.formUtil.createFormRectangle();
        ;
        scrollSelectionForm.init(rectangle2, formType2);
        if (this.getMenuForm() != ScrollSelectionFormNoneFactory.getInstance()) {
            this.setMenuInputProcessor(new CommandFormInputProcessor(new BasicArrayListD(), -1, this, this.getMenuForm()));
        }
        this.open();
    }
    open() {
        BasicMotionGesturesHandler.getInstance().addListenerInterface(this.getMenuInputProcessor());
        GameKeyEventHandler.getInstance().addListener(this.getMenuInputProcessor());
    }
    close() {
        BasicMotionGesturesHandler.getInstance().removeListener(this.getMenuInputProcessor());
        GameKeyEventHandler.getInstance().removeListener(this.getMenuInputProcessor());
    }
    getSourceId() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return DemoCanvas.id;
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
        this.addGameKeyEvent(keyCode, false);
    }
    keyReleasedByDevice(keyCode, deviceId) {
        this.removeGameKeyEvent(keyCode, false);
    }
    keyRepeatedByDevice(keyCode, deviceId) {
        if (this.isSingleKeyRepeatableProcessing) {
            this.addGameKeyEvent(keyCode, true);
        }
    }
    addGameKeyEvent(keyCode, repeated) {
        try {
            var gameKey = this.inputToGameKeyMapping.getInstanceForCanvas(this, keyCode);
            ;
            if (gameKey != this.NONE) {
                var gameKeyEvent = this.gameKeyEventFactory.getInstanceForInput(this, gameKey);
                ;
                DownGameKeyEventHandler.getInstance().fireEvent(gameKeyEvent);
            }
            else {
                if (this.lastKeyNotMapped != keyCode) {
                    this.lastKeyNotMapped = keyCode;
                    this.logUtil.putF(new StringMaker().append(this.gameInputStrings.NO_KEY).appendint(keyCode).toString(), this, this.gameInputStrings.ADD_KEY_EVENT);
                }
            }
            //: 
        }
        catch (e) {
            this.logUtil.put("Key Event Error", this, this.gameInputStrings.ADD_KEY_EVENT, e);
        }
    }
    removeGameKeyEvent(keyCode, repeated) {
        try {
            var gameKey = this.inputToGameKeyMapping.getInstanceForCanvas(this, keyCode);
            ;
            if (gameKey != this.NONE) {
                var gameKeyEvent = this.gameKeyEventFactory.getInstanceForInput(this, gameKey);
                ;
                UpGameKeyEventHandler.getInstance().fireEvent(gameKeyEvent);
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
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    pause() {
        this.close();
        this.setPaused(true);
        this.gameRunnable = NullWaitGameRunnable.getInstance();
        this.gameCanvas.pause();
    }
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    unPause() {
        this.open();
        this.gameCanvas.unPause();
        this.gameRunnable = this.gameCanvas.gameRunnable;
        this.setPaused(false);
    }
    isPausable() {
        if (CurrentDisplayableFactory.getInstance().getUsedRunnable() == NullWaitGameRunnable.getInstance()) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
    }
    isGameOver() {
        this.logUtil.putF(new StringMaker().append(this.commonStrings.NOT_IMPLEMENTED).append(" since not a game").toString(), this, "isGameOver");
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    //@Throws(Exception.constructor)
    setLoadStateHashtable(hashtable) {
        this.logUtil.putF("Trying to continue a demo lol - only continue a game canvas not the demo", this, "setLoadStateHashtable");
    }
    //@Throws(Exception.constructor)
    getLoadStateHashtable() {
        this.logUtil.putF("Trying to continue a demo lol - only continue a game canvas not the demo", this, "getLoadStateHashtable");
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.nullUtil.NULL_TABLE;
    }
    //@Throws(Exception.constructor)
    getCurrentStateHashtable() {
        this.logUtil.putF("Trying to save the AI lol", this, "getCurrentStateHashtable");
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.nullUtil.NULL_TABLE;
    }
    setHighScoreSubmitted(isNotUsed) {
    }
    paint(graphics) {
        this.paintableInterface.paint(graphics);
        this.paintedSpecialAnimationInterface.paintXY(graphics, 0, 0);
        this.highScoresPaintable.paint(graphics);
        this.getBasicGameDemoPaintable().paint(graphics);
        this.overlayPaintable.paint(graphics);
        this.fullscreenPaintable.paint(graphics);
        this.progressPaintable.paint(graphics);
    }
    paintThreed(graphics) {
        this.paintableInterface.paintThreed(graphics);
        this.paintedSpecialAnimationInterface.paintThreedXYZ(graphics, 0, 0, 0);
    }
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    processGameOver() {
        this.logUtil.putF("Not Implemented since not a game", this, "setGameOver");
    }
    demoStateChange() {
        var newState = this.state + 1;
        ;
        if (newState > 2) {
            newState = 0;
        }
        else if (newState == 2) {
            if (!this.highScoresHelper.isAnyHighScores()) {
                newState = 0;
            }
            else {
                var highScores = this.highScoresHelper.getNextHighScores();
                ;
                if (highScores == NullHighScoresSingletonFactory.getInstance()) {
                    newState = 0;
                }
                else {
                    this.getRealHighScoresPaintable().setHighScores(highScores);
                }
            }
        }
        this.setState(newState);
        this.updateDemoState();
    }
    updateDemoState() {
        PreLogUtil.put(SmallIntegerSingletonFactory.getInstance().createInstance(this.state).toString(), this, this.SET_STATE);
        this.getBasicGameDemoPaintable().setState(this.state);
        if (this.state == 0) {
            this.highScoresPaintable = NullPaintable.getInstance();
            this.paintedSpecialAnimationInterface = this.getSpecialAnimationInterface();
            if (!this.demoGameRunnable.isRunning() && this.gameCanvas.isInitialized()) {
                this.getSpecialAnimationInterface().reset();
            }
        }
        else if (this.state == 1) {
            this.paintedSpecialAnimationInterface = SpecialAnimation.getInstance();
        }
        else if (this.state == 2) {
            this.highScoresPaintable = this.getRealHighScoresPaintable();
        }
        var gameAdState = this.gameAdStateFactory.getCurrentInstance();
        ;
        gameAdState.processPageAdState();
    }
    //@Throws(Exception.constructor)
    getNextRandom() {
        throw new Exception(this.commonStrings.NOT_IMPLEMENTED);
    }
    //@Throws(Exception.constructor)
    createGameLayerManager(randomValue) {
        throw new Exception(this.commonStrings.NOT_IMPLEMENTED);
    }
    //@Throws(Exception.constructor)
    createRunnable(randomLevel) {
        throw new Exception(this.commonStrings.NOT_IMPLEMENTED);
    }
    //@Throws(Exception.constructor)
    create() {
        PreLogUtil.put(this.commonStrings.START, this, "create");
        this.highScoresPaintable = NullPaintable.getInstance();
        var randomLevel = this.getNextRandom();
        ;
        this.gameCanvas = this.createRunnable(randomLevel);
        this.basicColor = this.gameCanvas.getLayerManager().getForegroundBasicColor();
        this.getRealHighScoresPaintable().setBasicColorP(this.basicColor);
        this.gameCanvas.setGameCanvasStartListener(this);
        var gameInfo = this.gameCanvas.getLayerManager().getGameInfo();
        ;
        this.getHighScoresFactoryInterface().fetchHighScores(gameInfo, this.highScoresHelper);
    }
    //@Throws(Exception.constructor)
    start() {
        var gameCanvas = this.gameCanvas;
        ;
        PreLogUtil.put(new StringMaker().append("Game Thread in DemoCanvas: ").append(this.stringUtil.toString(gameCanvas)).toString(), this, this.commonStrings.START);
        this.canvasThread = this.threadFactoryUtil.getInstanceGameCanvasRunnable(gameCanvas);
        this.gameCanvas.setThread(this.canvasThread);
        this.threadFactoryUtil.start(this.canvasThread);
        if (this.getWait() == NullWaitGameRunnable.getInstance().WAIT) {
            this.setWait(this.getTempWait());
        }
    }
    preDemoProcess() {
        if (!this.gameCanvas.isInitialized() || this.gameCanvas.getTitle() == NullGameCanvas.NO_GAME) {
            if (AllBinaryMediaManager.update()) {
                if (!PrimaryPlayerQueueFactory.getInstance().process()) {
                    SecondaryPlayerQueueFactory.getInstance().process();
                }
            }
        }
        this.overlayPaintable.update();
    }
    //@Throws(Exception.constructor)
    process() {
        super.process();
        this.getMenuInputProcessor().processInputList();
        this.preDemoProcess();
        if (this.state == 0) {
            var indexedAnimationBehavior = this.getSpecialAnimationInterface().getAnimationBehavior();
            ;
            if (indexedAnimationBehavior.loopIndex < 1) {
                this.timeDelayHelper.setStartTimeTNT();
            }
            var demoGameMidlet = this.getCustomCommandListener();
            ;
            if (this.gameCanvas != NullGameCanvas.getInstance() && this.gameCanvas.isGameOver()) {
                this.stopGameDemo();
                var randomLevel = this.getNextRandom();
                ;
                var gameInfo = this.gameCanvas.getLayerManager().getGameInfo();
                ;
                gameInfo.setCurrentLevel(randomLevel);
                this.gameCanvas.setGameOver(false);
                this.start();
            }
            else if (this.gameCanvas == NullGameCanvas.getInstance() && demoGameMidlet.isReady()) {
                if (!this.demoGameRunnable.isRunning()) {
                    this.startDemoGame();
                    this.demoGameRunnable.setRunning(true);
                    var thread = this.threadFactoryUtil.getInstanceForRunnable(this.demoGameRunnable);
                    ;
                    this.demoGameRunnable.setThread(thread);
                    this.threadFactoryUtil.start(thread);
                }
            }
        }
    }
    //@Throws(Exception.constructor)
    startDemoGame() {
        DemoCanvasProgressUtil.showProgress(this);
    }
    //@Throws(Exception.constructor)
    stopGameDemo() {
        if (this.gameCanvas != NullGameCanvas.getInstance()) {
            this.logUtil.putF("Set Running False", this, "stopGameDemo");
            this.gameCanvas.setRunning(false);
        }
        ThreadUtil.getInstance().join(this.canvasThread);
    }
    showGamePaintable() {
        var METHOD_NAME = "showGamePaintable";
        ;
        PreLogUtil.put(this.commonStrings.START, this, METHOD_NAME);
        var isDefault = J2MEUtil.isHTML();
        ;
        if (this.gameCanvas != NullGameCanvas.getInstance() && (this.gameCanvas.isRunning() || isDefault || SWTUtil.isSWT) && !(this.gameCanvas.getType() == NullGameCanvas.TYPE)) {
            this.gameRunnable = this.gameCanvas.gameRunnable;
            PreLogUtil.put("Showing Game", this, METHOD_NAME);
            this.setPaintableInterface(this.gameCanvas);
        }
        else {
            this.gameRunnable = NullWaitGameRunnable.getInstance();
            PreLogUtil.put("Not Showing Game", this, METHOD_NAME);
            this.setPaintableInterface(this.getDefaultPaintableInterface());
        }
    }
    isReadyForStateChange() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return !this.demoGameRunnable.isRunning() && this.gameCanvas.isInitialized();
    }
    //@Throws(Exception.constructor)
    processGame() {
        this.gameRunnable.run();
        if (!this.specialAnimationInterface.isComplete() && this.isReadyForStateChange()) {
            this.specialAnimationInterface.nextFrame();
        }
        if (this.timeDelayHelper.isTimeTNT() && this.isReadyForStateChange()) {
            this.demoStateChange();
        }
        else {
            this.process();
        }
    }
    run() {
        this.logUtil.putF(this.commonStrings.START_RUNNABLE, this, this.commonStrings.RUN);
        try {
            var progressCanvas = ProgressCanvasFactory.getInstance();
            ;
            var features = Features.getInstance();
            ;
            var openGLFeatureFactory = OpenGLFeatureFactory.getInstance();
            ;
            progressCanvas.addNormalPortion(50, "Demo Thread");
            this.setCurrentThread();
            this.setRunning(true);
            if (features.isFeature(MainFeatureFactory.getInstance().LOAD_ONDEMAND)) {
                progressCanvas.end();
            }
            else {
                progressCanvas.addNormalPortion(50, "Demo Thread Running");
            }
            this.fullScreenUtil.initOnRun(this, this.getCustomCommandListener());
            this.initMenu();
            this.initPostPaint();
            this.updateDemoState();
            if (features.isDefault(openGLFeatureFactory.OPENGL_AS_GAME_THREAD)) {
                while (this.gameCanvas == NullGameCanvas.getInstance() || !this.gameCanvas.isInitialized()) {
                    this.loopTimeHelper.setStartTimeTNT();
                    this.processGame();
                    this.processLoopSleep();
                }
                var demoGameRunnable = new DemoGameRunnable(this);
                ;
                var currentDisplayableFactory = CurrentDisplayableFactory.getInstance();
                ;
                currentDisplayableFactory.setRunnable(demoGameRunnable);
                currentDisplayableFactory.setMyCanvas(this);
                OpenGLThreadUtil.getInstance().onResume();
            }
            if (features.isDefault(openGLFeatureFactory.OPENGL_AS_GAME_THREAD) || J2MEUtil.isHTML()) {
                var demoGameRunnable = new DemoGameRunnable(this);
                ;
                var currentDisplayableFactory = CurrentDisplayableFactory.getInstance();
                ;
                currentDisplayableFactory.setRunnable(demoGameRunnable);
                currentDisplayableFactory.setMyCanvas(this);
            }
            else {
                while (this.isRunning()) {
                    this.run3();
                }
                this.end();
            }
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, this.commonStrings.RUN, e);
        }
        this.logUtil.putF(this.commonStrings.END_RUNNABLE, this, this.commonStrings.RUN);
    }
    //@Throws(Exception.constructor)
    run3() {
        this.loopTimeHelper.setStartTimeTNT();
        this.processGame();
        this.processLoopSleep();
    }
    setRunning(running) {
        super.setRunning(running);
        try {
            var features = Features.getInstance();
            ;
            var openGLFeatureFactory = OpenGLFeatureFactory.getInstance();
            ;
            if (running) {
            }
            else {
                if ((features.isDefault(openGLFeatureFactory.OPENGL) || J2MEUtil.isHTML()) || SWTUtil.isSWT) {
                    var currentDisplayableFactory = CurrentDisplayableFactory.getInstance();
                    ;
                    currentDisplayableFactory.clearRunnable();
                    this.end();
                }
            }
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, this.SET_RUNNING, e);
        }
    }
    //@Throws(Exception.constructor)
    end() {
        var progressCanvas = ProgressCanvasFactory.getInstance();
        ;
        var features = Features.getInstance();
        ;
        this.baseGameStatistics.add(new StringMaker().append(DemoCanvas.BOT_GAME_STATS).append(this.baseGameStatistics.toString()).append(CommonSeps.getInstance().NEW_LINE).toString());
        this.baseGameStatistics.init();
        if (features.isFeature(MainFeatureFactory.getInstance().LOAD_ONDEMAND)) {
            progressCanvas.start();
        }
        this.logUtil.putF("Demo End", this, this.commonStrings.RUN);
        this.close();
        DisplayChangeEventHandler.getInstance().removeListener(this);
        this.stopGameDemo();
    }
    setGameState(gameState) {
    }
    getGameState() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.gameStateFactory.PLAYING_GAME_STATE;
    }
    getGameCanvasRunnableInterface() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.gameCanvas;
    }
    isDemoLoading() {
        var gameCanvas = this.gameCanvas;
        ;
        if (gameCanvas == NullGameCanvas.getInstance()) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        else if (gameCanvas.isInitialized()) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return true;
    }
    getState() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.state;
    }
    setState(state) {
        this.state = state;
    }
    isHighScoreSubmitted() {
        this.logUtil.putF("Wow the AI got a high score!", this, "isHighScoreSubmitted");
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    getRealHighScoresPaintable() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.realHighScoresPaintable;
    }
    setSpecialAnimationInterface(specialAnimationInterface) {
        specialAnimationInterface.setFrame(0);
        this.specialAnimationInterface = specialAnimationInterface;
    }
    getSpecialAnimationInterface() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.specialAnimationInterface;
    }
    setPaintableInterface(paintableInterface) {
        this.paintableInterface = paintableInterface;
    }
    getPaintableInterface() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.paintableInterface;
    }
    setDefaultPaintableInterface(defaultPaintableInterface) {
        this.defaultPaintableInterface = defaultPaintableInterface;
    }
    getDefaultPaintableInterface() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.defaultPaintableInterface;
    }
    getHighScoresFactoryInterface() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.highScoresFactoryInterface;
    }
    setMenuInputProcessor(menuInputProcessor) {
        this.menuInputProcessor = menuInputProcessor;
    }
    getMenuInputProcessor() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.menuInputProcessor;
    }
    getMenuForm() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.menuForm;
    }
    setMenuForm(menuForm) {
        this.menuForm = menuForm;
    }
    isInitialized() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.initialized;
    }
    getOverlayPaintable() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.overlayPaintable;
    }
    setBasicGameDemoPaintable(basicGameDemoPaintable) {
        this.basicGameDemoPaintable = basicGameDemoPaintable;
    }
    getBasicGameDemoPaintable() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.basicGameDemoPaintable;
    }
    setTempWait(tempWait) {
        this.tempWait = tempWait;
    }
    getTempWait() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.tempWait;
    }
    isSingleThread() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return OpenGLFeatureUtil.getInstance().isAnyThreed() || SWTUtil.isSWT;
    }
    isRunningInAnotherThread() {
        var features = Features.getInstance();
        ;
        var openGLFeatureFactory = OpenGLFeatureFactory.getInstance();
        ;
        if (features.isDefault(openGLFeatureFactory.OPENGL_AS_GAME_THREAD)) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return this.isRunning();
            ;
        }
    }
    getGameInitializationInterfaceFactoryInterface() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.gameInitializationInterfaceFactoryInterface;
    }
    getType() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return DemoCanvas.TYPE;
    }
}
DemoCanvas.id = 0;
DemoCanvas.BOT_GAME_STATS = "Bot Game Statistics: ";
DemoCanvas.TYPE = 3;
