/* Generated Code Do Not Modify */
import { BaseBasicArrayListCache } from '../../../../../../org/allbinary/logic/util/cache/BaseBasicArrayListCache.js';
//not GWT import const BaseBasicArrayListCache = globalThis.org.allbinary.logic.util.cache.BaseBasicArrayListCache;
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListS } 
const BasicArrayListS = globalThis.org.allbinary.util.BasicArrayListS;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class BasicGeographicMapExtractedPathCacheFactory extends BaseBasicArrayListCache {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return BasicGeographicMapExtractedPathCacheFactory.instance;
    }
    constructor() {
        super();
        this.maxConcurrentPaths = 0;
        this.maxPaths = 0;
    }
    init(maxConcurrentPaths, maxPaths) {
        if (maxConcurrentPaths != this.maxConcurrentPaths) {
            for (var index = maxConcurrentPaths; index >= this.maxConcurrentPaths; index--) {
                this.list.add(new BasicArrayListS(maxPaths));
            }
            this.maxConcurrentPaths = maxConcurrentPaths;
        }
        this.maxPaths = maxPaths;
    }
    getPath() {
        if (this.list.size() > 0) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return this.list.removeAt(0);
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return new BasicArrayListS(this.maxPaths);
        }
    }
    release(list) {
        list.clear();
        this.list.add(list);
    }
}
BasicGeographicMapExtractedPathCacheFactory.instance = new BasicGeographicMapExtractedPathCacheFactory();
