require.config(CONFIG.REQUIRE_CONFIG);
require([
    'jquery',
    'underscore',
    'backbone',
    'text'
], function($, _, Backbone) {
    "use strict";
    // HBY.fw7 = new Framework7(CONFIG.FW7_CONFIG || {});
    // FastClick.attach(document.body);
    require(['src/main/app'] , function ( app ) {
        app.init();
    });
});
