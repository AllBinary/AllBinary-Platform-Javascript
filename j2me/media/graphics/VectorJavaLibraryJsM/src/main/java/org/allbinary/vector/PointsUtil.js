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
        let size = points.length;
        ;
        let newPoints = Array.from({ length: size }, () => Array.from({ length: 0 }, () => new Array(0).fill(0)));
        ;
        for (let index = 0; index < size; index++) {
            let size2 = points[index].length;
            ;
            newPoints[index] = new Array(size2).fill(null).map(() => new Array(2).fill(null));
            for (let index2 = 0; index2 < size2; index2++) {
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
    adjust(...args) {
        if (args.length === 2 && typeof args[1] === 'number')
            return this.adjust$overload1(args[0], args[1]);
        if (args.length === 3 && typeof args[1] === 'number' && typeof args[2] === 'number')
            return this.adjust$overload2(args[0], args[1], args[2]);
        throw new TypeError('No matching overload: adjust');
    }
    adjust$overload1(points, both) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.adjust(points, both, both);
        ;
    }
    adjust$overload2(points, x, y) {
        let newPoints = new Array(points.length).fill(null).map(() => new Array(2).fill(null));
        ;
        for (let index2 = 0; index2 < points.length; index2++) {
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
