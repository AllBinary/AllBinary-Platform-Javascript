/* Generated Code Do Not Modify */
import { Object } from '../../../../../java/lang/Object.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
export class MultiPlayerGameFeatureFactory extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return MultiPlayerGameFeatureFactory.instance;
    }
    constructor() {
        super();
    }
    addCommands(anyType = {}) {
    }
}
MultiPlayerGameFeatureFactory.instance = new MultiPlayerGameFeatureFactory();
