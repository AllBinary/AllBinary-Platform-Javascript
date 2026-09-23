/* Generated Code Do Not Modify */
import { Object } from '../../../../../java/lang/Object.js';
//not GWT import const AllBinaryLayerFactoryInterface
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//not plain js import { BasicArrayListUtil } 
const BasicArrayListUtil = globalThis.org.allbinary.util.BasicArrayListUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class PlacedLayerFactory extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return PlacedLayerFactory.instance;
    }
    constructor() {
        super();
        this.list = new BasicArrayListD();
        this.basicArrayListUtil = BasicArrayListUtil.getInstance();
    }
    clear() {
        this.list.clear();
    }
    getSize() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.list.size();
        ;
    }
    getRandomInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.basicArrayListUtil.getRandom(this.list);
    }
    add(layerInterfaceFactoryInterface) {
        this.list.add(layerInterfaceFactoryInterface);
    }
}
PlacedLayerFactory.instance = new PlacedLayerFactory();
