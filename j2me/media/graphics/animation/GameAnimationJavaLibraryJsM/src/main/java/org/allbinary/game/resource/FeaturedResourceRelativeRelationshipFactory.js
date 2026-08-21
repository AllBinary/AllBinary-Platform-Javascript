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
import { Exception } from '../../../../java/lang/Exception.js';
import { PointFactory } from '../../../../org/allbinary/graphics/PointFactory.js';
import { RelativeLayerRelationship } from '../../../../org/allbinary/layer/relationship/RelativeLayerRelationship.js';
import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
import { BasicArrayListD } from '../../../../org/allbinary/util/BasicArrayListD.js';
import { BasicArrayListUtil } from '../../../../org/allbinary/util/BasicArrayListUtil.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { FeaturedResourceFactory } from './FeaturedResourceFactory.js';
export class FeaturedResourceRelativeRelationshipFactory extends FeaturedResourceFactory {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return FeaturedResourceRelativeRelationshipFactory.INSTANCE;
    }
    constructor() {
        super();
        this.basicArrayListUtil = BasicArrayListUtil.getInstance();
    }
    //@Throws(Exception.constructor)
    getRelativeRelationshipList(resource, layer) {
        var featureReleaseList = this.getList();
        ;
        var size = this.getList().size();
        ;
        for (var index = 0; index < size; index++) {
            var featureInterface = featureReleaseList.objectArray[index];
            ;
            if (featureInterface.isFeature()) {
                var list = featureInterface.getResourceRelativeRelationshipList(resource);
                ;
                if (list != this.basicArrayListUtil.getImmutableInstance()) {
                    //if statement needs to be on the same line and ternary does not work the same way.
                    return this.duplicate(list, layer);
                    ;
                }
            }
        }
        throw new Exception(new StringMaker().append("Not available for current feature selection or Resource: ").append(resource).toString());
    }
    //@Throws(Exception.constructor)
    duplicate(list, layer) {
        var pointFactory = PointFactory.getInstance();
        ;
        var newList = new BasicArrayListD();
        ;
        var size = list.size();
        ;
        for (var index = 0; index < size; index++) {
            var relativeRelationship = list.objectArray[index];
            ;
            newList.add(new RelativeLayerRelationship(layer, pointFactory.createXY(relativeRelationship.getX(), relativeRelationship.getY()), BasicArrayListUtil.getInstance().getImmutableInstance()));
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return newList;
    }
}
FeaturedResourceRelativeRelationshipFactory.INSTANCE = new FeaturedResourceRelativeRelationshipFactory();
