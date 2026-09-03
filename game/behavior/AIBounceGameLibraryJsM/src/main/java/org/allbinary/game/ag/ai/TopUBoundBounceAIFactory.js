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
//not GWT import const ArtificialIntelligenceInterface = globalThis.org.allbinary.ai.ArtificialIntelligenceInterface;
import { TopULayerBounds } from '../../../../../org/allbinary/bounds/TopULayerBounds.js';
//not GWT import const VelocityInterfaceCompositeInterface = globalThis.org.allbinary.game.physics.velocity.VelocityInterfaceCompositeInterface;
//not plain js import { GPoint } from '../../../../../org/allbinary/graphics/GPoint.js';
const GPoint = globalThis.org.allbinary.graphics.GPoint;
//not plain js import { PointFactory } from '../../../../../org/allbinary/graphics/PointFactory.js';
const PointFactory = globalThis.org.allbinary.graphics.PointFactory;
import { Rectangle } from '../../../../../org/allbinary/graphics/Rectangle.js';
//not GWT import const Rectangle = globalThis.org.allbinary.graphics.Rectangle;
import { DisplayInfoSingleton } from '../../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
//not GWT import const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { BoundBounceAI } from './BoundBounceAI.js';
//not GWT import const BoundBounceAI = globalThis.org.allbinary.game.ag.ai.BoundBounceAI;
import { ReverseVelocityBoundsVisitor } from './ReverseVelocityBoundsVisitor.js';
//not GWT import const ReverseVelocityBoundsVisitor = globalThis.org.allbinary.game.ag.ai.ReverseVelocityBoundsVisitor;
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
