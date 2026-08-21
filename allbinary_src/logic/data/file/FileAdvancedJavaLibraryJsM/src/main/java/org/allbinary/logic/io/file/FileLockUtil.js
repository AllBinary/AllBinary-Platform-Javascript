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
import { Object } from '../../../../../java/lang/Object.js';
import { Vector } from '../../../../../java/util/Vector.js';
import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
import { AbFileOutputStream } from '../../../../../org/allbinary/logic/io/AbFileOutputStream.js';
import { StreamUtil } from '../../../../../org/allbinary/logic/io/StreamUtil.js';
export class FileLockUtil extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return FileLockUtil.instance;
    }
    constructor() {
        super();
        this.logUtil = LogUtil.getInstance();
    }
    //@Throws(Exception.constructor)
    getAll(vector, isReturnOnFailure) {
        var fileLockVector = new Vector();
        ;
        var size = vector.length;
        ;
        for (var index = 0; index < size; index++) {
            var file = vector.get(index);
            ;
            var fileLock = this.getLock(file);
            ;
            if (fileLock !=
                null) {
                this.logUtil.putF("File Lock Obtained: " + file.getAbsolutePath(), this, "getAll");
                fileLockVector.add(fileLock);
            }
            else if (isReturnOnFailure) {
                this.logUtil.putF("Total Locks Obtained: " + fileLockVector.length, this, "getAll");
                //if statement needs to be on the same line and ternary does not work the same way.
                return fileLockVector;
            }
        }
        this.logUtil.putF("Total Locks Obtained: " + fileLockVector.length, this, "getAll");
        //if statement needs to be on the same line and ternary does not work the same way.
        return fileLockVector;
    }
    //@Throws(Exception.constructor)
    getAllPossible(vector) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.getAll(vector, false);
        ;
    }
    //@Throws(Exception.constructor)
    getAllOrNone(vector) {
        var fileLockVector = this.getAll(vector, true);
        ;
        if (vector.length != fileLockVector.length) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return new Vector();
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return fileLockVector;
        }
    }
    //@Throws(Exception.constructor)
    getLock(file) {
        try {
            //if statement needs to be on the same line and ternary does not work the same way.
            return this.getLock(AbFileOutputStream.createFromAbFileAppend(file, true));
            ;
            //: 
        }
        catch (e) {
            this.logUtil.put("Exception returns null", this, "getLock", e);
            //if statement needs to be on the same line and ternary does not work the same way.
            return null;
        }
        finally {
        }
    }
    //@Throws(Exception.constructor)
    getLock(fileOutputStream) {
        try {
            var fileLock = this.getLock(fileOutputStream.getChannel());
            ;
            //if statement needs to be on the same line and ternary does not work the same way.
            return fileLock;
            //: 
        }
        catch (e) {
            this.logUtil.put("Exception returns null", this, "getLock", e);
            //if statement needs to be on the same line and ternary does not work the same way.
            return null;
        }
        finally {
            this.logUtil.putF("Finally - Closing FileOutputStream", this, "getLock");
            StreamUtil.getInstance().close(fileOutputStream);
        }
    }
    //@Throws(Exception.constructor)
    getLock(fileChannel) {
        try {
            var fileLock = fileChannel.tryLock();
            ;
            //if statement needs to be on the same line and ternary does not work the same way.
            return fileLock;
            //: 
        }
        catch (e) {
            this.logUtil.put("Exception returns null", this, "getLock", e);
            //if statement needs to be on the same line and ternary does not work the same way.
            return null;
        }
        finally {
            this.logUtil.putF("Finally - Closing FileChannel", this, "getLock");
            fileChannel.close();
        }
    }
}
FileLockUtil.instance = new FileLockUtil();
