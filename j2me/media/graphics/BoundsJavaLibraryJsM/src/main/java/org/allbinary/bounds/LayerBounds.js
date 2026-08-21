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
import { Object } from '../../../java/lang/Object.js';
import { ForcedLogUtil } from '../../../org/allbinary/logic/communication/log/ForcedLogUtil.js';
import { LogUtil } from '../../../org/allbinary/logic/communication/log/LogUtil.js';
import { EventStrings } from '../../../org/allbinary/logic/util/event/EventStrings.js';
export class LayerBounds extends Object {
    constructor(rectangle) {
        super();
        this.logUtil = LogUtil.getInstance();
        this.rectangle = rectangle;
    }
    getRectangleP() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.rectangle;
    }
    visit(boundsVisitorInterface) {
    }
    onEvent(eventObject) {
        ForcedLogUtil.log(EventStrings.getInstance().PERFORMANCE_MESSAGE, this);
    }
    onBoundsChangeEvent(boundsChangeEvent) {
        this.rectangle = boundsChangeEvent.getRectangle();
    }
}
