(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

function SignupController() {
  var reg = this;

  reg.submit = function () {
    reg.completed = true;
  };
}

})();

