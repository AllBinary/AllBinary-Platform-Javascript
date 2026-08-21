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
import { Canvas } from '../../../../../javax/microedition/lcdui/Canvas.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { SpecialUpGameInputProcessor } from './SpecialUpGameInputProcessor.js';
import { SpecialDownGameInputProcessor } from './SpecialDownGameInputProcessor.js';
import { SpecialRightGameInputProcessor } from './SpecialRightGameInputProcessor.js';
import { SpecialLeftGameInputProcessor } from './SpecialLeftGameInputProcessor.js';
import { Special1GameInputProcessor } from './Special1GameInputProcessor.js';
import { Special3GameInputProcessor } from './Special3GameInputProcessor.js';
import { SpecialAnalogUpGameInputProcessor } from './SpecialAnalogUpGameInputProcessor.js';
import { SpecialAnalogDownGameInputProcessor } from './SpecialAnalogDownGameInputProcessor.js';
import { SpecialAnalogRightGameInputProcessor } from './SpecialAnalogRightGameInputProcessor.js';
import { SpecialAnalogLeftGameInputProcessor } from './SpecialAnalogLeftGameInputProcessor.js';
import { SpecialAnalogLeftTriggerGameInputProcessor } from './SpecialAnalogLeftTriggerGameInputProcessor.js';
import { SpecialAnalogRightTriggerGameInputProcessor } from './SpecialAnalogRightTriggerGameInputProcessor.js';
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
