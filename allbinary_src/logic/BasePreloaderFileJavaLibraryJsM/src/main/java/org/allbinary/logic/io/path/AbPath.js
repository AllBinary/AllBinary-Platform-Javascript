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
import { Exception } from '../../../../../java/lang/Exception.js';
import { RuntimeException } from '../../../../../java/lang/RuntimeException.js';
//not plain js import { FilePathData } from '../../../../../org/allbinary/logic/io/file/FilePathData.js';
const FilePathData = globalThis.org.allbinary.logic.io.file.FilePathData;
import { FilePathUtil } from '../../../../../org/allbinary/logic/io/file/FilePathUtil.js';
//not GWT import const FilePathUtil = globalThis.org.allbinary.logic.io.file.FilePathUtil;
//not plain js import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
import { StringValidationUtil } from '../../../../../org/allbinary/logic/string/StringValidationUtil.js';
//not GWT import const StringValidationUtil = globalThis.org.allbinary.logic.string.StringValidationUtil;
//not plain js import { CommonSeps } from '../../../../../org/allbinary/string/CommonSeps.js';
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
//Current folder imports from return types, extended types, and scope (deduplicated)
//not plain js import { AbPathData } from './AbPathData.js';
const AbPathData = globalThis.org.allbinary.logic.io.path.AbPathData;
import { PathUtil } from './PathUtil.js';
//not GWT import const PathUtil = globalThis.org.allbinary.logic.io.path.PathUtil;
export class AbPath extends Object {
    static createAbPath() {
        try {
            var EMPTY_STRING = StringUtil.getInstance().EMPTY_STRING;
            ;
            //if statement needs to be on the same line and ternary does not work the same way.
            return new AbPath(EMPTY_STRING, EMPTY_STRING);
            //: 
        }
        catch (ex) {
            throw new RuntimeException();
        }
    }
    constructor(aPath, name) {
        super();
        this.commonSeps = CommonSeps.getInstance();
        this.abPathData = AbPathData.getInstance();
        this.abPathUtil = PathUtil.getInstance();
        this.EMPTY_STRING = StringUtil.getInstance().EMPTY_STRING;
        this.schema = this.EMPTY_STRING;
        this.path = this.EMPTY_STRING;
        this.nameP = this.EMPTY_STRING;
        this.hasSchemaP = false;
        this.numberOfSeps = 0;
        var stringValidationUtil = StringValidationUtil.getInstance();
        ;
        if (!stringValidationUtil.isEmpty(aPath)) {
            this.schema = this.getSchema(aPath);
            this.nameP = name;
            this.path = this.abPathUtil.adjustEnd(this.abPathUtil.adjust(this.getPathFromPath(aPath)));
        }
        else {
            this.init();
            if (!stringValidationUtil.isEmpty(name)) {
                this.nameP = name;
            }
        }
    }
    init() {
        this.schema = this.EMPTY_STRING;
        this.setPath(this.abPathData.SEPARATOR);
        this.nameP = this.EMPTY_STRING;
    }
    getSchema(aPath) {
        var beginIndex = aPath.indexOf(this.commonSeps.COLON);
        ;
        if (beginIndex >= 0) {
            this.hasSchemaP = true;
            //if statement needs to be on the same line and ternary does not work the same way.
            return aPath.substring(0, beginIndex);
            ;
        }
        this.hasSchemaP = false;
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.EMPTY_STRING;
    }
    hasSchema() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.hasSchemaP;
    }
    //@Throws(Exception.constructor)
    getPathFromPath(aPath) {
        var filePathData = FilePathData.getInstance();
        ;
        var tempPath = aPath;
        ;
        if (!this.hasSchema()) {
            tempPath = this.abPathUtil.adjustStart(tempPath);
        }
        else {
            var beginIndex = tempPath.indexOf(this.commonSeps.COLON);
            ;
            if (beginIndex >= 0) {
                beginIndex++;
                while (tempPath[beginIndex] == this.abPathData.SEPARATORCHAR || tempPath[beginIndex] == filePathData.SEPARATORCHAR) {
                    beginIndex++;
                    this.numberOfSeps++;
                    if (this.numberOfSeps > 2) {
                        throw new Exception("Should Not Have More Than Two Seps");
                    }
                }
                tempPath = tempPath.substring(beginIndex, tempPath.length);
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return tempPath;
    }
    setName(name) {
        this.nameP = name;
    }
    getName() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.nameP;
    }
    toString() {
        var stringBuffer = new StringMaker();
        ;
        if (this.hasSchema()) {
            stringBuffer.append(this.schema);
            stringBuffer.append(AbPath.NETWORK_SEP);
        }
        stringBuffer.append(this.getPath());
        stringBuffer.append(this.nameP);
        //if statement needs to be on the same line and ternary does not work the same way.
        return stringBuffer.toString();
        ;
    }
    toFileSystemString() {
        if (this.hasSchema()) {
            var filePathData = FilePathData.getInstance();
            ;
            var stringBuffer = new StringMaker();
            ;
            stringBuffer.append(this.schema);
            stringBuffer.append(this.commonSeps.COLON);
            stringBuffer.append(filePathData.PATH_START);
            stringBuffer.append(FilePathUtil.adjust(this.getPath()));
            stringBuffer.append(this.nameP);
            //if statement needs to be on the same line and ternary does not work the same way.
            return stringBuffer.toString();
            ;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return FilePathUtil.adjust(this.getPath()) + this.nameP;
        }
    }
    getPath() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.path;
    }
    setPath(path) {
        this.path = path;
    }
}
AbPath.NETWORK_SEP = ":/";
