/**
 * Created by dennis on 2016/8/9.
 */
define(["jquery"], function ($) {
    function Utils(){
        this.init();
    };
    Utils.prototype = {
        init : function () {
            console.log( "util init...")
        }
    }
    return Utils;
})