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
//not GWT import const ABCustomItem
//Current folder imports from return types, extended types, and scope (deduplicated)
import { ItemIndexDx } from './ItemIndexDx.js';
//sameFolderImports - not GWT import - same folder const ScrollCurrentSelectionForm
export class VerticalItemIndexDx extends ItemIndexDx {
    constructor(scrollCurrentSelectionForm) {
        super();
        this.scrollCurrentSelectionForm = scrollCurrentSelectionForm;
    }
    //@Throws(Exception.constructor)
    getDx(index, item, dx, dy) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.scrollCurrentSelectionForm.getXVerticalForm(index, item, dx, dy);
        ;
    }
}
