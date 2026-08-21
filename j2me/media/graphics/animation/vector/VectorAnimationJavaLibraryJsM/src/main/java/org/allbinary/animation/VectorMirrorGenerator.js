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
import { PointFactory } from '../../../org/allbinary/graphics/PointFactory.js';
import { BasicGraphicsPipeline } from '../../../org/allbinary/graphics/pipeline/BasicGraphicsPipeline.js';
import { NullUtil } from '../../../org/allbinary/logic/NullUtil.js';
import { LogUtil } from '../../../org/allbinary/logic/communication/log/LogUtil.js';
import { CommonStrings } from '../../../org/allbinary/string/CommonStrings.js';
import { BasicArrayListS } from '../../../org/allbinary/util/BasicArrayListS.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { VectorAnimationUtil } from './VectorAnimationUtil.js';
export class VectorMirrorGenerator extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return VectorMirrorGenerator.instance;
    }
    constructor() {
        super();
        this.logUtil = LogUtil.getInstance();
        this.vectorAnimationUtil = VectorAnimationUtil.getInstance();
    }
    getInstance(points, width) {
        try {
            var pointFactory = PointFactory.getInstance();
            ;
            var pointBasicArrayList;
            ;
            var nextPoints;
            ;
            var size2 = 0;
            ;
            var size = points.length;
            ;
            var pointsBasicArrayList = new BasicArrayListS(size);
            ;
            for (var frame = 0; frame < size; frame++) {
                nextPoints = points[frame];
                size2 = nextPoints.length;
                pointBasicArrayList = new BasicArrayListS(size2);
                for (var index = 0; index < size2; index++) {
                    pointBasicArrayList.add(pointFactory.createXY(nextPoints[index][0], nextPoints[index][1]));
                }
                pointsBasicArrayList.add(pointBasicArrayList);
            }
            for (var index = 0; index < points.length; index++) {
                pointsBasicArrayList.add(this.getInstance(pointsBasicArrayList.objectArray[index], width));
            }
            var newPoints = this.vectorAnimationUtil.toAnimationArrayFromListOfPointList(pointsBasicArrayList);
            ;
            //if statement needs to be on the same line and ternary does not work the same way.
            return newPoints;
            //: 
        }
        catch (e) {
            var commonStrings = CommonStrings.getInstance();
            ;
            this.logUtil.put(commonStrings.EXCEPTION, this, commonStrings.GET_INSTANCE, e);
            //if statement needs to be on the same line and ternary does not work the same way.
            return NullUtil.getInstance().NULL_INT_ARRAY_ARRAY_ARRAY;
        }
    }
    //@Throws(Exception.constructor)
    getInstance(pointBasicArrayList, width) {
        var graphicsPipe = new BasicGraphicsPipeline(pointBasicArrayList);
        ;
        graphicsPipe.createMatrix();
        graphicsPipe.mirror(width);
        //if statement needs to be on the same line and ternary does not work the same way.
        return graphicsPipe.getMatrix();
        ;
    }
}
VectorMirrorGenerator.instance = new VectorMirrorGenerator();
