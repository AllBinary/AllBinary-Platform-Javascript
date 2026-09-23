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
//not GWT import const GPoint
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class VectorAnimationUtil extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return VectorAnimationUtil.instance;
    }
    constructor() {
        super();
    }
    toAnimationArrayFromListOfPointListWithPointsPerFrame(vector, pointsPerFrame) {
        var size = vector.size();
        ;
        var points = Array.from({ length: size }, () => Array.from({ length: pointsPerFrame }, () => new Array(0).fill(2)));
        ;
        var nextBasicArrayList;
        ;
        var framePoints;
        ;
        for (var index = 0; index < size; index++) {
            nextBasicArrayList = vector.objectArray[index];
            framePoints = this.toFrameArrayFromPointBasicArrayList(nextBasicArrayList);
            for (var pointIndex = 0; pointIndex < framePoints.length; pointIndex++) {
                points[index][pointIndex][0] = framePoints[pointIndex][0];
                points[index][pointIndex][1] = framePoints[pointIndex][1];
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return points;
    }
    toAnimationArrayFromListOfPointList(vector) {
        var size = vector.size();
        ;
        var points = Array.from({ length: size }, () => Array.from({ length: 0 }, () => new Array(0).fill(0)));
        ;
        var nextBasicArrayList;
        ;
        var framePoints;
        ;
        for (var index = 0; index < size; index++) {
            nextBasicArrayList = vector.objectArray[index];
            framePoints = this.toFrameArrayFromPointBasicArrayList(nextBasicArrayList);
            points[index] = new Array(framePoints.length).fill(null).map(() => new Array(2).fill(0));
            for (var pointIndex = 0; pointIndex < framePoints.length; pointIndex++) {
                points[index][pointIndex][0] = framePoints[pointIndex][0];
                points[index][pointIndex][1] = framePoints[pointIndex][1];
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return points;
    }
    toFrameArrayFromPointBasicArrayList(list) {
        var points = new Array(list.size()).fill(null).map(() => new Array(2).fill(0));
        ;
        var size = list.size();
        ;
        for (var index = 0; index < size; index++) {
            var nextPoint = list.objectArray[index];
            ;
            points[index][0] = nextPoint.getX();
            points[index][1] = nextPoint.getY();
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return points;
    }
}
VectorAnimationUtil.instance = new VectorAnimationUtil();
