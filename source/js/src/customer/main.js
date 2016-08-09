/**
 * Created by dennis on 2016/8/9.
 */
define(["jquery"], function ($) {
    function CustomerMain(){
        this.init();
    };
    CustomerMain.prototype = {
        init : function () {
            console.log( "CustomerMain init...")
        }
    }
    return CustomerMain;
})