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
//not plain js import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
const Graphics = globalThis.javax.microedition.lcdui.Graphics;
//not GWT import const RTSFormInput = globalThis.org.allbinary.game.input.form.RTSFormInput;
import { MultiSelectPaintable } from '../../../../org/allbinary/game/layer/MultiSelectPaintable.js';
//not GWT import const MultiSelectPaintable = globalThis.org.allbinary.game.layer.MultiSelectPaintable;
import { RTSGameStrings } from '../../../../org/allbinary/game/layer/RTSGameStrings.js';
//not GWT import const RTSPlayerLayerInterface = globalThis.org.allbinary.game.layer.RTSPlayerLayerInterface;
import { GameStateFactory } from '../../../../org/allbinary/game/state/GameStateFactory.js';
//not GWT import const GameStateFactory = globalThis.org.allbinary.game.state.GameStateFactory;
import { EndLevelNoBuildingSelectedTouchButtonsBuilder } from '../../../../org/allbinary/input/motion/button/EndLevelNoBuildingSelectedTouchButtonsBuilder.js';
//not GWT import const EndLevelNoBuildingSelectedTouchButtonsBuilder = globalThis.org.allbinary.input.motion.button.EndLevelNoBuildingSelectedTouchButtonsBuilder;
import { EndLevelTouchButtonsBuilder } from '../../../../org/allbinary/input/motion/button/EndLevelTouchButtonsBuilder.js';
//not GWT import const EndLevelTouchButtonsBuilder = globalThis.org.allbinary.input.motion.button.EndLevelTouchButtonsBuilder;
import { NoBuildingSelectedTouchButtonsBuilder } from '../../../../org/allbinary/input/motion/button/NoBuildingSelectedTouchButtonsBuilder.js';
//not GWT import const NoBuildingSelectedTouchButtonsBuilder = globalThis.org.allbinary.input.motion.button.NoBuildingSelectedTouchButtonsBuilder;
import { RTSTouchButtonsBuilder } from '../../../../org/allbinary/input/motion/button/RTSTouchButtonsBuilder.js';
//not GWT import const RTSTouchButtonsBuilder = globalThis.org.allbinary.input.motion.button.RTSTouchButtonsBuilder;
import { SelectBuildingSound } from '../../../../org/allbinary/media/audio/SelectBuildingSound.js';
//not GWT import const SelectBuildingSound = globalThis.org.allbinary.media.audio.SelectBuildingSound;
//not plain js import { BasicArrayList } from '../../../../org/allbinary/util/BasicArrayList.js';
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { CommonSeps } from '../../../../org/allbinary/string/CommonSeps.js';
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
//not plain js import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
import { BooleanFactory } from '../../../../org/allbinary/logic/java/bool/BooleanFactory.js';
//not GWT import const AllBinaryGameLayerManager = globalThis.org.allbinary.game.layer.AllBinaryGameLayerManager;
import { GameNotificationEvent } from '../../../../org/allbinary/game/layer/hud/event/GameNotificationEvent.js';
//not GWT import const GameNotificationEvent = globalThis.org.allbinary.game.layer.hud.event.GameNotificationEvent;
import { GameNotificationEventHandler } from '../../../../org/allbinary/game/layer/hud/event/GameNotificationEventHandler.js';
//not GWT import const GameNotificationEventHandler = globalThis.org.allbinary.game.layer.hud.event.GameNotificationEventHandler;
import { CollidableDestroyableDamageableLayer } from '../../../../org/allbinary/game/layer/special/CollidableDestroyableDamageableLayer.js';
//not GWT import const CollidableDestroyableDamageableLayer = globalThis.org.allbinary.game.layer.special.CollidableDestroyableDamageableLayer;
//not plain js import { GPoint } from '../../../../org/allbinary/graphics/GPoint.js';
const GPoint = globalThis.org.allbinary.graphics.GPoint;
//not plain js import { PointFactory } from '../../../../org/allbinary/graphics/PointFactory.js';
const PointFactory = globalThis.org.allbinary.graphics.PointFactory;
import { BasicColorFactory } from '../../../../org/allbinary/graphics/color/BasicColorFactory.js';
//not GWT import const BasicColorFactory = globalThis.org.allbinary.graphics.color.BasicColorFactory;
import { ScrollSelectionForm } from '../../../../org/allbinary/graphics/form/ScrollSelectionForm.js';
//not GWT import const ScrollSelectionForm = globalThis.org.allbinary.graphics.form.ScrollSelectionForm;
import { ABCustomItem } from '../../../../org/allbinary/graphics/form/item/ABCustomItem.js';
//not GWT import const ABCustomItem = globalThis.org.allbinary.graphics.form.item.ABCustomItem;
import { NullInitUpdatePaintable } from '../../../../org/allbinary/graphics/paint/NullInitUpdatePaintable.js';
//not GWT import const MotionGestureInput = globalThis.org.allbinary.input.motion.gesture.MotionGestureInput;
import { TouchMotionGestureFactory } from '../../../../org/allbinary/input/motion/gesture/TouchMotionGestureFactory.js';
//not GWT import const BaseMotionGestureEventListener = globalThis.org.allbinary.input.motion.gesture.observer.BaseMotionGestureEventListener;
import { BasicMotionGesturesHandler } from '../../../../org/allbinary/input/motion/gesture/observer/BasicMotionGesturesHandler.js';
//not GWT import const AllBinaryLayerManager = globalThis.org.allbinary.layer.AllBinaryLayerManager;
//not plain js import { SmallIntegerSingletonFactory } from '../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js';
const SmallIntegerSingletonFactory = globalThis.org.allbinary.logic.math.SmallIntegerSingletonFactory;
//not plain js import { CommonLabels } from '../../../../org/allbinary/string/CommonLabels.js';
const CommonLabels = globalThis.org.allbinary.string.CommonLabels;
//not plain js import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//not plain js import { RectangleCollisionUtil } from '../../../../org/allbinary/math/RectangleCollisionUtil.js';
const RectangleCollisionUtil = globalThis.org.allbinary.math.RectangleCollisionUtil;
import { ErrorSound } from '../../../../org/allbinary/media/audio/ErrorSound.js';
//not GWT import const ViewPositionBase = globalThis.org.allbinary.view.ViewPositionBase;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { RTSPlayerGameInput } from './RTSPlayerGameInput.js';
//not GWT import const SelectRTSLayerVisitorFactoryInterface = globalThis.org.allbinary.game.input.SelectRTSLayerVisitorFactoryInterface;
export class HumanRTSPlayerGameInput extends RTSPlayerGameInput {
    constructor(gameCanvas, inputList, playerInputId, towerInfoPaintable, rtsPlayerLayerInterface, layerPositionFinderInterface, selectRTSLayerVisitorFactoryInterface, touchButtonsBuilderFactory) {
        super(gameCanvas, inputList, playerInputId, towerInfoPaintable, rtsPlayerLayerInterface, layerPositionFinderInterface, selectRTSLayerVisitorFactoryInterface);
        this.isDragging = false;
        this.gameStateFactory = GameStateFactory.getInstance();
        this.rectangleCollisionUtil = RectangleCollisionUtil.getInstance();
        this.touchMotionGestureFactory = TouchMotionGestureFactory.getInstance();
        this.PRESSED = this.touchMotionGestureFactory.PRESSED;
        this.RELEASED = this.touchMotionGestureFactory.RELEASED;
        this.selectedRtsLayer = CollidableDestroyableDamageableLayer.getNullInstance();
        this.startPoint = PointFactory.getInstance().ZERO_ZERO;
        this.endPoint = PointFactory.getInstance().ZERO_ZERO;
        this.POSSIBLE = "Possible: ";
        this.AT = "At: ";
        this.METHOD = "makeSelection";
        this.ADDING = "Adding: ";
        this.SPACE = CommonSeps.getInstance().SPACE;
        this.multiSelectPaintable = new MultiSelectPaintable();
        //For kotlin this is before the body of the constructor.
        this.touchButtonsBuilderFactory = touchButtonsBuilderFactory;
        var basicColorFactory = BasicColorFactory.getInstance();
        ;
        this.notYoursGameNotificationEvent = new GameNotificationEvent(this, RTSGameStrings.getInstance().NOT_YOURS, SmallIntegerSingletonFactory.getInstance().getAt(2), basicColorFactory.PINK, BooleanFactory.getInstance().FALSE);
        BasicMotionGesturesHandler.getInstance().addListenerInterface(this);
    }
    //@Throws(Exception.constructor)
    setAllBinaryGameLayerManager(allBinaryGameLayerManager) {
        var geographicMapCompositeInterface = allBinaryGameLayerManager;
        ;
        var geographicMapInterface = geographicMapCompositeInterface.getGeographicMapInterface()[0];
        ;
        this.notYoursGameNotificationEvent.setBasicColorP(geographicMapInterface.getForegroundBasicColor());
    }
    //@Throws(Exception.constructor)
    processDraggingMotionInput(layerManager) {
        var motionGestureEvent = this.getMotionGestureInputList().get(this.getMotionGestureInputList().size() - 1);
        ;
        var motionGestureInput = motionGestureEvent.getMotionGesture();
        ;
        var rtsFormInput = this.getSelectedRtsFormInput();
        ;
        if (motionGestureInput == this.PRESSED) {
            var point = motionGestureEvent.getCurrentPoint();
            ;
            if (this.getRtsPlayerLayerInterface().getCurrentScrollSelectionForm().isInForm(point)) {
                this.isDragging = rtsFormInput.processSticky(this.getSelectedRtsLayer(), this.getRtsPlayerLayerInterface(), layerManager, point);
            }
        }
        else if (motionGestureInput == this.RELEASED) {
            var point = motionGestureEvent.getCurrentPoint();
            ;
            if (this.getRtsPlayerLayerInterface().getCurrentScrollSelectionForm().isInForm(point)) {
                rtsFormInput.processAtPoint(this.getSelectedRtsLayer(), this.getRtsPlayerLayerInterface(), layerManager, point);
            }
            else if (rtsFormInput.isStickyItemSelected()) {
                var previousRtsFormInput = rtsFormInput;
                ;
                this.select(motionGestureEvent);
                this.getSelectedBuildingPlayerGameInput().selectAllPreselected();
                previousRtsFormInput.processAtPoint(this.getSelectedRtsLayer(), this.getRtsPlayerLayerInterface(), layerManager, point);
                this.getSelectedBuildingPlayerGameInput().deselectAllPreselected();
            }
            else {
                this.select(motionGestureEvent);
            }
            rtsFormInput.setStickyItemSelected(false);
            rtsFormInput.setSelectedStickyItem(ABCustomItem.getNullInstance());
            rtsFormInput.setSelectedStickyItemIndex(-1);
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    makeSelection() {
        var rtsLayerList = this.getRtsPlayerLayerInterface().getPlayerOwnedRTSLayers().rtsLayerList;
        ;
        var rectX1 = this.startPoint.getX();
        ;
        var rectY1 = this.startPoint.getY();
        ;
        var rectX2 = this.endPoint.getX();
        ;
        var rectY2 = this.endPoint.getY();
        ;
        if (rectX1 > rectX2) {
            rectX2 = rectX1;
            rectX1 = this.endPoint.getX();
        }
        if (rectY1 > rectY2) {
            rectY2 = rectY1;
            rectY1 = this.endPoint.getY();
        }
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append(this.AT);
        stringBuffer.appendint(rectX1);
        stringBuffer.append(this.SPACE);
        stringBuffer.appendint(rectY1);
        stringBuffer.append(this.SPACE);
        stringBuffer.appendint(rectX2);
        stringBuffer.append(this.SPACE);
        stringBuffer.appendint(rectY2);
        this.logUtil.putF(stringBuffer.toString(), this, this.METHOD);
        var rtsLayer;
        ;
        for (var index = rtsLayerList.size() - 1; index >= 0; index--) {
            rtsLayer = rtsLayerList.get(index);
            stringBuffer.delete(0, stringBuffer.length());
            var viewPosition = rtsLayer.getViewPosition();
            ;
            stringBuffer.append(this.POSSIBLE);
            stringBuffer.append(rtsLayer.getName());
            stringBuffer.append(this.SPACE);
            stringBuffer.append(this.AT);
            stringBuffer.appendint((viewPosition.getX() + rtsLayer.getHalfWidth()));
            stringBuffer.append(this.SPACE);
            stringBuffer.appendint((viewPosition.getY() + rtsLayer.getHalfHeight()));
            this.logUtil.putF(stringBuffer.toString(), this, this.METHOD);
            if (this.rectangleCollisionUtil.isInside(rectX1, rectY1, rectX2, rectY2, viewPosition.getX() + rtsLayer.getHalfWidth(), viewPosition.getY() + rtsLayer.getHalfHeight())) {
                this.logUtil.putF(new StringMaker().append(this.ADDING).append(rtsLayer.getName()).toString(), this, this.METHOD);
                rtsLayer.select();
                this.getSelectedBuildingPlayerGameInput().addSelectedRTSLayer(rtsLayer);
            }
        }
        var gameLayer = this.getSelectedBuildingPlayerGameInput().getLastSelectedRtsLayer();
        ;
        if (gameLayer != CollidableDestroyableDamageableLayer.getNullInstance()) {
            var lastRTSLayer = gameLayer;
            ;
            if (lastRTSLayer.getScrollSelectionForm() != ScrollSelectionForm.getNullScrollSelectionForm()) {
                this.updateForm(lastRTSLayer.getScrollSelectionForm(), lastRTSLayer.getRTSFormInput());
                this.setSelectedRtsLayer(lastRTSLayer);
            }
        }
        this.updatePaintable();
    }
    //@Throws(Exception.constructor)
    processSelectionBoxMotionInput(layerManager) {
        for (var index = this.getMotionGestureInputList().size() - 1; index >= 0; index--) {
            var motionGestureEvent = this.getMotionGestureInputList().get(index);
            ;
            var motionGestureInput = motionGestureEvent.getMotionGesture();
            ;
            var point = motionGestureEvent.getCurrentPoint();
            ;
            if (motionGestureInput == this.touchMotionGestureFactory.PRESSED) {
                this.startPoint = point;
                this.endPoint = point;
            }
            else if (motionGestureInput == this.touchMotionGestureFactory.RELEASED) {
                this.endPoint = point;
                this.makeSelection();
                this.startPoint = PointFactory.getInstance().ZERO_ZERO;
                this.endPoint = PointFactory.getInstance().ZERO_ZERO;
            }
            else {
                this.endPoint = point;
            }
        }
    }
    //@Throws(Exception.constructor)
    processMotionInput(layerManager) {
        if (this.getMotionGestureInputList().size() > 0) {
            var endDrag = this.processDraggingMotionInput(layerManager);
            ;
            if (!this.isDragging) {
                this.processSelectionBoxMotionInput(layerManager);
            }
            if (endDrag) {
                this.isDragging = false;
            }
        }
        this.getMotionGestureInputList().clear();
    }
    setSelectedRtsFormInput(selectedRtsFormInput) {
        var logUtil = LogUtil.getInstance();
        ;
        this.logUtil.putF(new StringMaker().append(CommonLabels.getInstance().START).append(StringUtil.getInstance().toString(selectedRtsFormInput)).toString(), this, "setSelectedRtsFormInput");
        super.setSelectedRtsFormInput(selectedRtsFormInput);
        this.setSelectedRtsLayer(CollidableDestroyableDamageableLayer.getNullInstance());
    }
    updateFormForLayer(rtsLayer) {
        var scrollSelectionForm = rtsLayer.getScrollSelectionForm();
        ;
        if (scrollSelectionForm != ScrollSelectionForm.getNullScrollSelectionForm() && this.getRtsPlayerLayerInterface().getGroupInterface()[0] == rtsLayer.getGroupInterface()[0]) {
            this.updateForm(scrollSelectionForm, rtsLayer.getRTSFormInput());
            this.getSelectedBuildingPlayerGameInput().setSelectedRTSLayer(CollidableDestroyableDamageableLayer.getNullInstance());
            this.setSelectedRtsLayer(rtsLayer);
        }
        else {
            this.getRtsPlayerLayerInterface().setCurrentScrollSelectionForm(this.getRtsPlayerLayerInterface().getBuildingScrollSelectionForm());
            this.setSelectedRtsFormInput(this.getRtsPlayerLayerInterface().getRTSFormInput());
            this.getSelectedBuildingPlayerGameInput().setSelectedRTSLayer(CollidableDestroyableDamageableLayer.getNullInstance());
        }
    }
    updateForm(scrollSelectionForm, rtfFormInput) {
        this.getRtsPlayerLayerInterface().setCurrentScrollSelectionForm(scrollSelectionForm);
        this.setSelectedRtsFormInput(rtfFormInput);
    }
    //@Throws(Exception.constructor)
    setSelectedRTSLayer(rtSLayer, geographicMapCellPosition) {
        if (rtSLayer != CollidableDestroyableDamageableLayer.getNullInstance() && this.getRtsPlayerLayerInterface().getGroupInterface()[0] != rtSLayer.getGroupInterface()[0]) {
            this.getRtsPlayerLayerInterface().add(ErrorSound.getInstance());
            GameNotificationEventHandler.getInstance().fireEvent(this.notYoursGameNotificationEvent);
            //if statement needs to be on the same line and ternary does not work the same way.
            return;
        }
        var gameCanvas = this.getGameCanvas();
        ;
        if (rtSLayer != CollidableDestroyableDamageableLayer.NULL_COLLIDABLE_DESTROYABLE_DAMAGE_LAYER) {
            this.getRtsPlayerLayerInterface().add(SelectBuildingSound.getInstance());
            var rtsLayer = rtSLayer;
            ;
            rtsLayer.select();
            this.updateFormForLayer(rtsLayer);
            if (gameCanvas.getGameState() == this.gameStateFactory.PLAYING_GAME_STATE) {
                if (rtsLayer.isSelfUpgradeable()) {
                    gameCanvas.updateCurrentTouchInputFactory(new RTSTouchButtonsBuilder());
                }
                else {
                    gameCanvas.updateCurrentTouchInputFactory(new NoBuildingSelectedTouchButtonsBuilder());
                }
            }
            else {
                var endLevelTouchButtonsBuilder = new EndLevelTouchButtonsBuilder();
                ;
                if (this.touchButtonsBuilderFactory !=
                    null) {
                    endLevelTouchButtonsBuilder.add(this.touchButtonsBuilderFactory.getInstance());
                }
                gameCanvas.updateCurrentTouchInputFactory(endLevelTouchButtonsBuilder);
            }
        }
        else {
            this.logUtil.putF("Set Player Default Form", this, "setSelectedRTSLayer");
            this.getRtsPlayerLayerInterface().setCurrentScrollSelectionForm(this.getRtsPlayerLayerInterface().getBuildingScrollSelectionForm());
            this.setSelectedRtsFormInput(this.getRtsPlayerLayerInterface().getRTSFormInput());
            this.getSelectedBuildingPlayerGameInput().setSelectedRTSLayer(CollidableDestroyableDamageableLayer.getNullInstance());
            if (gameCanvas.getGameState() == this.gameStateFactory.PLAYING_GAME_STATE) {
                gameCanvas.updateCurrentTouchInputFactory(new NoBuildingSelectedTouchButtonsBuilder());
            }
            else {
                var endLevelNoBuildingSelectedTouchButtonsBuilder = new EndLevelNoBuildingSelectedTouchButtonsBuilder();
                ;
                if (this.touchButtonsBuilderFactory !=
                    null) {
                    endLevelNoBuildingSelectedTouchButtonsBuilder.add(this.touchButtonsBuilderFactory.getInstance());
                }
                gameCanvas.updateCurrentTouchInputFactory(endLevelNoBuildingSelectedTouchButtonsBuilder);
            }
        }
        this.getSelectedRtsFormInput().setSelectedGeographicCellPosition(geographicMapCellPosition);
        this.getSelectedBuildingPlayerGameInput().setSelectedRTSLayer(rtSLayer);
        this.updatePaintable();
    }
    updatePaintable() {
        var list = this.getSelectedBuildingPlayerGameInput().getSelectedBasicArrayList();
        ;
        if (list.size() > 1) {
            var geographicMapCompositeInterface = this.getGameCanvas();
            ;
            var geographicMapInterface = geographicMapCompositeInterface.getGeographicMapInterface()[0];
            ;
            this.multiSelectPaintable.setBasicColorP(geographicMapInterface.getForegroundBasicColor());
            this.multiSelectPaintable.update(list);
            this.getRTSLayerInfoPaintable().updateRTSLayerInfoSelection(this.multiSelectPaintable);
        }
        else if (list.size() == 1) {
            var rtsLayer = list.get(0);
            ;
            this.getRTSLayerInfoPaintable().updateRTSLayerInfoSelection(rtsLayer.createHudPaintable());
        }
        else {
            this.getRTSLayerInfoPaintable().updateRTSLayerInfoInit(NullInitUpdatePaintable.getInstance());
        }
    }
    paint(graphics) {
        super.paint(graphics);
        if (this.startPoint != PointFactory.getInstance().ZERO_ZERO && this.endPoint != PointFactory.getInstance().ZERO_ZERO) {
            graphics.setColor(BasicColorFactory.getInstance().RED.intValue());
            var rectX1 = this.startPoint.getX();
            ;
            var rectY1 = this.startPoint.getY();
            ;
            var rectX2 = this.endPoint.getX();
            ;
            var rectY2 = this.endPoint.getY();
            ;
            if (rectX1 > rectX2) {
                rectX2 = rectX1;
                rectX1 = this.endPoint.getX();
            }
            if (rectY1 > rectY2) {
                rectY2 = rectY1;
                rectY1 = this.endPoint.getY();
            }
            graphics.drawRect(rectX1, rectY1, rectX2 - rectX1, rectY2 - rectY1);
        }
    }
    onMotionGestureEvent(motionGestureEvent) {
        this.getMotionGestureInputList().add(motionGestureEvent);
    }
    onScrolledMotionGestureEvent(motionGestureEvent) {
    }
    getSelectedRtsLayer() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.selectedRtsLayer;
    }
    setSelectedRtsLayer(selectedRtsLayer) {
        this.selectedRtsLayer = selectedRtsLayer;
    }
}
