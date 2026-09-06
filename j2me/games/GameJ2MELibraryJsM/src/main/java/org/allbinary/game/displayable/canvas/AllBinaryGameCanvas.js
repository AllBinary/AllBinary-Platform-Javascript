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
import { Exception } from '../../../../../java/lang/Exception.js';
import { Integer } from '../../../../../java/lang/Integer.js';
import { Thread } from '../../../../../java/lang/Thread.js';
//not plain js import { ChoiceGroup } 
const ChoiceGroup = globalThis.javax.microedition.lcdui.ChoiceGroup;
//not plain js import { CommandListener } 
const CommandListener = globalThis.javax.microedition.lcdui.CommandListener;
//not plain js import { Font } 
const Font = globalThis.javax.microedition.lcdui.Font;
//not plain js import { Graphics } 
const Graphics = globalThis.javax.microedition.lcdui.Graphics;
//not plain js import { Item } 
const Item = globalThis.javax.microedition.lcdui.Item;
import { NullCommandListener } from '../../../../../javax/microedition/lcdui/NullCommandListener.js';
//not GWT import const NullCommandListener = globalThis.javax.microedition.lcdui.NullCommandListener;
import { AndroidUtil } from '../../../../../org/allbinary/AndroidUtil.js';
//not GWT import const AndroidUtil = globalThis.org.allbinary.AndroidUtil;
import { J2MEUtil } from '../../../../../org/allbinary/J2MEUtil.js';
//not GWT import const J2MEUtil = globalThis.org.allbinary.J2MEUtil;
import { GameAdStateFactory } from '../../../../../org/allbinary/business/advertisement/GameAdStateFactory.js';
//not GWT import const BaseGameStatistics = globalThis.org.allbinary.canvas.BaseGameStatistics;
import { GameStatisticsFactory } from '../../../../../org/allbinary/canvas/GameStatisticsFactory.js';
//not GWT import const GameStatisticsFactory = globalThis.org.allbinary.canvas.GameStatisticsFactory;
import { Processor } from '../../../../../org/allbinary/canvas/Processor.js';
//not GWT import const Processor = globalThis.org.allbinary.canvas.Processor;
import { RunnableCanvas } from '../../../../../org/allbinary/canvas/RunnableCanvas.js';
//not GWT import const RunnableCanvas = globalThis.org.allbinary.canvas.RunnableCanvas;
import { DebugFactory } from '../../../../../org/allbinary/debug/DebugFactory.js';
//not GWT import const DebugFactory = globalThis.org.allbinary.debug.DebugFactory;
import { NoDebug } from '../../../../../org/allbinary/debug/NoDebug.js';
//not GWT import const GameAdState = globalThis.org.allbinary.game.GameAdState;
import { GameInfo } from '../../../../../org/allbinary/game/GameInfo.js';
//not GWT import const GameInfo = globalThis.org.allbinary.game.GameInfo;
import { GameStrings } from '../../../../../org/allbinary/game/GameStrings.js';
//not GWT import const GameStrings = globalThis.org.allbinary.game.GameStrings;
import { GameTypeFactory } from '../../../../../org/allbinary/game/GameTypeFactory.js';
//not GWT import const GameTypeFactory = globalThis.org.allbinary.game.GameTypeFactory;
import { Intermission } from '../../../../../org/allbinary/game/Intermission.js';
//not GWT import const IntermissionInterface = globalThis.org.allbinary.game.IntermissionInterface;
import { PlayerTypesFactory } from '../../../../../org/allbinary/game/PlayerTypesFactory.js';
//not GWT import const PlayerTypesFactory = globalThis.org.allbinary.game.PlayerTypesFactory;
import { GameCommandsFactory } from '../../../../../org/allbinary/game/commands/GameCommandsFactory.js';
//not GWT import const GameCommandsFactory = globalThis.org.allbinary.game.commands.GameCommandsFactory;
import { InGameFeatures } from '../../../../../org/allbinary/game/configuration/InGameFeatures.js';
//not GWT import const InGameFeatures = globalThis.org.allbinary.game.configuration.InGameFeatures;
import { InGameOptionsForm } from '../../../../../org/allbinary/game/configuration/InGameOptionsForm.js';
//not GWT import const InGameOptionsForm = globalThis.org.allbinary.game.configuration.InGameOptionsForm;
import { ChangedGameFeatureListener } from '../../../../../org/allbinary/game/configuration/event/ChangedGameFeatureListener.js';
//not GWT import const GameInitializedEvent = globalThis.org.allbinary.game.configuration.event.GameInitializedEvent;
import { GameInitializedEventHandler } from '../../../../../org/allbinary/game/configuration/event/GameInitializedEventHandler.js';
//not GWT import const GameInitializedEventHandler = globalThis.org.allbinary.game.configuration.event.GameInitializedEventHandler;
import { Features } from '../../../../../org/allbinary/game/configuration/feature/Features.js';
//not GWT import const Features = globalThis.org.allbinary.game.configuration.feature.Features;
import { GameFeatureFactory } from '../../../../../org/allbinary/game/configuration/feature/GameFeatureFactory.js';
//not GWT import const GameFeatureFactory = globalThis.org.allbinary.game.configuration.feature.GameFeatureFactory;
import { GameFeatureUtil } from '../../../../../org/allbinary/game/configuration/feature/GameFeatureUtil.js';
//not GWT import const GameFeatureUtil = globalThis.org.allbinary.game.configuration.feature.GameFeatureUtil;
import { InputFeatureFactory } from '../../../../../org/allbinary/game/configuration/feature/InputFeatureFactory.js';
//not GWT import const InputFeatureFactory = globalThis.org.allbinary.game.configuration.feature.InputFeatureFactory;
import { MainFeatureFactory } from '../../../../../org/allbinary/game/configuration/feature/MainFeatureFactory.js';
//not GWT import const MainFeatureFactory = globalThis.org.allbinary.game.configuration.feature.MainFeatureFactory;
import { SensorFeatureFactory } from '../../../../../org/allbinary/game/configuration/feature/SensorFeatureFactory.js';
//not GWT import const SensorFeatureFactory = globalThis.org.allbinary.game.configuration.feature.SensorFeatureFactory;
import { TouchFeatureFactory } from '../../../../../org/allbinary/game/configuration/feature/TouchFeatureFactory.js';
//not GWT import const TouchFeatureFactory = globalThis.org.allbinary.game.configuration.feature.TouchFeatureFactory;
import { GameLevelDisplayChangeEventListenersFactory } from '../../../../../org/allbinary/game/displayable/GameLevelDisplayChangeEventListenersFactory.js';
//not GWT import const GameLevelDisplayChangeEventListenersFactory = globalThis.org.allbinary.game.displayable.GameLevelDisplayChangeEventListenersFactory;
import { BasicBuildGameInitializerFactory } from '../../../../../org/allbinary/game/init/BasicBuildGameInitializerFactory.js';
//not GWT import const BasicBuildGameInitializerFactory = globalThis.org.allbinary.game.init.BasicBuildGameInitializerFactory;
import { GameInitializationUtil } from '../../../../../org/allbinary/game/init/GameInitializationUtil.js';
//not GWT import const GameInitializationUtil = globalThis.org.allbinary.game.init.GameInitializationUtil;
import { GameInputStrings } from '../../../../../org/allbinary/game/input/GameInputStrings.js';
//not GWT import const InputProcessor = globalThis.org.allbinary.game.input.InputProcessor;
import { NoPlayerGameInput } from '../../../../../org/allbinary/game/input/NoPlayerGameInput.js';
//not GWT import const PlayerGameInput = globalThis.org.allbinary.game.input.PlayerGameInput;
import { GameKeyEventHandler } from '../../../../../org/allbinary/game/input/event/GameKeyEventHandler.js';
//not GWT import const GameKeyEventHandler = globalThis.org.allbinary.game.input.event.GameKeyEventHandler;
import { AllBinaryGameLayerManager } from '../../../../../org/allbinary/game/layer/AllBinaryGameLayerManager.js';
//not GWT import const AllBinaryGameLayerManager = globalThis.org.allbinary.game.layer.AllBinaryGameLayerManager;
import { SWTUtil } from '../../../../../org/allbinary/game/layer/SWTUtil.js';
//not GWT import const ColorFillBasePaintable = globalThis.org.allbinary.game.paint.ColorFillBasePaintable;
import { ColorFillPaintableFactory } from '../../../../../org/allbinary/game/paint/ColorFillPaintableFactory.js';
//not GWT import const ResourceLoadingLevel = globalThis.org.allbinary.game.resource.ResourceLoadingLevel;
import { ResourceLoadingLevelFactory } from '../../../../../org/allbinary/game/resource/ResourceLoadingLevelFactory.js';
//not GWT import const ResourceLoadingLevelFactory = globalThis.org.allbinary.game.resource.ResourceLoadingLevelFactory;
import { HighScore } from '../../../../../org/allbinary/game/score/HighScore.js';
//not GWT import const HighScoresFactoryInterface = globalThis.org.allbinary.game.score.HighScoresFactoryInterface;
import { HighScoresPaintable } from '../../../../../org/allbinary/game/score/HighScoresPaintable.js';
//not GWT import const HighScoresPaintable = globalThis.org.allbinary.game.score.HighScoresPaintable;
import { NullHighScoresSingletonFactory } from '../../../../../org/allbinary/game/score/NullHighScoresSingletonFactory.js';
//not GWT import const NullHighScoresSingletonFactory = globalThis.org.allbinary.game.score.NullHighScoresSingletonFactory;
import { HighScoreTextBox } from '../../../../../org/allbinary/game/score/displayable/HighScoreTextBox.js';
//not GWT import const GameState = globalThis.org.allbinary.game.state.GameState;
import { GameStateFactory } from '../../../../../org/allbinary/game/state/GameStateFactory.js';
//not GWT import const GameStateFactory = globalThis.org.allbinary.game.state.GameStateFactory;
import { GraphicsStrings } from '../../../../../org/allbinary/graphics/GraphicsStrings.js';
//not GWT import const ScreenCapture = globalThis.org.allbinary.graphics.ScreenCapture;
import { ScreenCaptureFactory } from '../../../../../org/allbinary/graphics/ScreenCaptureFactory.js';
//not GWT import const ProgressCanvas = globalThis.org.allbinary.graphics.canvas.transition.progress.ProgressCanvas;
import { ProgressCanvasFactory } from '../../../../../org/allbinary/graphics/canvas/transition/progress/ProgressCanvasFactory.js';
//not GWT import const ProgressCanvasFactory = globalThis.org.allbinary.graphics.canvas.transition.progress.ProgressCanvasFactory;
import { BasicColorFactory } from '../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
//not GWT import const BasicColorFactory = globalThis.org.allbinary.graphics.color.BasicColorFactory;
import { BasicColorSetUtil } from '../../../../../org/allbinary/graphics/color/BasicColorSetUtil.js';
//not GWT import const BasicColorSetUtil = globalThis.org.allbinary.graphics.color.BasicColorSetUtil;
import { CanvasStrings } from '../../../../../org/allbinary/graphics/displayable/CanvasStrings.js';
//not GWT import const CanvasStrings = globalThis.org.allbinary.graphics.displayable.CanvasStrings;
import { DisplayInfoSingleton } from '../../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
//not GWT import const DisplayInfoSingleton = globalThis.org.allbinary.graphics.displayable.DisplayInfoSingleton;
import { GameTickDisplayInfoSingleton } from '../../../../../org/allbinary/graphics/displayable/GameTickDisplayInfoSingleton.js';
//not GWT import const GameTickDisplayInfoSingleton = globalThis.org.allbinary.graphics.displayable.GameTickDisplayInfoSingleton;
import { MyCommandsFactory } from '../../../../../org/allbinary/graphics/displayable/command/MyCommandsFactory.js';
//not GWT import const DisplayChangeEvent = globalThis.org.allbinary.graphics.displayable.event.DisplayChangeEvent;
import { DisplayChangeEventHandler } from '../../../../../org/allbinary/graphics/displayable/event/DisplayChangeEventHandler.js';
//not GWT import const DisplayChangeEventListener = globalThis.org.allbinary.graphics.displayable.event.DisplayChangeEventListener;
import { MyFontProcessor } from '../../../../../org/allbinary/graphics/font/MyFontProcessor.js';
//not GWT import const UpdateMyFontInterface = globalThis.org.allbinary.graphics.font.UpdateMyFontInterface;
import { UpdateMyFontProcessor } from '../../../../../org/allbinary/graphics/font/UpdateMyFontProcessor.js';
//not GWT import const UpdateMyFontProcessor = globalThis.org.allbinary.graphics.font.UpdateMyFontProcessor;
import { CommandCurrentSelectionFormFactory } from '../../../../../org/allbinary/graphics/form/CommandCurrentSelectionFormFactory.js';
//not GWT import const CommandCurrentSelectionFormFactory = globalThis.org.allbinary.graphics.form.CommandCurrentSelectionFormFactory;
import { FormPaintable } from '../../../../../org/allbinary/graphics/form/FormPaintable.js';
//not GWT import const FormType = globalThis.org.allbinary.graphics.form.FormType;
import { FormTypeFactory } from '../../../../../org/allbinary/graphics/form/FormTypeFactory.js';
//not GWT import const FormTypeFactory = globalThis.org.allbinary.graphics.form.FormTypeFactory;
import { ScrollSelectionForm } from '../../../../../org/allbinary/graphics/form/ScrollSelectionForm.js';
//not GWT import const ScrollSelectionForm = globalThis.org.allbinary.graphics.form.ScrollSelectionForm;
import { ScrollSelectionFormNoneFactory } from '../../../../../org/allbinary/graphics/form/ScrollSelectionFormNoneFactory.js';
//not GWT import const ABCustomItem = globalThis.org.allbinary.graphics.form.item.ABCustomItem;
import { CurrentDisplayableFactory } from '../../../../../org/allbinary/graphics/opengles/CurrentDisplayableFactory.js';
//not GWT import const CurrentDisplayableFactory = globalThis.org.allbinary.graphics.opengles.CurrentDisplayableFactory;
import { OpenGLFeatureFactory } from '../../../../../org/allbinary/graphics/opengles/OpenGLFeatureFactory.js';
//not GWT import const OpenGLFeatureFactory = globalThis.org.allbinary.graphics.opengles.OpenGLFeatureFactory;
import { OpenGLFeatureUtil } from '../../../../../org/allbinary/graphics/opengles/OpenGLFeatureUtil.js';
//not GWT import const OpenGLFeatureUtil = globalThis.org.allbinary.graphics.opengles.OpenGLFeatureUtil;
import { OpenGLThreadUtil } from '../../../../../org/allbinary/graphics/opengles/OpenGLThreadUtil.js';
//not GWT import const InitUpdatePaintable = globalThis.org.allbinary.graphics.paint.InitUpdatePaintable;
import { NullInitUpdatePaintable } from '../../../../../org/allbinary/graphics/paint/NullInitUpdatePaintable.js';
//not GWT import const NullInitUpdatePaintable = globalThis.org.allbinary.graphics.paint.NullInitUpdatePaintable;
import { NullPaintable } from '../../../../../org/allbinary/graphics/paint/NullPaintable.js';
//not GWT import const PaintableInterface = globalThis.org.allbinary.graphics.paint.PaintableInterface;
import { OpenGLImageSpecificFactory } from '../../../../../org/allbinary/image/opengles/OpenGLImageSpecificFactory.js';
//not GWT import const SensorGameUpdateProcessor = globalThis.org.allbinary.input.gyro.SensorGameUpdateProcessor;
import { SingleSensorGameUpdateProcessor } from '../../../../../org/allbinary/input/gyro/SingleSensorGameUpdateProcessor.js';
//not GWT import const BaseTouchInput = globalThis.org.allbinary.input.motion.button.BaseTouchInput;
import { NoButtonsTouchInputFactory } from '../../../../../org/allbinary/input/motion/button/NoButtonsTouchInputFactory.js';
//not GWT import const NoButtonsTouchInputFactory = globalThis.org.allbinary.input.motion.button.NoButtonsTouchInputFactory;
import { TouchButtonFactory } from '../../../../../org/allbinary/input/motion/button/TouchButtonFactory.js';
//not GWT import const TouchButtonFactory = globalThis.org.allbinary.input.motion.button.TouchButtonFactory;
import { TouchButtonsPaintableFactory } from '../../../../../org/allbinary/input/motion/button/TouchButtonsPaintableFactory.js';
//not GWT import const TouchButtonsPaintableFactory = globalThis.org.allbinary.input.motion.button.TouchButtonsPaintableFactory;
import { TouchScreenFactory } from '../../../../../org/allbinary/input/motion/button/TouchScreenFactory.js';
//not GWT import const TouchScreenFactory = globalThis.org.allbinary.input.motion.button.TouchScreenFactory;
import { BasicMotionGesturesHandler } from '../../../../../org/allbinary/input/motion/gesture/observer/BasicMotionGesturesHandler.js';
//not GWT import const BasicMotionGesturesHandler = globalThis.org.allbinary.input.motion.gesture.observer.BasicMotionGesturesHandler;
//not plain js import { ABSystemWrapper } 
const ABSystemWrapper = globalThis.org.allbinary.logic.ABSystemWrapper;
//not plain js import { ForcedLogUtil } 
const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { PreLogUtil } 
const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
import { OperatingSystemFactory } from '../../../../../org/allbinary/logic/system/os/OperatingSystemFactory.js';
//not GWT import const AllBinaryEventObject = globalThis.org.allbinary.logic.util.event.AllBinaryEventObject;
import { EventStrings } from '../../../../../org/allbinary/logic/util/event/EventStrings.js';
//not GWT import const EventStrings = globalThis.org.allbinary.logic.util.event.EventStrings;
import { AllBinaryMediaManager } from '../../../../../org/allbinary/media/audio/AllBinaryMediaManager.js';
//not GWT import const PlayerQueue = globalThis.org.allbinary.media.audio.PlayerQueue;
import { PrimaryPlayerQueueFactory } from '../../../../../org/allbinary/media/audio/PrimaryPlayerQueueFactory.js';
//not GWT import const PrimaryPlayerQueueFactory = globalThis.org.allbinary.media.audio.PrimaryPlayerQueueFactory;
import { SecondaryPlayerQueueFactory } from '../../../../../org/allbinary/media/audio/SecondaryPlayerQueueFactory.js';
//not GWT import const SecondaryPlayerQueueFactory = globalThis.org.allbinary.media.audio.SecondaryPlayerQueueFactory;
import { SelectSound } from '../../../../../org/allbinary/media/audio/SelectSound.js';
//not GWT import const SelectSound = globalThis.org.allbinary.media.audio.SelectSound;
//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
import { SecondaryThreadPool } from '../../../../../org/allbinary/thread/SecondaryThreadPool.js';
//not GWT import const GameTickTimeDelayHelper = globalThis.org.allbinary.time.GameTickTimeDelayHelper;
import { GameTickTimeDelayHelperFactory } from '../../../../../org/allbinary/time/GameTickTimeDelayHelperFactory.js';
//not GWT import const GameTickTimeDelayHelperFactory = globalThis.org.allbinary.time.GameTickTimeDelayHelperFactory;
import { TimeDelayHelper } from '../../../../../org/allbinary/time/TimeDelayHelper.js';
//not GWT import const TimeDelayHelper = globalThis.org.allbinary.time.TimeDelayHelper;
//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//not plain js import { BasicArrayListUtil } 
const BasicArrayListUtil = globalThis.org.allbinary.util.BasicArrayListUtil;
//not GWT import - same folder const PopupMenuInterface = globalThis.org.allbinary.game.displayable.canvas.PopupMenuInterface;
import { GameCanvasRunnable } from './GameCanvasRunnable.js';
//not GWT import - same folder const GameCanvasRunnable = globalThis.org.allbinary.game.displayable.canvas.GameCanvasRunnable;
import { GameCanvasPauseRunnable } from './GameCanvasPauseRunnable.js';
//not GWT import - same folder const GameCanvasPauseRunnable = globalThis.org.allbinary.game.displayable.canvas.GameCanvasPauseRunnable;
import { FormUtil } from './FormUtil.js';
//not GWT import - same folder const FormUtil = globalThis.org.allbinary.game.displayable.canvas.FormUtil;
import { MyFormUtil } from './MyFormUtil.js';
//not GWT import - same folder const MyFormUtil = globalThis.org.allbinary.game.displayable.canvas.MyFormUtil;
import { EndGameInfo } from './EndGameInfo.js';
//not GWT import - same folder const EndGameInfo = globalThis.org.allbinary.game.displayable.canvas.EndGameInfo;
import { NoMenuInputProcessor } from './NoMenuInputProcessor.js';
//not GWT import - same folder const BasicMenuInputProcessor = globalThis.org.allbinary.game.displayable.canvas.BasicMenuInputProcessor;
import { DemoGameBehavior } from './DemoGameBehavior.js';
//not GWT import - same folder const DemoGameBehavior = globalThis.org.allbinary.game.displayable.canvas.DemoGameBehavior;
import { BaseMenuBehavior } from './BaseMenuBehavior.js';
//not GWT import - same folder const BaseMenuBehavior = globalThis.org.allbinary.game.displayable.canvas.BaseMenuBehavior;
import { BaseGameBehavior } from './BaseGameBehavior.js';
//not GWT import - same folder const BaseGameBehavior = globalThis.org.allbinary.game.displayable.canvas.BaseGameBehavior;
import { BasicPopupMenuPaintable } from './BasicPopupMenuPaintable.js';
//not GWT import - same folder const BasicPopupMenuPaintable = globalThis.org.allbinary.game.displayable.canvas.BasicPopupMenuPaintable;
import { PopupMenuInputProcessor } from './PopupMenuInputProcessor.js';
//not GWT import - same folder const PopupMenuInputProcessor = globalThis.org.allbinary.game.displayable.canvas.PopupMenuInputProcessor;
import { InGameMenuBehavior } from './InGameMenuBehavior.js';
//not GWT import - same folder const InGameMenuBehavior = globalThis.org.allbinary.game.displayable.canvas.InGameMenuBehavior;
import { GameLimitedCommandTextItemArrayFactory } from './GameLimitedCommandTextItemArrayFactory.js';
//not GWT import - same folder const GameLimitedCommandTextItemArrayFactory = globalThis.org.allbinary.game.displayable.canvas.GameLimitedCommandTextItemArrayFactory;
import { PopupCommandFormInputProcessor } from './PopupCommandFormInputProcessor.js';
//not GWT import - same folder const PopupCommandFormInputProcessor = globalThis.org.allbinary.game.displayable.canvas.PopupCommandFormInputProcessor;
import { NullWaitGameRunnable } from './NullWaitGameRunnable.js';
//not GWT import - same folder const NullWaitGameRunnable = globalThis.org.allbinary.game.displayable.canvas.NullWaitGameRunnable;
import { GameProcessor } from './GameProcessor.js';
//not GWT import - same folder const GameProcessor = globalThis.org.allbinary.game.displayable.canvas.GameProcessor;
import { CheatGameInputProcessor } from './CheatGameInputProcessor.js';
//not GWT import - same folder const CheatGameInputProcessor = globalThis.org.allbinary.game.displayable.canvas.CheatGameInputProcessor;
import { EndGameProcessor } from './EndGameProcessor.js';
//not GWT import - same folder const EndGameProcessor = globalThis.org.allbinary.game.displayable.canvas.EndGameProcessor;
import { StartIntermissionProcessor } from './StartIntermissionProcessor.js';
//not GWT import - same folder const StartIntermissionProcessor = globalThis.org.allbinary.game.displayable.canvas.StartIntermissionProcessor;
import { EndGamePaintable } from './EndGamePaintable.js';
//not GWT import - same folder const EndGamePaintable = globalThis.org.allbinary.game.displayable.canvas.EndGamePaintable;
import { NullDemoPaintable } from './NullDemoPaintable.js';
//not GWT import - same folder const DemoPaintableInterface = globalThis.org.allbinary.game.displayable.canvas.DemoPaintableInterface;
import { GameCanvasInputProcessor } from './GameCanvasInputProcessor.js';
//not GWT import - same folder const GameCanvasInputProcessor = globalThis.org.allbinary.game.displayable.canvas.GameCanvasInputProcessor;
import { FormInputProcessor } from './FormInputProcessor.js';
//not GWT import - same folder const FormInputProcessor = globalThis.org.allbinary.game.displayable.canvas.FormInputProcessor;
export class AllBinaryGameCanvas extends RunnableCanvas {
    constructor(commandListener, gameLayerManager, highScoresFactoryInterface, gameInitializationInterfaceFactoryInterface, buffered) {
        super(commandListener, CanvasStrings.getInstance().EMPTY_CHILD_NAME_LIST, true);
        this.basicColorFactory = BasicColorFactory.getInstance();
        this.basicSetColorUtil = BasicColorSetUtil.getInstance();
        this.touchFeatureFactory = TouchFeatureFactory.getInstance();
        this.openGLFeatureFactory = OpenGLFeatureFactory.getInstance();
        this.touchButtonFactory = TouchButtonFactory.getInstance();
        this.gameAdStateFactory = GameAdStateFactory.getInstance();
        this.gameStrings = GameStrings.getInstance();
        this.gameInputStrings = GameInputStrings.getInstance();
        this.gameStateFactory = GameStateFactory.getInstance();
        this.gameTickTimeDelayHelper = GameTickTimeDelayHelperFactory.getInstance();
        this.gameTickDisplayInfoSingleton = GameTickDisplayInfoSingleton.getInstance();
        this.gameRunnable = new GameCanvasRunnable(this);
        this.gamePauseRunnable = new GameCanvasPauseRunnable(this);
        this.formUtil = FormUtil.getInstance();
        this.myFormUtil = MyFormUtil.getInstance();
        this.updateMyFontProcessor = new UpdateMyFontProcessor(this);
        this.myFontProcessor = this.updateMyFontProcessor;
        this.gameSpecificPaintable = NullPaintable.getInstance();
        this.sensorGameUpdateProcessor = new SingleSensorGameUpdateProcessor();
        this.endGameInfo = new EndGameInfo();
        this.startIntermissionInterface = new Intermission();
        this.endLevelIntermissionInterface = new Intermission();
        this.gameLayerManager = AllBinaryGameLayerManager.getNullInstance();
        this.gameState = this.gameStateFactory.NO_GAME_STATE;
        this.gameOver = false;
        this.initialized = false;
        this.gameStateTimeHelper = new TimeDelayHelper(0);
        this.highScoreSubmitted = false;
        this.realHighScoresPaintable = new HighScoresPaintable();
        this.highScoresPaintable = NullPaintable.getInstance();
        this.localPlayerGameInputList = new BasicArrayListD();
        this.isCheating = false;
        this.hashtable = this.stdUtil.NULL_TABLE;
        this.isSingleKeyRepeatableProcessing = false;
        this.gameInitializationInterfaceFactoryInterface = BasicBuildGameInitializerFactory.NULL_BASE_BUILD_GMAE_INITIALIZER_FACTORY;
        this.touchButtonsPaintable = NullPaintable.getInstance();
        this.touchPaintable = NullPaintable.getInstance();
        this.cheatProcessor = NoPlayerGameInput.getInstance();
        this.gameInputProcessor = Processor.getInstance();
        this.endGameProcessor = Processor.getInstance();
        this.realEndGameProcessor = Processor.getInstance();
        this.startIntermissionProcessor = Processor.getInstance();
        this.realStartIntermissionProcessor = Processor.getInstance();
        this.endGamePaintable = NullPaintable.getInstance();
        this.endGameStatePaintable = NullPaintable.getInstance();
        this.nonBotPaintable = NullPaintable.getInstance();
        this.intermissionPaintable = NullPaintable.getInstance();
        this.startIntermissionPaintable = NullInitUpdatePaintable.getInstance();
        this.mainStateProcessor = Processor.getInstance();
        this.processGameProcessor = Processor.getInstance();
        this.startLevel = 0;
        this.mainMenuInputProcessor = NoMenuInputProcessor.getInstance();
        this.popupMenuInputProcessor = NoMenuInputProcessor.getInstance();
        this.menuInputProcessor = NoMenuInputProcessor.getInstance();
        this.menuForm = ScrollSelectionForm.getNullScrollSelectionForm();
        this.formPaintable = NullPaintable.getInstance();
        this.openMenuPaintable = NullPaintable.getInstance();
        this.menuPaintable = NullPaintable.getInstance();
        this.currentTouchInputFactory = NoButtonsTouchInputFactory.getInstance();
        this.colorFillPaintable = ColorFillPaintableFactory.getInstance().getInstance(this.basicColorFactory.BLACK, true);
        this.baseGameStatistics = GameStatisticsFactory.getInstance();
        this.primaryPlayerQueue = PrimaryPlayerQueueFactory.getInstance();
        this.secondaryPlayerQueue = SecondaryPlayerQueueFactory.getInstance();
        this.BUILD_GAME = "buildGame";
        this.gameTypeFactory = GameTypeFactory.getInstance();
        this.screenCapture = ScreenCaptureFactory.getInstance();
        this.basicMotionGesturesHandler = BasicMotionGesturesHandler.getInstance();
        this.gameKeyEventHandler = GameKeyEventHandler.getInstance();
        this.progressPaintable = ProgressCanvasFactory.getLazyInstance();
        this.fontHeightP = 0;
        this.gameCanvasStartListener = NullDemoPaintable.NULL_DEMO_PAINTABLE;
        this.rawGameInputProcessor = new GameCanvasInputProcessor(this);
        this.rawInputProcessor = new FormInputProcessor(this);
        this.inputProcessor = this.getRawGameInputProcessor();
        this.YIELD_SLEEP = 100;
        //For kotlin this is before the body of the constructor.
        this.highScoresHelper = highScoresFactoryInterface.createHighScoresHelper();
        this.gameInitializationInterfaceFactoryInterface = gameInitializationInterfaceFactoryInterface;
        this.init(gameLayerManager, buffered);
        this.highScoresFactoryInterface = highScoresFactoryInterface;
        if (this.gameLayerManager.getGameInfo().getGameType() == this.gameTypeFactory.BOT || this.gameLayerManager.getGameInfo().getGameType() == this.gameTypeFactory.NONE) {
            this.gameBehavior = DemoGameBehavior.getInstance();
            this.menuBehavior = BaseMenuBehavior.getInstance();
        }
        else {
            this.gameBehavior = BaseGameBehavior.getInstance();
            this.menuBehavior = this.getInGameMenuBehavior();
        }
        this.initPopupMenu();
        this.initMenu();
        this.initSpecialPaint();
        DisplayChangeEventHandler.getInstance().addListenerInterface(this);
    }
    updateMeasurement(graphics) {
        try {
            var font = graphics.getFont();
            ;
            this.logUtil.putF(new StringMaker().append(this.commonStrings.START).append(this.canvasStrings.FD_WIDTH).appendint(MyFontProcessor.defaultCharWidth(font)).append(this.canvasStrings.FD_HEIGHT).appendint(font.getHeight()).toString(), this, this.canvasStrings.UPDATE_MEASUREMENT);
            this.fontHeightP = font.getHeight();
            this.myFormUtil.updateMeasurement(graphics);
            var popupMenuRectangle = this.myFormUtil.getPopupMenuRectangle();
            ;
            var basicPopupMenuPaintable = this.getOpenMenuPaintable();
            ;
            basicPopupMenuPaintable.init(popupMenuRectangle);
            if (this.getPopupMenuInputProcessor() != NoMenuInputProcessor.getInstance()) {
                var popupMenuInputProcessor = this.getPopupMenuInputProcessor();
                ;
                popupMenuInputProcessor.init(popupMenuRectangle);
            }
            this.myFontProcessor = MyFontProcessor.getInstance();
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, this.canvasStrings.ON_DISPLAY_CHANGE_EVENT, e);
        }
    }
    getInGameMenuBehavior() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return InGameMenuBehavior.getInstance();
        ;
    }
    setCurrentThread() {
        if (J2MEUtil.isHTML()) {
            super.setCurrentThreadFake();
        }
        else {
            super.setCurrentThread();
        }
    }
    onEvent(eventObject) {
        ForcedLogUtil.log(EventStrings.getInstance().PERFORMANCE_MESSAGE, this);
    }
    onDisplayChangeEvent(displayChangeEvent) {
        try {
            this.logUtil.putF(new StringMaker().append(this.commonStrings.START).append(DisplayInfoSingleton.getInstance().toString()).toString(), this, this.canvasStrings.UPDATE_MEASUREMENT);
            this.myFontProcessor = this.updateMyFontProcessor;
            this.menuBehavior.onDisplayChangeEvent(this, displayChangeEvent);
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, this.canvasStrings.ON_DISPLAY_CHANGE_EVENT, e);
        }
    }
    //@Throws(Exception.constructor)
    updateMenuFromEvent(displayChangeEvent) {
        var formType = FormTypeFactory.getInstance().getFormType();
        ;
        var rectangle = this.formUtil.createFormRectangle();
        ;
        this.menuForm.init(rectangle, formType);
        if (this.currentTouchInputFactory != NoButtonsTouchInputFactory.getInstance()) {
            this.touchButtonFactory.toggle(this.isPaused(), this.currentTouchInputFactory.getList());
        }
        this.myFontProcessor = this.updateMyFontProcessor;
    }
    //@Throws(Exception.constructor)
    processSleep() {
        super.processSleep();
        if (AllBinaryMediaManager.update()) {
            if (!this.primaryPlayerQueue.process()) {
                this.secondaryPlayerQueue.process();
            }
        }
        if (this.menuInputProcessor.processInputList() != -1) {
            this.runnableCanvasRefreshHelper.process();
        }
    }
    //@Throws(Exception.constructor)
    initPopupMenu() {
        if (this.popupMenuInputProcessor == NoMenuInputProcessor.getInstance()) {
            var features = Features.getInstance();
            ;
            var popupMenuRectangle = this.myFormUtil.getPopupMenuRectangle();
            ;
            if (features.isFeature(this.touchFeatureFactory.TOUCH_ENABLED)) {
                this.setOpenMenuPaintable(new BasicPopupMenuPaintable(popupMenuRectangle, this.gameLayerManager.getBackgroundBasicColor(), this.gameLayerManager.getForegroundBasicColor()));
                this.setPopupMenuInputProcessor(new PopupMenuInputProcessor(new BasicArrayListD(), -1, this, popupMenuRectangle));
            }
        }
        else {
        }
    }
    initMenu() {
        try {
            this.menuBehavior.initMenu(this);
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, "initMenu", e);
        }
    }
    //@Throws(Exception.constructor)
    initMenu2() {
        this.closeMenu();
        var formType = FormTypeFactory.getInstance().getFormType();
        ;
        var gameLimitedCommandTextItemArrayFactory = GameLimitedCommandTextItemArrayFactory.getInstance();
        ;
        var commandTextItemArrayFactory = gameLimitedCommandTextItemArrayFactory.getCommandTextItemArrayFactory();
        ;
        var items = commandTextItemArrayFactory.getInstance(this.getCommandStack(), this.gameLayerManager.getBackgroundBasicColor(), this.gameLayerManager.getForegroundBasicColor());
        ;
        var rectangle = this.formUtil.createFormRectangle();
        ;
        this.setMenuForm(CommandCurrentSelectionFormFactory.getInstance(StringUtil.getInstance().EMPTY_STRING, items, rectangle, formType, 25, false, this.gameLayerManager.getBackgroundBasicColor(), this.gameLayerManager.getForegroundBasicColor()));
        var scrollSelectionForm = this.getMenuForm();
        ;
        var features = Features.getInstance();
        ;
        if (features.isFeature(this.touchFeatureFactory.TOUCH_ENABLED)) {
            this.mainMenuInputProcessor = new PopupCommandFormInputProcessor(new BasicArrayListD(), -1, this, scrollSelectionForm, this.getPopupMenuInputProcessor());
        }
        else {
        }
        this.setMenuInputProcessor(this.getPopupMenuInputProcessor());
        if (scrollSelectionForm != ScrollSelectionFormNoneFactory.getInstance()) {
            this.setFormPaintable(new FormPaintable(scrollSelectionForm));
        }
        else {
        }
        this.closeMenu();
    }
    updateMenu() {
        try {
            this.menuBehavior.updateMenu(this);
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, "initMenu", e);
        }
    }
    //@Throws(Exception.constructor)
    updateMenu2() {
        var scrollSelectionForm = this.getMenuForm();
        ;
        scrollSelectionForm.deleteAll();
        var gameLimitedCommandTextItemArrayFactory = GameLimitedCommandTextItemArrayFactory.getInstance();
        ;
        var commandTextItemArrayFactory = gameLimitedCommandTextItemArrayFactory.getCommandTextItemArrayFactory();
        ;
        var items = commandTextItemArrayFactory.getInstance(this.getCommandStack(), this.gameLayerManager.getBackgroundBasicColor(), this.gameLayerManager.getForegroundBasicColor());
        ;
        var size = items.length;
        ;
        for (var index = 0; index < size; index++) {
            scrollSelectionForm.append(items[index]);
        }
        var formType = FormTypeFactory.getInstance().getFormType();
        ;
        var rectangle = this.formUtil.createFormRectangle();
        ;
        scrollSelectionForm.init(rectangle, formType);
    }
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    pause() {
        this.gameBehavior.pause(this);
        this.closeMenu();
        super.pause();
        this.touchButtonFactory.toggle(this.isPaused(), BasicArrayListUtil.getInstance().getImmutableInstance());
        this.systemWrapper.gc();
    }
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    unPause() {
        this.logUtil.putF(this.commonStrings.START, this, this.gameStrings.UNPAUSE);
        this.closeMenu();
        this.systemWrapper.gc();
        super.unPause();
        this.touchButtonFactory.toggle(this.isPaused(), BasicArrayListUtil.getInstance().getImmutableInstance());
        this.gameBehavior.unPause(this);
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
    //@Throws(Exception.constructor)
    popupMenu() {
        this.menuBehavior.popupMenu(this);
    }
    //@Throws(Exception.constructor)
    popupMenu2() {
        this.primaryPlayerQueue.add(SelectSound.getInstance());
        this.setMenuPaintable(this.getFormPaintable());
        this.setMenuInputProcessor(this.mainMenuInputProcessor);
        this.basicMotionGesturesHandler.addListenerInterface(this.mainMenuInputProcessor);
        this.gameKeyEventHandler.addListener(this.mainMenuInputProcessor);
    }
    //@Throws(Exception.constructor)
    toggleMenu() {
        this.logUtil.putF(this.commonStrings.START, this, this.gameStrings.TOGGLE_MENU);
        if (this.getMenuPaintable() == this.getOpenMenuPaintable()) {
            this.pause();
            this.updateMenu();
            this.popupMenu();
        }
        else if (this.getMenuPaintable() == this.getFormPaintable()) {
            this.primaryPlayerQueue.add(SelectSound.getInstance());
            this.unPause();
        }
    }
    closeMenu() {
        this.menuBehavior.closeMenu(this);
    }
    closeMenu2() {
        this.setMenuPaintable(this.getOpenMenuPaintable());
        this.basicMotionGesturesHandler.removeListener(this.mainMenuInputProcessor);
        this.gameKeyEventHandler.removeListener(this.mainMenuInputProcessor);
        this.setMenuInputProcessor(this.getPopupMenuInputProcessor());
    }
    open() {
        this.basicMotionGesturesHandler.addListenerInterface(this.menuInputProcessor);
        this.gameKeyEventHandler.addListener(this.menuInputProcessor);
    }
    close() {
        this.basicMotionGesturesHandler.removeListener(this.menuInputProcessor);
        this.gameKeyEventHandler.removeListener(this.menuInputProcessor);
        this.primaryPlayerQueue.clear();
        this.secondaryPlayerQueue.clear();
    }
    //@Throws(Exception.constructor)
    processorInit() {
        this.setMainStateProcessor(Processor.getInstance());
        this.setProcessGameProcessor(new GameProcessor(this));
    }
    initSpecialPaint() {
        this.menuBehavior.initSpecialPaint(this);
    }
    //@Throws(Exception.constructor)
    init(gameLayerManager, buffered) {
        this.gameStateTimeHelper.setStartTimeTNT();
        this.setHighScoreSubmitted(false);
        this.setLayerManager(gameLayerManager);
        if (!buffered) {
            var BUFF_MESSAGE = "XXX Not Buffering Causes Concurrency Issues XXX";
            ;
            this.logUtil.putF(BUFF_MESSAGE, this, this.commonStrings.CONSTRUCTOR);
        }
        else {
            throw new Exception("Buffering is disabled");
        }
        this.setGameInputProcessor(Processor.getInstance());
        var features = Features.getInstance();
        ;
        if (features.isFeature(GameFeatureFactory.getInstance().CHEATING)) {
            this.isCheating = true;
            this.cheatProcessor = new CheatGameInputProcessor(this);
            this.gameKeyEventHandler.addListener(this.cheatProcessor);
        }
        else {
            this.isCheating = false;
            this.cheatProcessor = NoPlayerGameInput.getInstance();
        }
        this.realEndGameProcessor = new EndGameProcessor(this);
        this.setEndGameProcessor(Processor.getInstance());
        this.realStartIntermissionProcessor = new StartIntermissionProcessor(this);
        this.startIntermissionProcessor = Processor.getInstance();
        this.setEndGameStatePaintable(new EndGamePaintable(this));
        this.setEndGamePaintable(NullPaintable.getInstance());
        this.setIntermissionPaintable(NullPaintable.getInstance());
        this.getStartIntermissionInterface().setListener(this);
    }
    notifyIntermission(enable) {
        if (enable) {
            this.startIntermissionProcessor = this.realStartIntermissionProcessor;
        }
        else {
            this.startIntermissionProcessor = Processor.getInstance();
        }
        if (enable) {
            this.setIntermissionPaintable(this.getStartIntermissionPaintable());
        }
        else {
            this.setIntermissionPaintable(NullPaintable.getInstance());
        }
    }
    //@Throws(Exception.constructor)
    mediaInit() {
        ForcedLogUtil.log(this.commonStrings.NOT_IMPLEMENTED, this);
    }
    //@Throws(Exception.constructor)
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    initConfigurable(abeClientInformation) {
        var progressCanvas = ProgressCanvasFactory.getInstance();
        ;
        progressCanvas.addNormalPortion(50, "Setting Configurables");
        GameInitializationUtil.getInstance().initGame(abeClientInformation, this, this.gameInitializationInterfaceFactoryInterface);
        var gameFeatureFactory = GameFeatureFactory.getInstance();
        ;
        var changedGameFeatureListener = ChangedGameFeatureListener.getInstance();
        ;
        if (changedGameFeatureListener.isChangedFeature(gameFeatureFactory.SOUND)) {
            var features = Features.getInstance();
            ;
            this.logUtil.putF(new StringMaker().append("Sound Changing To: ").appendboolean(features.isFeature(gameFeatureFactory.SOUND)).toString(), this, "initConfigurable");
            this.mediaInit();
            changedGameFeatureListener.remove(gameFeatureFactory.SOUND);
        }
        var sensorFeatureFactory = SensorFeatureFactory.getInstance();
        ;
        if (changedGameFeatureListener.isChangedFeature(sensorFeatureFactory.ORIENTATION_SENSORS) || changedGameFeatureListener.isChangedFeature(sensorFeatureFactory.NO_ORIENTATION) || changedGameFeatureListener.isChangedFeature(sensorFeatureFactory.SIMULATED_ORIENTATION_SENSORS)) {
            changedGameFeatureListener.remove(sensorFeatureFactory.NO_ORIENTATION);
            changedGameFeatureListener.remove(sensorFeatureFactory.ORIENTATION_SENSORS);
            changedGameFeatureListener.remove(sensorFeatureFactory.SIMULATED_ORIENTATION_SENSORS);
        }
        var resourceLoadingLevelFactory = ResourceLoadingLevelFactory.getInstance();
        ;
        this.loadResourceLoadingLevel(resourceLoadingLevelFactory.LOAD_GAME);
    }
    //@Throws(Exception.constructor)
    initApp(abeClientInformation) {
        this.initConfigurable(abeClientInformation);
        this.processorInit();
        this.sensorGameUpdateProcessor.process(this.gameLayerManager);
        this.sensorGameUpdateProcessor.sendNotifications(this.gameLayerManager);
        this.initTouch();
    }
    //@Throws(Exception.constructor)
    initTouch() {
        var gameInitializedEvent = GameInitializationUtil.getInstance().EVENT;
        ;
        var resourceLoadingLevelFactory = ResourceLoadingLevelFactory.getInstance();
        ;
        gameInitializedEvent.setResourceLoadingLevel(resourceLoadingLevelFactory.LOAD_TOUCH);
        GameInitializedEventHandler.getInstance().fireEvent(gameInitializedEvent);
        this.touchButtonFactory.defaultList();
        this.updateTouch();
        this.postInitTouch();
    }
    //@Throws(Exception.constructor)
    updateCurrentTouchInputFactory(nextTouchInput) {
        if (nextTouchInput != this.currentTouchInputFactory) {
            this.currentTouchInputFactory = nextTouchInput;
            PreLogUtil.put(this.currentTouchInputFactory.toString(), this, this.gameInputStrings.UDPATE_CURRENT_TOUCH_INPUT_FACTORY);
            this.touchButtonFactory.toggle(this.isPaused(), this.currentTouchInputFactory.getList());
        }
    }
    //@Throws(Exception.constructor)
    updateTouch() {
        this.gameBehavior.updateTouch(this);
    }
    //@Throws(Exception.constructor)
    updateTouch2() {
        var features = Features.getInstance();
        ;
        if (features.isFeature(this.touchFeatureFactory.AUTO_HIDE_SHOW_SCREEN_BUTTONS)) {
            if (this.gameLayerManager.getGameInfo().getCurrentLevel() - this.getStartLevel() == 1) {
                this.setTouchPaintableP(NullPaintable.getInstance());
            }
        }
    }
    //@Throws(Exception.constructor)
    postInitTouch() {
        this.setTouchButtonsPaintable(TouchButtonsPaintableFactory.getInstance(this.gameLayerManager.getForegroundBasicColor()));
        this.updateScreenButtonPaintable();
    }
    initCommands(cmdListener) {
        this.removeAllCommands();
        this.addCommands();
        this.setCommandListener(cmdListener);
    }
    addCommands() {
        var gameCommandsFactory = GameCommandsFactory.getInstance();
        ;
        var myCommandsFactory = MyCommandsFactory.getInstance();
        ;
        if (DebugFactory.getInstance() != NoDebug.getInstance()) {
            this.addCommand(gameCommandsFactory.START_TRACE);
        }
        this.addCommand(gameCommandsFactory.RESTART_COMMAND);
        this.addCommand(myCommandsFactory.PAUSE_COMMAND);
        this.addCommand(gameCommandsFactory.QUIT_COMMAND);
        var isOverScan = OperatingSystemFactory.getInstance().getOperatingSystemInstance().isOverScan();
        ;
        if (J2MEUtil.isHTML()) {
        }
        else if (SWTUtil.isSWT) {
        }
        else if (!isOverScan) {
            if (TouchScreenFactory.getInstance().isTouch() && new InGameFeatures().isAny()) {
                this.addCommand(InGameOptionsForm.DISPLAY);
            }
            this.addCommand(gameCommandsFactory.SAVE);
            this.addCommand(gameCommandsFactory.DISPLAY_LOAD_FORM);
        }
    }
    itemStateChanged(item) {
        try {
            var itemLabel = item.getLabel();
            ;
            this.logUtil.putF(new StringMaker().append(this.commonLabels.ITEM_LABEL).append(itemLabel).toString(), this, "itemStateChanged");
            if (item instanceof ChoiceGroup) {
                var gameFeatureUtil = GameFeatureUtil.getInstance();
                ;
                if (gameFeatureUtil.isExclusive(itemLabel)) {
                    gameFeatureUtil.updateExclusiveForChoiceGroup(item);
                }
                else {
                    gameFeatureUtil.updateMultiple(item);
                }
            }
            this.sensorGameUpdateProcessor.process(this.gameLayerManager);
            this.updateTouch();
            this.updateScreenButtonPaintable();
            this.sensorGameUpdateProcessor.sendNotifications(this.gameLayerManager);
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, "itemStateChanged", e);
        }
    }
    //@Throws(Exception.constructor)
    updateScreenButtonPaintable() {
        this.gameBehavior.updateScreenButtonPaintable(this);
    }
    updateScreenButtonPaintable2() {
        var features = Features.getInstance();
        ;
        if (features.isFeature(this.touchFeatureFactory.AUTO_HIDE_SHOW_SCREEN_BUTTONS)) {
            this.setTouchPaintableP(this.getTouchButtonsPaintable());
            this.setStartLevel(this.gameLayerManager.getGameInfo().getCurrentLevel());
        }
        else if (features.isFeature(this.touchFeatureFactory.SHOW_SCREEN_BUTTONS)) {
            this.setTouchPaintableP(this.getTouchButtonsPaintable());
        }
        else if (features.isFeature(this.touchFeatureFactory.HIDE_SCREEN_BUTTONS)) {
            this.setTouchPaintableP(NullPaintable.getInstance());
        }
        else {
            this.setTouchPaintableP(NullPaintable.getInstance());
        }
    }
    getLayerManager() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.gameLayerManager;
    }
    setLayerManager(layerManager) {
        this.gameLayerManager = layerManager;
    }
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    isGameOver() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.gameOver;
    }
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    setGameOver(gameOver) {
        this.gameOver = gameOver;
    }
    //@Throws(Exception.constructor)
    processGameOver() {
        PreLogUtil.put(this.commonStrings.START, this, this.gameStrings.SET_GAME_OVER);
        this.setGameOver(true);
        this.removePauseCommand();
        this.setGameState(this.gameStateFactory.SHOW_END_RESULT_GAME_STATE);
        this.setEndGamePaintable(this.getEndGameStatePaintable());
    }
    isHighScoreSubmitted() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.highScoreSubmitted;
    }
    //@Throws(Exception.constructor)
    setHighScoreSubmitted(highScoreSubmitted) {
        this.highScoreSubmitted = highScoreSubmitted;
        if (highScoreSubmitted) {
            this.highScoresHelper.setSelectedHighScores(NullHighScoresSingletonFactory.getInstance());
        }
        this.logUtil.putF(new StringMaker().append("isHighScoreSubmitted: ").appendboolean(highScoreSubmitted).toString(), this, "setHighScoreSubmitted");
    }
    getGameState() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.gameState;
    }
    //@Throws(Exception.constructor)
    setGameState(gameState) {
        this.logUtil.putF(new StringMaker().append(this.gameStrings.GAME_STATE).append(this.stringUtil.toString(gameState)).toString(), this, this.gameStrings.SET_GAME_STATE);
        this.gameState = gameState;
        this.gameStateTimeHelper.setStartTimeTNT();
        this.updateEndGameProcessor();
        this.updateGameKeyEventProcessor();
        this.gameBehavior.setGameState(this);
    }
    //@Throws(Exception.constructor)
    updateGameState() {
        var gameAdState = this.gameAdStateFactory.getCurrentInstance();
        ;
        gameAdState.processAdState(this.gameState, this.gameLayerManager.getGameInfo().getGameType());
        if (this.gameState != this.gameStateFactory.PLAYING_GAME_STATE) {
            gameAdState.processPageAdState();
        }
    }
    updateGameKeyEventProcessor() {
        if (this.getGameState() != this.gameStateFactory.PLAYING_GAME_STATE || this.isCheating) {
        }
        else {
        }
    }
    removeAllGameKeyInputListenersOnBuild() {
        this.removeAllGameKeyInputListeners();
    }
    removeAllGameKeyInputListeners() {
        this.gameBehavior.removeAllGameKeyInputListeners(this);
    }
    removeAllGameKeyInputListeners2() {
        this.logUtil.putF("Remove PlayerInput Listeners", this, "removeAllGameKeyInputListeners");
        for (var index = this.localPlayerGameInputList.size() - 1; index >= 0; index--) {
            var playerGameInput = this.localPlayerGameInputList.get(index);
            ;
            this.removeKeyInputListener(playerGameInput);
            playerGameInput.removeNonAIInputGameKeyEvents();
        }
    }
    removeKeyInputListener(playerGameInput) {
        this.gameKeyEventHandler.removeListener(playerGameInput);
    }
    //@Throws(Exception.constructor)
    updateEndGameProcessor() {
        this.gameBehavior.updateEndGameProcessor(this);
    }
    //@Throws(Exception.constructor)
    updateEndGameProcessor2() {
        if (this.getGameState() == this.gameStateFactory.SHOW_END_RESULT_GAME_STATE || this.getGameState() == this.gameStateFactory.SHOW_HIGH_SCORE_GAME_STATE) {
            this.setEndGameProcessor(this.realEndGameProcessor);
        }
        else {
            this.setEndGameProcessor(Processor.getInstance());
        }
    }
    //@Throws(Exception.constructor)
    buildGameInit(isPortion) {
    }
    //@Throws(Exception.constructor)
    cleanupGame() {
        this.logUtil.putF(this.commonStrings.START, this, this.commonStrings.CLEANUP);
        var progressCanvas = ProgressCanvasFactory.getInstance();
        ;
        progressCanvas.addNormalPortion(10, "Cleaning Up");
        this.primaryPlayerQueue.clear();
        this.secondaryPlayerQueue.clear();
        GameLevelDisplayChangeEventListenersFactory.getInstance().clear();
    }
    //@Throws(Exception.constructor)
    loadResourceLoadingLevel(resourceLoadingLevel) {
        var gameInitializedEvent = GameInitializationUtil.getInstance().EVENT;
        ;
        gameInitializedEvent.setResourceLoadingLevel(resourceLoadingLevel);
        GameInitializedEventHandler.getInstance().fireEvent(gameInitializedEvent);
    }
    //@Throws(Exception.constructor)
    loadResources(level) {
        var gameInitializedEvent = GameInitializationUtil.getInstance().EVENT;
        ;
        gameInitializedEvent.setLevel(level);
        GameInitializedEventHandler.getInstance().fireEvent(gameInitializedEvent);
    }
    //@Throws(Exception.constructor)
    updateColor() {
    }
    //@Throws(Exception.constructor)
    buildGame(portion) {
        this.screenCapture.endRecording();
        this.screenCapture.startRecording();
        var progressCanvas = ProgressCanvasFactory.getInstance();
        ;
        var features = Features.getInstance();
        ;
        progressCanvas.addNormalPortion(portion, "Generic Build");
        this.removeAllGameKeyInputListenersOnBuild();
        this.updateTouch();
        progressCanvas.addNormalPortion(portion, "High Scores");
        this.highScoresFactoryInterface.fetchHighScores(this.gameLayerManager.getGameInfo(), this.highScoresHelper);
        this.setHighScoresPaintable(NullPaintable.getInstance());
        progressCanvas.addNormalPortion(portion, "Finishing.");
        this.getEndGameInfoP().update(this.getLayerManager().getGameInfo(), this);
        this.isSingleKeyRepeatableProcessing = features.isFeature(InputFeatureFactory.getInstance().SINGLE_KEY_REPEAT_PRESS);
        this.setGameOver(false);
        progressCanvas.addNormalPortion(portion, "Finishing..");
        this.updateColor();
        this.getStartIntermissionPaintable().update();
        if (!this.isRunningInAnotherThread()) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return;
        }
        progressCanvas.addNormalPortion(portion, "Finishing...");
        if (this.isMainCanvas() || !this.isInitialized()) {
            if (features.isFeature(MainFeatureFactory.getInstance().LOAD_ONDEMAND)) {
                if (this.getCustomCommandListener() !=
                    null) {
                    progressCanvas.end();
                }
            }
            else {
                progressCanvas.end();
            }
            this.setInitialized(true);
        }
        if (this.getCustomCommandListener() == NullCommandListener.NULL_COMMAND_LISTENER) {
            this.logUtil.putF("Show Game Paintable in DemoCanvas Thread", this, this.BUILD_GAME);
            this.gameCanvasStartListener.showGamePaintable();
        }
        else {
            this.logUtil.putF("No GameCanvasStartListener", this, this.BUILD_GAME);
        }
        this.colorFillPaintable.setBasicColorP(this.gameLayerManager.getBackgroundBasicColor());
        this.gameBehavior.buildGame(this);
    }
    buildGame2() {
        PreLogUtil.put(new StringMaker().append(this.gameInputStrings.ENABLE_PLAYER_GAME_INPUTS).appendint(this.localPlayerGameInputList.size()).toString(), this, this.BUILD_GAME);
        var playerGameInput;
        ;
        for (var index = this.localPlayerGameInputList.size() - 1; index >= 0; index--) {
            playerGameInput = this.localPlayerGameInputList.get(index);
            PreLogUtil.put(new StringMaker().append(this.gameInputStrings.ENABLE_PLAYER_GAME_INPUT).append(playerGameInput.toString()).toString(), this, this.BUILD_GAME);
            playerGameInput.removeNonAIInputGameKeyEvents();
            this.addKeyInputListener(playerGameInput);
        }
    }
    addKeyInputListener(playerGameInput) {
        GameKeyEventHandler.getInstance().addListenerForPlayer(playerGameInput, playerGameInput.getPlayerInputId());
    }
    setGameCanvasStartListener(gameCanvasStartListener) {
        this.gameCanvasStartListener = gameCanvasStartListener;
    }
    //@Throws(Exception.constructor)
    loadState() {
        this.logUtil.putF(this.commonStrings.START, this, this.commonStrings.LOAD);
        var hashtable = this.getLoadStateHashtable();
        ;
        if (hashtable !=
            null
            && hashtable.size() > 0) {
            var levelAsString = hashtable.get(GameInfo.LEVEL_NAME);
            ;
            var level = Integer.valueOf(levelAsString).intValue();
            ;
            var gameInfo = this.gameLayerManager.getGameInfo();
            ;
            gameInfo.setCurrentLevel(level);
        }
    }
    //@Throws(Exception.constructor)
    getLoadStateHashtable() {
        this.logUtil.putF(new StringMaker().append(this.commonLabels.START_LABEL).append(this.stringUtil.toString(this.hashtable)).toString(), this, "getLoadStateHashtable");
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.hashtable;
    }
    setLoadStateHashtable(hashtable) {
        this.logUtil.putF(new StringMaker().append(this.commonLabels.START_LABEL).append(this.stringUtil.toString(hashtable)).toString(), this, "setLoadStateHashtable");
        this.hashtable = hashtable;
    }
    getCurrentStateHashtable() {
        var hashtable = this.stdUtil.createHashtable();
        ;
        var level = this.gameLayerManager.getGameInfo().getCurrentLevel();
        ;
        hashtable.put(GameInfo.LEVEL_NAME.toString(), level.toString());
        this.logUtil.putF(new StringMaker().append("End: ").append(this.stringUtil.toString(hashtable)).toString(), this, "getCurrentStateHashtable");
        //if statement needs to be on the same line and ternary does not work the same way.
        return hashtable;
    }
    paintGameOver(graphics) {
        ForcedLogUtil.log(this.commonStrings.NOT_IMPLEMENTED, this);
    }
    draw(graphics) {
        this.colorFillPaintable.paint(graphics);
        this.basicSetColorUtil.setBasicColorP(graphics, this.gameLayerManager.getForegroundBasicColor());
        this.gameSpecificPaintable.paint(graphics);
    }
    clear(graphics) {
        this.colorFillPaintable.paint(graphics);
    }
    paint(graphics) {
        this.myFontProcessor.process(graphics);
        this.baseGameStatistics.nextRefresh();
        this.draw(graphics);
        this.menuPaintable.paint(graphics);
        this.progressPaintable.paint(graphics);
    }
    paintThreed(graphics) {
    }
    //@Throws(Exception.constructor)
    processEndLevelIntermissionGameState() {
    }
    nonBotPaint(graphics) {
        this.endGamePaintable.paint(graphics);
        this.intermissionPaintable.paint(graphics);
        this.paintIntermission(graphics);
        this.touchPaintable.paint(graphics);
    }
    paintIntermission(graphics) {
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
        this.inputProcessor.keyPressedByDevice(keyCode, deviceId);
    }
    keyRepeatedByDevice(keyCode, deviceId) {
        if (this.isSingleKeyRepeatableProcessing) {
            this.inputProcessor.keyPressedByDevice(keyCode, deviceId);
        }
    }
    keyReleasedByDevice(keyCode, deviceId) {
        this.inputProcessor.keyReleasedByDevice(this, keyCode, deviceId);
    }
    //@Throws(Exception.constructor)
    handleRawKey(keyCode, deviceId, repeated) {
    }
    endProgress(isProgress) {
        var portion = 30;
        ;
        if (isProgress && this.isMainCanvas()) {
            var myCommandsFactory = MyCommandsFactory.getInstance();
            ;
            var progressCanvas = ProgressCanvasFactory.getInstance();
            ;
            progressCanvas.start();
            this.getCustomCommandListener().commandAction(myCommandsFactory.SET_DISPLAYABLE, progressCanvas);
            portion = 4;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return portion;
    }
    //@Throws(Exception.constructor)
    processPlayingGame() {
        this.cheatProcessor.update();
        this.sensorGameUpdateProcessor.getInputSensor().update();
        this.gameInputProcessor.process();
        this.gameLayerManager.process();
        this.startIntermissionProcessor.process();
    }
    //@Throws(Exception.constructor)
    threadInit() {
    }
    //@Throws(Exception.constructor)
    processGame() {
        super.process();
        if (AllBinaryMediaManager.update()) {
            if (!this.primaryPlayerQueue.process()) {
                this.secondaryPlayerQueue.process();
            }
        }
        this.mainStateProcessor.process();
        this.menuInputProcessor.processInputList();
        this.endGameProcessor.process();
        this.baseGameStatistics.nextFrame();
    }
    notifyDonePainting() {
        //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
        //synchronized(this) 
        //mutex.withLock
        this.threadObjectUtil.notifyObject(this);
    }
    //@Throws(Exception.constructor)
    shouldWait() {
        var features = Features.getInstance();
        ;
        if (AndroidUtil.isAndroid()) {
        }
        else if (features.isFeature(this.openGLFeatureFactory.OPENGL_2D)) {
        }
        else {
            if (features.isDefault(this.openGLFeatureFactory.OPENGL)) {
                var openGLImageSpecificFactory = OpenGLImageSpecificFactory.getInstance();
                ;
                while (openGLImageSpecificFactory.updating) {
                    Thread.sleep(this.YIELD_SLEEP);
                }
            }
        }
    }
    run() {
        try {
            this.logUtil.putF(this.commonStrings.START_RUNNABLE, this, this.commonStrings.RUN);
            var progressCanvas = ProgressCanvasFactory.getInstance();
            ;
            progressCanvas.addNormalPortion(50, "Game Thread");
            this.setCurrentThread();
            this.setRunning(true);
            if (this.getCustomCommandListener() == NullCommandListener.NULL_COMMAND_LISTENER) {
                Thread.sleep(this.YIELD_SLEEP);
            }
            this.shouldWait();
            this.threadInit();
            if (this.getCustomCommandListener() == NullCommandListener.NULL_COMMAND_LISTENER) {
                Thread.sleep(this.YIELD_SLEEP);
            }
            this.open();
            var gameAdState = this.gameAdStateFactory.getCurrentInstance();
            ;
            gameAdState.init();
            gameAdState.setGameIsReady(true);
            this.gameBehavior.run(this);
            this.logUtil.putF(this.commonStrings.END_RUNNABLE, this, this.commonStrings.RUN);
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, this.commonStrings.RUN, e);
        }
    }
    //@Throws(Exception.constructor)
    run2() {
        var features = Features.getInstance();
        ;
        if (features.isDefault(this.openGLFeatureFactory.OPENGL_AS_GAME_THREAD) || J2MEUtil.isHTML()) {
            if (features.isDefault(this.openGLFeatureFactory.OPENGL_AS_GAME_THREAD)) {
                this.logUtil.putF(this.openGLFeatureFactory.OPENGL_AS_GAME_THREAD.getName(), this, this.commonStrings.RUN);
            }
            if (J2MEUtil.isHTML()) {
                this.logUtil.putF(GraphicsStrings.getInstance().HTML, this, this.commonStrings.RUN);
            }
            var currentDisplayableFactory = CurrentDisplayableFactory.getInstance();
            ;
            currentDisplayableFactory.setRunnable(this.gameRunnable);
            currentDisplayableFactory.setDisplayable(this);
            OpenGLThreadUtil.getInstance().onResume();
        }
        else if (features.isDefault(this.openGLFeatureFactory.OPENGL_AND_GAME_HAVE_DIFFERENT_THREADS)) {
            this.logUtil.putF(this.openGLFeatureFactory.OPENGL_AND_GAME_HAVE_DIFFERENT_THREADS.getName(), this, this.commonStrings.RUN);
            OpenGLThreadUtil.getInstance().onResume();
            while (this.isRunning()) {
                this.run3();
            }
            this.end();
        }
        else {
            this.logUtil.putF("this thread", this, this.commonStrings.RUN);
            while (this.isRunning()) {
                this.run3();
            }
            this.end();
        }
    }
    //@Throws(Exception.constructor)
    run3() {
        this.loopTimeHelper.setStartTime(this.gameTickTimeDelayHelper.setStartTime());
        this.gameTickDisplayInfoSingleton.update();
        this.processGame();
        this.processLoopSleep();
    }
    setRunning(running) {
        super.setRunning(running);
        try {
            var features = Features.getInstance();
            ;
            if (running) {
            }
            else {
                if (features.isDefault(this.openGLFeatureFactory.OPENGL) || SWTUtil.isSWT) {
                    if (this.gameLayerManager.getGameInfo().getGameType() != this.gameTypeFactory.BOT) {
                        var currentDisplayableFactory = CurrentDisplayableFactory.getInstance();
                        ;
                        currentDisplayableFactory.clearRunnable();
                    }
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
        this.screenCapture.endRecording();
        this.baseGameStatistics.add(new StringMaker().append(this.baseGameStatistics.toString()).append(CommonSeps.getInstance().NEW_LINE).toString());
        this.baseGameStatistics.init();
        this.gameKeyEventHandler.removeListener(this.cheatProcessor);
        this.close();
        this.removeAllGameKeyInputListeners();
        this.endGameThread();
    }
    //@Throws(Exception.constructor)
    endGameThread() {
        DisplayChangeEventHandler.getInstance().removeListener(this);
        GameLevelDisplayChangeEventListenersFactory.getInstance().clear();
        var gameAdState = this.gameAdStateFactory.getCurrentInstance();
        ;
        gameAdState.notPlayingAdState();
    }
    createHighScore(score) {
        var gameInfo = this.gameLayerManager.getGameInfo();
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return new HighScore(0, "NONE", new GameInfo(gameInfo.getGameType(), gameInfo.getGameMode(), PlayerTypesFactory.getInstance().PLAYER_TYPE_ONE, 0, 0), score);
    }
    //@Throws(Exception.constructor)
    setHighScore(abeClientInformation, name, score, autoSubmit, isLast) {
        this.gameBehavior.setHighScore(abeClientInformation, this, name, score, autoSubmit, isLast);
    }
    //@Throws(Exception.constructor)
    setHighScore2(abeClientInformation, name, score, autoSubmit, isLast) {
        var highScore = this.createHighScore(score);
        ;
        var textBox = new HighScoreTextBox(this.highScoresFactoryInterface, this.highScoresHelper, abeClientInformation, this.gameLayerManager.getGameInfo(), this.getCustomCommandListener(), name, highScore, this.gameLayerManager.getBackgroundBasicColor(), this.gameLayerManager.getForegroundBasicColor());
        ;
        if (isLast) {
            this.getCustomCommandListener().commandAction(GameCommandsFactory.getInstance().SET_MENU_DISPLAYABLE, textBox);
        }
        if (autoSubmit) {
            //inner=true member= isStatic=
            class SaveHighScoreRunnable extends Object {
                constructor() {
                    super(...arguments);
                    this.progressCanvas = ProgressCanvasFactory.getInstance();
                }
                run() {
                    var logUtil = LogUtil.getInstance();
                    ;
                    try {
                        if (isLast) {
                            textBox.submit();
                        }
                        else {
                            textBox.saveHighScore();
                        }
                        //: 
                    }
                    catch (e) {
                        var commonStrings = CommonStrings.getInstance();
                        ;
                        logUtil.put(commonStrings.EXCEPTION, this, "run", e);
                        this.progressCanvas.end();
                    }
                }
            }
            SecondaryThreadPool.getInstance().runTask(new SaveHighScoreRunnable());
        }
    }
    getGameStateTimeHelper() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.gameStateTimeHelper;
    }
    setInitialized(initialized) {
        this.initialized = initialized;
    }
    isInitialized() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.initialized;
    }
    getSourceId() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return AllBinaryGameCanvas.id;
    }
    setProgressPaintable(paintable) {
        this.progressPaintable = paintable;
    }
    getStartIntermissionInterface() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.startIntermissionInterface;
    }
    getEndLevelIntermissionInterface() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.endLevelIntermissionInterface;
    }
    setTouchPaintableP(paintable) {
        this.touchPaintable = paintable;
    }
    getTouchPaintableP() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.touchPaintable;
    }
    setEndGamePaintable(endGamePaintable) {
        this.endGamePaintable = endGamePaintable;
    }
    getEndGamePaintable() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.endGamePaintable;
    }
    setIntermissionPaintable(intermissionPaintable) {
        this.intermissionPaintable = intermissionPaintable;
    }
    getIntermissionPaintable() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.intermissionPaintable;
    }
    getEndGameInfoP() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.endGameInfo;
    }
    setHighScoresPaintable(highScoresPaintable) {
        this.highScoresPaintable = highScoresPaintable;
    }
    getHighScoresPaintable() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.highScoresPaintable;
    }
    getRealHighScoresPaintable() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.realHighScoresPaintable;
    }
    clearPlayerGameInputList() {
        var playerGameInput;
        ;
        for (var index = this.localPlayerGameInputList.size() - 1; index >= 0; index--) {
            playerGameInput = this.localPlayerGameInputList.get(index);
            this.gameKeyEventHandler.removeListener(playerGameInput);
        }
        this.localPlayerGameInputList.clear();
    }
    addPlayerGameInput(playerGameInput) {
        this.localPlayerGameInputList.add(playerGameInput);
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
    getStartLevel() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.startLevel;
    }
    setStartLevel(startLevel) {
        this.startLevel = startLevel;
    }
    setTouchButtonsPaintable(touchButtonsPaintable) {
        this.touchButtonsPaintable = touchButtonsPaintable;
    }
    getTouchButtonsPaintable() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.touchButtonsPaintable;
    }
    setGameInputProcessor(gameInputProcessor) {
        this.gameInputProcessor = gameInputProcessor;
    }
    getGameInputProcessor() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.gameInputProcessor;
    }
    setEndGameProcessor(endGameProcessor) {
        this.endGameProcessor = endGameProcessor;
    }
    getEndGameProcessor() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.endGameProcessor;
    }
    setEndGameStatePaintable(endGameStatePaintable) {
        this.endGameStatePaintable = endGameStatePaintable;
    }
    getEndGameStatePaintable() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.endGameStatePaintable;
    }
    setNonBotPaintableP(nonBotPaintable) {
        this.nonBotPaintable = nonBotPaintable;
    }
    getNonBotPaintableP() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.nonBotPaintable;
    }
    setStartIntermissionPaintable(startIntermissionPaintable) {
        this.startIntermissionPaintable = startIntermissionPaintable;
    }
    getStartIntermissionPaintable() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.startIntermissionPaintable;
    }
    setMainStateProcessor(mainStateProcessor) {
        this.mainStateProcessor = mainStateProcessor;
    }
    getMainStateProcessor() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.mainStateProcessor;
    }
    setProcessGameProcessor(processGameProcessor) {
        this.processGameProcessor = processGameProcessor;
    }
    getProcessGameProcessor() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.processGameProcessor;
    }
    setOpenMenuPaintable(openMenuPaintable) {
        this.openMenuPaintable = openMenuPaintable;
    }
    getOpenMenuPaintable() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.openMenuPaintable;
    }
    setPopupMenuInputProcessor(popupMenuInputProcessor) {
        this.popupMenuInputProcessor = popupMenuInputProcessor;
    }
    getPopupMenuInputProcessor() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.popupMenuInputProcessor;
    }
    getSensorGameUpdateProcessor() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.sensorGameUpdateProcessor;
    }
    getRawGameInputProcessor() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.rawGameInputProcessor;
    }
    getRawInputProcessor() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.rawInputProcessor;
    }
    setInputProcessor(inputProcessor) {
        this.inputProcessor = inputProcessor;
    }
    getInputProcessor() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.inputProcessor;
    }
    setMenuPaintable(menuPaintable) {
        this.menuPaintable = menuPaintable;
    }
    getMenuPaintable() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.menuPaintable;
    }
    setFormPaintable(formPaintable) {
        this.formPaintable = formPaintable;
    }
    getFormPaintable() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.formPaintable;
    }
    setGameSpecificPaintableP(gameSpecificPaintable) {
        this.gameSpecificPaintable = gameSpecificPaintable;
    }
    getGameSpecificPaintableP() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.gameSpecificPaintable;
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
    getType() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return AllBinaryGameCanvas.TYPE;
    }
}
AllBinaryGameCanvas.id = 0;
AllBinaryGameCanvas.TYPE = 2;
