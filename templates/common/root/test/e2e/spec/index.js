'use strict';

describe('angular-cmelion generator homepage', function () {
    var page = new protractor.Page();

    it('should have an Inquiry Blotter', function () {
        expect(page.getTitle()).toEqual('Sales Link 2');
    });

    it('should have an Inquiry Blotter', function () {
        expect(page.findBy.css('.headerTitle').getText()).toEqual('SALES LINK | MY SUMMARY');
    });

    it('should have an Inquiry Blotter', function () {
        expect(page.findBy.model('vm.clientFilter').getText()).toEqual('');
    });
});

