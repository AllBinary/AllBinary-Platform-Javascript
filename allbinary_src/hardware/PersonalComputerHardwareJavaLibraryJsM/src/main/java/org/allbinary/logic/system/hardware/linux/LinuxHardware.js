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
import { Object } from '../../../../../../java/lang/Object.js';
import { Exception } from '../../../../../../java/lang/Exception.js';
import { FileReader } from '../../../../../../java/io/FileReader.js';
//not GWT import const FileReader
import { LineNumberReader } from '../../../../../../java/io/LineNumberReader.js';
//not GWT import const LineNumberReader
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
import { LogConfigTypeFactory } from '../../../../../../org/allbinary/logic/communication/log/config/type/LogConfigTypeFactory.js';
//not GWT import const LogConfigTypeFactory
import { LogConfigTypes } from '../../../../../../org/allbinary/logic/communication/log/config/type/LogConfigTypes.js';
//not GWT import const LogConfigTypes
import { AbFile } from '../../../../../../org/allbinary/logic/io/file/AbFile.js';
//not GWT import const AbFile
//not plain js import { FilePathData } 
const FilePathData = globalThis.org.allbinary.logic.io.file.FilePathData;
import { SubDirectory } from '../../../../../../org/allbinary/logic/io/file/directory/SubDirectory.js';
//not GWT import const SubDirectory
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not GWT import const VideoInterface
import { Cpu } from '../../../../../../org/allbinary/logic/system/hardware/components/linux/Cpu.js';
//not GWT import const Cpu
//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { PCComponentFactory } from './PCComponentFactory.js';
//not GWT import - same folder const PCComponentFactory
export class LinuxHardware extends Object {
    constructor(path) {
        super();
        this.logUtil = LogUtil.getInstance();
        this.commonStrings = CommonStrings.getInstance();
        this.NAME = "Linux Hardware Profile";
        this.MINHARDWARE = 5;
        this.init(path);
    }
    constructor() {
        super();
        this.logUtil = LogUtil.getInstance();
        this.commonStrings = CommonStrings.getInstance();
        this.NAME = "Linux Hardware Profile";
        this.MINHARDWARE = 5;
        this.init(PCIFILE);
        if (this.componentInterfaceVector.size() < this.MINHARDWARE) {
            throw new Exception("Not Enough Data For A Valid License On Linux");
        }
        var cpu = new Cpu();
        ;
        if (cpu !=
            null) {
            this.cpuInterfaceVector.add(cpu);
            this.componentInterfaceVector.add(cpu);
        }
        if (LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance().OS)) {
            this.logUtil.putF("Hardware Data: " + this.toString(), this, this.commonStrings.CONSTRUCTOR);
        }
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
                this.logUtil.put("Hardware Data: " + this.toString(), this, this.commonStrings.CONSTRUCTOR, e);
            }
            throw e;
        }
    }
    //@Throws(Exception.constructor)
    init(lineNumberReader, filePath) {
        try {
            this.componentInterfaceVector = new BasicArrayListD();
            this.videoInterfaceVector = new BasicArrayListD();
            this.hardDriveControllerInterfaceVector = new BasicArrayListD();
            this.cpuInterfaceVector = new BasicArrayListD();
            this.usbInterfaceVector = new BasicArrayListD();
            this.ethernetInterfaceVector = new BasicArrayListD();
            this.multimediaInterfaceVector = new BasicArrayListD();
            this.fireWireInterfaceVector = new BasicArrayListD();
            this.bridgeInterfaceVector = new BasicArrayListD();
            this.hardDriveInterfaceVector = new BasicArrayListD();
            this.macInterfaceVector = new BasicArrayListD();
            this.monitorInterfaceVector = new BasicArrayListD();
            var pciFile = new FileReader(filePath);
            ;
            lineNumberReader = new LineNumberReader(pciFile);
            if (lineNumberReader ==
                null) {
                var fileVector = SubDirectory.getInstance().search(filePath, AbFile.createAbFile(FilePathData.getInstance().PATH_START));
                ;
                if (!fileVector.isEmpty()) {
                    var file = fileVector.get(0);
                    ;
                    lineNumberReader = new LineNumberReader(new FileReader(file.getPath()));
                }
                if (lineNumberReader ==
                    null) {
                    throw new Exception("No Linux File Data");
                }
            }
            if (lineNumberReader !=
                null) {
                if (LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance().OS)) {
                    this.logUtil.putF("PCI File Found", this, this.commonStrings.CONSTRUCTOR);
                }
                var nextLine = lineNumberReader.readLine();
                ;
                while (lineNumberReader !=
                    null
                    && nextLine !=
                        null) {
                    if (this.isNextHardware(nextLine)) {
                        break;
                    }
                    nextLine = lineNumberReader.readLine();
                }
                while (this.isNextHardware(nextLine)) {
                    var componentData = new StringMaker();
                    ;
                    if (LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance().OS)) {
                        this.logUtil.putF("Found Hardware Device: " + this.componentInterfaceVector.size(), this, this.commonStrings.CONSTRUCTOR);
                    }
                    componentData.append(nextLine);
                    componentData.append(CommonSeps.getInstance().NEW_LINE);
                    nextLine = lineNumberReader.readLine();
                    var componentType = PCComponentFactory.getInstance().java.componentType;
                    ;
                    while (lineNumberReader !=
                        null) {
                        componentData.append(nextLine);
                        componentData.append(CommonSeps.getInstance().NEW_LINE);
                        nextLine = lineNumberReader.readLine();
                        if (nextLine ==
                            null
                            || this.isNextHardware(nextLine)) {
                            break;
                        }
                    }
                    var componentInterface = PCComponentFactory.getInstance().getInstance(componentType, componentData.toString());
                    ;
                    if (componentInterface !=
                        null) {
                        this.componentInterfaceVector.add(componentInterface);
                    }
                }
            }
            else {
                if (LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance().OS)) {
                    this.logUtil.putF("Could not load PCI File", this, this.commonStrings.CONSTRUCTOR);
                }
            }
            lineNumberReader.close();
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
    getMultimedia(index) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.multimediaInterfaceVector.get(index);
    }
    getBridge(index) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.bridgeInterfaceVector.get(index);
    }
    getCpu(index) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.cpuInterfaceVector.get(index);
    }
    getEthernet(index) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.ethernetInterfaceVector.get(index);
    }
    getFireWire(index) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.fireWireInterfaceVector.get(index);
    }
    getHardDriveController(index) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.hardDriveControllerInterfaceVector.get(index);
    }
    getHardDrive(index) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.hardDriveInterfaceVector.get(index);
    }
    getMachineAccessControlAddress(index) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.macInterfaceVector.get(index);
    }
    getMonitor(index) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.monitorInterfaceVector.get(index);
    }
    getUsb(index) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.usbInterfaceVector.get(index);
    }
    getVideo(index) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.videoInterfaceVector.get(index);
    }
    getComponent(index) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.componentInterfaceVector.get(index);
    }
    toString() {
        var hardwareBuffer = new StringMaker();
        ;
        var size = this.componentInterfaceVector.size();
        ;
        for (var index = 0; index < size; index++) {
            var componentInterface = this.componentInterfaceVector.get(index);
            ;
            hardwareBuffer.append("Component ");
            hardwareBuffer.appendint(index);
            hardwareBuffer.append(": \n");
            hardwareBuffer.append(componentInterface.toString());
            hardwareBuffer.append(CommonSeps.getInstance().NEW_LINE);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return hardwareBuffer.toString();
        ;
    }
    compareTo(hardwareInterface) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return true;
    }
    difference(hardwareInterface) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return StdUtil.getInstance().NULL_TABLE;
    }
    isNextHardware(nextLine) {
        if (nextLine !=
            null) {
            var index = nextLine.indexOf("Bus");
            ;
            if (index >= 0 && index < 4) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return true;
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
}
LinuxHardware.PCIFILE = "/proc/pci";
