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
import { NullAnimationFactory } from '../../../../../org/allbinary/animation/NullAnimationFactory.js';
import { PointFactory } from '../../../../../org/allbinary/graphics/PointFactory.js';
import { Rectangle } from '../../../../../org/allbinary/graphics/Rectangle.js';
import { AllBinaryLayer } from '../../../../../org/allbinary/layer/AllBinaryLayer.js';
import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
import { ViewPosition } from '../../../../../org/allbinary/view/ViewPosition.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
export class IconLayer extends AllBinaryLayer {
    constructor(animationInterface, width, height) {
        super(StringUtil.getInstance().EMPTY_STRING, new Rectangle(PointFactory.getInstance().ZERO_ZERO, width, height), ViewPosition.getInstanceD());
        //For kotlin this is before the body of the constructor.
        this.animationInterface = animationInterface;
    }
    paint(graphics) {
        this.animationInterface.paintXY(graphics, this.x, this.y);
    }
    paintThreed(graphics) {
        this.animationInterface.paintThreedXYZ(graphics, this.x, this.y, this.z);
    }
    getAnimationInterface() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.animationInterface;
    }
}
IconLayer.NULL_ICON_LAYER = new IconLayer(NullAnimationFactory.getFactoryInstance().getInstance(0), 0, 0);
