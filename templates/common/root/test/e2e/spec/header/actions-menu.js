'use strict';

describe('Header - Actions menu', function(){
	var page = new protractor.Page('header', 'header/actions-menu');

	it('should show settings modal when link is selected', function(){
		var modal = page.header.actionsMenu.openSettings();

		expect(modal.isOpen()).toBeTruthy();
		expect(modal.hasBloombergLink()).toBeTruthy();
		expect(modal.bloombergPanelOptions()).toBe(4);
		modal.close();
		expect(modal.isClosed()).toBeTruthy();
	});


	it('should show Client List side bar when link is selected ', function(){
		var clientList = page.header.actionsMenu.openClientList();
		expect(clientList.isOpen()).toBeTruthy();
	});
});




