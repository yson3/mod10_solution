(function() {
    "use strict";
    angular.module('public').controller('CustomerController', CustomerController);

    CustomerController.$inject = ['customer'];

    function CustomerController(customer) {
        var ctrl = this;
        ctrl.customer = customer;
        ctrl.saved = !angular.equals(customer, {});
    }
})();