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
//not plain js import { Canvas } 
const Canvas = globalThis.javax.microedition.lcdui.Canvas;
//not GWT import const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;
//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { SpinnerAI } from './SpinnerAI.js';
//not GWT import - same folder const SpinnerAI = globalThis.org.allbinary.game.ag.ai.SpinnerAI;
export class SpinnerAIFactory extends Object {
    getInstance(hashtable, ownerLayerInterface, gameInput) {
        var direction = [Canvas.LEFT];
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return new SpinnerAI(direction, ownerLayerInterface, gameInput);
    }
}
