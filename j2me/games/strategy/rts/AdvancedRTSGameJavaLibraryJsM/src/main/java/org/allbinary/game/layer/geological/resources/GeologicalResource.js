/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2006 AllBinary
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
import { Object } from '../../../../../../java/lang/Object.js';
import { Integer } from '../../../../../../java/lang/Integer.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
export class GeologicalResource extends Object {
    constructor(initTotal) {
        super();
        this.total = 0;
        this.initTotal = initTotal;
        this.init();
    }
    init() {
        this.setTotal(this.initTotal);
    }
    add(value) {
        var max = Integer.MAX_VALUE;
        ;
        if (this.getTotal() + value > max) {
            this.setTotal(max);
        }
        else {
            this.setTotal(this.getTotal() + value);
        }
    }
    remove(value) {
        if (this.getTotal() - value < 0) {
            this.setTotal(0);
        }
        else {
            this.setTotal(this.getTotal() - value);
        }
    }
    getTotal() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.total;
    }
    setTotal(total) {
        this.total = total;
    }
}
