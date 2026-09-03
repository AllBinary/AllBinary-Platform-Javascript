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
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;
import { GameInputProcessor } from '../../../../../org/allbinary/game/input/GameInputProcessor.js';
//not GWT import const SpecialGameInputInterface = globalThis.org.allbinary.game.layer.special.SpecialGameInputInterface;
export class SpecialGameInputInterfaceProcessor extends GameInputProcessor {
    constructor(collidableDestroyableDamageableLayer) {
        super();
        this.specialGameInputInterface = collidableDestroyableDamageableLayer;
    }
}
