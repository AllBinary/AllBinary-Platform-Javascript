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
//Current folder imports from return types, extended types, and scope (deduplicated)
import { AbFileOutputStream } from './AbFileOutputStream.js';
import { AbDataOutputStream } from './AbDataOutputStream.js';
import { FileStreamFactory } from './FileStreamFactory.js';
export class DataOutputStreamFactory extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return DataOutputStreamFactory.instance;
    }
    //@Throws(Exception.constructor)
    getInstanceForAbFile(file) {
        var idFileOutputStream = AbFileOutputStream.createFromAbFile(file);
        ;
        var idOutData = new AbDataOutputStream(idFileOutputStream);
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return idOutData;
    }
    //@Throws(Exception.constructor)
    getInstance(filePath, fileName) {
        var fileStreamFactory = FileStreamFactory.getInstance();
        ;
        var fileOutputStream = fileStreamFactory.getFileOutputStreamInstance(filePath, fileName);
        ;
        var idOutData = new AbDataOutputStream(fileOutputStream);
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return idOutData;
    }
}
DataOutputStreamFactory.instance = new DataOutputStreamFactory();
