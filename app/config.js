// Set the require.js configuration for your application.
require.config({

  // Initialize the application with the main application file.
  deps: ["main"],

  paths: {
    // JavaScript folders.
    libs: "../assets/js/libs",
    plugins: "../assets/js/plugins",
    vendor: "../assets/js/vendor",

    // Libraries.
    jquery: "../assets/js/libs/jquery",
    lodash: "../assets/js/libs/lodash",
    backbone: "../assets/js/libs/backbone",
    handlebars: "../assets/js/libs/handlebars-1.0.0.beta.6",

    // Plugins.
    moment: "../assets/js/plugins/moment.min"
  },

  shim: {
    // Backbone library depends on lodash and jQuery.
    backbone: {
      deps: ["lodash", "jquery"],
      exports: "Backbone"
    },

    lodash: {
      exports: "_"
    },

    handlebars: {
      exports: "Handlebars"
    },

    // Backbone.LayoutManager depends on Backbone and Handlebars
    "plugins/backbone.layoutmanager": ["handlebars", "backbone"]
  }

});
