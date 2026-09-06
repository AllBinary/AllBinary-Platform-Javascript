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
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { BasicUserRoleFactory } from './BasicUserRoleFactory.js';
//not GWT import - same folder const BasicUserRoleFactory = globalThis.org.allbinary.business.user.role.BasicUserRoleFactory;
export class AdminRoleFactory extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return AdminRoleFactory.instance;
    }
    constructor() {
        super();
        this.adminRoles = new BasicArrayListD();
        this.storeAdminRoles = new BasicArrayListD();
        this.storeManagementRoles = new BasicArrayListD();
        this.productManagementRoles = new BasicArrayListD();
        this.reviewManagementRoles = new BasicArrayListD();
        this.customerManagementRoles = new BasicArrayListD();
        this.workflowManagementRoles = new BasicArrayListD();
        this.orderManagementRoles = new BasicArrayListD();
        this.adjusterManagementRoles = new BasicArrayListD();
        this.shippingManagementRoles = new BasicArrayListD();
        this.webManagementRoles = new BasicArrayListD();
        var basicUserRoleFactory = BasicUserRoleFactory.getInstance();
        ;
        this.adminRoles.add(basicUserRoleFactory.ADMINISTRATOR);
        this.storeAdminRoles.add(basicUserRoleFactory.ADMINISTRATOR);
        this.storeAdminRoles.add(basicUserRoleFactory.STOREMANAGER);
        this.storeManagementRoles.add(basicUserRoleFactory.ADMINISTRATOR);
        this.storeManagementRoles.add(basicUserRoleFactory.STOREMANAGER);
        this.storeManagementRoles.add(basicUserRoleFactory.CUSTOMERMANAGER);
        this.storeManagementRoles.add(basicUserRoleFactory.ADJUSTER);
        this.storeManagementRoles.add(basicUserRoleFactory.PRODUCTMANAGER);
        this.storeManagementRoles.add(basicUserRoleFactory.REVIEWER);
        this.storeManagementRoles.add(basicUserRoleFactory.SHIPPING);
        this.productManagementRoles.add(basicUserRoleFactory.ADMINISTRATOR);
        this.productManagementRoles.add(basicUserRoleFactory.STOREMANAGER);
        this.productManagementRoles.add(basicUserRoleFactory.PRODUCTMANAGER);
        this.reviewManagementRoles.add(basicUserRoleFactory.ADMINISTRATOR);
        this.reviewManagementRoles.add(basicUserRoleFactory.STOREMANAGER);
        this.reviewManagementRoles.add(basicUserRoleFactory.REVIEWER);
        this.customerManagementRoles.add(basicUserRoleFactory.ADMINISTRATOR);
        this.customerManagementRoles.add(basicUserRoleFactory.STOREMANAGER);
        this.customerManagementRoles.add(basicUserRoleFactory.CUSTOMERMANAGER);
        this.workflowManagementRoles.add(basicUserRoleFactory.ADMINISTRATOR);
        this.workflowManagementRoles.add(basicUserRoleFactory.STOREMANAGER);
        this.workflowManagementRoles.add(basicUserRoleFactory.WORKFLOWEDITOR);
        this.orderManagementRoles.add(basicUserRoleFactory.ADMINISTRATOR);
        this.orderManagementRoles.add(basicUserRoleFactory.STOREMANAGER);
        this.adjusterManagementRoles.add(basicUserRoleFactory.ADMINISTRATOR);
        this.adjusterManagementRoles.add(basicUserRoleFactory.STOREMANAGER);
        this.adjusterManagementRoles.add(basicUserRoleFactory.ADJUSTER);
        this.shippingManagementRoles.add(basicUserRoleFactory.ADMINISTRATOR);
        this.shippingManagementRoles.add(basicUserRoleFactory.STOREMANAGER);
        this.shippingManagementRoles.add(basicUserRoleFactory.SHIPPING);
        this.webManagementRoles.add(basicUserRoleFactory.ADMINISTRATOR);
        this.webManagementRoles.add(basicUserRoleFactory.STOREMANAGER);
        this.webManagementRoles.add(basicUserRoleFactory.WEBMANAGER);
        this.webManagementRoles.add(basicUserRoleFactory.WORKFLOWEDITOR);
        this.webManagementRoles.add(basicUserRoleFactory.VIEWEDITOR);
    }
    getProductManagementRoles() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.productManagementRoles;
    }
    getAdminRoles() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.adminRoles;
    }
    getStoreAdminRoles() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.storeAdminRoles;
    }
    getStoreManagementRoles() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.storeManagementRoles;
    }
    getReviewManagementRoles() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.reviewManagementRoles;
    }
    getCustomerManagementRoles() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.customerManagementRoles;
    }
    getWorkflowManagementRoles() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.workflowManagementRoles;
    }
    getWebManagementRoles() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.webManagementRoles;
    }
    getShippingManagementRoles() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.shippingManagementRoles;
    }
    getAdjusterManagementRoles() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.adjusterManagementRoles;
    }
    getOrderManagementRoles() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.orderManagementRoles;
    }
}
AdminRoleFactory.instance = new AdminRoleFactory();
