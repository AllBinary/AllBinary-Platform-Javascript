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
import { Directory } from '../../../../org/allbinary/logic/io/file/directory/Directory.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
export class InitInfo2 extends Object {
    constructor() {
        super(...arguments);
        this.directory = Directory.getInstance();
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return InitInfo2.instance;
    }
    isTestHtmlPathValid(value) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.directory.create(value);
        ;
    }
    isMainPathValid(value) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.directory.create(value);
        ;
    }
}
InitInfo2.instance = new InitInfo2();
