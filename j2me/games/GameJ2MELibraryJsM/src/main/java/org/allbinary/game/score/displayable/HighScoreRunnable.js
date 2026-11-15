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
import { J2MEUtil } from '../../../../../org/allbinary/J2MEUtil.js';
//not GWT import const J2MEUtil
//not plain js import { ABSystemWrapper } 
const ABSystemWrapper = globalThis.org.allbinary.logic.ABSystemWrapper;
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not plain js import { ARunnable } 
const ARunnable = globalThis.org.allbinary.thread.ARunnable;
//sameFolderImports - not GWT import - same folder const HighScoresCanvas
export class HighScoreRunnable extends ARunnable {
    constructor(highScoresCanvas) {
        super();
        this.highScoresCanvas = highScoresCanvas;
    }
    run() {
        let commonStrings = CommonStrings.getInstance();
        ;
        let logUtil = LogUtil.getInstance();
        ;
        let highScoresCanvas = this.highScoresCanvas;
        ;
        try {
            let isHTML = J2MEUtil.isHTML();
            ;
            if (!isHTML) {
                while (!highScoresCanvas.hasPainted) {
                }
                highScoresCanvas.hasPainted = false;
            }
            let stringMaker = new StringMaker();
            ;
            let systemWrapper = ABSystemWrapper.getInstance();
            ;
            let currentTimeMillis = systemWrapper.currentTimeMillis();
            ;
            logUtil.putF(stringMaker.append("HighScoresCanvas - Request repaint to be sure: ").appendlong(currentTimeMillis).toString(), this, commonStrings.RUN);
            highScoresCanvas.repaintBehavior.onChangeRepaint(highScoresCanvas);
            if (!isHTML) {
                while (!highScoresCanvas.hasPainted) {
                }
            }
            stringMaker.delete(0, stringMaker.length());
            logUtil.putF(stringMaker.append("HighScoresCanvas - Now that the canvas has completed repaint go ahead and fetch the scores: ").appendlong(currentTimeMillis).toString(), this, commonStrings.RUN);
            highScoresCanvas.executeUpdate();
        }
        catch (caught) {
            {
                const e = caught;
                logUtil.put(commonStrings.EXCEPTION, this, commonStrings.RUN, e);
            }
        }
    }
}
