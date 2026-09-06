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
import { Paintable } from '../../../../../org/allbinary/graphics/paint/Paintable.js';
//not GWT import const Paintable = globalThis.org.allbinary.graphics.paint.Paintable;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class DamageFloaters extends Paintable {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return DamageFloaters.SINGLETON;
    }
    add(damage) {
    }
}
DamageFloaters.SINGLETON = new DamageFloaters();
