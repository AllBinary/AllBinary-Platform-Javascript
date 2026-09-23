/* Generated Code Do Not Modify */
//not GWT import const AllBinaryLayer
//Current folder imports from return types, extended types, and scope (deduplicated)
import { CollisionProcessor } from './CollisionProcessor.js';
//not GWT import - same folder const CollisionProcessor
export class CollisionThreedProcessor extends CollisionProcessor {
    isCollision(myLayer, myLayer2) {
        if (myLayer2.getXP() >= myLayer.getX2() || myLayer2.getYP() >= myLayer.getY2() || myLayer2.getX2() <= myLayer.getXP() || myLayer2.getY2() <= myLayer.getYP() || myLayer2.getZP() < myLayer.getZ2() || myLayer2.getZ2() > myLayer.getZP()) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
    }
}
