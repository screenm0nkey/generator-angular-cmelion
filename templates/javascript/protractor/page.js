'use strict';

var pageObject = {
	openMyModal : function() {
		protractor.utils.openModalFromDropdownMenuItem({
			css: '.actions-menu-component',
			tagName: 'span',
			itemText: 'Settings'
		});

		return pageObject.modalActions;
	},

	modalActions : {
		isOpen : function () {
			return protractor.utils.isModalOpen();
		}
	}
};

module.exports = pageObject;