'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /view_by_group_search when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/view_by_group_search");
  });


  describe('view_by_group_search', function() {

    beforeEach(function() {
      browser.get('index.html#!/view_by_group_search');
    });


    it('should render view_by_group_search when user navigates to /view_by_group_search', function() {
      expect(element.all(by.css('[ng-view] form')).first().getId()).
        toMatch(/view_by_group_search/);
    });

  });
});
