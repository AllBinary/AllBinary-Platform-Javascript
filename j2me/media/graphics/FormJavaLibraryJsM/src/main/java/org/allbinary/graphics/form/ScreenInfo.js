/* Generated Code Do Not Modify */
import { Object } from '../../../../java/lang/Object.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
export class ScreenInfo extends Object {
    constructor() {
        super(...arguments);
        this.SMALL_WIDTH = 320;
        this.SMALL_HEIGHT = 240;
        this.MEDIUM_WIDTH = 800;
        this.MEDIUM_HEIGHT = 600;
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return ScreenInfo.instance;
    }
}
ScreenInfo.instance = new ScreenInfo();
