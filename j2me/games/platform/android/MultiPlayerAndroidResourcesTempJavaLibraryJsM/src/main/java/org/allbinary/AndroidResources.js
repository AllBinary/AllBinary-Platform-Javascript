/* Generated Code Do Not Modify */
import { Object } from '../../java/lang/Object.js';
import { R } from '../../org/allbinary/game/testgamedemo/R.js';
//not GWT import const R = globalThis.org.allbinary.game.testgamedemo.R;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class AndroidResources extends Object {
    constructor() {
        super(...arguments);
        this.drawable = new R.Companion.drawable();
        this.id = new R.Companion.id();
        this.layout = new R.Companion.layout();
        this.raw = new R.Companion.raw();
        this.string = new R.Companion.string();
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return AndroidResources.instance;
    }
}
AndroidResources.instance = new AndroidResources();
