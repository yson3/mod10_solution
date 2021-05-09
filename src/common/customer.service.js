(function() {
    "use strict";
    angular.module('common').service('CustomerService', CustomerService);

    CustomerService.$inject = [];

    function CustomerService() {
        var service = this;
        service.customer = {};

        service.saveCustomer = function(customer) {
            service.customer = customer;
        };

        service.getCustomer = function() {
            return service.customer;
        };
    }
})();