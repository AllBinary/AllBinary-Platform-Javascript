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
//not GWT import const FileFilter = globalThis.java.io.FileFilter;
import { IncludeFileExtensionsBooleanFileVisitor } from '../../../../../../org/allbinary/logic/io/file/visitor/IncludeFileExtensionsBooleanFileVisitor.js';
//not GWT import const IncludeFileExtensionsBooleanFileVisitor = globalThis.org.allbinary.logic.io.file.visitor.IncludeFileExtensionsBooleanFileVisitor;
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { VisitorFileFilter } from './VisitorFileFilter.js';
//not GWT import - same folder const VisitorFileFilter = globalThis.org.allbinary.logic.io.file.filter.VisitorFileFilter;
export class BasicFileFilterUtil extends Object {
    static getInstance(extension) {
        var vector = new BasicArrayListD();
        ;
        vector.add(extension);
        var includeFileExtensionsBooleanFileVisitor = new IncludeFileExtensionsBooleanFileVisitor(vector);
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return new VisitorFileFilter(includeFileExtensionsBooleanFileVisitor);
    }
    constructor() {
        super();
    }
}
