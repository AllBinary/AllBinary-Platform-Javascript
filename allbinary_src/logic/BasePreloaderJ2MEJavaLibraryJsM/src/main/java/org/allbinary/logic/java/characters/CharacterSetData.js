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
import { Object } from '../../../../../java/lang/Object.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
export class CharacterSetData extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return CharacterSetData.instance;
    }
    constructor() {
        super();
        this.US_ASCII = "US-ASCII";
        this.ISO_8859_1 = "ISO-8859-1";
        this.UTF_8 = "UTF-8";
        this.UTF_16 = "UTF-16";
        this.UTF_16BE = "UTF-16BE";
        this.UTF_16LE = "UTF-16LE";
    }
}
CharacterSetData.instance = new CharacterSetData();
