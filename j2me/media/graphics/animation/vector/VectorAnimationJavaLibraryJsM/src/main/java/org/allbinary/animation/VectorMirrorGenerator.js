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
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListS } 
const BasicArrayListS = globalThis.org.allbinary.util.BasicArrayListS;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { VectorAnimationUtil } from './VectorAnimationUtil.js';
//sameFolderImports - not GWT import - same folder const VectorAnimationUtil
export class VectorMirrorGenerator extends Object {
    static getInstance(...args) {
        if (args.length === 0)
            return this.getInstance$overload1();
        if (args.length === 2 && typeof args[1] === 'number')
            return this.getInstance$overload2(args[0], args[1]);
        if (args.length === 2 && typeof args[1] === 'number')
            return this.getInstance$overload3(args[0], args[1]);
        throw new TypeError('No matching overload: getInstance');
    }
    static getInstance$overload1() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return VectorMirrorGenerator.instance;
    }
    constructor() {
        super();
        this.logUtil = LogUtil.getInstance();
        this.vectorAnimationUtil = VectorAnimationUtil.getInstance();
    }
    getInstance$overload2(points, width) {
        try {
            let pointFactory = PointFactory.getInstance();
            ;
            let pointBasicArrayList;
            ;
            let nextPoints;
            ;
            let size2 = 0;
            ;
            let size = points.length;
            ;
            let pointsBasicArrayList = new BasicArrayListS(size);
            ;
            for (let frame = 0; frame < size; frame++) {
                nextPoints = points[frame];
                size2 = nextPoints.length;
                pointBasicArrayList = new BasicArrayListS(size2);
                for (let index = 0; index < size2; index++) {
                    pointBasicArrayList.add(pointFactory.createXY(nextPoints[index][0], nextPoints[index][1]));
                }
                pointsBasicArrayList.add(pointBasicArrayList);
            }
            for (let index = 0; index < points.length; index++) {
                pointsBasicArrayList.add(this.getInstance(pointsBasicArrayList.objectArray[index], width));
            }
            let newPoints = this.vectorAnimationUtil.toAnimationArrayFromListOfPointList(pointsBasicArrayList);
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
    getInstance$overload3(pointBasicArrayList, width) {
        let graphicsPipe = new BasicGraphicsPipeline(pointBasicArrayList);
        ;
        graphicsPipe.createMatrix();
        graphicsPipe.mirror(width);
        //if statement needs to be on the same line and ternary does not work the same way.
        return graphicsPipe.getMatrix();
        ;
    }
}
VectorMirrorGenerator.instance = new VectorMirrorGenerator();
