/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2006 AllBinary
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
//not GWT import - same folder const SelectRTSLayerVisitorFactoryInterface = globalThis.org.allbinary.game.input.SelectRTSLayerVisitorFactoryInterface;
import { SelectAdvancedRTSLayerVisitor } from './SelectAdvancedRTSLayerVisitor.js';
//not GWT import - same folder const SelectedRTSLayersPlayerGameInput = globalThis.org.allbinary.game.input.SelectedRTSLayersPlayerGameInput;
export class SelectAdvancedRTSLayerVisitorFactory extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return SelectAdvancedRTSLayerVisitorFactory.instance;
    }
    constructor() {
        super();
    }
    create(selectedRTSLayersPlayerGameInput) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new SelectAdvancedRTSLayerVisitor(selectedRTSLayersPlayerGameInput);
    }
}
SelectAdvancedRTSLayerVisitorFactory.instance = new SelectAdvancedRTSLayerVisitorFactory();
