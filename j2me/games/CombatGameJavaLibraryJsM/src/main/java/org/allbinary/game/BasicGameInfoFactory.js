/* Generated Code Do Not Modify */
import { Object } from '../../../java/lang/Object.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
export class BasicGameInfoFactory extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return BasicGameInfoFactory.SINGLETON;
    }
    constructor() {
        super();
        this.currentReleaseIndex = 0;
        this.currentDestroyIndex = 0;
        this.total = 0;
    }
    init(total) {
        this.currentReleaseIndex = 0;
        this.currentDestroyIndex = 0;
        this.total = total;
    }
    isPeaked() {
        if (this.currentDestroyIndex >= this.total) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
    }
    howManyLeft() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.total - this.currentDestroyIndex;
    }
}
BasicGameInfoFactory.SINGLETON = new BasicGameInfoFactory();
