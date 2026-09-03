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
//not GWT import const AbFile = globalThis.org.allbinary.logic.io.file.AbFile;
import { IncludeFileExtensionsBooleanFileVisitor } from '../../../../../../org/allbinary/logic/io/file/visitor/IncludeFileExtensionsBooleanFileVisitor.js';
//not GWT import const IncludeFileExtensionsBooleanFileVisitor = globalThis.org.allbinary.logic.io.file.visitor.IncludeFileExtensionsBooleanFileVisitor;
//not plain js import { BasicArrayList } from '../../../../../../org/allbinary/util/BasicArrayList.js';
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class DirectoryOrIncludeFileExtensionBooleanFileVisitor extends IncludeFileExtensionsBooleanFileVisitor {
    constructor(filterStringBasicArrayList) {
        super(filterStringBasicArrayList);
        //For kotlin this is before the body of the constructor.
        this.includesString =
            null;
    }
    constructor(filterStringBasicArrayList, includesString) {
        super(filterStringBasicArrayList);
        //For kotlin this is before the body of the constructor.
        this.includesString = includesString;
    }
    visit(file) {
        if (file.isDirectory()) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return Boolean.TRUE;
        }
        if (this.includesString ==
            null
            || file.getAbsolutePath().indexOf(this.includesString) >= 0) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return super.visit(file);
            ;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return Boolean.FALSE;
        }
    }
}
