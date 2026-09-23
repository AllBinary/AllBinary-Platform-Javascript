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
//Current folder imports from return types, extended types, and scope (deduplicated)
import { Feature } from './Feature.js';
//not GWT import - same folder const Feature
export class MainFeatureFactory extends Object {
    constructor() {
        super(...arguments);
        this.FULL_SCREEN = new Feature("Full Screen");
        this.TITLE_BAR = new Feature("Title Bar");
        this.STATIC = new Feature("Static Dependent Feature");
        this.LOAD_ONDEMAND = new Feature("Load OnDemand");
        this.LOAD_ALL = new Feature("Load All");
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return MainFeatureFactory.instance;
    }
}
MainFeatureFactory.instance = new MainFeatureFactory();
