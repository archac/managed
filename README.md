# Managed

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Running node tests

Run `mocha server/test` to execue the node js tets

## Building documentation

Run `npm run compodoc` to build compodoc documentation

# Technologies used

## NgXs
NgXs state management for Angular. Used for decoupling data access / retrieval throughout the application.

## Compodoc
Documentation generator that fits nicely within the Angular ecosystem. Used to generate a familiar looking set of documentation

## Express
Used as it is a very popular lightweight web framework for nodejs that provides all the features needed along with good community support.

## HelmetJS
Provides out of the box security middleware layer for Express.

# Future improvements
Time permitting, improvements that I would have made to this application are as follows.

## Node unit testing
I would have researched methods of mocking out controllers so that proper unit tests could be written. As at the moment the tests are essentially integration tests.

## Front End Config
I would have written a better implementation for accessing the config instead of having to request it from the service right before using it. I would either use a route resolver or cache the config after the first time it is loaded to prevent further http requests

## Front end Mocks
I would have created common mocks for each service, so there is no code duplication. Following the DRY principle

## End to end testing
I would have setup a wiremock server for proper end to end testing
