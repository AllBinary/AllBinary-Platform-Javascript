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
import { Exception } from '../../../java/lang/Exception.js';
//not plain js import { GPoint } 
const GPoint = globalThis.org.allbinary.graphics.GPoint;
//not plain js import { PointFactory } 
const PointFactory = globalThis.org.allbinary.graphics.PointFactory;
import { RandomRotationFactory } from '../../../org/allbinary/graphics/pipeline/RandomRotationFactory.js';
//not GWT import const RandomRotationFactory = globalThis.org.allbinary.graphics.pipeline.RandomRotationFactory;
import { RandomTranslation } from '../../../org/allbinary/graphics/pipeline/RandomTranslation.js';
//not GWT import const RandomTranslation = globalThis.org.allbinary.graphics.pipeline.RandomTranslation;
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//not plain js import { BasicArrayListS } 
const BasicArrayListS = globalThis.org.allbinary.util.BasicArrayListS;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { VectorExplosionType } from './VectorExplosionType.js';
//not GWT import - same folder const VectorExplosionType = globalThis.org.allbinary.animation.VectorExplosionType;
import { VectorAnimationUtil } from './VectorAnimationUtil.js';
//not GWT import - same folder const VectorAnimationUtil = globalThis.org.allbinary.animation.VectorAnimationUtil;
export class VectorExplosionGenerator extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return VectorExplosionGenerator.instance;
    }
    constructor() {
        super();
        this.RANDOM = new VectorExplosionType();
        this.ROTATION = new VectorExplosionType();
        this.vectorAnimationUtil = VectorAnimationUtil.getInstance();
        this.randomRotationFactory = RandomRotationFactory.getInstance();
    }
    //@Throws(Exception.constructor)
    createList(list, howMuch, type) {
        var point;
        ;
        var size = list.size();
        ;
        var points = new Array(size).fill(null).map(() => new Array(2).fill(0));
        ;
        for (var index = 0; index < size; index++) {
            point = list.objectArray[index];
            points[index][0] = point.getX();
            points[index][1] = point.getY();
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.createListFromPoints(list, points, howMuch, type);
        ;
    }
    //@Throws(Exception.constructor)
    getInstance(points, howMuch, type) {
        var pointsBasicArrayList = this.getInstanceStartFrame(points, howMuch, type, true);
        ;
        var tempBasicArrayList = pointsBasicArrayList.objectArray[0];
        ;
        var newPoints = this.vectorAnimationUtil.toAnimationArrayFromListOfPointListWithPointsPerFrame(pointsBasicArrayList, tempBasicArrayList.size());
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return newPoints;
    }
    //@Throws(Exception.constructor)
    getInstanceStartFrame(points, howMuch, type, startFrame) {
        try {
            var pointsBasicArrayList = new BasicArrayListS(howMuch);
            ;
            pointsBasicArrayList.add(this.createPointsBasicArrayList(points));
            var frameIndex = 0;
            ;
            var tempBasicArrayList;
            ;
            var pointBasicArrayList;
            ;
            while (frameIndex < howMuch) {
                tempBasicArrayList = pointsBasicArrayList.objectArray[frameIndex];
                pointBasicArrayList = this.createListFromPoints(tempBasicArrayList, points, howMuch, type);
                pointsBasicArrayList.add(pointBasicArrayList);
                frameIndex++;
            }
            if (!startFrame) {
                pointsBasicArrayList.removeAt(0);
            }
            //if statement needs to be on the same line and ternary does not work the same way.
            return pointsBasicArrayList;
            //: 
        }
        catch (e) {
            throw e;
        }
    }
    //@Throws(Exception.constructor)
    createListFromPoints(tempBasicArrayList, points, howMuch, type) {
        var index = 0;
        ;
        var pointBasicArrayList = new BasicArrayListD();
        ;
        var sectionBasicArrayList;
        ;
        while (index < points.length) {
            sectionBasicArrayList = new BasicArrayListD();
            while (points[index][0] != 1000) {
                sectionBasicArrayList.add(tempBasicArrayList.objectArray[index]);
                index++;
                if (index >= points.length) {
                    break;
                }
            }
            sectionBasicArrayList = RandomTranslation.getInstance(sectionBasicArrayList, howMuch);
            if (type == this.ROTATION) {
                sectionBasicArrayList = this.randomRotationFactory.getInstanceList(sectionBasicArrayList, howMuch);
            }
            var size = sectionBasicArrayList.size();
            ;
            for (var index2 = 0; index2 < size; index2++) {
                pointBasicArrayList.add(sectionBasicArrayList.objectArray[index2]);
            }
            if (index >= points.length) {
                break;
            }
            else if (points[index][0] == 1000) {
                pointBasicArrayList.add(tempBasicArrayList.objectArray[index]);
                index++;
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return pointBasicArrayList;
    }
    //@Throws(Exception.constructor)
    createPointsBasicArrayList(points) {
        if (points.length == 0) {
            throw new Exception("Not Points Provided");
        }
        var firstPointBasicArrayList = new BasicArrayListS(points.length);
        ;
        var pointFactory = PointFactory.getInstance();
        ;
        for (var index = 0; index < points.length; index++) {
            firstPointBasicArrayList.add(pointFactory.createXY(points[index][0], points[index][1]));
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return firstPointBasicArrayList;
    }
}
VectorExplosionGenerator.instance = new VectorExplosionGenerator();
