'use strict';

var _ = require('lodash'),
    pagePrototype = {},
	browserObj;

var Page = function (parent, path) {
    parent = parent || '';

    if (path) {
        var pageObject = require('../pages/' + path + '-page');

        if (pagePrototype[parent]) {
            _.extend(pagePrototype[parent], pageObject);
        } else {
            pagePrototype[parent] = pageObject;
        }
    }

	if (!browserObj) {
		browserObj = browser.get('/');
	}
};

function getElement (type, target) {
    return element(by[type](target));
}

pagePrototype = {
    getTitle : browser.getTitle,
    findBy : {
        css : function (target){ return getElement('css', target); },
        model : function (target){ return getElement('model', target); },
        binding : function (target){ return getElement('binding', target); },
        tagName : function (target){ return getElement('tagName', target); }
    }
};


Page.prototype = pagePrototype;
module.exports = Page;