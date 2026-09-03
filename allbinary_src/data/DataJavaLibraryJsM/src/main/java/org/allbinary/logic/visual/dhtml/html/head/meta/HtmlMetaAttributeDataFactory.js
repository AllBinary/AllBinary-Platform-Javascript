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
import { Object } from '../../../../../../../../java/lang/Object.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { HtmlMetaAttributeData } from './HtmlMetaAttributeData.js';
//not GWT import const HtmlMetaAttributeData = globalThis.org.allbinary.logic.visual.dhtml.html.head.meta.HtmlMetaAttributeData;
export class HtmlMetaAttributeDataFactory extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return HtmlMetaAttributeDataFactory.instance;
    }
    constructor() {
        super();
        this.NAME = new HtmlMetaAttributeData(0, "HTMLMETA_ATTRIBUTE_NAME");
        this.HTTP_EQUIV = new HtmlMetaAttributeData(1, "HTMLMETA_ATTRIBUTE_HTTPEQUIV");
        this.CONTENT = new HtmlMetaAttributeData(2, "HTMLMETA_ATTRIBUTE_CONTENT");
    }
}
HtmlMetaAttributeDataFactory.instance = new HtmlMetaAttributeDataFactory();
