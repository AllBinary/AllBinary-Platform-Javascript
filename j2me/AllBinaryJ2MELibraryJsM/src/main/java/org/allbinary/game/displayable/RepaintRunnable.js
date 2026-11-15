/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2022 AllBinary
        *
        *  By agreeing to this license you and any business entity you represent are
        *  legally bound to the AllBinary Open License Version 1 legal agreement.
        *
        *  You may obtain the AllBinary Open License Version 1 legal agreement from
        *  AllBinary or the root directory of AllBinary's AllBinary Platform repository.
        *
        *  Created By: Travis Berthelot
*/
//not GWT import const Canvas
import { DisplayInfoSingleton } from '../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
//not GWT import const DisplayInfoSingleton
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not plain js import { ARunnable } 
const ARunnable = globalThis.org.allbinary.thread.ARunnable;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class RepaintRunnable extends ARunnable {
    constructor(canvas) {
        super();
        this.canvas = canvas;
    }
    run() {
        try {
            this.canvas.repaint();
            DisplayInfoSingleton.getInstance().process();
        }
        catch (caught) {
            {
                const e = caught;
                let commonStrings = CommonStrings.getInstance();
                ;
                let logUtil = LogUtil.getInstance();
                ;
                logUtil.put(commonStrings.EXCEPTION, this, commonStrings.RUN, e);
            }
        }
    }
}
