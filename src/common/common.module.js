(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://yson3-course-5.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
