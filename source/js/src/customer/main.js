/**
 * Created by dennis on 2016/8/9.
 */
define(["jquery","src/customer/list" ], function ($, CustomerList ) {
    function CustomerMain( ){
        this.init();
    };
    CustomerMain.prototype = {
        init : function () {
            console.log( "CustomerMain init...")
            new CustomerList();
        }
    }
    return CustomerMain;
})