'use strict';


/*
 tried adding this to the 'onPrepare' hook in the protractor conf
 but ran into issues with requiring other modules, so we set up the
 environment here and made sure its the first test run.
 */

describe('Setting up protractor test environment', function () {
    global.protractor.Page = require('./page.js');
    global.protractor.utils = require('./page-utils');
});

