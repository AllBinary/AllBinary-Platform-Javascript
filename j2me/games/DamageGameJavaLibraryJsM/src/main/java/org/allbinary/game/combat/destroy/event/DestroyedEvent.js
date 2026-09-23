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
//not GWT import const AllBinaryGameCanvas
import { NullGameCanvas } from '../../../../../../org/allbinary/game/displayable/canvas/NullGameCanvas.js';
//not GWT import const NullGameCanvas
import { AllBinaryLayer } from '../../../../../../org/allbinary/layer/AllBinaryLayer.js';
//not GWT import const AllBinaryLayer
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
import { AllBinaryEventObject } from '../../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
//not GWT import const AllBinaryEventObject
//Current folder imports from return types, extended types, and scope (deduplicated)
import { DestroyedEventHandler } from './DestroyedEventHandler.js';
//not GWT import - same folder const DestroyedEventHandler
export class DestroyedEvent extends AllBinaryEventObject {
    constructor(combatGameCanvas) {
        super(DestroyedEventHandler.getInstance());
        this.allBinaryGameCanvas = NullGameCanvas.getInstance();
        this.allBinaryLayerInterface = AllBinaryLayer.NULL_ALLBINARY_LAYER;
        //For kotlin this is before the body of the constructor.
        this.setAllBinaryGameCanvas(combatGameCanvas);
    }
    getAllBinaryGameCanvas() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.allBinaryGameCanvas;
    }
    getLayerInterface() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.allBinaryLayerInterface;
    }
    setAllBinaryGameCanvas(allBinaryGameCanvas) {
        this.allBinaryGameCanvas = allBinaryGameCanvas;
    }
    setLayerInterfaceForCircularStaticPool(allBinaryLayerInterface) {
        this.allBinaryLayerInterface = allBinaryLayerInterface;
    }
    toString() {
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append("DestroyedEvent: \n");
        stringBuffer.append("AllBinaryLayerInterface: ");
        stringBuffer.append(this.allBinaryLayerInterface.toString());
        stringBuffer.append("\nAllBinaryGameCanvas: ");
        stringBuffer.append(StringUtil.getInstance().toString(this.getAllBinaryGameCanvas()));
        //if statement needs to be on the same line and ternary does not work the same way.
        return stringBuffer.toString();
        ;
    }
}
