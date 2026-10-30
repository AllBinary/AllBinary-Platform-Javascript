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
import { Object } from '../../../../java/lang/Object.js';
//not GWT import const AbFile
//Current folder imports from return types, extended types, and scope (deduplicated)
import { AbFileOutputStream } from './AbFileOutputStream.js';
//sameFolderImports - not GWT import - same folder const AbFileOutputStream
import { AbDataOutputStream } from './AbDataOutputStream.js';
//sameFolderImports - not GWT import - same folder const AbDataOutputStream
import { FileStreamFactory } from './FileStreamFactory.js';
//sameFolderImports - not GWT import - same folder const FileStreamFactory
export class DataOutputStreamFactory extends Object {
    static getInstance(...args) {
        if (args.length === 0)
            return this.getInstance$overload1();
        if (args.length === 2 && typeof args[0] === 'string' && typeof args[1] === 'string')
            return this.getInstance$overload2(args[0], args[1]);
        throw new TypeError('No matching overload: getInstance');
    }
    static getInstance$overload1() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return DataOutputStreamFactory.instance;
    }
    //@Throws(Exception.constructor)
    getInstanceForAbFile(file) {
        let idFileOutputStream = AbFileOutputStream.createFromAbFile(file);
        ;
        let idOutData = new AbDataOutputStream(idFileOutputStream);
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return idOutData;
    }
    //@Throws(Exception.constructor)
    getInstance$overload2(filePath, fileName) {
        let fileStreamFactory = FileStreamFactory.getInstance();
        ;
        let fileOutputStream = fileStreamFactory.getFileOutputStreamInstance(filePath, fileName);
        ;
        let idOutData = new AbDataOutputStream(fileOutputStream);
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return idOutData;
    }
}
DataOutputStreamFactory.instance = new DataOutputStreamFactory();
