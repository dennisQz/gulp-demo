define(["src/customer/main"], function( Customer ) {

    return {
        init : function () {
            console.log("start...")
            new Customer();
        }
    }
});
