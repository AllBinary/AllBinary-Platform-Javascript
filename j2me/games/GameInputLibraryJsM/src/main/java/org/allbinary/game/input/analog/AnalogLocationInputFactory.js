/* Generated Code Do Not Modify */
import { Object } from '../../../../../java/lang/Object.js';
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { AnalogLocationInput } from './AnalogLocationInput.js';
//not GWT import - same folder const AnalogLocationInput
export class AnalogLocationInputFactory extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return AnalogLocationInputFactory.instance;
    }
    constructor() {
        super();
        this.list = new BasicArrayListD();
    }
    addPlayer(playerInputId) {
        var analogLocationInput = AnalogLocationInput.NULL_ANALOG_LOCATION_INPUT;
        ;
        if (playerInputId < this.list.size()) {
            analogLocationInput = this.list.get(playerInputId);
        }
        if (analogLocationInput == AnalogLocationInput.NULL_ANALOG_LOCATION_INPUT) {
            analogLocationInput = new AnalogLocationInput(playerInputId);
            this.list.add(analogLocationInput);
        }
    }
    getInstanceForPlayer(playerInputId) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.list.get(playerInputId);
    }
    getList() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.list;
    }
}
AnalogLocationInputFactory.instance = new AnalogLocationInputFactory();
