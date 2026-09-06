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
//not GWT import const Group = globalThis.org.allbinary.game.identification.Group;
import { CollidableDestroyableDamageableLayer } from '../../../../../org/allbinary/game/layer/special/CollidableDestroyableDamageableLayer.js';
//not GWT import - same folder const RemoteInfo = globalThis.org.allbinary.game.multiplayer.layer.RemoteInfo;
import { MultiplayerBehavior } from './MultiplayerBehavior.js';
//not GWT import - same folder const MultiplayerBehavior = globalThis.org.allbinary.game.multiplayer.layer.MultiplayerBehavior;
export class MultiPlayerGameLayer extends CollidableDestroyableDamageableLayer {
    constructor(remoteInfo, groupInterface, name, layerInfo, viewPosition) {
        super(groupInterface, name, layerInfo, viewPosition);
        //For kotlin this is before the body of the constructor.
    }
    getMultiplayerBehavior() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return MultiplayerBehavior.NULL_MULTIPLAYER_BEHAVIOR;
    }
    setPingInfo(show) {
    }
    setFiring(firing) {
    }
    getFiring() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return 0;
    }
}
