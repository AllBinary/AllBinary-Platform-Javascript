/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2022 AllBinary
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
import { Object } from '../../../../java/lang/Object.js';
import { NullCanvas } from '../../../../javax/microedition/lcdui/NullCanvas.js';
import { AllBinaryGameLayerManager } from '../../../../org/allbinary/game/layer/AllBinaryGameLayerManager.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
export class ABToGBUtil extends Object {
    constructor() {
        super(...arguments);
        this.abCanvas = NullCanvas.NULL_CANVAS;
        this.allBinaryGameLayerManager = AllBinaryGameLayerManager.NULL_ALLBINARY_LAYER_MANAGER;
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return ABToGBUtil.instance;
    }
}
ABToGBUtil.instance = new ABToGBUtil();
