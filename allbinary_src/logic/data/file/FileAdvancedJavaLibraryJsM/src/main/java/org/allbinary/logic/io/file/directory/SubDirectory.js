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
//not plain js import { StringMaker } from '../../../../../../org/allbinary/logic/string/StringMaker.js';
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { CommonSeps } from '../../../../../../org/allbinary/string/CommonSeps.js';
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
//not plain js import { BasicArrayList } from '../../../../../../org/allbinary/util/BasicArrayList.js';
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { Directory } from './Directory.js';
//not GWT import const Directory = globalThis.org.allbinary.logic.io.file.directory.Directory;
export class SubDirectory extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return SubDirectory.instance;
    }
    static toString(files) {
        var stringBuffer = new StringMaker();
        ;
        var NEW_LINE = CommonSeps.getInstance().NEW_LINE;
        ;
        var size = files.size();
        ;
        for (var index = 0; index < size; index++) {
            var file = files.get(index);
            ;
            stringBuffer.append(file.getPath());
            stringBuffer.append(NEW_LINE);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return stringBuffer.toString();
        ;
    }
    constructor() {
        super();
        this.directory = Directory.getInstance();
    }
    search(fileFilter, file) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.directory.search(fileFilter, file, true);
        ;
    }
    search(file) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.directory.search(file, true);
        ;
    }
    search(searchValue, file) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.directory.search(searchValue, file, true);
        ;
    }
    search(level, file) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.directory.search(level, file, true);
        ;
    }
}
SubDirectory.instance = new SubDirectory();
