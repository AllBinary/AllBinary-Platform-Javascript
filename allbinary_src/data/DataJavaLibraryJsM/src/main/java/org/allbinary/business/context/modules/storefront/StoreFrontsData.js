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
export class StoreFrontsData extends Object {
    constructor() {
        super(...arguments);
        this.TYPE = "STOREFRONTS_TYPE";
        this.RETAIL = "STOREFRONTS_RETAIL";
        this.SUBSCRIPTION = "STOREFRONTS_SUBSCRIPTION";
        this.AUCTION = "STOREFRONTS_AUCTION";
        this.NEWS = "STOREFRONTS_NEWS";
        this.BLOG = "STOREFRONTS_BLOG";
        this.FORUM = "STOREFRONTS_FORUM";
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return StoreFrontsData.instance;
    }
}
StoreFrontsData.instance = new StoreFrontsData();
