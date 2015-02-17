'use strict';

var pageObject = {

	actionsMenu : {

		openClientList : function () {
			protractor.utils.clickOnDropdownMenuItem({
				css: '.actions-menu-component',
				tagName: 'span',
				itemText: 'Clients List'
			});

			return pageObject.actionsMenu.clientList;
		},

		clientList : {
			isOpen : function () {
				return protractor.utils.elementHasAttribute({
					css : '.clients-menu-component',
					attr : 'list-visible',
					attrVal : 'true'
				});
			}
		},

		openSettings : function () {
			protractor.utils.openModalFromDropdownMenuItem({
				css: '.actions-menu-component',
				tagName: 'span',
				itemText: 'Settings'
			});

			return pageObject.actionsMenu.settings;
		},

		settings : {
			close : function () {
				return protractor.utils.closeModal()
			},

			isOpen : function () {
				return protractor.utils.isModalOpen();
			},

			isClosed : function () {
				return protractor.utils.isModalClosed();
			},

			hasBloombergLink: function(){
				return protractor.utils.findItemInNgRepeat({
					ngRepeat: 'settings in vm.userSettings',
					tagName: 'a',
					itemText: 'Bloomberg'
				})
			},

			bloombergPanelOptions: function(){
				return protractor.utils.getItemCount({
					modelName: 'vm.bloombergPanel',
					css: 'option'
				})
			}
		}
	}
};

module.exports = pageObject;