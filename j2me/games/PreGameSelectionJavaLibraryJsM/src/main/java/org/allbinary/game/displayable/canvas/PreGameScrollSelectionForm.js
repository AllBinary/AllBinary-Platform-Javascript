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
//not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;
import { FormTypeFactory } from '../../../../../org/allbinary/graphics/form/FormTypeFactory.js';
//not GWT import const ItemPaintableFactory = globalThis.org.allbinary.graphics.form.ItemPaintableFactory;
import { ScrollCurrentSelectionForm } from '../../../../../org/allbinary/graphics/form/ScrollCurrentSelectionForm.js';
//not GWT import const ScrollCurrentSelectionForm = globalThis.org.allbinary.graphics.form.ScrollCurrentSelectionForm;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class PreGameScrollSelectionForm extends ScrollCurrentSelectionForm {
    constructor(title, items, formPaintableFactory, backgroundBasicColor, foregroundBasicColor) {
        super(title, items, formPaintableFactory, 0, 3, false, backgroundBasicColor, foregroundBasicColor);
        //For kotlin this is before the body of the constructor.
    }
    //@Throws(Exception.constructor)
    init(rectangle) {
        super.init(rectangle, FormTypeFactory.getInstance().TEMP_HORIZONTAL_FORM);
    }
}
