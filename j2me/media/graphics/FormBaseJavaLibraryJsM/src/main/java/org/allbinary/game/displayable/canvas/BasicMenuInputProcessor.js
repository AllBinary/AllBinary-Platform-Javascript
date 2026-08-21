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
import { NullCanvas } from '../../../../../javax/microedition/lcdui/NullCanvas.js';
import { PlayerGameInput } from '../../../../../org/allbinary/game/input/PlayerGameInput.js';
import { BasicArrayListD } from '../../../../../org/allbinary/util/BasicArrayListD.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
export class BasicMenuInputProcessor extends PlayerGameInput {
    constructor(gameKeyEventList, playerInputId, gameCanvas) {
        super(gameKeyEventList, new BasicArrayListD(), playerInputId);
        this.motionGestureEventList = new BasicArrayListD();
        this.canvas = NullCanvas.NULL_CANVAS;
        //For kotlin this is before the body of the constructor.
        this.canvas = gameCanvas;
    }
    onMotionGestureEvent(motionGestureEvent) {
        this.motionGestureEventList.add(motionGestureEvent);
    }
    onScrolledMotionGestureEvent(motionGestureEvent) {
    }
    setCanvas(canvas) {
        this.canvas = canvas;
    }
    getCanvas() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.canvas;
    }
    //@Throws(Exception.constructor)
    processInputList() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return -1;
    }
}
