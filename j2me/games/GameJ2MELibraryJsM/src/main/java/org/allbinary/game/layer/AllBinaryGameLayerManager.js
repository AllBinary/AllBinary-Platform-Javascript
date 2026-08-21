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
import { NullPlayerGameInputComposite } from '../../../../org/allbinary/game/input/NullPlayerGameInputComposite.js';
import { ItemColorFactory } from '../../../../org/allbinary/graphics/ItemColorFactory.js';
import { BasicColorFactory } from '../../../../org/allbinary/graphics/color/BasicColorFactory.js';
import { AllBinaryLayerManager } from '../../../../org/allbinary/layer/AllBinaryLayerManager.js';
import { SmallIntegerSingletonFactory } from '../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
export class AllBinaryGameLayerManager extends AllBinaryLayerManager {
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
AllBinaryGameLayerManager.NULL_ALLBINARY_LAYER_MANAGER = new AllBinaryGameLayerManager(BasicColorFactory.getInstance().BLACK, BasicColorFactory.getInstance().WHITE, GameInfo.NONE);
AllBinaryGameLayerManager.ID = SmallIntegerSingletonFactory.getInstance().getAt(22);
