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
import { SpecialGameInputInterfaceProcessor } from './SpecialGameInputInterfaceProcessor.js';
//not GWT import - same folder const SpecialGameInputInterface = globalThis.org.allbinary.game.layer.special.SpecialGameInputInterface;
export class Special4GameInputInterfaceProcessor extends SpecialGameInputInterfaceProcessor {
    constructor(collidableDestroyableDamageableLayer) {
        super(collidableDestroyableDamageableLayer);
        //For kotlin this is before the body of the constructor.
    }
    //@Throws(Exception.constructor)
    processEvent(allbinaryLayerManager, gameKeyEvent) {
        this.specialGameInputInterface.special4(allbinaryLayerManager, gameKeyEvent);
    }
}
