module.exports = function(config) {
  config.set({

    basePath: '',

    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-coverage'),
      require('karma-jasmine-html-reporter')
    ],

    frameworks: ['jasmine'],

    files: [
      // Polyfills.
      'node_modules/core-js/client/shim.min.js',

      'node_modules/reflect-metadata/Reflect.js',

      // System.js for module loading
      'node_modules/systemjs/dist/system-polyfills.js',
      'node_modules/systemjs/dist/system.src.js',

      // Zone.js dependencies
      'node_modules/zone.js/dist/zone.js',
      'node_modules/zone.js/dist/proxy.js',
      'node_modules/zone.js/dist/sync-test.js',
      'node_modules/zone.js/dist/jasmine-patch.js',
      'node_modules/zone.js/dist/async-test.js',
      'node_modules/zone.js/dist/fake-async-test.js',

      // RxJs.
      { pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false },
      { pattern: 'node_modules/rxjs/**/*.js.map', included: false, watched: false },


      {pattern: 'karma-test-shim.js', included: true, watched: true},
      {pattern: 'built/app/test/matchers.js', included: true, watched: true},

      // paths loaded via module imports
      // Angular itself
      {pattern: 'node_modules/@angular/**/*.js', included: false, watched: true},
      {pattern: 'node_modules/@angular/**/*.js.map', included: false, watched: true},

      // Our built application code
      {pattern: 'built/**/*.js', included: false, watched: true},

      // paths loaded via Angular's component compiler
      // (these paths need to be rewritten, see proxies section)
      {pattern: 'built/**/*.html', included: false, watched: true},
      //{pattern: 'built/**/*.css', included: false, watched: true},

      // paths to support debugging with source maps in dev tools
      {pattern: 'src/**/*.ts', included: false, watched: false},
      {pattern: 'built/**/*.js.map', included: false, watched: false}
    ],

    // proxied base paths
    proxies: {
      // required for component assests fetched by Angular's compiler
      "/built/app/": "/base/built/app/"
    },
    preprocessors: { 'built/**/!(*spec).js': ['coverage'] },
    reporters: ['progress', 'kjhtml', 'coverage'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  })
}
