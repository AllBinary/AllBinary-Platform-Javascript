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
import { Object } from '../../../../../../../java/lang/Object.js';
import { FileReader } from '../../../../../../../java/io/FileReader.js';
import { LineNumberReader } from '../../../../../../../java/io/LineNumberReader.js';
import { HashMap } from '../../../../../../../java/util/HashMap.js';
import { LogUtil } from '../../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
import { LogConfigTypeFactory } from '../../../../../../../org/allbinary/logic/communication/log/config/type/LogConfigTypeFactory.js';
import { LogConfigTypes } from '../../../../../../../org/allbinary/logic/communication/log/config/type/LogConfigTypes.js';
import { AbFile } from '../../../../../../../org/allbinary/logic/io/file/AbFile.js';
import { FilePathData } from '../../../../../../../org/allbinary/logic/io/file/FilePathData.js';
import { SubDirectory } from '../../../../../../../org/allbinary/logic/io/file/directory/SubDirectory.js';
import { StringMaker } from '../../../../../../../org/allbinary/logic/string/StringMaker.js';
import { CommonLabels } from '../../../../../../../org/allbinary/string/CommonLabels.js';
import { CommonSeps } from '../../../../../../../org/allbinary/string/CommonSeps.js';
import { CommonStrings } from '../../../../../../../org/allbinary/string/CommonStrings.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { CpuInfo } from './CpuInfo.js';
export class Cpu extends Object {
    constructor(filePath) {
        super();
        this.logUtil = LogUtil.getInstance();
        this.commonStrings = CommonStrings.getInstance();
        this.CPUFILE = "/proc/cpuinfo";
        this.init(filePath);
    }
    constructor() {
        super();
        this.logUtil = LogUtil.getInstance();
        this.commonStrings = CommonStrings.getInstance();
        this.CPUFILE = "/proc/cpuinfo";
        this.init(this.CPUFILE);
    }
    //@Throws(Exception.constructor)
    init(filePath) {
        var lineNumberReader = null;
        ;
        try {
            this.init(lineNumberReader, filePath);
            //: 
        }
        catch (e) {
            if (LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance().OS)) {
                this.logUtil.put(new StringMaker().append("Cpu Data: ").append(this.toString()).toString(), this, this.commonStrings.CONSTRUCTOR, e);
            }
            throw e;
        }
    }
    //@Throws(Exception.constructor)
    init(lineNumberReader, filePath) {
        try {
            var fileReader = new FileReader(filePath);
            ;
            lineNumberReader = new LineNumberReader(fileReader);
            this.cpuHashMap = new HashMap();
            if (lineNumberReader ==
                null) {
                var fileVector = SubDirectory.getInstance().search(filePath, AbFile.createAbFile(FilePathData.getInstance().PATH_START));
                ;
                if (LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance().OS)) {
                    this.logUtil.putF(new StringMaker().append("Cpu File Vector Size: ").appendint(fileVector.size()).toString(), this, this.commonStrings.CONSTRUCTOR);
                }
                if (!fileVector.isEmpty()) {
                    var file = fileVector.get(0);
                    ;
                    lineNumberReader = new LineNumberReader(new FileReader(file.getPath()));
                }
            }
            if (lineNumberReader !=
                null) {
                var nextLine = lineNumberReader.readLine();
                ;
                while (lineNumberReader !=
                    null
                    && nextLine !=
                        null) {
                    var index = nextLine.indexOf(':');
                    ;
                    if (index >= 0) {
                        var key = nextLine.substring(0, index);
                        ;
                        var valueIndex = index + 1;
                        ;
                        var value = nextLine.substring(valueIndex, nextLine.length);
                        ;
                        if (key.indexOf(CpuInfo.PROCESSOR.toString()) >= 0)
                            this.cpuHashMap.put(CpuInfo.PROCESSOR, value);
                        if (key.indexOf(CpuInfo.VENDORID.toString()) >= 0)
                            this.cpuHashMap.put(CpuInfo.VENDORID, value);
                        if (key.indexOf(CpuInfo.CPUFAMILY.toString()) >= 0)
                            this.cpuHashMap.put(CpuInfo.CPUFAMILY, value);
                        if (key.indexOf(CpuInfo.MODEL.toString()) >= 0)
                            this.cpuHashMap.put(CpuInfo.MODEL, value);
                        if (key.indexOf(CpuInfo.MODELNAME.toString()) >= 0)
                            this.cpuHashMap.put(CpuInfo.MODELNAME, value);
                        if (key.indexOf(CpuInfo.STEPPING.toString()) >= 0)
                            this.cpuHashMap.put(CpuInfo.STEPPING, value);
                        if (key.indexOf(CpuInfo.CPUMHZ.toString()) >= 0)
                            this.cpuHashMap.put(CpuInfo.CPUMHZ, value);
                        if (key.indexOf(CpuInfo.CACHESIZE.toString()) >= 0)
                            this.cpuHashMap.put(CpuInfo.CACHESIZE, value);
                    }
                    nextLine = lineNumberReader.readLine();
                }
            }
            try {
            }
            finally {
                if (lineNumberReader !=
                    null)
                    lineNumberReader.close();
            }
        }
        finally {
        }
    }
    getProcessor() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.cpuHashMap.get(CpuInfo.PROCESSOR);
    }
    getVendorId() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.cpuHashMap.get(CpuInfo.VENDORID);
    }
    getCpuFamily() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.cpuHashMap.get(CpuInfo.CPUFAMILY);
    }
    getModel() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.cpuHashMap.get(CpuInfo.MODEL);
    }
    getModelName() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.cpuHashMap.get(CpuInfo.MODELNAME);
    }
    getStepping() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.cpuHashMap.get(CpuInfo.STEPPING);
    }
    getCpuSpeed() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.cpuHashMap.get(CpuInfo.CPUMHZ);
    }
    getCacheSize() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.cpuHashMap.get(CpuInfo.CACHESIZE);
    }
    compareTo(cpuInterface) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return true;
    }
    compareTo(componentInterface) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return true;
    }
    toString() {
        var commonLabels = CommonLabels.getInstance();
        ;
        var commonSeps = CommonSeps.getInstance();
        ;
        var stringMaker = new StringMaker();
        ;
        stringMaker.append(CpuInfo.PROCESSOR.toString()).append(commonLabels.COLON_SEP).append(this.getProcessor());
        stringMaker.append(commonSeps.NEW_LINE);
        stringMaker.append(CpuInfo.VENDORID.toString()).append(commonLabels.COLON_SEP).append(this.getVendorId());
        stringMaker.append(commonSeps.NEW_LINE);
        stringMaker.append(CpuInfo.CPUFAMILY.toString()).append(commonLabels.COLON_SEP).append(this.getCpuFamily());
        stringMaker.append(commonSeps.NEW_LINE);
        stringMaker.append(CpuInfo.MODEL.toString()).append(commonLabels.COLON_SEP).append(this.getModel());
        stringMaker.append(commonSeps.NEW_LINE);
        stringMaker.append(CpuInfo.MODELNAME.toString()).append(commonLabels.COLON_SEP).append(this.getModelName());
        stringMaker.append(commonSeps.NEW_LINE);
        stringMaker.append(CpuInfo.STEPPING.toString()).append(commonLabels.COLON_SEP).append(this.getStepping());
        stringMaker.append(commonSeps.NEW_LINE);
        stringMaker.append(CpuInfo.CPUMHZ.toString()).append(commonLabels.COLON_SEP).append(this.getCpuSpeed());
        stringMaker.append(commonSeps.NEW_LINE);
        stringMaker.append(CpuInfo.CACHESIZE.toString()).append(commonLabels.COLON_SEP).append(this.getCacheSize());
        //if statement needs to be on the same line and ternary does not work the same way.
        return stringMaker.toString();
        ;
    }
}
