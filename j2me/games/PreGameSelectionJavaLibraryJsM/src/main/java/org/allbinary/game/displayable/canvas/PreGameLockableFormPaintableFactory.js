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
//not GWT import const ItemPaintable
import { ItemPaintableFactory } from '../../../../../org/allbinary/graphics/form/ItemPaintableFactory.js';
//not GWT import const ScrollCurrentSelectionForm
//Current folder imports from return types, extended types, and scope (deduplicated)
import { PreGameLockablePaintable } from './PreGameLockablePaintable.js';
//not GWT import - same folder const PreGameLockablePaintable
export class PreGameLockableFormPaintableFactory extends ItemPaintableFactory {
    constructor(lockedIndex) {
        super();
        this.lockedIndex = lockedIndex;
    }
    //@Throws(Exception.constructor)
    getInstanceItemPaintable(paintableForm) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new PreGameLockablePaintable(paintableForm, this.lockedIndex);
    }
}
