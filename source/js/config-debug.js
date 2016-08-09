CONFIG.REQUIRE_CONFIG = {
    baseUrl: jsLib+ "js",
　　paths: {
　　　　　　"jquery": "lib/jquery/jquery-2.2.1.min",
　　　　　　"underscore": "lib/backbone/underscore",
　　　　　　"backbone": "lib/backbone/backbone",
            text: 'lib/require/text',
　　},
　　shim: {
　　　　　　'underscore':{
　　　　　　　　exports: '_'
　　　　　　},
　　　　　　'backbone': {
　　　　　　　　deps: ['underscore', 'jquery'],
　　　　　　　　exports: 'Backbone'
　　　　　　}
　　}
}