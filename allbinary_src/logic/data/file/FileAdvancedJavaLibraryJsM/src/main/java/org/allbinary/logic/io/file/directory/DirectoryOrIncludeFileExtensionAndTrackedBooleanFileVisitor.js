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
import { GitProcessHelper } from '../../../../../../org/allbinary/java/runtime/process/git/GitProcessHelper.js';
//not GWT import const GitProcessHelper
import { AbFile } from '../../../../../../org/allbinary/logic/io/file/AbFile.js';
//not GWT import const AbFile
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
//sameFolderImports - not GWT import - same folder const TrackedStrings
export class DirectoryOrIncludeFileExtensionAndTrackedBooleanFileVisitor extends IncludeFileExtensionsBooleanFileVisitor {
    static main(args) {
        let commonFileStrings = CommonDataFileStrings.getInstance();
        ;
        let list = new BasicArrayListD();
        ;
        list.add(commonFileStrings.JAVA);
        let filePath = "G:\\mnt\\bc\\mydev\\games\\ZeptoRacer\\platform\\j2se\\ZeptoRacerStaticPathsJ2SEM\\target\\dependency\\org\\allbinary\\logic\\system\\security\\licensing\\ZeptoRacerPCClientInformation.java";
        ;
        let result = new DirectoryOrIncludeFileExtensionAndTrackedBooleanFileVisitor(list).visit(AbFile.createAbFileFromRawPath(filePath));
        ;
        console.log(filePath + " is Tracked: " + result);
    }
    constructor(filterStringBasicArrayList) {
        super(filterStringBasicArrayList);
        this.trackedStrings = TrackedStrings.getInstance();
        this.gitProcessHelper = GitProcessHelper.getInstance();
        //For kotlin this is before the body of the constructor.
        this.includesString =
            null;
    }
    constructor(filterStringBasicArrayList, includesString) {
        super(filterStringBasicArrayList);
        this.trackedStrings = TrackedStrings.getInstance();
        this.gitProcessHelper = GitProcessHelper.getInstance();
        //For kotlin this is before the body of the constructor.
        this.includesString = includesString;
    }
    visit(...args) {
        if (args.length === 1)
            return this.visit$overload1(args[0]);
        if (args.length === 2 && typeof args[1] === 'string')
            return this.visit$overload2(args[0], args[1]);
        throw new TypeError('No matching overload: visit');
    }
    visit$overload1(file) {
        if (file.isDirectory()) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
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
            return false;
        }
    }
    visit$overload2(file, fileNameString) {
        let filePath = file.getPath();
        ;
        if (super.visit(file, fileNameString)) {
            if (!(filePath.contains(this.trackedStrings.APPLICATION) || filePath.contains(this.trackedStrings.APP) || filePath.contains(this.trackedStrings.HTML_TEMP))) {
                if (!(filePath.contains(this.trackedStrings.TARGET_PATH_WINDOWS) || filePath.contains(this.trackedStrings.TARGET_PATH_UNIX))) {
                    if (this.gitProcessHelper.isTracked(file)) {
                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
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
        return false;
    }
}
