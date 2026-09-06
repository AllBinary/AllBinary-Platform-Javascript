/* Generated Code Do Not Modify */
import { Object } from '../../../../../java/lang/Object.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { PoolType } from './PoolType.js';
//not GWT import - same folder const PoolType = globalThis.org.allbinary.logic.util.cache.PoolType;
import { CacheTypeFactory } from './CacheTypeFactory.js';
//not GWT import - same folder const CacheTypeFactory = globalThis.org.allbinary.logic.util.cache.CacheTypeFactory;
export class PoolTypeFactory extends Object {
    constructor() {
        super(...arguments);
        this.VECTOR_POOL = new PoolType(CacheTypeFactory.getInstance().NO_CACHE);
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return PoolTypeFactory.instance;
    }
}
PoolTypeFactory.instance = new PoolTypeFactory();
