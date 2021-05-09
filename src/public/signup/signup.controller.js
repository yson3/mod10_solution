(function() {
    "use strict";
    angular.module('public')
    .controller('SignupController', SignupController);

    SignupController.$inject = ['CustomerService', 'MenuService', 'ApiPath'];

    function SignupController(CustomerService, MenuService, ApiPath) {
        var ctrl = this;
        ctrl.dishSearched = false;
        ctrl.customer = {};
        ctrl.saved = false;
        ctrl.saveAttempted = false;
        ctrl.validShortName = false;

        ctrl.saveCustomer = function() {
            if (!ctrl.validShortName) {
                ctrl.saved = false;
            } else {
                ctrl.saved = true;
                CustomerService.saveCustomer(ctrl.customer);
            }
            ctrl.saveAttempted = true;
        };

        ctrl.validateShortName = function() {
            ctrl.validShortName = false;
            ctrl.dishSearched = false;

            MenuService.getMenuItem(ctrl.customer.favoriteDish).then(
                // success
                function(response) {
                    ctrl.customer.MenuItem = response.data;
                    ctrl.validShortName = true;
                    ctrl.dishSearched = true;
                },
                // failure
                function(response) {
                    ctrl.dishSearched = true;
                }
            );
        };
    }
})();