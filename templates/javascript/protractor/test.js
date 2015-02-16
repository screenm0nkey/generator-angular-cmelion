'use strict';

describe('Description here for <%=moduleName%>', function(){
	var page = new protractor.Page('<%=moduleName%>', '<%= targetPath %>');

	it('should do something', function(){
		var modal = page.<%=moduleName%>.openMyModal();

		expect(modal.isOpen()).toBeTruthy();
	});
});

