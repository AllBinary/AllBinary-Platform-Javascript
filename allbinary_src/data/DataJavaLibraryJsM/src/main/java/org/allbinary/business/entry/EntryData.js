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
export class EntryData extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return EntryData.instance;
    }
    constructor() {
        super();
        this.ID = "ENTRY_ID";
        this.ENCRYPTION = "ENTRY_ENCRYPTION";
        this.TIMECREATED = "ENTRY_TIMECREATED";
        this.LASTMODIFIED = "ENTRY_LASTMODIFIED";
        this.DEFAULT = "ENTRY_DEFAULT";
        this.SPECIAL = "ENTRY_SPECIAL";
        this.ENABLE = "ENTRY_ENABLE";
        this.YES = "Yes";
        this.NO = "No";
    }
}
EntryData.instance = new EntryData();
