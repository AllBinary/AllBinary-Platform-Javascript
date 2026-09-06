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
import { Object } from '../../../../java/lang/Object.js';
//not plain js import { MyRandomFactory } 
const MyRandomFactory = globalThis.org.allbinary.game.rand.MyRandomFactory;
//not plain js import { AngleFactory } 
const AngleFactory = globalThis.org.allbinary.math.AngleFactory;
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { BasicGraphicsPipeline } from './BasicGraphicsPipeline.js';
//not GWT import - same folder const BasicGraphicsPipeline = globalThis.org.allbinary.graphics.pipeline.BasicGraphicsPipeline;
export class RandomRotationFactory extends Object {
    constructor() {
        super(...arguments);
        this.myRandomFactory = MyRandomFactory.getInstance();
        this.angleFactory = AngleFactory.getInstance();
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return RandomRotationFactory.instance;
    }
    //@Throws(Exception.constructor)
    getInstanceList(vector, howMuch) {
        var graphicsPipe = new BasicGraphicsPipeline(vector);
        ;
        graphicsPipe.createMatrix();
        graphicsPipe.rotateToAngle(this.angleFactory.getAt(this.getNextRandomAngle(howMuch)));
        //if statement needs to be on the same line and ternary does not work the same way.
        return graphicsPipe.getMatrix();
        ;
    }
    getNextRandomAngle(howMuch) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.myRandomFactory.getNextInt(howMuch * 10);
        ;
    }
}
RandomRotationFactory.instance = new RandomRotationFactory();
