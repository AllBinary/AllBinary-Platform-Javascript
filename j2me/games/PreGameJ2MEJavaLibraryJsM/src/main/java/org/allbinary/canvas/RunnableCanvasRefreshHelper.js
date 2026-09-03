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
//not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { Processor } from './Processor.js';
//not GWT import const Processor = globalThis.org.allbinary.canvas.Processor;
export class RunnableCanvasRefreshHelper extends Processor {
    constructor(runnableCanvas) {
        super();
        this.runnableCanvas = runnableCanvas;
    }
    process() {
        this.runnableCanvas.repaint();
    }
}
