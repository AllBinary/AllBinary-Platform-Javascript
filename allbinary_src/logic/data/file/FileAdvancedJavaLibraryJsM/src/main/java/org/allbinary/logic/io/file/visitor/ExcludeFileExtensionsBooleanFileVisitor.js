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
//Current folder imports from return types, extended types, and scope (deduplicated)
import { BooleanFileVisitor } from './BooleanFileVisitor.js';
export class ExcludeFileExtensionsBooleanFileVisitor extends BooleanFileVisitor {
    constructor(filterStringBasicArrayList) {
        super(filterStringBasicArrayList);
        //For kotlin this is before the body of the constructor.
    }
    visit(file) {
        if (this.getFilterStringBasicArrayList().size() == 0) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return Boolean.TRUE;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return super.visit(file);
        ;
    }
    visit(file, fileNameString) {
        var fileNameAndExtension = file.getPath();
        ;
        if (fileNameAndExtension.length > fileNameString.length) {
            var startIndex = fileNameAndExtension.length - fileNameString.length;
            ;
            var fileName = fileNameAndExtension.substring(startIndex);
            ;
            if (fileName.compareTo(fileNameString) == 0) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return Boolean.FALSE;
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return Boolean.TRUE;
    }
}
