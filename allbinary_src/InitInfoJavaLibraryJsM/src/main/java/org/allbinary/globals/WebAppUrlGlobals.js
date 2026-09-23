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
import { Exception } from '../../../java/lang/Exception.js';
import { InitInfo } from '../../../org/allbinary/business/init/InitInfo.js';
//not GWT import const InitInfo
import { StringValidationUtil } from '../../../org/allbinary/logic/string/StringValidationUtil.js';
//not GWT import const StringValidationUtil
//Current folder imports from return types, extended types, and scope (deduplicated)
import { UrlGlobalsInterface } from './UrlGlobalsInterface.js';
//not GWT import - same folder const UrlGlobalsInterface
export class WebAppUrlGlobals extends UrlGlobalsInterface {
    constructor() {
        super(...arguments);
        this.isWebappPathSet = false;
    }
    isTestingMode() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return InitInfo.getInstance().isTesting();
        ;
    }
    getWebappPath() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.path;
    }
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    setWebappPath(path) {
        path = path;
        this.isWebappPathSet = true;
    }
    getTestHtmlPath() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return InitInfo.getInstance().getTestHtmlPath();
        ;
    }
    //@Throws(Exception.constructor)
    getMainPath() {
        var mainPath = InitInfo.getInstance().getMainPath();
        ;
        if (!StringValidationUtil.getInstance().isEmpty(mainPath)) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return mainPath;
        }
        else if (this.isWebappPathSet) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return this.getWebappPath();
            ;
        }
        else {
            throw new Exception("Webapp Path is not set");
        }
    }
}
