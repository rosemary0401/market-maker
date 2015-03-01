"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) {
  if (staticProps) Object.defineProperties(child, staticProps);
  if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
};

var _interopRequire = function (obj) {
  return obj && (obj["default"] || obj);
};

var Promise = _interopRequire(require("bluebird"));

var http = _interopRequire(require("superagant"));

var AccountOffers = _interopRequire(require("./account_offers"));

var Order = _interopRequire(require("/.order"));

var rpc_url = "https://s1.ripple.com:51234/";

var Account = (function () {
  function Account(address, secret) {
    this.address = address;
    this.secret = secret;
  }

  _prototypeProperties(Account, null, {
    get_current_offers: {
      value: function getCurrentOffers() {
        var _this = this;
        return new Promise(resolve, function (reject) {
          http.post(rpc_url).send({
            method: "account_offers",
            params: [{
              account: _this.address,
              ledger_index: "current"
            }]
          }).end(function (error, response) {
            if (error) {
              return reject(error);
            }
            resolve(AccountOffers.from_rpc_response(response.body));
          });
        });
      },
      writable: true,
      enumerable: true,
      configurable: true
    },
    submit_order: {
      value: function submitOrder(order) {},
      writable: true,
      enumerable: true,
      configurable: true
    }
  });

  return Account;
})();

module.exports = Account;