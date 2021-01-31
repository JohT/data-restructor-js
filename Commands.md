# Commands

Overview of the commands to test, run and build this project as well as those that were used to setup it.

## Commands to test, run and build the project:
- `npm run coverage` Run all unit tests (using jasmine) **with** reporting coverage (using nyc/istanbul)
- `npm test` Only all unit tests (using jasmine) **without** coverage report
- `npm run dev` Builds the application for development (without minification) and starts the live server
- `npm run build` Builds the application for production including minification,...

## Commands used to setup the project:
- `npm init` Initialize node package manager, creates `package.json` file.
- `npm install jasmine --save-dev` Adds jasmine unit test framework as development dependency.
- `npx jasmine init` Initializes jasmine, creates `spec/support/jasmine.json` file.
- `npm install parcel-bundler --save-dev` Adds parcel-bundler as development dependency.
- `npm install nyc --save-dev` Setup code coverage reports (successor of"istanbul")

## Further steps:
- TODO should get SpecRunner.html up and running in dev mode like: "dev": "parcel ./test/js/SpecRunner.html"

## References
 * [Parcel - Getting Started](https://parceljs.org/getting_started.html)
 * [Jasmine - Using Jasmine with node](https://jasmine.github.io/setup/nodejs.html)
 * [Istanbul/nyc - Installation & Usage](https://github.com/istanbuljs/nyc#installation--usage)

