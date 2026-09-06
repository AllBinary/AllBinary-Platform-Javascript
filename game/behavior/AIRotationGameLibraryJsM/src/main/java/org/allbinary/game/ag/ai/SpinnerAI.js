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
//not plain js import { Canvas } 
const Canvas = globalThis.javax.microedition.lcdui.Canvas;
import { BasicAI } from '../../../../../org/allbinary/game/ai/BasicAI.js';
//not GWT import const AllBinaryLayerManager = globalThis.org.allbinary.layer.AllBinaryLayerManager;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class SpinnerAI extends BasicAI {
    constructor(direction, ownerLayerInterface, gameInput) {
        super(ownerLayerInterface, gameInput);
        this.isEven = false;
        //For kotlin this is before the body of the constructor.
        this.direction = direction;
    }
    //@Throws(Exception.constructor)
    processAI(allBinaryLayerManager) {
        if (this.isEven) {
            super.processKeyAI(this.direction[0]);
            this.isEven = false;
        }
        else {
            super.processKeyAI(Canvas.KEY_NUM1);
            this.isEven = true;
        }
    }
}
