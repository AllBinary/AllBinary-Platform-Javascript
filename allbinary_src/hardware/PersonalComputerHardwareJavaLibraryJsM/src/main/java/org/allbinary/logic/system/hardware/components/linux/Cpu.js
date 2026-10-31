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
//not GWT import const FileReader
import { LineNumberReader } from '../../../../../../../java/io/LineNumberReader.js';
//not GWT import const HashMap
//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
import { LogConfigTypeFactory } from '../../../../../../../org/allbinary/logic/communication/log/config/type/LogConfigTypeFactory.js';
//not GWT import const LogConfigTypeFactory
import { LogConfigTypes } from '../../../../../../../org/allbinary/logic/communication/log/config/type/LogConfigTypes.js';
//not GWT import const LogConfigTypes
import { AbFile } from '../../../../../../../org/allbinary/logic/io/file/AbFile.js';
//not GWT import const AbFile
//not plain js import { FilePathData } 
const FilePathData = globalThis.org.allbinary.logic.io.file.FilePathData;
import { SubDirectory } from '../../../../../../../org/allbinary/logic/io/file/directory/SubDirectory.js';
//not GWT import const SubDirectory
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not GWT import const HardwareComponentInterface
//not plain js import { CommonLabels } 
const CommonLabels = globalThis.org.allbinary.string.CommonLabels;
//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { CpuInfo } from './CpuInfo.js';
//sameFolderImports - not GWT import - same folder const CpuInfo
export class Cpu extends Object {
    constructor(...args) {
        super();
        this.logUtil = LogUtil.getInstance();
        this.commonStrings = CommonStrings.getInstance();
        this.CPUFILE = "/proc/cpuinfo";
        if (args.length === 1) {
            this.constructor$0(args[0]);
        }
        else if (args.length === 0) {
            this.constructor$1();
        }
    }
    constructor$0(filePath) {
        this.init(filePath);
    }
    constructor$1() {
        this.init(this.CPUFILE);
    }
    init(...args) {
        if (args.length === 1 && typeof args[0] === 'string')
            return this.init$overload1(args[0]);
        if (args.length === 2 && typeof args[1] === 'string')
            return this.init$overload2(args[0], args[1]);
        throw new TypeError('No matching overload: init');
    }
    //@Throws(Exception.constructor)
    init$overload1(filePath) {
        let lineNumberReader = null;
        ;
        try {
            this.init(lineNumberReader, filePath);
        }
        catch (caught) {
            {
                const e = caught;
                if (LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance().OS)) {
                    this.logUtil.put(new StringMaker().append("Cpu Data: ").append(this.toString()).toString(), this, this.commonStrings.CONSTRUCTOR, e);
                }
                throw e;
            }
        }
    }
    //@Throws(Exception.constructor)
    init$overload2(lineNumberReader, filePath) {
        try {
            let fileReader = new FileReader(filePath);
            ;
            lineNumberReader = new LineNumberReader(fileReader);
            this.cpuHashMap = StdUtil.getInstance().createHashMap();
            if (lineNumberReader ==
                null) {
                let fileVector = SubDirectory.getInstance().search(filePath, AbFile.createAbFile(FilePathData.getInstance().PATH_START));
                ;
                if (LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance().OS)) {
                    this.logUtil.putF(new StringMaker().append("Cpu File BasicArrayList Size: ").appendint(fileVector.size()).toString(), this, this.commonStrings.CONSTRUCTOR);
                }
                if (!fileVector.isEmpty()) {
                    let file = fileVector.get(0);
                    ;
                    lineNumberReader = new LineNumberReader(new FileReader(file.getPath()));
                }
            }
            if (lineNumberReader !=
                null) {
                let nextLine = lineNumberReader.readLine();
                ;
                while (lineNumberReader !=
                    null
                    && nextLine !=
                        null) {
                    let index = nextLine.indexOf(':');
                    ;
                    if (index >= 0) {
                        let key = nextLine.substring(0, index);
                        ;
                        let valueIndex = index + 1;
                        ;
                        let value = nextLine.substring(valueIndex, nextLine.length);
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
        }
        finally {
            if (lineNumberReader !=
                null)
                lineNumberReader.close();
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
    compareTo(...args) {
        if (args.length === 1)
            return this.compareTo$overload1(args[0]);
        if (args.length === 1)
            return this.compareTo$overload2(args[0]);
        throw new TypeError('No matching overload: compareTo');
    }
    compareTo$overload1(cpuInterface) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return true;
    }
    compareTo$overload2(componentInterface) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return true;
    }
    toString() {
        let commonLabels = CommonLabels.getInstance();
        ;
        let commonSeps = CommonSeps.getInstance();
        ;
        let stringMaker = new StringMaker();
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
