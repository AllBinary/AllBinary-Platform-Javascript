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
import { Object } from '../../../../../../java/lang/Object.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
export class TransformInfoProperties extends Object {
    constructor(name, label, description, objectFileName, objectConfigFileName, templateFileName) {
        super();
        this.name = name;
        this.label = label;
        this.description = description;
        this.objectFileName = objectFileName;
        this.templateFileName = templateFileName;
        this.objectConfigFileName = objectConfigFileName;
    }
    setName(value) {
        this.name = value;
    }
    setDescription(value) {
        this.description = value;
    }
    setViewFile(value) {
        this.objectFileName = value;
    }
    setTemplateFile(value) {
        this.templateFileName = value;
    }
    setObjectConfigFile(value) {
        this.objectConfigFileName = value;
    }
    getName() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.name;
    }
    getLabel() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.label;
    }
    getDescription() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.description;
    }
    getViewFile() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.objectFileName;
    }
    getTemplateFile() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.templateFileName;
    }
    getObjectConfigFile() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.objectConfigFileName;
    }
}
