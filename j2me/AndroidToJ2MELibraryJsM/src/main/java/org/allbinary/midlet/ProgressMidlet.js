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
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;
import { TsUtil } from '../../../org/allbinary/TsUtil.js';
//not GWT import const Processor = globalThis.org.allbinary.canvas.Processor;
import { Globals } from '../../../org/allbinary/globals/Globals.js';
//not GWT import const Globals = globalThis.org.allbinary.globals.Globals;
//not plain js import { StringUtil } from '../../../org/allbinary/logic/string/StringUtil.js';
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//not GWT import const ClientInformationFactory = globalThis.org.allbinary.logic.system.security.licensing.ClientInformationFactory;
import { PrimaryThreadPool } from '../../../org/allbinary/thread/PrimaryThreadPool.js';
//not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { AllBinaryMidlet } from './AllBinaryMidlet.js';
//not GWT import const AllBinaryMidlet = globalThis.org.allbinary.midlet.AllBinaryMidlet;
import { MidletExitProcessorFactory } from './MidletExitProcessorFactory.js';
//not GWT import const MidletExitProcessorFactory = globalThis.org.allbinary.midlet.MidletExitProcessorFactory;
import { ExitRunnable } from './ExitRunnable.js';
//not GWT import const ExitRunnable = globalThis.org.allbinary.midlet.ExitRunnable;
export class ProgressMidlet extends AllBinaryMidlet {
    constructor(clientInformationFactory) {
        super();
        Globals.getInstance().init(TsUtil.getInstance().getClassClassLoader(this), StringUtil.getInstance().EMPTY_STRING);
        this.preInit();
        this.abeClientInformation = clientInformationFactory.getInstance();
    }
    preInit() {
    }
    exitProgress(isProgress) {
        var processor = MidletExitProcessorFactory.getInstance().getExitInstance(this);
        ;
        try {
            var primaryThreadPool = PrimaryThreadPool.getInstance();
            ;
            var runnable = new ExitRunnable(this, processor, isProgress);
            ;
            primaryThreadPool.runTask(runnable);
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, "exit", e);
            try {
                processor.process();
                //: 
            }
            catch (e2) {
                this.logUtil.put(this.commonStrings.EXCEPTION, this, "exit", e);
            }
        }
    }
}
