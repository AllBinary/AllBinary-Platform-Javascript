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
//not plain js import { PointFactory } 
const PointFactory = globalThis.org.allbinary.graphics.PointFactory;
import { BasicGraphicsPipeline } from '../../../org/allbinary/graphics/pipeline/BasicGraphicsPipeline.js';
//not GWT import const BasicGraphicsPipeline = globalThis.org.allbinary.graphics.pipeline.BasicGraphicsPipeline;
//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { Angle } 
const Angle = globalThis.org.allbinary.math.Angle;
//not plain js import { AngleFactory } 
const AngleFactory = globalThis.org.allbinary.math.AngleFactory;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListS } 
const BasicArrayListS = globalThis.org.allbinary.util.BasicArrayListS;
//not GWT import const VectorInfo = globalThis.org.allbinary.vector.VectorInfo;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { VectorAnimationUtil } from './VectorAnimationUtil.js';
//not GWT import - same folder const VectorAnimationUtil = globalThis.org.allbinary.animation.VectorAnimationUtil;
export class VectorRotationGenerator extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return VectorRotationGenerator.instance;
    }
    constructor() {
        super();
        this.logUtil = LogUtil.getInstance();
        this.vectorAnimationUtil = VectorAnimationUtil.getInstance();
        this.angleFactory = AngleFactory.getInstance();
    }
    getInstance(vectorRotationInfo) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.getInstanceFrames(vectorRotationInfo.getWidth(), vectorRotationInfo.getHeight(), vectorRotationInfo.getPoints(), vectorRotationInfo.getTotalFrames());
        ;
    }
    getInstanceFrames(width, height, points, frames) {
        try {
            var totalAngle = this.angleFactory.TOTAL_ANGLE;
            ;
            var angleIncrement = totalAngle / frames;
            ;
            var pointsBasicArrayList = new BasicArrayListS(totalAngle / angleIncrement);
            ;
            var pointBasicArrayList = new BasicArrayListS(points.length);
            ;
            var pointFactory = PointFactory.getInstance();
            ;
            var size = points.length;
            ;
            for (var index = 0; index < size; index++) {
                pointBasicArrayList.add(pointFactory.createXY(points[index][0], points[index][1]));
            }
            var index = 0;
            ;
            while (index < totalAngle) {
                pointsBasicArrayList.add(this.getListAtAngle(width, height, pointBasicArrayList, this.angleFactory.getAt(index)));
                index += angleIncrement;
            }
            var newPoints = this.vectorAnimationUtil.toAnimationArrayFromListOfPointListWithPointsPerFrame(pointsBasicArrayList, pointBasicArrayList.size());
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
    getListAtAngle(width, height, pointBasicArrayList, angle) {
        var graphicsPipe = new BasicGraphicsPipeline(pointBasicArrayList);
        ;
        graphicsPipe.createMatrix();
        graphicsPipe.translate(-(width >> 1), -(height >> 1));
        graphicsPipe.rotateToAngle(angle);
        graphicsPipe.translate((width >> 1), (height >> 1));
        //if statement needs to be on the same line and ternary does not work the same way.
        return graphicsPipe.getMatrix();
        ;
    }
}
VectorRotationGenerator.instance = new VectorRotationGenerator();
