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
import { GameInfo } from '../../../../org/allbinary/game/GameInfo.js';
//not GWT import const GameInfo = globalThis.org.allbinary.game.GameInfo;
import { NullPlayerGameInputComposite } from '../../../../org/allbinary/game/input/NullPlayerGameInputComposite.js';
//not GWT import const PlayerGameInputCompositeInterface = globalThis.org.allbinary.game.input.PlayerGameInputCompositeInterface;
import { ItemColorFactory } from '../../../../org/allbinary/graphics/ItemColorFactory.js';
//not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;
import { BasicColorFactory } from '../../../../org/allbinary/graphics/color/BasicColorFactory.js';
//not GWT import const BasicColorFactory = globalThis.org.allbinary.graphics.color.BasicColorFactory;
import { AllBinaryLayerManager } from '../../../../org/allbinary/layer/AllBinaryLayerManager.js';
//not GWT import const LayerProcessor = globalThis.org.allbinary.layer.LayerProcessor;
//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
//not plain js import { SmallIntegerSingletonFactory } 
const SmallIntegerSingletonFactory = globalThis.org.allbinary.logic.math.SmallIntegerSingletonFactory;
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class AllBinaryGameLayerManager extends AllBinaryLayerManager {
    static getNullInstance() {
        if (AllBinaryGameLayerManager.NULL_ALLBINARY_LAYER_MANAGER == NullUtil.getInstance().NULL_OBJECT) {
            AllBinaryGameLayerManager.NULL_ALLBINARY_LAYER_MANAGER = new AllBinaryGameLayerManager(BasicColorFactory.getInstance().BLACK, BasicColorFactory.getInstance().WHITE, GameInfo.NONE);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return AllBinaryGameLayerManager.NULL_ALLBINARY_LAYER_MANAGER;
    }
    constructor(backgroundBasicColor, foregroundBasicColor, gameInfo) {
        super();
        this.playerGameInputCompositeInterface = NullPlayerGameInputComposite.NULL_PLAYER_GAME_INPUT_COMPOSITE;
        this.backgroundBasicColor = backgroundBasicColor;
        this.foregroundBasicColor = foregroundBasicColor;
        var itemColorFactory = ItemColorFactory.getInstance();
        ;
        itemColorFactory.INVERT_PAINT = this.backgroundBasicColor.intValue();
        itemColorFactory.PAINT = this.foregroundBasicColor.intValue();
        this.gameInfo = gameInfo;
    }
    getLayerManager() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this;
    }
    init() {
    }
    getBackgroundBasicColor() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.backgroundBasicColor;
    }
    setBackgroundBasicColor(backgroundBasicColor) {
        this.backgroundBasicColor = backgroundBasicColor;
        ItemColorFactory.getInstance().INVERT_PAINT = this.backgroundBasicColor.intValue();
    }
    getForegroundBasicColor() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.foregroundBasicColor;
    }
    setForegroundBasicColor(foregroundBasicColor) {
        this.foregroundBasicColor = foregroundBasicColor;
        ItemColorFactory.getInstance().PAINT = this.foregroundBasicColor.intValue();
    }
    getGameInfo() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.gameInfo;
    }
    setGameInfo(gameInfo) {
        this.gameInfo = gameInfo;
    }
    setLayerProcessorList(list) {
        var layerProcessorInterfaceArray = new Array(list.size());
        ;
        var size = layerProcessorInterfaceArray.length;
        ;
        for (var index = 0; index < size; index++) {
            layerProcessorInterfaceArray[index] = list.objectArray[index];
        }
        this.setLayerProcessorArray(layerProcessorInterfaceArray);
    }
    setPlayerGameInputCompositeInterface(playerGameInputCompositeInterface) {
        this.playerGameInputCompositeInterface = playerGameInputCompositeInterface;
    }
    getPlayerGameInputCompositeInterface() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.playerGameInputCompositeInterface;
    }
}
AllBinaryGameLayerManager.NULL_ALLBINARY_LAYER_MANAGER = NullUtil.getInstance().NULL_OBJECT;
AllBinaryGameLayerManager.ID = SmallIntegerSingletonFactory.getInstance().getAt(22);
