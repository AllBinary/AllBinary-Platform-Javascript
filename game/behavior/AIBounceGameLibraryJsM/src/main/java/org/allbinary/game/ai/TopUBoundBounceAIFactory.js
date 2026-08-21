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
import { Object } from '../../../../java/lang/Object.js';
import { TopULayerBounds } from '../../../../org/allbinary/bounds/TopULayerBounds.js';
import { PointFactory } from '../../../../org/allbinary/graphics/PointFactory.js';
import { Rectangle } from '../../../../org/allbinary/graphics/Rectangle.js';
import { DisplayInfoSingleton } from '../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
import { BoundBounceAI } from './BoundBounceAI.js';
import { ReverseVelocityBoundsVisitor } from './ReverseVelocityBoundsVisitor.js';
export class TopUBoundBounceAIFactory extends Object {
    //@Throws(Exception.constructor)
    getInstance(hashtable, ownerLayerInterface, gameInput) {
        var velocityInterfaceCompositeInterface = ownerLayerInterface;
        ;
        var velocityInterface = velocityInterfaceCompositeInterface.getVelocityProperties();
        ;
        var maxDistancePerTick = (velocityInterface.getMaxForwardVelocity() >> velocityInterface.getVelocityXBasicDecimalP().getScaledFactor());
        ;
        var halfWidth = ownerLayerInterface.getWidth() * 2 + maxDistancePerTick + 1;
        ;
        var halfHeight = ownerLayerInterface.getHeight() * 2 + maxDistancePerTick + 1;
        ;
        var point = PointFactory.getInstance().createXY(halfWidth, halfHeight + 60);
        ;
        var displayInfo = DisplayInfoSingleton.getInstance();
        ;
        var rectangle = new Rectangle(point, (displayInfo.getLastWidth() - halfWidth - point.getX()), (displayInfo.getLastHeight() - halfHeight - point.getY()));
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return new BoundBounceAI(ownerLayerInterface, gameInput, new TopULayerBounds(rectangle), new ReverseVelocityBoundsVisitor(ownerLayerInterface));
    }
}
