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
import { Object } from '../../../../../../java/lang/Object.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
export class TransformInfoData extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return TransformInfoData.instance;
    }
    constructor() {
        super();
        this.PARENT = "TRANSFORM_INFO_PARENT";
        this.MAPPED = "TRANSFORM_INFO_MAPPED";
        this.NAME = "TRANSFORM_INFO_NAME";
        this.DESCRIPTION = "TRANSFORM_INFO_DESCRIPTION";
        this.CATEGORY = "TRANSFORM_INFO_CATEGORY";
        this.OBJECTFILENAME = "TRANSFORM_INFO_OBJECTFILENAME";
        this.OBJECT = "TRANSFORM_INFO_OBJECT";
        this.OBJECTCONFIGFILENAME = "TRANSFORM_INFO_OBJECTCONFIGFILENAME";
        this.OBJECTCONFIG = "TRANSFORM_INFO_OBJECTCONFIG";
        this.TEMPLATEFILENAME = "TRANSFORM_INFO_TEMPLATEFILENAME";
        this.TEMPLATE = "TRANSFORM_INFO_TEMPLATE";
        this.DATAFILENAME = "TRANSFORM_INFO_DATAFILENAME";
        this.DATA = "TRANSFORM_INFO_DATA";
        this.LABEL = "TRANSFORM_INFO_LABEL";
        this.OWNER = "OWNER_" + this.NAME;
        this.PARTIAL = "PARTIAL_" + this.NAME;
    }
}
TransformInfoData.instance = new TransformInfoData();
