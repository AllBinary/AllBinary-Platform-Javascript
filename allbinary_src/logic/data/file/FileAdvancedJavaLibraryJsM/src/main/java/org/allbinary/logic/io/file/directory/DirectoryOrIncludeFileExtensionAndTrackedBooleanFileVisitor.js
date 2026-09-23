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
//not GWT import const File
import { AbFile } from '../../../../../../org/allbinary/logic/io/file/AbFile.js';
//not GWT import const AbFile
import { AbFileNativeUtil } from '../../../../../../org/allbinary/logic/io/file/AbFileNativeUtil.js';
//not GWT import const AbFileNativeUtil
import { CommonDataFileStrings } from '../../../../../../org/allbinary/logic/io/file/CommonDataFileStrings.js';
//not GWT import const CommonDataFileStrings
import { IncludeFileExtensionsBooleanFileVisitor } from '../../../../../../org/allbinary/logic/io/file/visitor/IncludeFileExtensionsBooleanFileVisitor.js';
//not GWT import const IncludeFileExtensionsBooleanFileVisitor
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { TrackedStrings } from './TrackedStrings.js';
//not GWT import - same folder const TrackedStrings
import { ProcessBuilder } from './ProcessBuilder.js';
//not GWT import - same folder const Process
export class DirectoryOrIncludeFileExtensionAndTrackedBooleanFileVisitor extends IncludeFileExtensionsBooleanFileVisitor {
    static main(args) {
        var commonFileStrings = CommonDataFileStrings.getInstance();
        ;
        var list = new BasicArrayListD();
        ;
        list.add(commonFileStrings.JAVA);
        var filePath = "G:\\mnt\\bc\\mydev\\games\\ZeptoRacer\\platform\\j2se\\ZeptoRacerStaticPathsJ2SEM\\target\\dependency\\org\\allbinary\\logic\\system\\security\\licensing\\ZeptoRacerPCClientInformation.java";
        ;
        var result = new DirectoryOrIncludeFileExtensionAndTrackedBooleanFileVisitor(list).visit(AbFile.createAbFileFromRawPath(filePath));
        ;
        console.log(filePath + " is Tracked: " + result);
    }
    constructor(filterStringBasicArrayList) {
        super(filterStringBasicArrayList);
        this.trackedStrings = TrackedStrings.getInstance();
        //For kotlin this is before the body of the constructor.
        this.includesString =
            null;
    }
    constructor(filterStringBasicArrayList, includesString) {
        super(filterStringBasicArrayList);
        this.trackedStrings = TrackedStrings.getInstance();
        //For kotlin this is before the body of the constructor.
        this.includesString = includesString;
    }
    visit(file) {
        if (file.isDirectory()) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return Boolean.TRUE;
        }
        if (this.includesString ==
            null
            || file.getAbsolutePath().indexOf(this.includesString) >= 0) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return super.visit(file);
            ;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return Boolean.FALSE;
        }
    }
    visit(file, fileNameString) {
        var filePath = file.getPath();
        ;
        if (super.visit(file, fileNameString)) {
            if (!(filePath.contains(this.trackedStrings.APPLICATION) || filePath.contains(this.trackedStrings.APP) || filePath.contains(this.trackedStrings.HTML_TEMP))) {
                if (!(filePath.contains(this.trackedStrings.TARGET_PATH_WINDOWS) || filePath.contains(this.trackedStrings.TARGET_PATH_UNIX))) {
                    if (this.isGitTracked(file)) {
                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.TRUE;
                    }
                    else {
                    }
                }
                else {
                }
            }
            else {
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return Boolean.FALSE;
    }
    isGitTracked(file) {
        try {
            var nativeFile = AbFileNativeUtil.get(file);
            ;
            var parentFile = nativeFile.getParentFile();
            ;
            var process = new ProcessBuilder(this.trackedStrings.GIT_COMMAND, this.trackedStrings.CHANGE_DIRECTORY_OPTION, parentFile.getPath(), this.trackedStrings.LIST_FILES_COMMAND, this.trackedStrings.ERROR_UNMATCH_OPTION, this.trackedStrings.PATHSPEC_SEPARATOR, nativeFile.getName()).redirectErrorStream(true).start();
            ;
            process.getInputStream().readAllBytes();
            //if statement needs to be on the same line and ternary does not work the same way.
            return process.waitFor() == 0;
            //: 
        }
        catch (e) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
    }
}
