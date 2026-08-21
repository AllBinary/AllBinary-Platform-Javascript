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
import { StringMaker } from '../../../../../../org/allbinary/logic/string/StringMaker.js';
import { CommonSeps } from '../../../../../../org/allbinary/string/CommonSeps.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { Directory } from './Directory.js';
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
