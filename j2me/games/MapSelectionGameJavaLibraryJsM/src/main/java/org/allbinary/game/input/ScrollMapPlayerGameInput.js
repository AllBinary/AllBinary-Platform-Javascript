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
import { Canvas } from '../../../../javax/microedition/lcdui/Canvas.js';
//not GWT import const Canvas
import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
//not GWT import const Graphics
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
import { Features } from '../../../../org/allbinary/game/configuration/feature/Features.js';
//not GWT import const Features
import { InputFeatureFactory } from '../../../../org/allbinary/game/configuration/feature/InputFeatureFactory.js';
//not GWT import const InputFeatureFactory
import { GameKeyEvent } from '../../../../org/allbinary/game/input/event/GameKeyEvent.js';
//not GWT import const GameKeyEvent
import { AllBinaryGameLayerManager } from '../../../../org/allbinary/game/layer/AllBinaryGameLayerManager.js';
//not GWT import const AllBinaryTiledLayer
import { DisplayInfoSingleton } from '../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
//not GWT import const AllBinaryLayerManager
import { ScrollMapEvent } from '../../../../org/allbinary/layer/event/ScrollMapEvent.js';
//not GWT import const ScrollMapEvent
import { ScrollMapEventHandler } from '../../../../org/allbinary/layer/event/ScrollMapEventHandler.js';
//not GWT import const BasicGeographicMap
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { PlayerGameInput } from './PlayerGameInput.js';
//sameFolderImports - not GWT import - same folder const PlayerGameInput
import { InputFactory } from './InputFactory.js';
//sameFolderImports - not GWT import - same folder const GameInputProcessor
import { ScrollMapUpGameInputProcessor } from './ScrollMapUpGameInputProcessor.js';
//sameFolderImports - not GWT import - same folder const ScrollMapUpGameInputProcessor
import { ScrollMapDownGameInputProcessor } from './ScrollMapDownGameInputProcessor.js';
//sameFolderImports - not GWT import - same folder const ScrollMapDownGameInputProcessor
import { ScrollMapRightGameInputProcessor } from './ScrollMapRightGameInputProcessor.js';
//sameFolderImports - not GWT import - same folder const ScrollMapRightGameInputProcessor
import { ScrollMapLeftGameInputProcessor } from './ScrollMapLeftGameInputProcessor.js';
//sameFolderImports - not GWT import - same folder const ScrollMapLeftGameInputProcessor
import { GameInputProcessorUtil } from './GameInputProcessorUtil.js';
//sameFolderImports - not GWT import - same folder const GameInputProcessorUtil
export class ScrollMapPlayerGameInput extends PlayerGameInput {
    constructor(geographicMapInterface, list, playerInputId) {
        super(list, new BasicArrayListD(), playerInputId);
        this.inputProcessorArray = new Array(InputFactory.getInstance().MAX);
        this.border = 150;
        this.isSingleKeyProcessing = Features.getInstance().isFeature(InputFeatureFactory.getInstance().SINGLE_KEY_REPEAT_PRESS) || Features.getInstance().isFeature(InputFeatureFactory.getInstance().SINGLE_KEY_PRESS);
        this.maxBottom = 0;
        this.maxRight = 0;
        this.scrollMapEvent = new ScrollMapEvent(this);
        //For kotlin this is before the body of the constructor.
        this.initInputProcessors();
        this.geographicMapInterface = geographicMapInterface;
        this.inputList = list;
        this.init();
    }
    //@Throws(Exception.constructor)
    move(dx, dy) {
        let terrainTiledLayer = this.geographicMapInterface.getAllBinaryTiledLayer();
        ;
        terrainTiledLayer.moveDXY(-dx, -dy);
        this.scrollMapEvent.setDxDy(-dx, -dy);
        ScrollMapEventHandler.getInstance().fireEvent(this.scrollMapEvent);
    }
    init() {
        this.maxBottom = this.getSpecialHeight();
        this.maxRight = this.getSpecialWidth();
    }
    //@Throws(Exception.constructor)
    scrollMiddleX() {
        let terrainTiledLayer = this.geographicMapInterface.getAllBinaryTiledLayer();
        ;
        let displayInfo = DisplayInfoSingleton.getInstance();
        ;
        this.move(-terrainTiledLayer.getXP(), 0);
        if (terrainTiledLayer.getWidth() < displayInfo.getLastWidth()) {
            let diffX = ((displayInfo.getLastWidth() - terrainTiledLayer.getWidth()) >> 1);
            ;
            this.move(-diffX, 0);
        }
        else {
            let diffX = ((terrainTiledLayer.getWidth() - displayInfo.getLastWidth()) >> 1);
            ;
            this.move(diffX, 0);
        }
    }
    //@Throws(Exception.constructor)
    scrollY(anchor) {
        let terrainTiledLayer = this.geographicMapInterface.getAllBinaryTiledLayer();
        ;
        let displayInfo = DisplayInfoSingleton.getInstance();
        ;
        if (anchor == Graphics.TOP) {
            this.logUtil.putF("Top", this, "scrollY");
        }
        else if (anchor == Graphics.BOTTOM) {
            this.logUtil.putF("Bottom", this, "scrollY");
            let diffY = (terrainTiledLayer.getHeight() - displayInfo.getLastHeight());
            ;
            this.move(0, diffY);
        }
        else if (anchor == Graphics.VCENTER) {
            this.logUtil.putF("Center", this, "scrollY");
            let diffY = (terrainTiledLayer.getHeight() - displayInfo.getLastHeight()) / 2;
            ;
            this.move(0, diffY);
        }
        else {
            throw new Exception("No Such Anchor Supported");
        }
    }
    //@Throws(Exception.constructor)
    up() {
        let y = this.geographicMapInterface.getAllBinaryTiledLayer().getYP() - 10;
        ;
        if (this.keepOnMapMinY(y)) {
            this.move(0, -10);
        }
    }
    //@Throws(Exception.constructor)
    down() {
        let y = -this.geographicMapInterface.getAllBinaryTiledLayer().getYP() + 10;
        ;
        if (this.keepOnMapMaxY(y)) {
            this.move(0, 10);
        }
    }
    //@Throws(Exception.constructor)
    right() {
        let x = this.geographicMapInterface.getAllBinaryTiledLayer().getYP() + 10;
        ;
        if (this.keepOnMapMinX(x)) {
            this.move(10, 0);
        }
    }
    //@Throws(Exception.constructor)
    left() {
        let x = -this.geographicMapInterface.getAllBinaryTiledLayer().getYP() - 10;
        ;
        if (this.keepOnMapMaxX(x)) {
            this.move(-10, 0);
        }
    }
    initInputProcessors() {
        this.inputProcessorArray[Canvas.UP] = new ScrollMapUpGameInputProcessor(this);
        this.inputProcessorArray[Canvas.DOWN] = new ScrollMapDownGameInputProcessor(this);
        this.inputProcessorArray[Canvas.KEY_NUM9] = new ScrollMapRightGameInputProcessor(this);
        this.inputProcessorArray[Canvas.KEY_NUM7] = new ScrollMapLeftGameInputProcessor(this);
        GameInputProcessorUtil.init(this.inputProcessorArray);
    }
    //@Throws(Exception.constructor)
    processInputKey(key) {
        this.inputProcessorArray[key].processEvent(AllBinaryGameLayerManager.getNullInstance(), GameKeyEvent.NONE);
    }
    //@Throws(Exception.constructor)
    processInput(layerManager) {
        try {
            let size = this.inputList.size();
            ;
            let key = 0;
            ;
            for (let index = 0; index < size; index++) {
                let gameKeyEvent = this.inputList.get(index);
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
        }
        catch (caught) {
            {
                const e = caught;
                this.logUtil.put(this.commonStrings.EXCEPTION, this, this.gameInputStrings.PROCESS_INPUT, e);
            }
        }
    }
    getSpecialHeight() {
        let terrainTiledLayer = this.geographicMapInterface.getAllBinaryTiledLayer();
        ;
        let displayInfo = DisplayInfoSingleton.getInstance();
        ;
        if (terrainTiledLayer.getHeight() > displayInfo.getLastHeight()) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return terrainTiledLayer.getHeight() - displayInfo.getLastHeight();
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return displayInfo.getLastHeight() - terrainTiledLayer.getHeight() + terrainTiledLayer.getCellHeight();
        }
    }
    getSpecialWidth() {
        let terrainTiledLayer = this.geographicMapInterface.getAllBinaryTiledLayer();
        ;
        let displayInfo = DisplayInfoSingleton.getInstance();
        ;
        if (terrainTiledLayer.getWidth() > displayInfo.getLastWidth()) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return terrainTiledLayer.getWidth() - displayInfo.getLastWidth();
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return displayInfo.getLastWidth() - terrainTiledLayer.getWidth() + terrainTiledLayer.getCellWidth();
        }
    }
    keepOnMapMaxY(newY) {
        let y = this.geographicMapInterface.getAllBinaryTiledLayer().getYP();
        ;
        if (y > this.maxBottom + this.border) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
    }
    keepOnMapMinY(newY) {
        let y = this.geographicMapInterface.getAllBinaryTiledLayer().getYP();
        ;
        if (y < -this.border) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
    }
    keepOnMapMaxX(newX) {
        let x = this.geographicMapInterface.getAllBinaryTiledLayer().getXP();
        ;
        if (x < -this.maxRight - this.border) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
    }
    keepOnMapMinX(newX) {
        let x = this.geographicMapInterface.getAllBinaryTiledLayer().getXP();
        ;
        if (x > this.border) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
    }
}
