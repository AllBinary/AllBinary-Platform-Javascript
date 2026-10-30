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
//not GWT import const PointFactory
import { BasicGraphicsPipeline } from '../../../org/allbinary/graphics/pipeline/BasicGraphicsPipeline.js';
//not GWT import const BasicGraphicsPipeline
//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not GWT import const Angle
import { AngleFactory } from '../../../org/allbinary/math/AngleFactory.js';
//not GWT import const AngleFactory
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListS } 
const BasicArrayListS = globalThis.org.allbinary.util.BasicArrayListS;
//not GWT import const VectorInfo
//Current folder imports from return types, extended types, and scope (deduplicated)
import { VectorAnimationUtil } from './VectorAnimationUtil.js';
//sameFolderImports - not GWT import - same folder const VectorAnimationUtil
export class VectorRotationGenerator extends Object {
    static getInstance(...args) {
        if (args.length === 0)
            return this.getInstance$overload1();
        if (args.length === 1)
            return this.getInstance$overload2(args[0]);
        throw new TypeError('No matching overload: getInstance');
    }
    static getInstance$overload1() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return VectorRotationGenerator.instance;
    }
    constructor() {
        super();
        this.logUtil = LogUtil.getInstance();
        this.vectorAnimationUtil = VectorAnimationUtil.getInstance();
        this.angleFactory = AngleFactory.getInstance();
    }
    getInstance$overload2(vectorRotationInfo) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.getInstanceFrames(vectorRotationInfo.getWidth(), vectorRotationInfo.getHeight(), vectorRotationInfo.getPoints(), vectorRotationInfo.getTotalFrames());
        ;
    }
    getInstanceFrames(width, height, points, frames) {
        try {
            let totalAngle = this.angleFactory.TOTAL_ANGLE;
            ;
            let angleIncrement = globalThis.Math.trunc(totalAngle / frames);
            ;
            let pointsBasicArrayList = new BasicArrayListS(globalThis.Math.trunc(totalAngle / angleIncrement));
            ;
            let pointBasicArrayList = new BasicArrayListS(points.length);
            ;
            let pointFactory = PointFactory.getInstance();
            ;
            let size = points.length;
            ;
            for (let index = 0; index < size; index++) {
                pointBasicArrayList.add(pointFactory.createXY(points[index][0], points[index][1]));
            }
            let index = 0;
            ;
            while (index < totalAngle) {
                pointsBasicArrayList.add(this.getListAtAngle(width, height, pointBasicArrayList, this.angleFactory.getAt(index)));
                index += angleIncrement;
            }
            let newPoints = this.vectorAnimationUtil.toAnimationArrayFromListOfPointListWithPointsPerFrame(pointsBasicArrayList, pointBasicArrayList.size());
            ;
            //if statement needs to be on the same line and ternary does not work the same way.
            return newPoints;
        }
        catch (caught) {
            {
                const e = caught;
                let commonStrings = CommonStrings.getInstance();
                ;
                this.logUtil.put(commonStrings.EXCEPTION, this, commonStrings.GET_INSTANCE, e);
                //if statement needs to be on the same line and ternary does not work the same way.
                return NullUtil.getInstance().NULL_INT_ARRAY_ARRAY_ARRAY;
            }
        }
    }
    //@Throws(Exception.constructor)
    getListAtAngle(width, height, pointBasicArrayList, angle) {
        let graphicsPipe = new BasicGraphicsPipeline(pointBasicArrayList);
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
