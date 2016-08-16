/**
 * Created by dennis on 2016/8/9.
 */
define(["jquery"], function ($) {
    function AddCustomer(){
        this.init();
    };
    AddCustomer.prototype = {
        init : function () {
            console.log( "AddCustomer init...")
        }
    }
    return AddCustomer;
})