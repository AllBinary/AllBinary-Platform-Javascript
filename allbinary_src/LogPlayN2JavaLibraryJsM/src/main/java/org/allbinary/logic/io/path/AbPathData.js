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
//not plain js import { FilePathData } 
const FilePathData = globalThis.org.allbinary.logic.io.file.FilePathData;
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
//Current folder imports from return types, extended types, and scope (deduplicated)
//Used to correct user input for paths
export class AbPathData extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return AbPathData.instance;
    }
    constructor() {
        super();
        this.EXTENSION_SEP = CommonSeps.getInstance().PERIOD;
        this.SEPARATORCHAR = '/';
        this.SEPARATOR = CommonSeps.getInstance().FORWARD_SLASH;
    }
    getExtensionIndex(filePath) {
        let indexOfFileExtensionDelmiter = filePath.lastIndexOf(this.EXTENSION_SEP);
        ;
        let indexOfLatDelimiter = filePath.lastIndexOf(this.SEPARATORCHAR);
        ;
        if (indexOfFileExtensionDelmiter < 0) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return -1;
        }
        if (indexOfFileExtensionDelmiter < indexOfLatDelimiter) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return -1;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return indexOfFileExtensionDelmiter;
    }
    getExtensionWithDot(filePath) {
        let indexOfFileExtensionDelmiter = this.getExtensionIndex(filePath);
        ;
        let extension = StringUtil.getInstance().EMPTY_STRING;
        ;
        if (indexOfFileExtensionDelmiter >= 0) {
            extension = filePath.substring(indexOfFileExtensionDelmiter);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return extension;
    }
    getExtension(filePath) {
        let indexOfFileExtensionDelmiter = this.getExtensionIndex(filePath);
        ;
        let extension = StringUtil.getInstance().EMPTY_STRING;
        ;
        if (indexOfFileExtensionDelmiter >= 0) {
            extension = filePath.substring(indexOfFileExtensionDelmiter + 1);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return extension;
    }
    getNameFromPath(path) {
        let endIndex = path.lastIndexOf(this.SEPARATORCHAR);
        ;
        if (endIndex < 0) {
            endIndex = path.lastIndexOf(FilePathData.getInstance().SEPARATORCHAR);
        }
        if (endIndex < 0) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return path;
        }
        if (path.length == endIndex + 1) {
            let categoryName = path.substring(0, endIndex);
            ;
            //if statement needs to be on the same line and ternary does not work the same way.
            return this.getNameFromPath(categoryName);
            ;
        }
        else {
            let categoryName = path.substring(endIndex + 1);
            ;
            //if statement needs to be on the same line and ternary does not work the same way.
            return categoryName;
        }
    }
    removeNameFromPath(path) {
        let endIndex = path.lastIndexOf(this.SEPARATORCHAR);
        ;
        if (endIndex < 0) {
            endIndex = path.lastIndexOf(FilePathData.getInstance().SEPARATORCHAR);
        }
        if (endIndex < 0) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return StringUtil.getInstance().EMPTY_STRING;
        }
        if (path.length == endIndex + 1) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return this.removeNameFromPath(path.substring(0, endIndex - 1));
            ;
        }
        else {
            let pathWithoutName = path.substring(0, endIndex);
            ;
            //if statement needs to be on the same line and ternary does not work the same way.
            return pathWithoutName;
        }
    }
}
AbPathData.instance = new AbPathData();
