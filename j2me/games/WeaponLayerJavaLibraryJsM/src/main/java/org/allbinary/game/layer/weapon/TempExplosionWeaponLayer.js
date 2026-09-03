/* Generated Code Do Not Modify */
//not GWT import const Animation = globalThis.org.allbinary.animation.Animation;
import { WeaponProperties } from '../../../../../org/allbinary/game/combat/weapon/WeaponProperties.js';
//not GWT import const WeaponProperties = globalThis.org.allbinary.game.combat.weapon.WeaponProperties;
import { RemoteInfo } from '../../../../../org/allbinary/game/multiplayer/layer/RemoteInfo.js';
//not GWT import const Movement = globalThis.org.allbinary.physics.movement.Movement;
import { GameTickTimeDelayHelperFactory } from '../../../../../org/allbinary/time/GameTickTimeDelayHelperFactory.js';
//not GWT import const GameTickTimeDelayHelperFactory = globalThis.org.allbinary.time.GameTickTimeDelayHelperFactory;
import { TimeDelayHelper } from '../../../../../org/allbinary/time/TimeDelayHelper.js';
//not GWT import const ViewPositionBase = globalThis.org.allbinary.view.ViewPositionBase;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { SimpleWeaponLayer } from './SimpleWeaponLayer.js';
//not GWT import const SimpleWeaponLayer = globalThis.org.allbinary.game.layer.weapon.SimpleWeaponLayer;
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
