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
/* Generated Code Do Not Modify */
import { Object } from '../../../../../java/lang/Object.js';
import { Exception } from '../../../../../java/lang/Exception.js';
import { NullAnimationFactory } from '../../../../../org/allbinary/animation/NullAnimationFactory.js';
import { WeaponProperties } from '../../../../../org/allbinary/game/combat/weapon/WeaponProperties.js';
import { NoScoreable } from '../../../../../org/allbinary/game/score/NoScoreable.js';
import { RelativeRelationship } from '../../../../../org/allbinary/graphics/RelativeRelationship.js';
import { AllBinaryLayer } from '../../../../../org/allbinary/layer/AllBinaryLayer.js';
import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
export class BasicWeaponPart extends Object {
    static createBasicWeaponPart(animationInterface) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new BasicWeaponPart(animationInterface, AllBinaryLayer.NULL_ALLBINARY_LAYER, WeaponProperties.NULL_WEAPON_PROPERTIES, NoScoreable.getInstance(), RelativeRelationship.NULL_RELATIVE_RELATIONSHIP);
    }
    constructor(animationInterface, sourceLayerInterface, weaponProperties, scoreableInterface, relativeRelationship) {
        super();
        this.animationInterface = NullAnimationFactory.getFactoryInstance().getInstance(0);
        this.ownerLayerInterface = AllBinaryLayer.NULL_ALLBINARY_LAYER;
        this.weaponProperties = WeaponProperties.NULL_WEAPON_PROPERTIES;
        this.scoreableInterface = NoScoreable.getInstance();
        this.relativeRelationship = RelativeRelationship.NULL_RELATIVE_RELATIONSHIP;
        this.init(sourceLayerInterface, weaponProperties, scoreableInterface, relativeRelationship);
        this.setAnimationInterface(animationInterface);
    }
    init(sourceLayerInterface, weaponProperties, scoreableInterface, relativeRelationship) {
        this.setOwnerLayerInterface(sourceLayerInterface);
        this.setWeaponProperties(weaponProperties);
        this.scoreableInterface = scoreableInterface;
        this.relativeRelationship = relativeRelationship;
    }
    //@Throws(Exception.constructor)
    process(allbinaryLayerManager, angle, otherAngle) {
        this.processScore(allbinaryLayerManager, angle, otherAngle, this.getWeaponProperties(), this.scoreableInterface);
    }
    //@Throws(Exception.constructor)
    processScore(allbinaryLayerManager, angle, otherAngle, weaponProperties, scoreableInterface) {
        throw new Exception(CommonStrings.getInstance().NOT_IMPLEMENTED);
    }
    getOwnerLayerInterface() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.ownerLayerInterface;
    }
    setOwnerLayerInterface(ownerLayerInterface) {
        this.ownerLayerInterface = ownerLayerInterface;
    }
    getAnimationInterface() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.animationInterface;
    }
    setAnimationInterface(animationInterface) {
        this.animationInterface = animationInterface;
    }
    paint(graphics) {
        var viewPosition = this.getOwnerLayerInterface().getViewPosition();
        ;
        var viewX = viewPosition.getX();
        ;
        var viewY = viewPosition.getY();
        ;
        this.animationInterface.paintXY(graphics, viewX, viewY);
    }
    paintThreed(graphics) {
    }
    getWeaponProperties() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.weaponProperties;
    }
    setWeaponProperties(weaponProperties) {
        this.weaponProperties = weaponProperties;
    }
}
BasicWeaponPart.NULL_BASIC_WEAPON_PART = BasicWeaponPart.createBasicWeaponPart(NullAnimationFactory.getFactoryInstance().getInstance(0));
