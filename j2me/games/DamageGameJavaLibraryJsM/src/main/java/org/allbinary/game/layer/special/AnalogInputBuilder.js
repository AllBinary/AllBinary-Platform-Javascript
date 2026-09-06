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
//not GWT import const GameInputProcessor = globalThis.org.allbinary.game.input.GameInputProcessor;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { SpecialUpGameInputProcessor } from './SpecialUpGameInputProcessor.js';
//not GWT import - same folder const SpecialUpGameInputProcessor = globalThis.org.allbinary.game.layer.special.SpecialUpGameInputProcessor;
import { SpecialDownGameInputProcessor } from './SpecialDownGameInputProcessor.js';
//not GWT import - same folder const SpecialDownGameInputProcessor = globalThis.org.allbinary.game.layer.special.SpecialDownGameInputProcessor;
import { SpecialRightGameInputProcessor } from './SpecialRightGameInputProcessor.js';
//not GWT import - same folder const SpecialRightGameInputProcessor = globalThis.org.allbinary.game.layer.special.SpecialRightGameInputProcessor;
import { SpecialLeftGameInputProcessor } from './SpecialLeftGameInputProcessor.js';
//not GWT import - same folder const SpecialLeftGameInputProcessor = globalThis.org.allbinary.game.layer.special.SpecialLeftGameInputProcessor;
import { Special1GameInputProcessor } from './Special1GameInputProcessor.js';
//not GWT import - same folder const Special1GameInputProcessor = globalThis.org.allbinary.game.layer.special.Special1GameInputProcessor;
import { Special3GameInputProcessor } from './Special3GameInputProcessor.js';
//not GWT import - same folder const CollidableDestroyableDamageableLayer = globalThis.org.allbinary.game.layer.special.CollidableDestroyableDamageableLayer;
import { SpecialAnalogUpGameInputProcessor } from './SpecialAnalogUpGameInputProcessor.js';
//not GWT import - same folder const SpecialAnalogUpGameInputProcessor = globalThis.org.allbinary.game.layer.special.SpecialAnalogUpGameInputProcessor;
import { SpecialAnalogDownGameInputProcessor } from './SpecialAnalogDownGameInputProcessor.js';
//not GWT import - same folder const SpecialAnalogDownGameInputProcessor = globalThis.org.allbinary.game.layer.special.SpecialAnalogDownGameInputProcessor;
import { SpecialAnalogRightGameInputProcessor } from './SpecialAnalogRightGameInputProcessor.js';
//not GWT import - same folder const SpecialAnalogRightGameInputProcessor = globalThis.org.allbinary.game.layer.special.SpecialAnalogRightGameInputProcessor;
import { SpecialAnalogLeftGameInputProcessor } from './SpecialAnalogLeftGameInputProcessor.js';
//not GWT import - same folder const SpecialAnalogLeftGameInputProcessor = globalThis.org.allbinary.game.layer.special.SpecialAnalogLeftGameInputProcessor;
import { SpecialAnalogLeftTriggerGameInputProcessor } from './SpecialAnalogLeftTriggerGameInputProcessor.js';
//not GWT import - same folder const SpecialAnalogLeftTriggerGameInputProcessor = globalThis.org.allbinary.game.layer.special.SpecialAnalogLeftTriggerGameInputProcessor;
import { SpecialAnalogRightTriggerGameInputProcessor } from './SpecialAnalogRightTriggerGameInputProcessor.js';
//not GWT import - same folder const SpecialAnalogRightTriggerGameInputProcessor = globalThis.org.allbinary.game.layer.special.SpecialAnalogRightTriggerGameInputProcessor;
export class AnalogInputBuilder extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return AnalogInputBuilder.instance;
    }
    disable(inputProcessorArray, collidableDestroyableDamageableLayer) {
        inputProcessorArray[Canvas.UP] = new SpecialUpGameInputProcessor(collidableDestroyableDamageableLayer);
        inputProcessorArray[Canvas.DOWN] = new SpecialDownGameInputProcessor(collidableDestroyableDamageableLayer);
        inputProcessorArray[Canvas.RIGHT] = new SpecialRightGameInputProcessor(collidableDestroyableDamageableLayer);
        inputProcessorArray[Canvas.LEFT] = new SpecialLeftGameInputProcessor(collidableDestroyableDamageableLayer);
        inputProcessorArray[Canvas.KEY_NUM0] = new Special1GameInputProcessor(collidableDestroyableDamageableLayer);
        inputProcessorArray[Canvas.KEY_NUM5] = new Special3GameInputProcessor(collidableDestroyableDamageableLayer);
    }
    enable(inputProcessorArray, collidableDestroyableDamageableLayer) {
        inputProcessorArray[Canvas.UP] = new SpecialAnalogUpGameInputProcessor(collidableDestroyableDamageableLayer);
        inputProcessorArray[Canvas.DOWN] = new SpecialAnalogDownGameInputProcessor(collidableDestroyableDamageableLayer);
        inputProcessorArray[Canvas.RIGHT] = new SpecialAnalogRightGameInputProcessor(collidableDestroyableDamageableLayer);
        inputProcessorArray[Canvas.LEFT] = new SpecialAnalogLeftGameInputProcessor(collidableDestroyableDamageableLayer);
        inputProcessorArray[Canvas.KEY_NUM0] = new SpecialAnalogLeftTriggerGameInputProcessor(collidableDestroyableDamageableLayer);
        inputProcessorArray[Canvas.KEY_NUM5] = new SpecialAnalogRightTriggerGameInputProcessor(collidableDestroyableDamageableLayer);
    }
}
AnalogInputBuilder.instance = new AnalogInputBuilder();
