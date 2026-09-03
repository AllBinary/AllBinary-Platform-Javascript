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
import { Exception } from '../../../../../../java/lang/Exception.js';
//not plain js import { LogUtil } from '../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { FilePathData } from '../../../../../../org/allbinary/logic/io/file/FilePathData.js';
const FilePathData = globalThis.org.allbinary.logic.io.file.FilePathData;
//not GWT import const AbFilePath = globalThis.org.allbinary.logic.io.path.AbFilePath;
import { AbPath } from '../../../../../../org/allbinary/logic/io/path/AbPath.js';
//not GWT import const AbPath = globalThis.org.allbinary.logic.io.path.AbPath;
//not plain js import { AbPathData } from '../../../../../../org/allbinary/logic/io/path/AbPathData.js';
const AbPathData = globalThis.org.allbinary.logic.io.path.AbPathData;
//not plain js import { StringUtil } from '../../../../../../org/allbinary/logic/string/StringUtil.js';
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
import { StringValidationUtil } from '../../../../../../org/allbinary/logic/string/StringValidationUtil.js';
//not GWT import const StringValidationUtil = globalThis.org.allbinary.logic.string.StringValidationUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
//Used to correct user input for paths
export class AbPathUtilOld extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return AbPathUtilOld.instance;
    }
    constructor() {
        super();
        this.logUtil = LogUtil.getInstance();
        this.abPathData = AbPathData.getInstance();
        this.filePathData = FilePathData.getInstance();
    }
    //@Throws(Exception.constructor)
    getExtension(abFilePath) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.getExtension(abFilePath.toString());
        ;
    }
    //@Throws(Exception.constructor)
    getExtension(abPath) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.getExtension(abPath.toString());
        ;
    }
    //@Throws(Exception.constructor)
    getExtension(filePath) {
        if (filePath.length < AbPathUtilOld.MIN) {
            throw new Exception("Could not be a file path since its less that 4 characters");
        }
        var beginIndex = filePath.length - AbPathUtilOld.MIN;
        ;
        var extension = filePath.substring(beginIndex + 1);
        ;
        if (org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance().VIEW)) {
            this.logUtil.putF("FileExtension: " + extension, this, "getExtension()");
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return extension;
    }
    //@Throws(Exception.constructor)
    getWithoutExtension(abFilePath) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.getWithoutExtension(abFilePath.toString());
        ;
    }
    //@Throws(Exception.constructor)
    getWithoutExtension(abPath) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.getWithoutExtension(abPath.toString());
        ;
    }
    //@Throws(Exception.constructor)
    getWithoutExtension(filePath) {
        if (filePath.length < AbPathUtilOld.MIN) {
            throw new Exception("Could not be a file path since its less that 4 characters");
        }
        var endIndex = filePath.length - AbPathUtilOld.MIN;
        ;
        var pathWithoutExtension = filePath.substring(0, endIndex);
        ;
        if (org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance().VIEW)) {
            this.logUtil.putF("FileWithoutExtension: " + pathWithoutExtension, this, "getWithoutExtension()");
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return pathWithoutExtension;
    }
    isValid(path) {
        if (this.isValidStart(path)) {
            if (this.isValidEnd(path)) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return true;
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    isValidStart(path) {
        if (path[0] == this.abPathData.SEPARATORCHAR) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
    }
    isValidEnd(path) {
        if (StringValidationUtil.getInstance().isEmpty(path)) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
        if (path[path.length - 1] == this.abPathData.SEPARATORCHAR) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
    }
    adjustStart(path) {
        if (!this.isValidStart(path)) {
            path = this.abPathData.SEPARATOR + path;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return path;
    }
    adjustEnd(path) {
        if (!this.isValidEnd(path)) {
            path = path + this.abPathData.SEPARATOR;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return path;
    }
    adjust(path) {
        if (StringValidationUtil.getInstance().isEmpty(path)) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return this.abPathData.SEPARATOR;
        }
        if (path.indexOf("\\") >= 0) {
            path = path.replace('\\', this.abPathData.SEPARATORCHAR);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return path;
    }
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    getNameFromPath(categoryPath) {
        var endIndex = categoryPath.lastIndexOf(this.abPathData.SEPARATOR);
        ;
        if (endIndex < 0) {
            endIndex = categoryPath.lastIndexOf(this.filePathData.SEPARATORCHAR);
        }
        if (endIndex < 0)
            //if statement needs to be on the same line and ternary does not work the same way.
            return categoryPath;
        if (categoryPath.length == endIndex + 1) {
            var categoryName = categoryPath.substring(0, endIndex);
            ;
            //if statement needs to be on the same line and ternary does not work the same way.
            return this.getNameFromPath(categoryName);
            ;
        }
        else {
            var categoryName = categoryPath.substring(endIndex + 1);
            ;
            //if statement needs to be on the same line and ternary does not work the same way.
            return categoryName;
        }
    }
    //@Throws(Exception.constructor)
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    removeNameFromPath(categoryPath) {
        var endIndex = categoryPath.lastIndexOf(this.abPathData.SEPARATOR);
        ;
        if (endIndex < 0) {
            endIndex = categoryPath.lastIndexOf(this.filePathData.SEPARATORCHAR);
        }
        if (endIndex < 0) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return AbPath.createAbPath();
            ;
        }
        if (categoryPath.length == endIndex + 1) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return this.removeNameFromPath(categoryPath.substring(0, endIndex - 1));
            ;
        }
        else {
            var categoryName = categoryPath.substring(0, endIndex);
            ;
            //if statement needs to be on the same line and ternary does not work the same way.
            return new AbPath(categoryName, StringUtil.getInstance().EMPTY_STRING);
        }
    }
}
AbPathUtilOld.instance = new AbPathUtilOld();
AbPathUtilOld.MIN = 4;
