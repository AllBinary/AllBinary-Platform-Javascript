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
import { Object } from '../../../../../../../java/lang/Object.js';
//not GWT import const AllBinaryLayerFactoryInterface = globalThis.org.allbinary.layer.AllBinaryLayerFactoryInterface;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { HealLayer } from './HealLayer.js';
//not GWT import - same folder const HealLayer = globalThis.org.allbinary.game.ag.layer.pickup.health.HealLayer;
export class HealLayerFactory extends Object {
    //@Throws(Exception.constructor)
    getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new HealLayer();
    }
}
