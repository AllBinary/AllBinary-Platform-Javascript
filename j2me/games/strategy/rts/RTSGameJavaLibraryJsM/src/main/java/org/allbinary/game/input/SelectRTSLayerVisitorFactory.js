/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2003 AllBinary
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
//not GWT import const SelectRTSLayerVisitorFactoryInterface = globalThis.org.allbinary.game.input.SelectRTSLayerVisitorFactoryInterface;
import { SelectRTSLayerVisitor } from './SelectRTSLayerVisitor.js';
//not GWT import const SelectedRTSLayersPlayerGameInput = globalThis.org.allbinary.game.input.SelectedRTSLayersPlayerGameInput;
export class SelectRTSLayerVisitorFactory extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return SelectRTSLayerVisitorFactory.instance;
    }
    constructor() {
        super();
    }
    create(selectedRTSLayersPlayerGameInput) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new SelectRTSLayerVisitor();
    }
}
SelectRTSLayerVisitorFactory.instance = new SelectRTSLayerVisitorFactory();
