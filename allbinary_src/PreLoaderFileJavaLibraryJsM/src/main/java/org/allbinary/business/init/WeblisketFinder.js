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
import { Object } from '../../../../java/lang/Object.js';
//not plain js import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
import { LogConfigTypeFactory } from '../../../../org/allbinary/logic/communication/log/config/type/LogConfigTypeFactory.js';
//not GWT import const LogConfigTypeFactory = globalThis.org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory;
import { LogConfigTypes } from '../../../../org/allbinary/logic/communication/log/config/type/LogConfigTypes.js';
//not GWT import const LogConfigTypes = globalThis.org.allbinary.logic.communication.log.config.type.LogConfigTypes;
import { AbFile } from '../../../../org/allbinary/logic/io/file/AbFile.js';
//not GWT import const AbFile = globalThis.org.allbinary.logic.io.file.AbFile;
import { SubDirectory } from '../../../../org/allbinary/logic/io/file/directory/SubDirectory.js';
//not GWT import const SubDirectory = globalThis.org.allbinary.logic.io.file.directory.SubDirectory;
//not plain js import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//not plain js import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not plain js import { BasicArrayList } from '../../../../org/allbinary/util/BasicArrayList.js';
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } from '../../../../org/allbinary/util/BasicArrayListD.js';
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class WeblisketFinder extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return WeblisketFinder.instance;
    }
    //@Throws(Exception.constructor)
    static main(args) {
        var stringUtil = StringUtil.getInstance();
        ;
        var vector = WeblisketFinder.getInstance().findAll(stringUtil.EMPTY_STRING);
        ;
        console.log(vector.size());
    }
    constructor() {
        super();
        this.logUtil = LogUtil.getInstance();
        this.commonStrings = CommonStrings.getInstance();
        this.subDirectory = SubDirectory.getInstance();
    }
    findAll(path) {
        try {
            this.logUtil.putF(this.commonStrings.START, this, "findAll");
            //if statement needs to be on the same line and ternary does not work the same way.
            return this.subDirectory.search(WeblisketFinder.KEY, AbFile.createAbFile(path));
            ;
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, "findAll", e);
            if (LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance().PRELOADERERROR)) {
                this.logUtil.put(this.commonStrings.EXCEPTION, this, "findAll", e);
            }
            //if statement needs to be on the same line and ternary does not work the same way.
            return null;
        }
    }
    getInstallationPath(file) {
        try {
            var filePath = file.getPath();
            ;
            var end = filePath.indexOf(KEY);
            ;
            if (end < 0) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return null;
            }
            //if statement needs to be on the same line and ternary does not work the same way.
            return filePath.substring(0, end);
            ;
            //: 
        }
        catch (e) {
            if (org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance().PRELOADERERROR)) {
                this.logUtil.put(this.commonStrings.EXCEPTION, this, "getInstallationPath", e);
            }
            //if statement needs to be on the same line and ternary does not work the same way.
            return null;
        }
    }
}
WeblisketFinder.instance = new WeblisketFinder();
WeblisketFinder.KEY = "installerdata.dat";
