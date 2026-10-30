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
import { TsUtil } from '../../../org/allbinary/TsUtil.js';
//not GWT import const Processor
import { Globals } from '../../../org/allbinary/globals/Globals.js';
//not GWT import const Globals
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//not GWT import const ClientInformationFactory
import { PrimaryThreadPool } from '../../../org/allbinary/thread/PrimaryThreadPool.js';
//not GWT import const ThreadPool
//Current folder imports from return types, extended types, and scope (deduplicated)
import { AllBinaryMidlet } from './AllBinaryMidlet.js';
//sameFolderImports - not GWT import - same folder const AllBinaryMidlet
import { MidletExitProcessorFactory } from './MidletExitProcessorFactory.js';
//sameFolderImports - not GWT import - same folder const MidletExitProcessorFactory
import { ExitRunnable } from './ExitRunnable.js';
//sameFolderImports - not GWT import - same folder const ExitRunnable
//AndroidToJ2ME
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
        let processor = MidletExitProcessorFactory.getInstance().getExitInstance(this);
        ;
        try {
            let primaryThreadPool = PrimaryThreadPool.getInstance();
            ;
            let runnable = new ExitRunnable(this, processor, isProgress);
            ;
            primaryThreadPool.runTask(runnable);
        }
        catch (caught) {
            {
                const e = caught;
                this.logUtil.put(this.commonStrings.EXCEPTION, this, "exit", e);
                try {
                    processor.process();
                }
                catch (caught) {
                    {
                        const e2 = caught;
                        this.logUtil.put(this.commonStrings.EXCEPTION, this, "exit", e);
                    }
                }
            }
        }
    }
}
