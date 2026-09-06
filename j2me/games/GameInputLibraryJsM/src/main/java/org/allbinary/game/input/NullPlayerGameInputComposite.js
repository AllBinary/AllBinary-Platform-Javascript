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
/* Generated Code Do Not Modify */
import { Object } from '../../../../java/lang/Object.js';
//not GWT import const AllBinaryLayerManager = globalThis.org.allbinary.layer.AllBinaryLayerManager;
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//not GWT import - same folder const PlayerGameInputCompositeInterface = globalThis.org.allbinary.game.input.PlayerGameInputCompositeInterface;
import { NoPlayerGameInput } from './NoPlayerGameInput.js';
//not GWT import - same folder const PlayerGameInput = globalThis.org.allbinary.game.input.PlayerGameInput;
export class NullPlayerGameInputComposite extends Object {
    getName() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return StringUtil.getInstance().EMPTY_STRING;
    }
    //@Throws(Exception.constructor)
    processInput(layerManager) {
    }
    initInputProcessors() {
    }
    getPlayerGameInput() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return NoPlayerGameInput.getInstance();
        ;
    }
}
NullPlayerGameInputComposite.NULL_PLAYER_GAME_INPUT_COMPOSITE = new NullPlayerGameInputComposite();
