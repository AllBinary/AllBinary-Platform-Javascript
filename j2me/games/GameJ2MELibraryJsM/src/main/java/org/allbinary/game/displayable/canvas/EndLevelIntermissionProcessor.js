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
import { Processor } from '../../../../../org/allbinary/canvas/Processor.js';
//not GWT import const AllBinaryGameCanvas = globalThis.org.allbinary.game.displayable.canvas.AllBinaryGameCanvas;
export class EndLevelIntermissionProcessor extends Processor {
    constructor(gameCanvas) {
        super();
        this.gameCanvas = gameCanvas;
    }
    //@Throws(Exception.constructor)
    process() {
        this.gameCanvas.processEndLevelIntermissionGameState();
    }
}
