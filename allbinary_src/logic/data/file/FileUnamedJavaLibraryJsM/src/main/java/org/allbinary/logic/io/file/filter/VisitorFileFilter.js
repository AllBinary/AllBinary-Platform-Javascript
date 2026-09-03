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
//not GWT import const AbFile = globalThis.org.allbinary.logic.io.file.AbFile;
import { FileWrapperUtil } from '../../../../../../org/allbinary/logic/io/file/FileWrapperUtil.js';
//not GWT import const VisitorInterface = globalThis.org.allbinary.logic.util.visitor.VisitorInterface;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class VisitorFileFilter extends Object {
    constructor(booleanVisitorInterface) {
        super();
        this.booleanVisitorInterface = booleanVisitorInterface;
    }
    accept(file) {
        var abFile = FileWrapperUtil.wrapFile(file);
        ;
        var isFileAcceptable = visit = this.booleanVisitorInterface.visit(abFile), visit, as, Boolean;
        visit.
            .valueOf();
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return isFileAcceptable || file.isDirectory();
    }
    accept(file) {
        var isFileAcceptable = visit = this.booleanVisitorInterface.visit(file), visit, as, Boolean;
        visit.
            .valueOf();
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return isFileAcceptable || file.isDirectory();
    }
}
