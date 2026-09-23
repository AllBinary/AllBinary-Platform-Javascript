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
//not GWT import const Canvas
import { RTSGameStrings } from '../../../../org/allbinary/game/layer/RTSGameStrings.js';
//not GWT import const Capital
import { DowngradeSound } from '../../../../org/allbinary/media/audio/DowngradeSound.js';
//not GWT import const DowngradeSound
import { UpgradeSound } from '../../../../org/allbinary/media/audio/UpgradeSound.js';
//not GWT import const UpgradeSound
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//not plain js import { BasicArrayListUtil } 
const BasicArrayListUtil = globalThis.org.allbinary.util.BasicArrayListUtil;
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
import { BooleanFactory } from '../../../../org/allbinary/logic/java/bool/BooleanFactory.js';
//not GWT import const BooleanFactory
import { Features } from '../../../../org/allbinary/game/configuration/feature/Features.js';
//not GWT import const Features
import { InputFeatureFactory } from '../../../../org/allbinary/game/configuration/feature/InputFeatureFactory.js';
//not GWT import const InputFeatureFactory
import { GameKeyEvent } from '../../../../org/allbinary/game/input/event/GameKeyEvent.js';
//not GWT import const GameKeyEvent
import { AllBinaryGameLayerManager } from '../../../../org/allbinary/game/layer/AllBinaryGameLayerManager.js';
//not GWT import const AllBinaryGameLayerManager
import { GameNotificationEvent } from '../../../../org/allbinary/game/layer/hud/event/GameNotificationEvent.js';
//not GWT import const GameNotificationEvent
import { GameNotificationEventHandler } from '../../../../org/allbinary/game/layer/hud/event/GameNotificationEventHandler.js';
//not GWT import const GameNotificationEventHandler
import { CollidableDestroyableDamageableLayer } from '../../../../org/allbinary/game/layer/special/CollidableDestroyableDamageableLayer.js';
//not GWT import const CollidableDestroyableDamageableLayer
import { BasicColorFactory } from '../../../../org/allbinary/graphics/color/BasicColorFactory.js';
//not GWT import const Visitor
import { SmallIntegerSingletonFactory } from '../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js';
//not GWT import const SmallIntegerSingletonFactory
import { ErrorSound } from '../../../../org/allbinary/media/audio/ErrorSound.js';
//not GWT import const GeographicMapCompositeInterface
//Current folder imports from return types, extended types, and scope (deduplicated)
import { PlayerGameInput } from './PlayerGameInput.js';
//not GWT import - same folder const PlayerGameInput
import { InputFactory } from './InputFactory.js';
//not GWT import - same folder const RTSPlayerGameInput
import { SelectedRTSLayersPlayerUpgradeGameInputProcessor } from './SelectedRTSLayersPlayerUpgradeGameInputProcessor.js';
//not GWT import - same folder const SelectedRTSLayersPlayerUpgradeGameInputProcessor
import { SelectedRTSLayersPlayerDowngradeGameInputProcessor } from './SelectedRTSLayersPlayerDowngradeGameInputProcessor.js';
//not GWT import - same folder const SelectedRTSLayersPlayerDowngradeGameInputProcessor
import { GameInputProcessorUtil } from './GameInputProcessorUtil.js';
//not GWT import - same folder const GameInputProcessorUtil
export class SelectedRTSLayersPlayerGameInput extends PlayerGameInput {
    constructor(towerInfoPaintable, rtsPlayerLayerInterface, list, playerInputId, selectRTSLayerVisitorFactoryInterface) {
        super(list, new BasicArrayListD(), playerInputId);
        this.inputProcessorArray = new Array(InputFactory.getInstance().MAX);
        this.isSingleKeyProcessing = Features.getInstance().isFeature(InputFeatureFactory.getInstance().SINGLE_KEY_REPEAT_PRESS) || Features.getInstance().isFeature(InputFeatureFactory.getInstance().SINGLE_KEY_PRESS);
        this.selectedRTSLayersList = new BasicArrayListD();
        this.preSelectedRTSLayersList = new BasicArrayListD();
        this.paintSelectedRTSLayersList = BasicArrayListUtil.getInstance().getImmutableInstance();
        //For kotlin this is before the body of the constructor.
        this.initInputProcessors();
        this.rtsPlayerLayerInterface = rtsPlayerLayerInterface;
        this.list = list;
        this.selectRTSLayerVisitorInterface = selectRTSLayerVisitorFactoryInterface.create(this);
        var smallIntegerSingletonFactory = SmallIntegerSingletonFactory.getInstance();
        ;
        var basicColorFactory = BasicColorFactory.getInstance();
        ;
        this.upgradeGameNotificationEvent = new GameNotificationEvent(this, RTSGameStrings.getInstance().UPGRADE, smallIntegerSingletonFactory.getAt(2), basicColorFactory.PINK, BooleanFactory.getInstance().FALSE);
        this.noMoneyGameNotificationEvent = new GameNotificationEvent(this, RTSGameStrings.getInstance().NO_MONEY, smallIntegerSingletonFactory.getAt(2), basicColorFactory.PINK, BooleanFactory.getInstance().FALSE);
        this.downgradeGameNotificationEvent = new GameNotificationEvent(this, RTSGameStrings.getInstance().DOWNGRADE, smallIntegerSingletonFactory.getAt(2), basicColorFactory.PINK, BooleanFactory.getInstance().FALSE);
    }
    //@Throws(Exception.constructor)
    setAllBinaryGameLayerManager(allBinaryGameLayerManager) {
        var geographicMapCompositeInterface = allBinaryGameLayerManager;
        ;
        var geographicMapInterface = geographicMapCompositeInterface.getGeographicMapInterface()[0];
        ;
        this.upgradeGameNotificationEvent.setBasicColorP(geographicMapInterface.getForegroundBasicColor());
        this.noMoneyGameNotificationEvent.setBasicColorP(geographicMapInterface.getForegroundBasicColor());
        this.downgradeGameNotificationEvent.setBasicColorP(geographicMapInterface.getForegroundBasicColor());
    }
    isSelected(rtsLayer) {
        if (this.selectedRTSLayersList.contains(rtsLayer)) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
    }
    //@Throws(Exception.constructor)
    upgrade() {
        var anyChanged = false;
        ;
        for (var index = this.selectedRTSLayersList.size() - 1; index >= 0; index--) {
            var rtsLayer = this.selectedRTSLayersList.get(index);
            ;
            if (rtsLayer.isUpgradeable()) {
                var capital = this.rtsPlayerLayerInterface.getCapital();
                ;
                var upgradeCost = rtsLayer.getUpgradeCost();
                ;
                if (upgradeCost <= capital.getTotalMoney()) {
                    anyChanged = true;
                    this.rtsPlayerLayerInterface.add(UpgradeSound.getInstance());
                    rtsLayer.upgrade();
                    capital.removeMoney(upgradeCost);
                    if (!this.rtsPlayerLayerInterface.implmentsArtificialIntelligenceCompositeInterface()) {
                        GameNotificationEventHandler.getInstance().fireEvent(this.upgradeGameNotificationEvent);
                    }
                }
                else {
                    this.rtsPlayerLayerInterface.add(ErrorSound.getInstance());
                    if (!this.rtsPlayerLayerInterface.implmentsArtificialIntelligenceCompositeInterface()) {
                        GameNotificationEventHandler.getInstance().fireEvent(this.noMoneyGameNotificationEvent);
                    }
                }
            }
        }
        if (anyChanged) {
            var rtsPlayerGameInput = this.rtsPlayerLayerInterface.getPlayerGameInput();
            ;
            rtsPlayerGameInput.updatePaintable();
        }
    }
    //@Throws(Exception.constructor)
    downgrade() {
        var anyChanged = false;
        ;
        for (var index = this.selectedRTSLayersList.size(); --index >= 0;) {
            var rtsLayer = this.selectedRTSLayersList.get(index);
            ;
            if (rtsLayer.isDowngradeable()) {
                anyChanged = true;
                this.rtsPlayerLayerInterface.add(DowngradeSound.getInstance());
                var downgradeCost = rtsLayer.getDowngradeCost();
                ;
                rtsLayer.downgrade();
                var capital = this.rtsPlayerLayerInterface.getCapital();
                ;
                capital.addMoney(downgradeCost);
                if (!this.rtsPlayerLayerInterface.implmentsArtificialIntelligenceCompositeInterface()) {
                    GameNotificationEventHandler.getInstance().fireEvent(this.downgradeGameNotificationEvent);
                }
            }
        }
        if (anyChanged) {
            var rtsPlayerGameInput = this.rtsPlayerLayerInterface.getPlayerGameInput();
            ;
            rtsPlayerGameInput.updatePaintable();
        }
    }
    initInputProcessors() {
        this.inputProcessorArray[Canvas.KEY_NUM1] = new SelectedRTSLayersPlayerUpgradeGameInputProcessor(this);
        this.inputProcessorArray[Canvas.KEY_NUM3] = new SelectedRTSLayersPlayerDowngradeGameInputProcessor(this);
        GameInputProcessorUtil.init(this.inputProcessorArray);
    }
    //@Throws(Exception.constructor)
    processInputKey(key) {
        if (this.selectedRTSLayersList !=
            null) {
            this.inputProcessorArray[key].processEvent(AllBinaryGameLayerManager.getNullInstance(), GameKeyEvent.NONE);
        }
    }
    //@Throws(Exception.constructor)
    processInput(layerManager) {
        try {
            var size = this.list.size();
            ;
            var key = 0;
            ;
            for (var index = 0; index < size; index++) {
                var gameKeyEvent = this.list.get(index);
                ;
                key = gameKeyEvent.getKey();
                this.processInputKey(key);
            }
            if (this.isSingleKeyProcessing) {
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
    getSelectedBasicArrayList() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.selectedRTSLayersList;
    }
    addSelectedRTSLayer(selectedLayer) {
        this.paintSelectedRTSLayersList = BasicArrayListUtil.getInstance().getImmutableInstance();
        if (selectedLayer == CollidableDestroyableDamageableLayer.getNullInstance()) {
            this.deselectAll();
            this.selectedRTSLayersList.clear();
        }
        else {
            if (!this.selectedRTSLayersList.contains(selectedLayer)) {
                this.selectedRTSLayersList.add(selectedLayer);
            }
        }
        this.paintSelectedRTSLayersList = this.selectedRTSLayersList;
    }
    setSelectedRTSLayer(selectedLayer) {
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append("Selected Layer: ");
        if (selectedLayer !=
            null) {
            stringBuffer.append(selectedLayer.getName());
        }
        this.logUtil.putF(stringBuffer.toString(), this, "setSelectedRTSLayer");
        this.paintSelectedRTSLayersList = BasicArrayListUtil.getInstance().getImmutableInstance();
        this.selectRTSLayerVisitorInterface.visit(selectedLayer);
        this.deselectAll();
        if (this.selectedRTSLayersList.size() > 0) {
            this.getPreSelectedRTSLayersList().clear();
            var tempList = this.getPreSelectedRTSLayersList();
            ;
            this.preSelectedRTSLayersList = this.selectedRTSLayersList;
            this.selectedRTSLayersList = tempList;
            this.logUtil.putF(new StringMaker().append("Preselected: ").append(this.preSelectedRTSLayersList.toString()).toString(), this, "setSelectedRTSLayer");
        }
        if (selectedLayer != CollidableDestroyableDamageableLayer.getNullInstance()) {
            this.selectedRTSLayersList.add(selectedLayer);
        }
        this.paintSelectedRTSLayersList = this.selectedRTSLayersList;
    }
    getLastSelectedRtsLayer() {
        if (this.isAnyRTSLayerSelected()) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return this.selectedRTSLayersList.get(this.selectedRTSLayersList.size() - 1);
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return CollidableDestroyableDamageableLayer.getNullInstance();
            ;
        }
    }
    selectAllPreselected() {
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append("Select all Preselected: ");
        stringBuffer.append(this.preSelectedRTSLayersList.toString());
        this.logUtil.putF(stringBuffer.toString(), this, "selectAllPreselected");
        for (var index = this.preSelectedRTSLayersList.size() - 1; index >= 0; index--) {
            var rtsLayer = this.preSelectedRTSLayersList.get(index);
            ;
            rtsLayer.select();
        }
    }
    deselectAllPreselected() {
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append("Deselect all Preselected: ");
        stringBuffer.append(this.preSelectedRTSLayersList.toString());
        this.logUtil.putF(stringBuffer.toString(), this, "deselectAllPreselected");
        for (var index = this.preSelectedRTSLayersList.size() - 1; index >= 0; index--) {
            var rtsLayer = this.preSelectedRTSLayersList.get(index);
            ;
            rtsLayer.deselect();
        }
        this.preSelectedRTSLayersList.clear();
    }
    deselectAll() {
        for (var index = this.selectedRTSLayersList.size() - 1; index >= 0; index--) {
            var rtsLayer = this.selectedRTSLayersList.get(index);
            ;
            rtsLayer.deselect();
        }
    }
    isAnyRTSLayerSelected() {
        if (this.selectedRTSLayersList.size() == 0) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return true;
    }
    getPaintSelectedRTSLayersList() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.paintSelectedRTSLayersList;
    }
    getPreSelectedRTSLayersList() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.preSelectedRTSLayersList;
    }
}
