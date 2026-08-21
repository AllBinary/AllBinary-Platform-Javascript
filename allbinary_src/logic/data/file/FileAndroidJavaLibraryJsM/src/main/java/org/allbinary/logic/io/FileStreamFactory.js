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
import { ResourceUtil } from '../../../../org/allbinary/data/resource/ResourceUtil.js';
import { NullUtil } from '../../../../org/allbinary/logic/NullUtil.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { AbFileInputStream } from './AbFileInputStream.js';
import { AbFileOutputStream } from './AbFileOutputStream.js';
export class FileStreamFactory extends Object {
    static getInstance() {
        if (FileStreamFactory.SINGLETON == NullUtil.getInstance().NULL_OBJECT) {
            FileStreamFactory.SINGLETON = new FileStreamFactory(ResourceUtil.getInstance().getContext());
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return FileStreamFactory.SINGLETON;
    }
    constructor(context) {
        super();
        this.context = context;
    }
    //@Throws(Exception.constructor)
    getFileInputStreamInstance(path, fileName) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new AbFileInputStream(this.getContext().openFileInput(fileName));
    }
    //@Throws(Exception.constructor)
    getFileOutputStreamInstance(path, fileName) {
        var context = this.getContext();
        ;
        context.deleteFile(fileName);
        //if statement needs to be on the same line and ternary does not work the same way.
        return new AbFileOutputStream(context.openFileOutput(fileName, 0));
    }
    //@Throws(Exception.constructor)
    delete(path, fileName) {
        this.getContext().deleteFile(fileName);
    }
    getContext() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.context;
    }
}
FileStreamFactory.SINGLETON = NullUtil.getInstance().NULL_OBJECT;
