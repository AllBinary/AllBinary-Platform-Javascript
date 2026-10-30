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
//not GWT import const AbFile
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { Directory } from './Directory.js';
//sameFolderImports - not GWT import - same folder const Directory
export class SubDirectory extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return SubDirectory.instance;
    }
    static toString(files) {
        let stringBuffer = new StringMaker();
        ;
        let NEW_LINE = CommonSeps.getInstance().NEW_LINE;
        ;
        let size = files.size();
        ;
        for (let index = 0; index < size; index++) {
            let file = files.get(index);
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
    search(...args) {
        if (args.length === 2)
            return this.search$overload1(args[0], args[1]);
        if (args.length === 1)
            return this.search$overload2(args[0]);
        if (args.length === 2 && typeof args[0] === 'string')
            return this.search$overload3(args[0], args[1]);
        if (args.length === 2 && typeof args[0] === 'number')
            return this.search$overload4(args[0], args[1]);
        throw new TypeError('No matching overload: search');
    }
    search$overload1(fileFilter, file) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.directory.search(fileFilter, file, true);
        ;
    }
    search$overload2(file) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.directory.search(file, true);
        ;
    }
    search$overload3(searchValue, file) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.directory.search(searchValue, file, true);
        ;
    }
    search$overload4(level, file) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.directory.search(level, file, true);
        ;
    }
}
SubDirectory.instance = new SubDirectory();
