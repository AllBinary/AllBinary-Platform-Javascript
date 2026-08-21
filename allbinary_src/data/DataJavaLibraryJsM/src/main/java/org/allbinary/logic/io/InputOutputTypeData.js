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
//Current folder imports from return types, extended types, and scope (deduplicated)
export class InputOutputTypeData extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return InputOutputTypeData.instance;
    }
    constructor() {
        super();
        this.NAME = "INPUT_OUTPUT_TYPE_NAME";
        this.FILE = "INPUT_OUTPUT_TYPE_FILE";
        this.RESPONSE = "INPUT_OUTPUT_TYPE_RESPONSE";
        this.DB = "INPUT_OUTPUT_TYPE_DB";
        this.JSP = "jsp";
        this.JSP_FRAGMENT = "jspf";
        this.PHP = "php";
        this.ASP = "asp";
        this.PL = "pl";
        this.DEFAULT = this.JSP;
        this.DEFAULT_FRAGMENT = this.JSP_FRAGMENT;
    }
}
InputOutputTypeData.instance = new InputOutputTypeData();
