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
import { Object } from '../../../../java/lang/Object.js';
import { DisplayInfoSingleton } from '../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
//not GWT import const DisplayInfoSingleton = globalThis.org.allbinary.graphics.displayable.DisplayInfoSingleton;
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { FormType } from './FormType.js';
//not GWT import - same folder const FormType = globalThis.org.allbinary.graphics.form.FormType;
export class FormTypeFactory extends Object {
    constructor() {
        super(...arguments);
        this.UNK = "Unknown FormType";
        this.NULL_FORM_TYPE = new FormType(StringUtil.getInstance().NULL_STRING);
        this.TEMP_HORIZONTAL_FORM = new FormType("TempHorizontal");
        this.HORIZONTAL_FORM = new FormType("Horizontal");
        this.VERTICAL_CENTER_FORM = new FormType("Vertical");
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return FormTypeFactory.instance;
    }
    getFormType() {
        var displayInfo = DisplayInfoSingleton.getInstance();
        ;
        var formType;
        ;
        if (displayInfo.isPortrait()) {
            formType = this.VERTICAL_CENTER_FORM;
        }
        else {
            formType = this.HORIZONTAL_FORM;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return formType;
    }
}
FormTypeFactory.instance = new FormTypeFactory();
