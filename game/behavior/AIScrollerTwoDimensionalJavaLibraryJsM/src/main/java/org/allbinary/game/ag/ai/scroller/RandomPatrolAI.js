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
import { Canvas } from '../../../../../../javax/microedition/lcdui/Canvas.js';
//not GWT import const GameInput
//not plain js import { MyRandomFactory } 
const MyRandomFactory = globalThis.org.allbinary.game.rand.MyRandomFactory;
//not GWT import const AllBinaryLayerManager
//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { BasePatrolAI } from './BasePatrolAI.js';
//not GWT import - same folder const BasePatrolAI
export class RandomPatrolAI extends BasePatrolAI {
    constructor(hashtable, ownerLayerInterface, gameInput) {
        super(hashtable, ownerLayerInterface, gameInput);
        this.changedDirection = true;
        //For kotlin this is before the body of the constructor.
        this.updateRandomDistance();
    }
    updateRandomDistance() {
        this.currentDistance = MyRandomFactory.getInstance().getAbsoluteNextInt(this.maxDistance.intValue());
    }
    //@Throws(Exception.constructor)
    processAI(allBinaryLayerManager) {
        super.update();
        super.processKeyAI(this.keyDirection);
        if (this.changedDirection) {
            super.processKeyAI(Canvas.KEY_NUM1);
            this.updateRandomDistance();
            this.changedDirection = false;
        }
    }
    nextDirection() {
        super.nextDirection();
        this.changedDirection = true;
    }
}
