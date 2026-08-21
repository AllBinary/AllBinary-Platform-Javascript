/* Generated Code Do Not Modify */
import { WeaponProperties } from '../../../../../org/allbinary/game/combat/weapon/WeaponProperties.js';
import { RemoteInfo } from '../../../../../org/allbinary/game/multiplayer/layer/RemoteInfo.js';
import { GameTickTimeDelayHelperFactory } from '../../../../../org/allbinary/time/GameTickTimeDelayHelperFactory.js';
import { TimeDelayHelper } from '../../../../../org/allbinary/time/TimeDelayHelper.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { SimpleWeaponLayer } from './SimpleWeaponLayer.js';
export class TempExplosionWeaponLayer extends SimpleWeaponLayer {
    constructor(name, movement, animationInterface, rectangle, viewPosition, timeDelay) {
        super(name, RemoteInfo.REMOTE_INFO, -1, movement, animationInterface, SimpleWeaponLayer.createDestroyed(), rectangle, viewPosition);
        this.weaponProperties = new WeaponProperties(-1, -1, 0, 1000, 0);
        this.timeDelayHelper = new TimeDelayHelper(0);
        //For kotlin this is before the body of the constructor.
        this.timeDelayHelper.delay = timeDelay;
    }
    //@Throws(Exception.constructor)
    processTick(allBinaryLayerManager) {
        if (this.timeDelayHelper.isTime(GameTickTimeDelayHelperFactory.getInstance().startTime)) {
            this.getCollidableInferface().collide(this, this);
            this.totalDamage = this.getInitDamage() + 1;
        }
        super.processTick(allBinaryLayerManager);
    }
}
