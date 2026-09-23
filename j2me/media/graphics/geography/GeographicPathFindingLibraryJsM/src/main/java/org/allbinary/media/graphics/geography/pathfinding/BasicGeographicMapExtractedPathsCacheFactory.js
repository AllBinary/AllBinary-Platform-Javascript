/* Generated Code Do Not Modify */
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
import { BaseBasicArrayListCache } from '../../../../../../org/allbinary/logic/util/cache/BaseBasicArrayListCache.js';
//not GWT import const BaseBasicArrayListCache
//not plain js import { BasicArrayListS } 
const BasicArrayListS = globalThis.org.allbinary.util.BasicArrayListS;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { BasicGeographicMapExtractedPathCacheFactory } from './BasicGeographicMapExtractedPathCacheFactory.js';
//not GWT import - same folder const BasicGeographicMapExtractedPathCacheFactory
export class BasicGeographicMapExtractedPathsCacheFactory extends BaseBasicArrayListCache {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return BasicGeographicMapExtractedPathsCacheFactory.instance;
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
    getPaths() {
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
        for (var index = list.size() - 1; index >= 0; index--) {
            BasicGeographicMapExtractedPathCacheFactory.getInstance().release(list.get(index));
        }
        list.clear();
        this.list.add(list);
    }
}
BasicGeographicMapExtractedPathsCacheFactory.instance = new BasicGeographicMapExtractedPathsCacheFactory();
