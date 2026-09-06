/* Generated Code Do Not Modify */
import { Object } from '../../../../../java/lang/Object.js';
//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class SqlStrings extends Object {
    constructor() {
        super(...arguments);
        this.CREATE_DATABASE = "CREATE DATABASE ";
        this.DROP_TABLE = "DROP TABLE ";
        this.CREATE_TABLE = "CREATE TABLE ";
        this.START = " (";
        this.SELECT = "SELECT ";
        this.FROM = " FROM ";
        this.SELECT_ALL = "SELECT *";
        this.WHERE = " WHERE ";
        this.AND = " AND ";
        this.UPDATE = "UPDATE ";
        this.SET = " SET ";
        this.SELECT_ALL_FROM = this.SELECT_ALL + this.FROM;
        this.DELETE = "DELETE";
        this.LIKE_QUOTE = " LIKE \"";
        this.INSERT_INTO = "INSERT INTO ";
        this.VALUES = " VALUES ('";
        this.ORDER_BY = "ORDER BY";
        this.COUNT = "COUNT(";
        this.ASC = "ASC";
        this.DESC = "DESC";
        this.PRIMARY_KEY = "PRIMARY KEY(";
        this.END = ") )";
        this.EQUAL_QUOTE = " = \"";
        this.CLOSE_QUOTE = CommonSeps.getInstance().QUOTE;
        this.EQUAL_QUOTE_NO_SPACE = "=\"";
        this.ESCAPE = "\\";
        this.DOUBLE_ESCAPE = "\\\\";
        this.MORE_THAN_QUOTE = " > \"";
        this.LESS_THAN_QUOTE = " < \"";
        this.SINGLE_QUOTE_COMMA_SEP = "','";
        this.ID = "ID";
        this.SQL_STATEMENT_LABEL = "SQL Statement: ";
        this.COLUMN_VALUE = "\nColumn Value: ";
        this.CREATE_RETURN = " Created Successfully";
        this.FIELD_VALUE = "\nField Value: ";
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return SqlStrings.instance;
    }
}
SqlStrings.instance = new SqlStrings();
