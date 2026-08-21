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
export class ForwardData extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return ForwardData.instance;
    }
    constructor() {
        super();
        this.PAGE = "FORWARD_PAGE";
        this.NAME = "FORWARD_NAME";
        this.VALUE = "FORWARD_VALUE";
    }
}
ForwardData.instance = new ForwardData();
