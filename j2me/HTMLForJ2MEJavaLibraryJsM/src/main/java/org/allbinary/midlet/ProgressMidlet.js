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
//not GWT import const ClientInformationFactory
import { PrimaryThreadPool } from '../../../org/allbinary/thread/PrimaryThreadPool.js';
//not GWT import const ThreadPool
//Current folder imports from return types, extended types, and scope (deduplicated)
import { AllBinaryMidlet } from './AllBinaryMidlet.js';
//not GWT import - same folder const AllBinaryMidlet
import { MidletExitProcessorFactory } from './MidletExitProcessorFactory.js';
//not GWT import - same folder const MidletExitProcessorFactory
import { ExitRunnable } from './ExitRunnable.js';
//not GWT import - same folder const ExitRunnable
export class ProgressMidlet extends AllBinaryMidlet {
    constructor(clientInformationFactory) {
        super();
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
