/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2022 AllBinary
        *
        *  By agreeing to this license you and any business entity you represent are
        *  legally bound to the AllBinary Open License Version 1 legal agreement.
        *
        *  You may obtain the AllBinary Open License Version 1 legal agreement from
        *  AllBinary or the root directory of AllBinary's AllBinary Platform repository.
        *
        *  Created By: Travis Berthelot
*/
//not GWT import const BasicColor
import { CustomTextBox } from '../../../../org/allbinary/graphics/form/item/CustomTextBox.js';
//not GWT import const CustomTextBox
//Current folder imports from return types, extended types, and scope (deduplicated)
export class CustomTextBox2 extends CustomTextBox {
    constructor(cmdListener, label, text, maxSize, constraints, font, backgroundBasicColor, foregroundBasicColor) {
        super(cmdListener, label, text, maxSize, constraints, font, backgroundBasicColor, foregroundBasicColor);
        //For kotlin this is before the body of the constructor.
        this.getTextFieldItem().setFocus(true);
    }
}
