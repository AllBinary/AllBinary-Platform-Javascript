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
export class FileData extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return FileData.instance;
    }
    constructor() {
        super();
        this.NAME = "FILE_NAME";
        this.ISFILE = "FILE_ISFILE";
        this.ISDIRECTORY = "FILE_ISDIRECTORY";
        this.ISHIDDEN = "FILE_ISHIDDEN";
        this.ISABSOLUTE = "FILE_ISABSOLUTE";
        this.ROOT_NAME = "FILE_ROOT_NAME";
        this.PATH = "FILE_PATH";
        this.ABSOLUTE_PATH = "FILE_ABSOLUTE_PATH";
        this.CANONICAL_PATH = "FILE_CANONICAL_PATH";
        this.PARENT = "FILE_PARENT";
        this.MINLEN = 1;
        this.MAXLEN = 120;
        this.MAXIMAGEFILESIZE = 1048576;
        this.MINIMAGEFILESIZE = 32;
        this.MAXDOWNLOADABLEFILESIZE = 1048576 * 20;
        this.MINDOWNLOADABLEFILESIZE = 1;
    }
}
FileData.instance = new FileData();
