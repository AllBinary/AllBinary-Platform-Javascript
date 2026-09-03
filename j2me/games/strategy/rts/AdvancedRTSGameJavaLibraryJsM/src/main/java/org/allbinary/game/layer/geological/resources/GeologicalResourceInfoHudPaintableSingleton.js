/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2006 AllBinary
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
import { Object } from '../../../../../../java/lang/Object.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { GeologicalResourceInfoHudPaintable } from './GeologicalResourceInfoHudPaintable.js';
//not GWT import const GeologicalResourceInfoHudPaintable = globalThis.org.allbinary.game.layer.geological.resources.GeologicalResourceInfoHudPaintable;
export class GeologicalResourceInfoHudPaintableSingleton extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return GeologicalResourceInfoHudPaintableSingleton.instance;
    }
}
GeologicalResourceInfoHudPaintableSingleton.instance = new GeologicalResourceInfoHudPaintable();
