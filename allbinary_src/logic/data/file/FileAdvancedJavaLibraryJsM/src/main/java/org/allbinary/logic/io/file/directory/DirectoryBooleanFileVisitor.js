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
//not GWT import const VisitorInterface
//Current folder imports from return types, extended types, and scope (deduplicated)
export class DirectoryBooleanFileVisitor extends Object {
    constructor() {
        super();
    }
    visit(...args) {
        if (args.length === 1)
            return this.visit$overload1(args[0]);
        if (args.length === 1)
            return this.visit$overload2(args[0]);
        throw new TypeError('No matching overload: visit');
    }
    visit$overload1(anyType) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.visit(anyType);
    }
    visit$overload2(file) {
        if (file.isDirectory()) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
}
