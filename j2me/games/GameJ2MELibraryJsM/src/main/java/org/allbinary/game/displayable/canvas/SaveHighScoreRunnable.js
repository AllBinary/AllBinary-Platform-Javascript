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
//not GWT import const ProgressCanvas
import { ProgressCanvasFactory } from '../../../../../org/allbinary/graphics/canvas/transition/progress/ProgressCanvasFactory.js';
//not GWT import const ProgressCanvasFactory
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class SaveHighScoreRunnable extends Object {
    constructor(isLast, textBox) {
        super();
        this.progressCanvas = ProgressCanvasFactory.getInstance();
        this.isLast = isLast;
        this.textBox = textBox;
    }
    run() {
        let logUtil = LogUtil.getInstance();
        ;
        try {
            if (this.isLast) {
                this.textBox.submit();
            }
            else {
                this.textBox.saveHighScore();
            }
        }
        catch (caught) {
            {
                const e = caught;
                let commonStrings = CommonStrings.getInstance();
                ;
                logUtil.put(commonStrings.EXCEPTION, this, "run", e);
                this.progressCanvas.end();
            }
        }
    }
}
