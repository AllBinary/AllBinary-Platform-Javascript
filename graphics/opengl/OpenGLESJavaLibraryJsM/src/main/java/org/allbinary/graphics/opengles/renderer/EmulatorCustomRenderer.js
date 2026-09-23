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
import { Object } from '../../../../../java/lang/Object.js';
import { Thread } from '../../../../../java/lang/Thread.js';
//not GWT import const GL10
import { InitEmulatorFactory } from '../../../../../org/allbinary/emulator/InitEmulatorFactory.js';
//not GWT import const InitEmulatorFactory
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { PreLogUtil } 
const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { RendererStrings } from './RendererStrings.js';
//not GWT import - same folder const RendererStrings
export class EmulatorCustomRenderer extends Object {
    constructor() {
        super(...arguments);
        this.logUtil = LogUtil.getInstance();
        this.commonStrings = CommonStrings.getInstance();
        this.renderStrings = RendererStrings.getInstance();
    }
    onSurfaceCreated(gl, eglConfig) {
        this.logUtil.putF(this.commonStrings.START, this, this.renderStrings.ON_SURFACE_CREATED);
        var initEmulatorFactory = InitEmulatorFactory.getInstance();
        ;
        if (!initEmulatorFactory.isInitEmulator()) {
            try {
                var WAIT_FOR_EMULATOR = "Waiting on Emulator Initialization";
                ;
                while (!initEmulatorFactory.isInitEmulator()) {
                    PreLogUtil.put(WAIT_FOR_EMULATOR, this, this.renderStrings.ON_SURFACE_CREATED);
                    Thread.sleep(180);
                }
                //: 
            }
            catch (e) {
                this.logUtil.put(this.commonStrings.EXCEPTION, this, this.renderStrings.ON_SURFACE_CREATED, e);
            }
        }
    }
}
