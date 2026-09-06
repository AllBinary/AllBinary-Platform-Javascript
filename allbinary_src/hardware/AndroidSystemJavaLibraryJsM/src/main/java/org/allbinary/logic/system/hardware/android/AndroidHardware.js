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
import { Object } from '../../../../../../java/lang/Object.js';
import { Exception } from '../../../../../../java/lang/Exception.js';
//not GWT import const Closeable = globalThis.java.io.Closeable;
import { FileReader } from '../../../../../../java/io/FileReader.js';
//not GWT import const FileReader = globalThis.java.io.FileReader;
import { LineNumberReader } from '../../../../../../java/io/LineNumberReader.js';
//not GWT import const LineNumberReader = globalThis.java.io.LineNumberReader;
import { NullCloseable } from '../../../../../../org/allbinary/logic/io/NullCloseable.js';
//not GWT import const NullCloseable = globalThis.org.allbinary.logic.io.NullCloseable;
//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not GWT import const HardwareInterface = globalThis.org.allbinary.logic.system.hardware.HardwareInterface;
import { UnknownHardware } from '../../../../../../org/allbinary/logic/system/hardware/components/android/UnknownHardware.js';
//not GWT import const HardwareComponentInterface = globalThis.org.allbinary.logic.system.hardware.components.interfaces.HardwareComponentInterface;
//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class AndroidHardware extends Object {
    constructor() {
        super();
        this.logUtil = LogUtil.getInstance();
        this.commonStrings = CommonStrings.getInstance();
        this.componentInterfaceVector = new BasicArrayListD();
        this.PROC_BUS_INPUT_DIRECTORY = "/proc/bus/input/";
        this.DEVICES = this.PROC_BUS_INPUT_DIRECTORY + "devices/";
        this.MINHARDWARE = 3;
        this.init(this.DEVICES);
        var size = this.componentInterfaceVector.size();
        ;
        if (size < this.MINHARDWARE) {
            throw new Exception("Not Enough Data For A Valid License On Linux");
        }
    }
    //@Throws(Exception.constructor)
    init(filePath) {
        var lineNumberReader = NullCloseable.NULL_CLOSEABLE;
        ;
        try {
            lineNumberReader = this.get(filePath);
            //: 
        }
        catch (e) {
            this.logUtil.put("Hardware Data: " + this.toString(), this, this.commonStrings.INIT, e);
            throw e;
        }
        finally {
            if (lineNumberReader !=
                null) {
                lineNumberReader.close();
            }
        }
    }
    //@Throws(Exception.constructor)
    get(filePath) {
        this.componentInterfaceVector = new BasicArrayListD();
        var pciFile = new FileReader(filePath);
        ;
        var lineNumberReader = new LineNumberReader(pciFile);
        ;
        this.logUtil.putF("File Found", this, this.commonStrings.CONSTRUCTOR);
        var nextLine = lineNumberReader.readLine();
        ;
        while (nextLine !=
            null) {
            nextLine = lineNumberReader.readLine();
            this.componentInterfaceVector.add(new UnknownHardware(nextLine));
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return lineNumberReader;
    }
    getComponent(index) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.componentInterfaceVector.get(index);
    }
    toString() {
        var stringBuilder = new StringMaker();
        ;
        var size = this.componentInterfaceVector.size();
        ;
        for (var index = 0; index < size; index++) {
            var componentInterface = this.componentInterfaceVector.get(index);
            ;
            stringBuilder.append(componentInterface.toString());
            stringBuilder.append(CommonSeps.getInstance().NEW_LINE);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return stringBuilder.toString();
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
}
