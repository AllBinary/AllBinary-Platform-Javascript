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
//not GWT import const AllBinaryLayerManager = globalThis.org.allbinary.layer.AllBinaryLayerManager;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { SpecialGameInputProcessor } from './SpecialGameInputProcessor.js';
//not GWT import - same folder const CollidableDestroyableDamageableLayer = globalThis.org.allbinary.game.layer.special.CollidableDestroyableDamageableLayer;
export class SpecialAnalogLeftTriggerGameInputProcessor extends SpecialGameInputProcessor {
    constructor(collidableDestroyableDamageableLayer) {
        super(collidableDestroyableDamageableLayer);
        //For kotlin this is before the body of the constructor.
    }
    //@Throws(Exception.constructor)
    processAnalog(allbinaryLayerManager, gameKeyEvent, yAnalogValue) {
        this.collidableDestroyableDamageableLayer.leftTrigger(allbinaryLayerManager, gameKeyEvent, yAnalogValue);
    }
}
