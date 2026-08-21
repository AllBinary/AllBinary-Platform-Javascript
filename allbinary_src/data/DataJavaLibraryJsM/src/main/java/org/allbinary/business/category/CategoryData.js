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
import { CommonDataFileStrings } from '../../../../org/allbinary/logic/io/file/CommonDataFileStrings.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
export class CategoryData extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return CategoryData.instance;
    }
    constructor() {
        super();
        this.PARENT = "CATEGORY_PARENT";
        this.NAME = "CATEGORY_NAME";
        this.PATH = "CATEGORY_PATH";
        this.LABEL = "CATEGORY_LABEL";
        this.VIEW = "CATEGORY_VIEW_CATEGORY";
        this.LEVEL = "CATEGORY_LEVEL";
        this.REQUEST = "request";
        this.ROOTCATEGORY = "Category";
        this.UNCRYPTED_EXTENSION = CommonDataFileStrings.getInstance().UNCRYPTED_EXTENSION;
        this.ENCRYPTED_EXTENSION = CommonDataFileStrings.getInstance().ENCRYPTED_EXTENSION;
    }
}
CategoryData.instance = new CategoryData();
