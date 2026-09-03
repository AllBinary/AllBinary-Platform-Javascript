/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2025 AllBinary
        *
        *  By agreeing to this license you and any business entity you represent are
        *  legally bound to the AllBinary Open License Version 1 legal agreement.
        *
        *  You may obtain the AllBinary Open License Version 1 legal agreement from
        *  AllBinary or the root directory of AllBinary's AllBinary Platform repository.
        *
        *  Created By: Travis Berthelot
*/
import { RuntimeException } from '../../../../java/lang/RuntimeException.js';
//not GWT import const PlayerGameInput = globalThis.org.allbinary.game.input.PlayerGameInput;
import { NullRTSFormInputFactory } from '../../../../org/allbinary/game/input/form/NullRTSFormInputFactory.js';
//not GWT import const Sound = globalThis.org.allbinary.media.audio.Sound;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { NullPathFindingLayer } from './NullPathFindingLayer.js';
//not GWT import const PlayerOwnedRTSLayers = globalThis.org.allbinary.game.layer.PlayerOwnedRTSLayers;
export class NullRTSLayer extends NullPathFindingLayer {
    getName() {
        throw new RuntimeException();
    }
    //@Throws(Exception.constructor)
    processInput(layerManager) {
        throw new RuntimeException();
    }
    initInputProcessors() {
        throw new RuntimeException();
    }
    getGameNotificationHud() {
        throw new RuntimeException();
    }
    getCurrentScrollSelectionForm() {
        throw new RuntimeException();
    }
    setCurrentScrollSelectionForm(currentScrollSelectionForm) {
        throw new RuntimeException();
    }
    getBuildingScrollSelectionForm() {
        throw new RuntimeException();
    }
    getPlayerGameInput() {
        throw new RuntimeException();
    }
    onEvent(eventObject) {
        throw new RuntimeException();
    }
    //@Throws(Exception.constructor)
    onDestroyed(destroyedEvent) {
        throw new RuntimeException();
    }
    //@Throws(Exception.constructor)
    processTick(allBinaryLayerManager) {
        throw new RuntimeException();
    }
    getCapital() {
        throw new RuntimeException();
    }
    getRTSFormInput() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return NullRTSFormInputFactory.getInstance();
        ;
    }
    add(sound) {
        throw new RuntimeException();
    }
    getPlayerOwnedRTSLayers() {
        throw new RuntimeException();
    }
    implmentsArtificialIntelligenceCompositeInterface() {
        throw new RuntimeException();
    }
}
NullRTSLayer.NULL_RTS_LAYER = new NullRTSLayer();
