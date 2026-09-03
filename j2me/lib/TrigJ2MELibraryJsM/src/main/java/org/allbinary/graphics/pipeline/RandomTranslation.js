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
//not plain js import { MyRandomFactory } from '../../../../org/allbinary/game/rand/MyRandomFactory.js';
const MyRandomFactory = globalThis.org.allbinary.game.rand.MyRandomFactory;
//not plain js import { BasicArrayList } from '../../../../org/allbinary/util/BasicArrayList.js';
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { BasicGraphicsPipeline } from './BasicGraphicsPipeline.js';
//not GWT import const BasicGraphicsPipeline = globalThis.org.allbinary.graphics.pipeline.BasicGraphicsPipeline;
export class RandomTranslation extends Object {
    //@Throws(Exception.constructor)
    static getInstance(vector, howMuch) {
        var myRandomFactory = MyRandomFactory.getInstance();
        ;
        var x = -myRandomFactory.getNextInt(howMuch);
        ;
        ;
        var y = myRandomFactory.getNextInt(howMuch);
        ;
        var graphicsPipe = new BasicGraphicsPipeline(vector);
        ;
        graphicsPipe.createMatrix();
        graphicsPipe.translate(x, y);
        //if statement needs to be on the same line and ternary does not work the same way.
        return graphicsPipe.getMatrix();
        ;
    }
}
