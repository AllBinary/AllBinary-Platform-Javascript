/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2026 AllBinary
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
export class TrackedStrings extends Object {
    constructor() {
        super(...arguments);
        this.TARGET_PATH_WINDOWS = "\\target\\";
        this.TARGET_PATH_UNIX = "/target/";
        this.HTML_TEMP = "HTMLTemp";
        this.APPLICATION = "Application";
        this.APP = "\\app";
        this.GIT_COMMAND = "git";
        this.CHANGE_DIRECTORY_OPTION = "-C";
        this.LIST_FILES_COMMAND = "ls-files";
        this.ERROR_UNMATCH_OPTION = "--error-unmatch";
        this.PATHSPEC_SEPARATOR = "--";
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return instance;
    }
}
TrackedStrings.instance = new TrackedStrings();
