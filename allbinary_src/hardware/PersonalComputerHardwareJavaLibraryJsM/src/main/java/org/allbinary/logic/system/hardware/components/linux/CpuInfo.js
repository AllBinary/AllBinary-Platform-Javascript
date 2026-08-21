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
//Current folder imports from return types, extended types, and scope (deduplicated)
export class CpuInfo extends Object {
    constructor(name) {
        super();
        this.name = name;
    }
    toString() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.name;
    }
}
CpuInfo.PROCESSOR = new CpuInfo("processor");
CpuInfo.VENDORID = new CpuInfo("vendor_id");
CpuInfo.CPUFAMILY = new CpuInfo("cpu family");
CpuInfo.MODEL = new CpuInfo("model");
CpuInfo.MODELNAME = new CpuInfo("model name");
CpuInfo.STEPPING = new CpuInfo("stepping");
CpuInfo.CPUMHZ = new CpuInfo("cpu MHz");
CpuInfo.CACHESIZE = new CpuInfo("cache size");
CpuInfo.FDIVBUG = new CpuInfo("fdiv_bug");
CpuInfo.HLTBUG = new CpuInfo("hlt_bug");
CpuInfo.F00FBUG = new CpuInfo("f00f_bug");
CpuInfo.COMABUG = new CpuInfo("coma_bug");
CpuInfo.FPU = new CpuInfo("fpu");
CpuInfo.FPUEXCEPTION = new CpuInfo("fpu_exception");
CpuInfo.CPUIDLEVEL = new CpuInfo("cache size");
CpuInfo.WP = new CpuInfo("yes");
CpuInfo.FLAGS = new CpuInfo("flags");
CpuInfo.BOGOMIPS = new CpuInfo("bogomips");
