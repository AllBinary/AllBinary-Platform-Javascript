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
//Current folder imports from return types, extended types, and scope (deduplicated)
export class PointsUtil extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return PointsUtil.instance;
    }
    adjustXY(points, x, y) {
        var size = points.length;
        ;
        var newPoints = Array.from({ length: size }, () => Array.from({ length: 0 }, () => new Array(0).fill(0)));
        ;
        for (var index = 0; index < size; index++) {
            var size2 = points[index].length;
            ;
            newPoints[index] = new Array(size2).fill(null).map(() => new Array(2).fill(0));
            for (var index2 = 0; index2 < size2; index2++) {
                if (points[index][index2][0] != 1000) {
                    newPoints[index][index2][0] = points[index][index2][0] + x;
                    newPoints[index][index2][1] = points[index][index2][1] + y;
                }
                else {
                    newPoints[index][index2][0] = 1000;
                    newPoints[index][index2][1] = 1000;
                }
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return newPoints;
    }
    adjust(points, both) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.adjust(points, both, both);
        ;
    }
    adjust(points, x, y) {
        var newPoints = new Array(points.length).fill(null).map(() => new Array(2).fill(0));
        ;
        for (var index2 = 0; index2 < points.length; index2++) {
            if (points[index2][0] != 1000) {
                newPoints[index2][0] = points[index2][0] + x;
                newPoints[index2][1] = points[index2][1] + y;
            }
            else {
                newPoints[index2][0] = 1000;
                newPoints[index2][1] = 1000;
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return newPoints;
    }
}
PointsUtil.instance = new PointsUtil();
