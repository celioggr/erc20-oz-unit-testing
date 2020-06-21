# tokenZoo-oz-unit-testing
Test real world contracts using Openzeppelin unit testing dataset

## Dependencies

For this test setup, following are the modules being used and its versions.
> :warning: **oz/test-environment** does not support solidity-coverage yet. Using it will produce wrong coverage data!

* openzeppelin/test-helpers@0.5.5
* mocha@7.1.1
* chai@4.2.0

## Test environment setup

setup_env script will create a truffle project, a npm package to accomodate and install locally the above modules.

### Manual steps are required after script execution

~~Edit *package.json*~~

    "scripts": {
    -  "test": "npx truffle test"
    +  "test": "npx mocha --exit --recursive"
    }
    
Edit *truffle-config.js*
    
    / package.json
    mocha: {
    // timeout: 100000
    },
    + plugins: ["solidity-coverage"],
    
# Usage

Some commands commonly used.

##### Run test coverage 
    npx truffle run coverage 
##### Run tests
    npm test
##### Compile
    npm truffle compile
