/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2026 AllBinary
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
import { IllegalStateException } from '../../../../../../java/lang/IllegalStateException.js';
//not GWT import const StandardCharsets
import { ArrayList } from '../../../../../../java/util/ArrayList.js';
//not GWT import const List
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not GWT import const AbFile
import { AbFileNativeUtil } from '../../../../../../org/allbinary/logic/io/file/AbFileNativeUtil.js';
//not GWT import const AbFileNativeUtil
import { TrackedStrings } from '../../../../../../org/allbinary/logic/io/file/directory/TrackedStrings.js';
//not GWT import const TrackedStrings
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { ProcessBuilder } from './ProcessBuilder.js';
//sameFolderImports - not GWT import - same folder const Process
//Do not use this instead just skip target, build, Application paths.
export class GitProcessHelper extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return GitProcessHelper.instance;
    }
    constructor() {
        super();
        this.trackedStrings = TrackedStrings.getInstance();
        let logUtil = LogUtil.getInstance();
        ;
        let commonStrings = CommonStrings.getInstance();
        ;
        let THIS_IS_SLOW = "This is slow consider path exclusion instead";
        ;
        logUtil.putF(THIS_IS_SLOW, this, commonStrings.CONSTRUCTOR);
    }
    trackedFiles(...args) {
        if (args.length === 2 && typeof args[0] === 'string' && typeof args[1] === 'string')
            return this.trackedFiles$overload1(args[0], args[1]);
        if (args.length === 3 && typeof args[0] === 'string' && typeof args[1] === 'string' && typeof args[2] === 'string')
            return this.trackedFiles$overload2(args[0], args[1], args[2]);
        throw new TypeError('No matching overload: trackedFiles');
    }
    //@Throws(IOException.constructor, InterruptedException.constructor)
    trackedFiles$overload1(rootAsString, pathspec) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.trackedFiles(rootAsString, pathspec, ".java");
        ;
    }
    //@Throws(IOException.constructor, InterruptedException.constructor)
    trackedFiles$overload2(rootAsString, pathspec, suffix) {
        let process = new ProcessBuilder(this.trackedStrings.GIT_COMMAND, this.trackedStrings.CHANGE_DIRECTORY_OPTION, rootAsString, this.trackedStrings.LIST_FILES_COMMAND, this.trackedStrings.SEP_BY_NULL_CHAR_INSTEAD_OF_NEW_LINE, this.trackedStrings.PATHSPEC_SEPARATOR, pathspec).redirectError(ProcessBuilder.Redirect.INHERIT).start();
        ;
        let output = process.getInputStream().readAllBytes();
        ;
        let exitCode = process.waitFor();
        ;
        if (exitCode != 0) {
            throw new IllegalStateException(new StringMaker().append("git ls-files failed for ").append(rootAsString).append(" with exit code ").appendint(exitCode).toString());
        }
        let files = new ArrayList();
        ;
        let start = 0;
        ;
        let relativePath;
        ;
        for (let index = 0; index < output.length; index++) {
            if (output[index] == 0) {
                relativePath = String.fromCharCode(...output);
                if (relativePath.endsWith(suffix)) {
                    files.add(relativePath);
                }
                start = index + 1;
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return files;
    }
    isTracked(file) {
        try {
            let nativeFile = AbFileNativeUtil.get(file);
            ;
            let parentFile = nativeFile.getParentFile();
            ;
            let process = new ProcessBuilder(this.trackedStrings.GIT_COMMAND, this.trackedStrings.CHANGE_DIRECTORY_OPTION, parentFile.getPath(), this.trackedStrings.LIST_FILES_COMMAND, this.trackedStrings.ERROR_UNMATCH_OPTION, this.trackedStrings.PATHSPEC_SEPARATOR, nativeFile.getName()).redirectErrorStream(true).start();
            ;
            process.getInputStream().readAllBytes();
            //if statement needs to be on the same line and ternary does not work the same way.
            return process.waitFor() == 0;
        }
        catch (caught) {
            {
                const e = caught;
                //if statement needs to be on the same line and ternary does not work the same way.
                return false;
            }
        }
    }
}
GitProcessHelper.instance = new GitProcessHelper();
