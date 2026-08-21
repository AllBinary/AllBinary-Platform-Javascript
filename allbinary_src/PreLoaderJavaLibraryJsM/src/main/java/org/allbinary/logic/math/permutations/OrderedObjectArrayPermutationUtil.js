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
import { Object } from '../../../../../java/lang/Object.js';
import { Arrays } from '../../../../../java/util/Arrays.js';
import { TsUtil } from '../../../../../org/allbinary/TsUtil.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { ComparableObject } from './ComparableObject.js';
import { ObjectPermutationVisitor } from './ObjectPermutationVisitor.js';
export class OrderedObjectArrayPermutationUtil extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return OrderedObjectArrayPermutationUtil.instance;
    }
    static main(args) {
        var TOTAL = 7;
        ;
        var data = new Array(TOTAL);
        ;
        for (var i = 0; i < TOTAL; i++) {
            data[i] = new ComparableObject();
        }
        Arrays.sort(data);
        var permutationVisitor = new ObjectPermutationVisitor(data);
        ;
        var ORIGINAL_DATA_LABEL = "Original Data: ";
        ;
        console.log(ORIGINAL_DATA_LABEL);
        permutationVisitor.visit(data);
        OrderedObjectArrayPermutationUtil.getInstance().generate(data, permutationVisitor);
    }
    constructor() {
        super();
        this.TOTAL_ITERATIONS_TABLE = "Total Iterations: ";
        this.FINISHED = "\nFINISHED";
    }
    getNext(data) {
        var length = data.length;
        ;
        var i = length - 1;
        ;
        var tsUtil = TsUtil.getInstance();
        ;
        while (tsUtil.hashCode(data[i - 1]) >= tsUtil.hashCode(data[i])) {
            i = i - 1;
        }
        var j = length;
        ;
        while (tsUtil.hashCode(data[j - 1]) <= tsUtil.hashCode(data[i - 1])) {
            j = j - 1;
        }
        this.swap(data, i - 1, j - 1);
        i++;
        j = length;
        while (i < j) {
            this.swap(data, i - 1, j - 1);
            i++;
            j--;
        }
    }
    swap(data, a, b) {
        var temp = data[a];
        ;
        data[a] = data[b];
        data[b] = temp;
    }
    factorial(dataLength) {
        var temp = 1;
        ;
        if (dataLength > 1) {
            for (var i = 1; i <= dataLength; i++) {
                temp *= i;
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return temp;
    }
    generate(data, visitor) {
        var iterations = this.factorial(data.length);
        ;
        console.log(this.TOTAL_ITERATIONS_TABLE);
        console.log(iterations);
        for (var count = 0; count < iterations - 1; count++) {
            this.getNext(data);
            visitor.visit(this);
        }
        console.log(this.FINISHED);
    }
}
OrderedObjectArrayPermutationUtil.instance = new OrderedObjectArrayPermutationUtil();
