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
import { ItemIndexPaintable } from './ItemIndexPaintable.js';
//sameFolderImports - not GWT import - same folder const ScrollSelectionForm
export class ScrollSelectionFormHorizontalPaintable extends ItemIndexPaintable {
    constructor(scrollSelectionForm) {
        super();
        this.scrollSelectionForm = scrollSelectionForm;
    }
    //@Throws(Exception.constructor)
    paint(graphics, index, item, dx, dy) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.scrollSelectionForm.paintItemHorizontal(graphics, index, item, dx, dy);
        ;
    }
}
