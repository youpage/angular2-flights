# Angular 2 RC6

Flight search results from JSON API
- Bootstrap
- Basic Routing 
- Data Service to retrive data from API
- Display Component
    - pipe/filter by flight number
    - pipe/filter by price lowe than entered value
    - animated header on scroll event
    - calculate and make visible the higher and lower price
    - Item Component for each flight
- Details Component
- CSS3 + Flex
- Jasmine + Karma Unit tests
    - Data Service
    - App Component
    - more to come
- Coverage Report

## Getting Started

Begin by cloning the repository.

Use npm to get dependencies:

`npm install`

Install typings

`typings install`

### Build

The build step invokes the TypeScript compiler to create ES5 javascript
files and source maps from the `.ts` files. Run with:

`npm run build`

You can examine the configuration for the TypeScript compiler in `tsconfig.json`.
The generated files are output in the `built/` folder.

To remove all generated files, run:

`npm run clean`.

### Watch

The watch step can be run with:

`npm run watch`

This runs the TypeScript compiler with the additional `--watch` flag, which 
sets up a persistent process that recompiles new `.js` files whenever a `.ts`
file changes.

Run this process indefinitely in a different tab or in the background, since
the following commands will use it.

### Serve

To see the app, run

`npm run serve`

and navigate to `localhost:9090/built/`.

### Test

I used Karma with the Jasmine test framework to run unit tests. Try them with

`npm run test`

This will start a persistent process which will re-run tests whenever the `.js`
compiled files are changed. If you have the watch process running, that will
trigger the tests to run whenever you change the `.ts` source files.

You can see the Karma configuration at `karma.conf.js`. A few things are notable:

 - It grabs Angular by including the `angular2` and `testing.js` files from
 `node_modules/angular2/bundles/`.

 - The compiled JavaScript files at `src/**/*.js` are served and watched but _not_ included.
 This means that Karma will not run them automatically.

 - To get file imports to work correctly in Karma, we must include `systemjs`
 from the node_modules folder, as well as the helper file `karma-test-shim.js`.
 This shim file uses System.js to load the JavaScript files which Karma served
 but did not automatically run.

 - It will generat a Coverage report in the Coverage folder - run index.html from there
 
