/* Generated Code Do Not Modify */
import { Object } from '../../../../../java/lang/Object.js';
import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
import { CommonSeps } from '../../../../../org/allbinary/string/CommonSeps.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
export class SqlTypeStrings extends Object {
    constructor() {
        super(...arguments);
        this.CHAR_COLUMN = "VARCHAR";
        this.INT_COLUMN = "VARCHAR";
        this.MAX_SIZE = "(255)";
        this.SIXTY_SIZE = "(60)";
        this.NOT_NULL = "NOT NULL";
        this.ONE_SIZE = "(1)";
        this.TWO_SIZE = "(2)";
        this.THREE_SIZE = "(3)";
        this.SIX_SIZE = "(6)";
        this.ELEVEN_SIZE = "(11)";
        this.TWELVE_SIZE = "(12)";
        this.ONE_KB_CHAR_COLUMN = new StringMaker().append(CommonSeps.getInstance().SPACE).append(CHAR_COLUMN).append("(1024)").append(CommonSeps.getInstance().COMMA_SEP).toString();
        this.MAX_CHAR_COLUMN = new StringMaker().append(CommonSeps.getInstance().SPACE).append(CHAR_COLUMN).append(MAX_SIZE).append(CommonSeps.getInstance().COMMA_SEP).toString();
        this.MAX_CHAR_COLUMN_NOT_NULL = new StringMaker().append(CommonSeps.getInstance().SPACE).append(CHAR_COLUMN).append(MAX_SIZE).append(CommonSeps.getInstance().SPACE).append(NOT_NULL).append(CommonSeps.getInstance().COMMA_SEP).toString();
        this.SIXTY_CHAR_COLUMN_NOT_NULL = new StringMaker().append(CommonSeps.getInstance().SPACE).append(CHAR_COLUMN).append(SIXTY_SIZE).append(NOT_NULL).append(CommonSeps.getInstance().COMMA_SEP).toString();
        this.ONE_CHAR_COLUMN_NOT_NULL = new StringMaker().append(CommonSeps.getInstance().SPACE).append(CHAR_COLUMN).append(ONE_SIZE).append(NOT_NULL).append(CommonSeps.getInstance().COMMA_SEP).toString();
        this.SIX_CHAR_COLUMN_NOT_NULL = new StringMaker().append(CommonSeps.getInstance().SPACE).append(CHAR_COLUMN).append(SIX_SIZE).append(NOT_NULL).append(CommonSeps.getInstance().COMMA_SEP).toString();
        this.TWELVE_CHAR_COLUMN_NOT_NULL = new StringMaker().append(CommonSeps.getInstance().SPACE).append(CHAR_COLUMN).append(this.TWELVE_SIZE).append(NOT_NULL).append(CommonSeps.getInstance().COMMA_SEP).toString();
        this.TWO_INT_NOT_NULL = " INT(2) NOT NULL, ";
        this.THREE_INT_NOT_NULL = " INT(3) NOT NULL, ";
        this.FOUR_INT_NOT_NULL = " INT(4) NOT NULL, ";
        this.MAX_INT_NOT_NULL = " INT(11) NOT NULL, ";
        this.MAX_INT_UNSIGNED = " INT(11) UNSIGNED, ";
        this.MAX_INT_UNSIGNED_NOT_NULL = " INT(11) UNSIGNED NOT NULL, ";
        this.MAX_BIG_INT_NOT_NULL = " BIGINT(19) NOT NULL, ";
        this.MAX_BIG_INT_UNSIGNED = " BIGINT(19) UNSIGNED, ";
        this.MAX_BIG_INT_UNSIGNED_NOT_NULL = " BIGINT(19) UNSIGNED NOT NULL, ";
        this.MAX_BIG_INT_UNSIGNED_AUTO_INCREMENT_NOT_NULL = " BIGINT(19) UNSIGNED AUTO_INCREMENT NOT NULL,";
        this.LONG_BLOB = " LONGBLOB, ";
        this.BLOB = " BLOB, ";
        this.BLOB_NOT_NULL = " BLOB NOT NULL, ";
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return SqlTypeStrings.instance;
    }
}
SqlTypeStrings.instance = new SqlTypeStrings();
