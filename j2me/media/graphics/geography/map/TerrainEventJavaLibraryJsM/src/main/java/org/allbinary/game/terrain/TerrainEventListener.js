/* Generated Code Do Not Modify */
import { Object } from '../../../../java/lang/Object.js';
import { ForcedLogUtil } from '../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js';
import { EventStrings } from '../../../../org/allbinary/logic/util/event/EventStrings.js';
import { BasicArrayListD } from '../../../../org/allbinary/util/BasicArrayListD.js';
export class TerrainEventListener extends Object {
    constructor() {
        super(...arguments);
        this.list = new BasicArrayListD();
    }
    onEvent(eventObject) {
        ForcedLogUtil.log(EventStrings.getInstance().PERFORMANCE_MESSAGE, this);
    }
    onTerrainEvent(terrainEvent) {
        this.list.clear();
        this.list.add(terrainEvent);
    }
    getList() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.list;
    }
}
