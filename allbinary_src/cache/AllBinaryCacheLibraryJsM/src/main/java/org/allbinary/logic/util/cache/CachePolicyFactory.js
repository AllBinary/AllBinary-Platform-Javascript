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
import { Long } from '../../../../../java/lang/Long.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { CachePolicy } from './CachePolicy.js';
export class CachePolicyFactory extends Object {
    constructor() {
        super(...arguments);
        this.NAME = "lru";
        this.MAX_TIME_THOUSAND_MAX = new CachePolicy(this.NAME, Long.MAX_VALUE, 1000);
        this.THIRTY_MINUTES_TEN_THOUSAND_MAX = new CachePolicy(this.NAME, 1000 * 60 * 30, 10000);
        this.THIRTY_MINUTES_FIFTY_THOUSAND_MAX = new CachePolicy(this.NAME, 1000 * 60 * 30, 100000);
        this.ONE_MINUTE_FIVE_MAX = new CachePolicy(this.NAME, 1000 * 60 * 1, 5);
        this.ONE_MINUTE_TEN_MAX = new CachePolicy(this.NAME, 1000 * 60 * 1, 10);
        this.ONE_MINUTE_ONE_HUNDRED_MAX = new CachePolicy(this.NAME, 1000 * 60 * 1, 100);
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return CachePolicyFactory.instance;
    }
}
CachePolicyFactory.instance = new CachePolicyFactory();
