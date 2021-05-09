describe('The menu service', function () {

  var menuservice;
  var $httpBackend;
  var ApiPath;

  beforeEach(function () {
    module('common');

    inject(function ($injector) {
      menuservice = $injector.get('MenuService');
      $httpBackend = $injector.get('$httpBackend');
      ApiPath = $injector.get('ApiPath');
    });
  });

  it('should return searched menu', function() {
    $httpBackend.whenGET(ApiPath + '/menu_items/' + 'L16.json').respond([{"id": "208", "short_name": "L16"}]);
    menuservice.getMenuItem('L16').then(function(response) {
      expect(response.data).toEqual([{"id": "208", "short_name": "L16"}]);
    });
    $httpBackend.flush();
  });

});
