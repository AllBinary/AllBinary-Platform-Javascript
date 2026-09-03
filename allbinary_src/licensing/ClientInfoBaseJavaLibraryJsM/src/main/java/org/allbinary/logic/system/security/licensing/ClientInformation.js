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
//not GWT import const Hashtable = globalThis.java.util.Hashtable;
import { TsUtil } from '../../../../../../org/allbinary/TsUtil.js';
//not GWT import const TsUtil = globalThis.org.allbinary.TsUtil;
//not plain js import { StringMaker } from '../../../../../../org/allbinary/logic/string/StringMaker.js';
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { StringUtil } from '../../../../../../org/allbinary/logic/string/StringUtil.js';
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//not GWT import const HardwareInterface = globalThis.org.allbinary.logic.system.hardware.HardwareInterface;
import { SystemHardwareFactory } from '../../../../../../org/allbinary/logic/system/hardware/SystemHardwareFactory.js';
//not GWT import const GenericOperatingSystem = globalThis.org.allbinary.logic.system.os.GenericOperatingSystem;
import { NoOperatingSystem } from '../../../../../../org/allbinary/logic/system/os/NoOperatingSystem.js';
//not GWT import const NoOperatingSystem = globalThis.org.allbinary.logic.system.os.NoOperatingSystem;
//not plain js import { CommonSeps } from '../../../../../../org/allbinary/string/CommonSeps.js';
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
//not plain js import { BasicArrayList } from '../../../../../../org/allbinary/util/BasicArrayList.js';
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListUtil } from '../../../../../../org/allbinary/util/BasicArrayListUtil.js';
const BasicArrayListUtil = globalThis.org.allbinary.util.BasicArrayListUtil;
//not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;
import { StdUtil } from '../../../../../../org/allbinary/logic/StdUtil.js';
//not GWT import const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;
import { AbeClientInformationData } from './AbeClientInformationData.js';
//not GWT import const AbeClientInformationData = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationData;
// This is the information sent to the license server
export class ClientInformation extends Object {
    constructor(name, version, specialName, shortName) {
        super();
        this.operatingSystemInterface = NoOperatingSystem.NO_OPERATING_SYSTEM;
        this.tsUtil = TsUtil.getInstance();
        this.hardSale = true;
        this.licenseId = StringUtil.getInstance().EMPTY_STRING;
        this.licenseServers = BasicArrayListUtil.getInstance().getImmutableInstance();
        this.name = name;
        this.version = version;
        this.specialName = specialName;
        this.shortName = new StringMaker().append(shortName).append(CommonSeps.getInstance().UNDERSCORE).append(version).toString();
        this.init();
    }
    init() {
    }
    getOperatingSystemInterface() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.operatingSystemInterface;
    }
    getName() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.name;
    }
    getSpecialName() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.specialName;
    }
    getVersion() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.version;
    }
    getLicenseId() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.licenseId;
    }
    getLicenseServers() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.licenseServers;
    }
    getLicenseServer(index) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.licenseServers.objectArray[index];
    }
    getNumberOfLicenseServers() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.licenseServers.size();
        ;
    }
    toHashtable() {
        var abeClientInformationData = AbeClientInformationData.getInstance();
        ;
        var genericOperatingSystem = this.getOperatingSystemInterface();
        ;
        var clientInfoHashtable = StdUtil.getInstance().createHashtable();
        ;
        clientInfoHashtable.put(abeClientInformationData.NAME, this.name);
        clientInfoHashtable.put(abeClientInformationData.VERSION, this.version);
        clientInfoHashtable.put(abeClientInformationData.SPECIALNAME, this.specialName);
        clientInfoHashtable.put(abeClientInformationData.LICENSEID, this.getLicenseId());
        clientInfoHashtable.put(abeClientInformationData.OSNAME, genericOperatingSystem.getName());
        clientInfoHashtable.put(abeClientInformationData.OSARCH, genericOperatingSystem.getArch());
        clientInfoHashtable.put(abeClientInformationData.OSVERSION, genericOperatingSystem.getVersion());
        clientInfoHashtable.put(abeClientInformationData.OS, genericOperatingSystem.toString());
        var hardwareInterface = SystemHardwareFactory.getInstance().getInstance(genericOperatingSystem);
        ;
        var hardwareString = hardwareInterface.toString();
        ;
        clientInfoHashtable.put(abeClientInformationData.HARDWARE, hardwareString);
        //if statement needs to be on the same line and ternary does not work the same way.
        return clientInfoHashtable;
    }
    isSameId(alicenseId) {
        if (this.tsUtil.compareTo(this.getLicenseId(), alicenseId) == 0) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
    }
    isLargerOrDifferentServerList(list) {
        var size = list.size() - 1;
        ;
        var currentSize = this.licenseServers.size() - 1;
        ;
        if (size > currentSize) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        for (var index = size; index >= 0; index--) {
            var newServerName = list.objectArray[index];
            ;
            for (var index2 = currentSize; index2 >= 0; index2--) {
                var nextOldServerName = this.licenseServers.objectArray[index];
                ;
                if (this.tsUtil.compareTo(newServerName, nextOldServerName) != 0) {
                    //if statement needs to be on the same line and ternary does not work the same way.
                    return true;
                }
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    setHardSale(hardSale) {
        this.hardSale = hardSale;
    }
    isHardSale() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.hardSale;
    }
    setOperatingSystemInterface(operatingSystemInterface) {
        this.operatingSystemInterface = operatingSystemInterface;
    }
    setLicenseId(licenseId) {
        this.licenseId = licenseId;
    }
    setLicenseServers(licenseServers) {
        this.licenseServers = licenseServers;
    }
    toShortString() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.shortName;
    }
}
