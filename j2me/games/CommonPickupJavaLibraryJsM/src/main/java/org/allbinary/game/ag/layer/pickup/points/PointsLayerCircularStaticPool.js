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
//not GWT import const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;
import { AllBinaryLayerCircularPool } from '../../../../../../../org/allbinary/layer/AllBinaryLayerCircularPool.js';
//not GWT import const PointsLayer = globalThis.org.allbinary.game.ag.layer.pickup.points.PointsLayer;
export class PointsLayerCircularStaticPool extends AllBinaryLayerCircularPool {
    constructor(allbinaryLayerFactoryInterface, total) {
        super();
        super.initAllBinaryLayerCircularPool(allbinaryLayerFactoryInterface, total);
    }
    //@Throws(Exception.constructor)
    visit(sourceLayerInterface) {
        var pointsLayer = this.getNextInstance();
        ;
        var scoreableInterface = sourceLayerInterface;
        ;
        pointsLayer.visit(scoreableInterface);
    }
}
