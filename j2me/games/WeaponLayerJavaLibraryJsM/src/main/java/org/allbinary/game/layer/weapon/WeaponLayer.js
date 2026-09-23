/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2011 AllBinary
        *
        *  By agreeing to this license you and any business entity you represent are
        *  legally bound to the AllBinary Open License Version 1 legal agreement.
        *
        *  You may obtain the AllBinary Open License Version 1 legal agreement from
        *  AllBinary or the root directory of AllBinary's AllBinary Platform repository.
        *
        *  Created By: Travis Berthelot
*/
//not GWT import const IndexedAnimation
import { NullAnimationFactory } from '../../../../../org/allbinary/animation/NullAnimationFactory.js';
//not GWT import const CollidableBaseBehavior
import { DestroyedLayerProcessor } from '../../../../../org/allbinary/game/combat/destroy/DestroyedLayerProcessor.js';
//not GWT import const DestroyedLayerProcessor
import { WeaponProperties } from '../../../../../org/allbinary/game/combat/weapon/WeaponProperties.js';
//not GWT import const WeaponProperties
import { GameConfigurationUtil } from '../../../../../org/allbinary/game/configuration/GameConfigurationUtil.js';
//not GWT import const GameConfigurationUtil
import { BasicGroupFactory } from '../../../../../org/allbinary/game/identification/BasicGroupFactory.js';
//not GWT import const BasicGroupFactory
import { MultiPlayerGameLayer } from '../../../../../org/allbinary/game/multiplayer/layer/MultiPlayerGameLayer.js';
//not GWT import const RemoteInfo
import { NoScoreable } from '../../../../../org/allbinary/game/score/NoScoreable.js';
//not GWT import const Rectangle
import { AllBinaryLayer } from '../../../../../org/allbinary/layer/AllBinaryLayer.js';
//not GWT import const ViewPositionBase
//Current folder imports from return types, extended types, and scope (deduplicated)
import { CollidableWeaponBehavior } from './CollidableWeaponBehavior.js';
//not GWT import - same folder const CollidableWeaponBehavior
export class WeaponLayer extends MultiPlayerGameLayer {
    static getStaticType() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return 0;
    }
    constructor(name, remoteInfo, multiPlayerType, movement, animationInterface, destroyedAnimationInterface, rectangle, viewPosition) {
        super(remoteInfo, BasicGroupFactory.getInstance().NONE_ARRAY, name, rectangle, viewPosition);
        this.animationInterface = NullAnimationFactory.getFactoryInstance().getInstance(0);
        this.sourceLayerInterface = AllBinaryLayer.NULL_ALLBINARY_LAYER;
        this.totalDamage = 0;
        this.initDamage = 0;
        this.destroyed = true;
        this.scoreableInterface = NoScoreable.getInstance();
        this.weaponProperties = WeaponProperties.NULL_WEAPON_PROPERTIES;
        this.collidableWeaponBehavior = CollidableWeaponBehavior.getNullInstance();
        //For kotlin this is before the body of the constructor.
        this.initAnimationInterface = animationInterface;
        this.setAnimationInterface(animationInterface);
        this.destroyedAnimationInterface = destroyedAnimationInterface;
        this.movement = movement;
        this.multiPlayerType = multiPlayerType;
    }
    setCollidableInferface(collidableInferface) {
        super.setCollidableInferface(collidableInferface);
        this.collidableWeaponBehavior = this.getCollidableInferface();
    }
    //@Throws(Exception.constructor)
    initXYZ(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    //@Throws(Exception.constructor)
    init(sourceLayerInterface, angle, otherAngle, weaponProperties, scoreable) {
        this.setWeaponPropertiesP(weaponProperties);
        this.setReadyForExplosion(false);
        this.setAnimationInterface(this.getInitAnimationInterfaceP());
        this.setOwnerLayerInterface(sourceLayerInterface);
        this.collidableWeaponBehavior.init(sourceLayerInterface);
        this.setGroupInterfaces();
        if (scoreable !=
            null) {
            this.scoreableInterface = scoreable;
        }
        this.totalDamage = 0;
        this.initDamage = weaponProperties.getDamage();
        this.setDestroyed(false);
        this.movement.init(weaponProperties.getSpeed(), angle, otherAngle);
    }
    setGroupInterfaces() {
        var basicGroupFactory = BasicGroupFactory.getInstance();
        ;
        if (this.sourceLayerInterface.getGroupInterface()[0] == basicGroupFactory.ENEMY) {
            this.setGroupInterface(basicGroupFactory.ENEMY_ARRAY);
        }
        else {
            this.setGroupInterface(this.sourceLayerInterface.getGroupInterface());
        }
    }
    //@Throws(Exception.constructor)
    processTick(allBinaryLayerManager) {
        if (this.isExhausted() && !this.isDestroyed()) {
            if (this.isReadyForExplosion()) {
                var indexedAnimationInterface = this.getAnimationInterface();
                ;
                var currentFrame = indexedAnimationInterface.getFrame();
                ;
                if (currentFrame < indexedAnimationInterface.getAnimationSize() - 1) {
                    indexedAnimationInterface.nextFrame();
                }
                else {
                    this.setDestroyed(true);
                }
            }
            else {
                var collidableWeaponBehavior = this.getCollidableInferface();
                ;
                if (collidableWeaponBehavior.isCollided()) {
                    this.setAnimationInterface(this.destroyedAnimationInterface);
                    this.getMovement().stop();
                    this.setReadyForExplosion(true);
                }
                else {
                    this.setDestroyed(true);
                }
            }
        }
        this.movement.process(this);
        this.totalDamage += this.weaponProperties.getDissipation();
    }
    isDestroyed() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.destroyed;
    }
    damage(damage, damageType) {
        this.totalDamage += damage * damage;
    }
    givePoints(total) {
        this.scoreableInterface.addPoints(GameConfigurationUtil.getInstance().getCompetitionValue() * total);
    }
    isExhausted() {
        if (this.totalDamage > this.getInitDamage() || this.totalDamage < 0) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
    }
    getDamage(damageType) {
        if (!this.isExhausted()) {
            var total = this.getInitDamage() - this.totalDamage;
            ;
            this.givePoints(total);
            //if statement needs to be on the same line and ternary does not work the same way.
            return total;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return 0;
    }
    setDestroyed(destroyed) {
        this.destroyed = destroyed;
        if (this.isDestroyed()) {
            this.scoreableInterface = NoScoreable.getInstance();
            DestroyedLayerProcessor.getInstance().add(this);
        }
    }
    getInitDamage() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.initDamage;
    }
    setAnimationInterface(animationInterface) {
        this.animationInterface = animationInterface;
    }
    getAnimationInterface() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.animationInterface;
    }
    getInitAnimationInterfaceP() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.initAnimationInterface;
    }
    setInitAnimationInterfaceP(initAnimationInterface) {
        this.initAnimationInterface = initAnimationInterface;
    }
    getDestroyedAnimationInterface() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.destroyedAnimationInterface;
    }
    getOwnerLayerInterface() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.sourceLayerInterface;
    }
    setOwnerLayerInterface(sourceLayerInterface) {
        this.sourceLayerInterface = sourceLayerInterface;
    }
    paint(graphics) {
        var viewPosition = this.getViewPosition();
        ;
        this.animationInterface.paintXY(graphics, viewPosition.getX() - this.getHalfWidth(), viewPosition.getY() - this.getHalfHeight());
    }
    paintThreed(graphics) {
        var viewPosition = this.getViewPosition();
        ;
        this.animationInterface.paintThreedXYZ(graphics, viewPosition.getX() - this.getHalfWidth(), viewPosition.getY() - this.getHalfHeight(), viewPosition.getZ() - this.getHalfDepth());
    }
    getMovement() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.movement;
    }
    setMovement(movement) {
        this.movement = movement;
    }
    getType() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return WeaponLayer.getStaticType();
        ;
    }
    getMultiPlayerType() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.multiPlayerType;
    }
    setWeaponPropertiesP(weaponProperties) {
        this.weaponProperties = weaponProperties;
    }
    getWeaponPropertiesP() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.weaponProperties;
    }
    implmentsTickableInterface() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return true;
    }
    //@Throws(Exception.constructor)
    set(gl) {
        this.initAnimationInterface.set(gl);
    }
}
