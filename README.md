
# Managed

  

## Starting the App

The app requires a Mongodb server to be running, and should be seeded with data that follows the schema of `server/models/name.model.js`

### Configuration
There are two configuration files. The ui configuration file can be found at `src/assets/config.json`.
The default is as follows:

    {
        "endpoint": "https://localhost:8443",
        "paths": {
    	    "names": "/names" 
        } 
    }
The API configuration file can be found at `server/config/config.js`.
The default is as follows:

    const config  = {
    	port:  8443,
    	mongoHost:  "mongodb://localhost:27017"
    };

### Starting the UI and API
Run `npm start`. This will execute `ng serve` on the default port (4200) with SSL enabled.

Run `node server/index.js`. This will start the API on the configured port. 

## Testing & Documentation

### Testing

Run `ng e2e` to execute the end-to-end tests on the UI.
Run `ng test` to execute the unit tests on the UI.
Run `mocha server/test` to execute the unit tests on the API. This requires mocha to be installed through npm.
 

### Building documentation
Documentation can be built for the UI using `npm run compodoc`.

  
## Key Technologies used

  

### NgXs
NgXs state management for Angular. Used for decoupling data access / retrieval throughout the application. State management is important in keeping the application scaleable and testable while providing simplified access to data across the application

### SASS
SASS is a rich and scaleable extension language for CSS, that is fully compatible with vanilla CSS. It's useful for keeping the style clean and manageable over time, while providing features that cut down on boiler plate and enable code reuse

### Compodoc

Documentation generator that fits nicely within the Angular ecosystem. Used to generate a familiar looking set of documentation for the UI with next to no work involved.

### Express

Used as it is a very popular lightweight web framework for nodejs that provides all the features needed for creating a secure API. Express is one of the most used frameworks for Node APIs and has the community support to show for it.

### HelmetJS

Provides out of the box security middleware layer for Express. This is good for enabling standardised security features safely.

  
## Future improvements
Time permitting, improvements that I would have made to this application are as follows.

### Node unit testing
I would have researched methods of mocking out controllers so that proper unit tests could be written. As at the moment the tests are essentially integration tests.

### Front End Config
I would have written a better implementation for accessing the config instead of having to request it from the service right before using it. I would either use a route resolver or cache the config after the first time it is loaded to prevent further http requests

### Front end Mocks
I would have created common mocks for each service, so there is no code duplication. Following the DRY principle

### End to end testing
I would have setup a wiremock server for proper end to end testing. Wiremock also helps with data model integrity as a change to the data model will cause tests using the wiremock server to fail.

### Api documentation
I would have used swagger throughout the whole API as this makes documenting and creating the API one and the same. Swagger also has the benefit of generating an interactive documentation website.