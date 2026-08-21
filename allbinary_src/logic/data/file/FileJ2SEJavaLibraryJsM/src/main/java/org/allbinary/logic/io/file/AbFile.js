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
import { File } from '../../../../../java/io/File.js';
import { TsUtil } from '../../../../../org/allbinary/TsUtil.js';
import { AbPath } from '../../../../../org/allbinary/logic/io/path/AbPath.js';
import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
export class AbFile extends Object {
    //@Throws(Exception.constructor)
    static createAbFileWithChild(file, childPathName) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new AbFile(new File(file.getFile(), childPathName));
    }
    //@Throws(Exception.constructor)
    static createAbFile(filePath) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new AbFile(new File(new AbPath(filePath, StringUtil.getInstance().EMPTY_STRING).toFileSystemString()));
    }
    //@Throws(Exception.constructor)
    static createAbFilePathAndName(filePath, fileName) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new AbFile(new File(new AbPath(filePath, StringUtil.getInstance().EMPTY_STRING).toFileSystemString(), fileName));
    }
    static createAbFileFromAbPath(abPath) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new AbFile(new File(abPath.toFileSystemString()));
    }
    static createAbFileFromRawPath(filePath) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new AbFile(new File(filePath));
    }
    constructor(file) {
        super();
        this.file = file;
    }
    getFile() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.file;
    }
    getName() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.file.getName();
        ;
    }
    getParent() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.file.getParent();
        ;
    }
    getParentFile() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.file.getParentFile();
        ;
    }
    getPath() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.file.getPath();
        ;
    }
    isAbsolute() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.file.isAbsolute();
        ;
    }
    getAbsolutePath() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.file.getAbsolutePath();
        ;
    }
    getAbsoluteFile() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.file.getAbsoluteFile();
        ;
    }
    //@Throws(IOException.constructor)
    getCanonicalPath() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.file.getCanonicalPath();
        ;
    }
    //@Throws(IOException.constructor)
    getCanonicalFile() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.file.getCanonicalFile();
        ;
    }
    toURI() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.file.toURI();
        ;
    }
    canRead() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.file.canRead();
        ;
    }
    canWrite() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.file.canWrite();
        ;
    }
    exists() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.file.exists();
        ;
    }
    isDirectory() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.file.isDirectory();
        ;
    }
    isFile() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.file.isFile();
        ;
    }
    isHidden() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.file.isHidden();
        ;
    }
    lastModified() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.file.lastModified();
        ;
    }
    length() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.file.length();
        ;
    }
    //@Throws(IOException.constructor)
    createNewFile() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.file.createNewFile();
        ;
    }
    //@Throws(IOException.constructor)
    delete() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.file.delete();
        ;
    }
    deleteOnExit() {
        this.file.deleteOnExit();
    }
    list() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.file.list();
        ;
    }
    listWithFilter(filter) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.file.list(filter);
        ;
    }
    listFiles() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.file.listFiles();
    }
    listFilesFileNameFilter(filter) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.file.listFiles(filter);
    }
    listFilesFileFilter(filter) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.file.listFiles(filter);
    }
    mkdir() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.file.mkdir();
        ;
    }
    mkdirs() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.file.mkdirs();
        ;
    }
    renameTo(dest) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.file.renameTo(dest.getFile());
        ;
    }
    setLastModified(time) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.file.setLastModified(time);
        ;
    }
    setReadOnly() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.file.setReadOnly();
        ;
    }
    setWritable(writable, ownerOnly) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.file.setExecutable(writable, ownerOnly);
        ;
    }
    setWritable(writable) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.file.setWritable(writable);
        ;
    }
    setReadable(readable, ownerOnly) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.file.setReadable(readable, ownerOnly);
        ;
    }
    setReadable(readable) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.file.setReadable(readable);
        ;
    }
    setExecutable(executable, ownerOnly) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.file.setExecutable(executable, ownerOnly);
        ;
    }
    setExecutable(executable) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.file.setExecutable(executable);
        ;
    }
    canExecute() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.file.canExecute();
        ;
    }
    getTotalSpace() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.file.getTotalSpace();
        ;
    }
    getFreeSpace() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.file.getFreeSpace();
        ;
    }
    getUsableSpace() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.file.getUsableSpace();
        ;
    }
    compareTo(pathname) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.file.compareTo(pathname);
        ;
    }
    equals(obj = {}) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return TsUtil.getInstance().equalsNotstring(this.file, obj);
        ;
    }
    hashCode() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.file.hashCode();
        ;
    }
    toString() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.file.toString();
        ;
    }
}
AbFile.NULL_FILE = AbFile.createAbFileFromRawPath(StringUtil.getInstance().EMPTY_STRING);
