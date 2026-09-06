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
import { BasicAI } from '../../../../../../org/allbinary/game/ai/BasicAI.js';
//not GWT import const GameInput = globalThis.org.allbinary.game.input.GameInput;
import { DisplayInfoSingleton } from '../../../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
//not GWT import const AllBinaryLayerManager = globalThis.org.allbinary.layer.AllBinaryLayerManager;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class LurchAI extends BasicAI {
    constructor(ownerLayerInterface, gameInput) {
        super(ownerLayerInterface, gameInput);
        this.currentRelativeAngle = 0;
        this.currentSpeed = 0;
        //For kotlin this is before the body of the constructor.
    }
    //@Throws(Exception.constructor)
    processAI(allBinaryLayerManager) {
        if (this.currentSpeed == -1) {
            this.currentSpeed = 5;
        }
        else {
            this.currentSpeed = -1;
        }
        var ownerLayerInterface = this.getOwnerLayerInterface();
        ;
        var x = ownerLayerInterface.getXP();
        ;
        if (ownerLayerInterface.getXP() - this.currentSpeed <= 0) {
            this.reverse();
            this.drop();
        }
        if (ownerLayerInterface.getX2() + this.currentSpeed > DisplayInfoSingleton.getInstance().getLastWidth()) {
            this.reverse();
            this.accelerate();
            this.drop();
        }
        if (this.currentRelativeAngle == 0) {
            x += this.currentSpeed;
        }
        else if (this.currentRelativeAngle == 180) {
            x -= this.currentSpeed;
        }
        ownerLayerInterface.setPosition(x, ownerLayerInterface.getYP(), ownerLayerInterface.getZP());
        if (this.currentRelativeAngle == 0) {
            super.processKeyAI(Canvas.KEY_NUM0);
        }
        else if (this.currentRelativeAngle == 180) {
            super.processKeyAI(Canvas.KEY_POUND);
        }
    }
    reverse() {
        if (this.currentRelativeAngle == 180) {
            this.currentRelativeAngle = 0;
        }
        else if (this.currentRelativeAngle == 0) {
            this.currentRelativeAngle = 180;
        }
    }
    accelerate() {
        if (this.currentSpeed < 20) {
            this.currentSpeed++;
        }
    }
    drop() {
        var ownerLayerInterface = this.getOwnerLayerInterface();
        ;
        var y = ownerLayerInterface.getYP();
        ;
        if (ownerLayerInterface.getY2() + ownerLayerInterface.getHeight() > DisplayInfoSingleton.getInstance().getLastHeight()) {
            y = 0;
        }
        else {
            y += ownerLayerInterface.getHeight() + 1;
        }
        ownerLayerInterface.setPosition(ownerLayerInterface.getXP(), y, ownerLayerInterface.getZP());
    }
}
