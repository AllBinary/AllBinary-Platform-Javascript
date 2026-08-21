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
import { FilePathData } from '../../../../../org/allbinary/logic/io/file/FilePathData.js';
import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
import { StringValidationUtil } from '../../../../../org/allbinary/logic/string/StringValidationUtil.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { AbPathData } from './AbPathData.js';
import { AbPath } from './AbPath.js';
//Used to correct user input for paths
export class PathUtil extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return PathUtil.instance;
    }
    constructor() {
        super();
        this.abPathData = AbPathData.getInstance();
        this.filePathData = FilePathData.getInstance();
    }
    getExtensionWithAbFilePath(abFilePath) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.abPathData.getExtension(abFilePath.toString());
        ;
    }
    getExtensionWithAbPath(abPath) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.abPathData.getExtension(abPath.toString());
        ;
    }
    //@Throws(Exception.constructor)
    getWithoutExtensionWithAbFilePath(abFilePath) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.getWithoutExtension(abFilePath.toString());
        ;
    }
    //@Throws(Exception.constructor)
    getWithoutExtensionWithAbPath(abPath) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.getWithoutExtension(abPath.toString());
        ;
    }
    //@Throws(Exception.constructor)
    getWithoutExtension(filePath) {
        var indexOfFileExtensionDelmiter = this.abPathData.getExtensionIndex(filePath);
        ;
        var pathWithoutExtension = filePath;
        ;
        if (indexOfFileExtensionDelmiter >= 0) {
            pathWithoutExtension = filePath.substring(0, indexOfFileExtensionDelmiter);
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
        if (path[0] == this.abPathData.SEPARATORCHAR || path[0] == '.') {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
    }
    isValidEnd(path) {
        var stringValidationUtil = StringValidationUtil.getInstance();
        ;
        if (stringValidationUtil.isEmpty(path)) {
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
        var stringValidationUtil = StringValidationUtil.getInstance();
        ;
        if (stringValidationUtil.isEmpty(path)) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return this.abPathData.SEPARATOR;
        }
        if (path.indexOf("\\") >= 0) {
            path = path.replace('\\', this.abPathData.SEPARATORCHAR);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return path;
    }
    //@Throws(Exception.constructor)
    removeNameFromPath(path) {
        var endIndex = path.lastIndexOf(this.abPathData.SEPARATOR);
        ;
        if (endIndex < 0) {
            endIndex = path.lastIndexOf(this.filePathData.SEPARATORCHAR);
        }
        if (endIndex < 0) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return AbPath.createAbPath();
            ;
        }
        if (path.length == endIndex + 1) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return this.removeNameFromPath(path.substring(0, endIndex - 1));
            ;
        }
        else {
            var pathWithoutName = path.substring(0, endIndex);
            ;
            //if statement needs to be on the same line and ternary does not work the same way.
            return new AbPath(pathWithoutName, StringUtil.getInstance().EMPTY_STRING);
        }
    }
}
PathUtil.instance = new PathUtil();
