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
//Current folder imports from return types, extended types, and scope (deduplicated)
import { SpecialGameInputInterfaceProcessor } from './SpecialGameInputInterfaceProcessor.js';
export class SpecialStrafeRightGameInputInterfaceProcessor extends SpecialGameInputInterfaceProcessor {
    constructor(collidableDestroyableDamageableLayer) {
        super(collidableDestroyableDamageableLayer);
        //For kotlin this is before the body of the constructor.
    }
    //@Throws(Exception.constructor)
    processEvent(allbinaryLayerManager, gameKeyEvent) {
        this.specialGameInputInterface.strafeRight();
    }
}
