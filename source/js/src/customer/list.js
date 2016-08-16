/**
 * Created by dennis on 2016/8/9.
 */
define(["jquery"], function ($) {
    function CustomerList(){
        this.init();
    };
    CustomerList.prototype = {
        init : function () {
            console.log( "CustomerList init...")
            require(["src/customer/addCustomer"], function ( AddCustomer ) {
                new AddCustomer();
            })
        }
    }
    return CustomerList;
})