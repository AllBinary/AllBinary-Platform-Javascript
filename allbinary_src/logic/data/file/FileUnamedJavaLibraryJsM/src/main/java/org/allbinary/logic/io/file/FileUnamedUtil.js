/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2025 AllBinary
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
//not plain js import { CommonSeps } from '../../../../../org/allbinary/string/CommonSeps.js';
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class FileUnamedUtil extends Object {
    constructor() {
        super(...arguments);
        this.commonSeps = CommonSeps.getInstance();
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return FileUnamedUtil.instance;
    }
    process(string) {
        var simplifiedString = string.toLowerCase();
        ;
        simplifiedString = simplifiedString.replace(this.commonSeps.SPACE, this.commonSeps.UNDERSCORE);
        simplifiedString = simplifiedString.replace(this.commonSeps.DASH, this.commonSeps.UNDERSCORE);
        //if statement needs to be on the same line and ternary does not work the same way.
        return simplifiedString;
    }
}
FileUnamedUtil.instance = new FileUnamedUtil();
