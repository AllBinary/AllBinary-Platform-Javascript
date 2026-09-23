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
import { Canvas } from '../../../../javax/microedition/lcdui/Canvas.js';
//not GWT import const RTSPlayerLayerInterface
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
import { Features } from '../../../../org/allbinary/game/configuration/feature/Features.js';
//not GWT import const Features
import { InputFeatureFactory } from '../../../../org/allbinary/game/configuration/feature/InputFeatureFactory.js';
//not GWT import const GameKeyEvent
import { NullRTSFormInputFactory } from '../../../../org/allbinary/game/input/form/NullRTSFormInputFactory.js';
//not GWT import const AllBinaryTiledLayer
import { NullRTSLayer } from '../../../../org/allbinary/game/layer/NullRTSLayer.js';
//not GWT import const NullRTSLayer
import { CollidableDestroyableDamageableLayer } from '../../../../org/allbinary/game/layer/special/CollidableDestroyableDamageableLayer.js';
//not GWT import const GPoint
import { BasicColorFactory } from '../../../../org/allbinary/graphics/color/BasicColorFactory.js';
//not GWT import const MotionGestureEvent
import { AllBinaryLayer } from '../../../../org/allbinary/layer/AllBinaryLayer.js';
//not GWT import const AllBinaryLayerManager
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
import { SecondaryPlayerQueueFactory } from '../../../../org/allbinary/media/audio/SecondaryPlayerQueueFactory.js';
//not GWT import const SecondaryPlayerQueueFactory
import { SelectSound } from '../../../../org/allbinary/media/audio/SelectSound.js';
//not GWT import const GeographicMapCompositeInterface
import { SimpleGeographicMapCellPositionFactory } from '../../../../org/allbinary/media/graphics/geography/map/SimpleGeographicMapCellPositionFactory.js';
//not GWT import const SimpleGeographicMapCellPositionFactory
//not plain js import { CommonLabels } 
const CommonLabels = globalThis.org.allbinary.string.CommonLabels;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { PlayerGameInput } from './PlayerGameInput.js';
//not GWT import - same folder const PlayerGameInput
import { InputFactory } from './InputFactory.js';
//not GWT import - same folder const GameInputProcessor
import { ScrollMapPlayerGameInput } from './ScrollMapPlayerGameInput.js';
//not GWT import - same folder const ScrollMapPlayerGameInput
import { SelectedRTSLayersPlayerGameInput } from './SelectedRTSLayersPlayerGameInput.js';
//not GWT import - same folder const SelectRTSLayerVisitorFactoryInterface
import { RTSPlayerLeftGameInputProcessor } from './RTSPlayerLeftGameInputProcessor.js';
//not GWT import - same folder const RTSPlayerLeftGameInputProcessor
import { RTSPlayerRightGameInputProcessor } from './RTSPlayerRightGameInputProcessor.js';
//not GWT import - same folder const RTSPlayerRightGameInputProcessor
import { RTSPlayerFireGameInputProcessor } from './RTSPlayerFireGameInputProcessor.js';
//not GWT import - same folder const RTSPlayerFireGameInputProcessor
import { GameInputProcessorUtil } from './GameInputProcessorUtil.js';
//not GWT import - same folder const GameInputProcessorUtil
export class RTSPlayerGameInput extends PlayerGameInput {
    constructor(gameCanvas, inputList, playerInputId, towerInfoPaintable, rtsPlayerLayerInterface, layerPositionFinderInterface, selectRTSLayerVisitorFactoryInterface) {
        super(inputList, new BasicArrayListD(), playerInputId);
        this.inputProcessorArray = new Array(InputFactory.getInstance().MAX);
        this.removeInputProcessorArray = new Array(InputFactory.getInstance().MAX);
        this.isSingleKeyProcessing = Features.getInstance().isFeature(InputFeatureFactory.getInstance().SINGLE_KEY_REPEAT_PRESS) || Features.getInstance().isFeature(InputFeatureFactory.getInstance().SINGLE_KEY_PRESS);
        this.motionGestureInputList = new BasicArrayListD();
        this.selectedRtsFormInput = NullRTSFormInputFactory.getInstance();
        //For kotlin this is before the body of the constructor.
        this.initInputProcessors();
        this.gameCanvas = gameCanvas;
        this.inputList = inputList;
        this.towerInfoPaintable = towerInfoPaintable;
        this.rtsPlayerLayerInterface = rtsPlayerLayerInterface;
        this.selectedRTSLayerPlayerGameInput = new SelectedRTSLayersPlayerGameInput(this.getRTSLayerInfoPaintable(), this.getRtsPlayerLayerInterface(), this.inputList, playerInputId, selectRTSLayerVisitorFactoryInterface);
        if (this.rtsPlayerLayerInterface != NullRTSLayer.NULL_RTS_LAYER) {
            this.setSelectedRtsFormInput(this.rtsPlayerLayerInterface.getRTSFormInput());
        }
        var geographicMapCompositeInterface = this.gameCanvas.getLayerManager();
        ;
        var geographicMapInterface = geographicMapCompositeInterface.getGeographicMapInterface()[0];
        ;
        this.scrollPlayerGameInput = new ScrollMapPlayerGameInput(geographicMapInterface, this.inputList, playerInputId);
        this.layerPositionFinderInterface = layerPositionFinderInterface;
    }
    //@Throws(Exception.constructor)
    setAllBinaryGameLayerManager(allBinaryGameLayerManager) {
        this.selectedRTSLayerPlayerGameInput.setAllBinaryGameLayerManager(allBinaryGameLayerManager);
        if (this.selectedRtsFormInput != NullRTSFormInputFactory.getInstance()) {
            this.selectedRtsFormInput.setAllBinaryGameLayerManager(allBinaryGameLayerManager);
        }
    }
    onDisplayChangeEvent(displayChangeEvent) {
        try {
            this.logUtil.putF(this.commonStrings.START, this, "onDisplayChangeEvent");
            this.getRTSLayerInfoPaintable().update();
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, "onDisplayChangeEvent", e);
        }
    }
    //@Throws(Exception.constructor)
    left() {
        this.rtsPlayerLayerInterface.getCurrentScrollSelectionForm().processInputKey(Canvas.LEFT);
    }
    //@Throws(Exception.constructor)
    right() {
        this.rtsPlayerLayerInterface.getCurrentScrollSelectionForm().processInputKey(Canvas.RIGHT);
    }
    initInputProcessors() {
        this.inputProcessorArray[Canvas.LEFT] = new RTSPlayerLeftGameInputProcessor(this);
        this.inputProcessorArray[Canvas.KEY_NUM0] = this.inputProcessorArray[Canvas.LEFT];
        this.inputProcessorArray[Canvas.RIGHT] = new RTSPlayerRightGameInputProcessor(this);
        this.inputProcessorArray[Canvas.KEY_POUND] = this.inputProcessorArray[Canvas.RIGHT];
        this.removeInputProcessorArray[Canvas.KEY_NUM1] = new RTSPlayerFireGameInputProcessor(this);
        this.removeInputProcessorArray[Canvas.KEY_NUM3] = this.removeInputProcessorArray[Canvas.KEY_NUM1];
        this.removeInputProcessorArray[Canvas.KEY_NUM3] = this.removeInputProcessorArray[Canvas.KEY_NUM1];
        this.removeInputProcessorArray[Canvas.LEFT] = this.removeInputProcessorArray[Canvas.KEY_NUM1];
        this.removeInputProcessorArray[Canvas.RIGHT] = this.removeInputProcessorArray[Canvas.KEY_NUM1];
        this.removeInputProcessorArray[Canvas.KEY_NUM0] = this.removeInputProcessorArray[Canvas.KEY_NUM1];
        this.removeInputProcessorArray[Canvas.KEY_POUND] = this.removeInputProcessorArray[Canvas.KEY_NUM1];
        GameInputProcessorUtil.init(this.inputProcessorArray);
        GameInputProcessorUtil.init(this.removeInputProcessorArray);
    }
    //@Throws(Exception.constructor)
    processInput(layerManager) {
        try {
            this.processMotionInput(layerManager);
            var size = this.inputList.size();
            ;
            var key = 0;
            ;
            for (var index = 0; index < size; index++) {
                var gameKeyEvent = this.inputList.get(index);
                ;
                key = gameKeyEvent.getKey();
                this.getScrollPlayerGameInput().processInputKey(key);
                this.getSelectedBuildingPlayerGameInput().processInputKey(key);
                this.inputProcessorArray[key].processEvent(layerManager, gameKeyEvent);
                this.removeInputProcessorArray[key].processEvent(layerManager, gameKeyEvent);
            }
            if (this.isIsSingleKeyProcessing()) {
                this.clear();
            }
            else {
                this.update();
            }
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, this.gameInputStrings.PROCESS_INPUT, e);
        }
    }
    //@Throws(Exception.constructor)
    processMotionInput(layerManager) {
    }
    //@Throws(Exception.constructor)
    select(motionGestureEvent) {
        var point = motionGestureEvent.getCurrentPoint();
        ;
        var geographicMapCompositeInterface = this.gameCanvas.getLayerManager();
        ;
        var geographicMapInterface = geographicMapCompositeInterface.getGeographicMapInterface()[0];
        ;
        var allBinaryTiledLayer = geographicMapInterface.getAllBinaryTiledLayer();
        ;
        var x = point.getX() + allBinaryTiledLayer.getXP();
        ;
        var y = point.getY() + allBinaryTiledLayer.getYP();
        ;
        var geographicMapCellPosition = geographicMapInterface.getCellPositionAtXYNoThrow(x, y);
        ;
        if (geographicMapCellPosition != SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION) {
            SecondaryPlayerQueueFactory.getInstance().add(SelectSound.getInstance());
            var layer = this.layerPositionFinderInterface.getLayerInterface(geographicMapCellPosition);
            ;
            if (layer == AllBinaryLayer.NULL_ALLBINARY_LAYER) {
                layer = CollidableDestroyableDamageableLayer.getNullInstance();
            }
            else {
                geographicMapCellPosition = geographicMapInterface.getCellPositionAtXY(layer.getXP(), layer.getYP());
            }
            var foundRTSLayer = layer;
            ;
            this.setSelectedRTSLayer(foundRTSLayer, geographicMapCellPosition);
        }
        else {
            var commonLabels = CommonLabels.getInstance();
            ;
            this.logUtil.putF(new StringMaker().append("Off Of Map -").append(commonLabels.WIDTH_LABEL).appendint(allBinaryTiledLayer.getWidth()).append(commonLabels.HEIGHT_LABEL).appendint(allBinaryTiledLayer.getHeight()).toString(), this, "select");
        }
    }
    //@Throws(Exception.constructor)
    setSelectedRTSLayer(rtsLayer, geographicMapCellPosition) {
        this.getSelectedBuildingPlayerGameInput().setSelectedRTSLayer(rtsLayer);
    }
    paint(graphics) {
        var geographicMapCellPosition = this.getSelectedRtsFormInput().getSelectedGeographicCellPosition();
        ;
        var geographicMapCompositeInterface = this.gameCanvas.getLayerManager();
        ;
        var geographicMapInterface = geographicMapCompositeInterface.getGeographicMapInterface()[0];
        ;
        var allBinaryTiledLayer = geographicMapInterface.getAllBinaryTiledLayer();
        ;
        graphics.setColor(BasicColorFactory.getInstance().GREEN.intValue());
        var list = this.getSelectedBuildingPlayerGameInput().getPaintSelectedRTSLayersList();
        ;
        var width = 0;
        ;
        var height = 0;
        ;
        if (list.size() > 0) {
            for (var index = list.size() - 1; index >= 0; index--) {
                var rtsLayer = list.get(index);
                ;
                width = rtsLayer.getWidth();
                height = rtsLayer.getHeight();
                graphics.drawRect(rtsLayer.getXP() - allBinaryTiledLayer.getXP(), rtsLayer.getYP() - allBinaryTiledLayer.getYP(), width, height);
            }
        }
        else if (geographicMapCellPosition != SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION) {
            var point = geographicMapCellPosition.getPoint();
            ;
            width = allBinaryTiledLayer.getCellWidth();
            height = allBinaryTiledLayer.getCellHeight();
            graphics.drawRect(point.getX() - allBinaryTiledLayer.getXP(), point.getY() - allBinaryTiledLayer.getYP(), width, height);
        }
    }
    updatePaintable() {
    }
    getSelectedBuildingPlayerGameInput() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.selectedRTSLayerPlayerGameInput;
    }
    getSelectedRtsFormInput() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.selectedRtsFormInput;
    }
    setSelectedRtsFormInput(selectedRtsFormInput) {
        this.logUtil.putF(new StringMaker().append("RTSFormInput: ").append(StringUtil.getInstance().toString(selectedRtsFormInput)).toString(), this, "setSelectedRtsFormInput");
        this.selectedRtsFormInput = selectedRtsFormInput;
    }
    getRtsPlayerLayerInterface() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.rtsPlayerLayerInterface;
    }
    getRTSLayerInfoPaintable() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.towerInfoPaintable;
    }
    getMotionGestureInputList() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.motionGestureInputList;
    }
    getGameCanvas() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.gameCanvas;
    }
    isIsSingleKeyProcessing() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.isSingleKeyProcessing;
    }
    getScrollPlayerGameInput() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.scrollPlayerGameInput;
    }
}
