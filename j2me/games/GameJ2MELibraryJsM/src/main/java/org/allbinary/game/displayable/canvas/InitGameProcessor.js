/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2026 AllBinary
        *
        *  By agreeing to this license you and any business entity you represent are
        *  legally bound to the AllBinary Open License Version 1 legal agreement.
        *
        *  You may obtain the AllBinary Open License Version 1 legal agreement from
        *  AllBinary or the root directory of AllBinary's AllBinary Platform repository.
        *
        *  Created By: Travis Berthelot
*/
import { Processor } from '../../../../../org/allbinary/canvas/Processor.js';
//not GWT import const Processor
import { ProgressCanvasFactory } from '../../../../../org/allbinary/graphics/canvas/transition/progress/ProgressCanvasFactory.js';
//not GWT import const ProgressCanvasFactory
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//sameFolderImports - not GWT import - same folder const AllBinaryGameCanvas
export class InitGameProcessor extends Processor {
    constructor(gameCanvas) {
        super();
        this.gameCanvas = gameCanvas;
    }
    //@Throws(Exception.constructor)
    process() {
        if (ProgressCanvasFactory.getInstance().isInGame()) {
            this.gameCanvas.setProcessGameProcessorInit();
        }
    }
}
