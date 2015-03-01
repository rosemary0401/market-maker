"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) {
  if (staticProps) Object.defineProperties(child, staticProps);
  if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
};

var AccountOffers = (function () {
  function AccountOffers(account, ledger_index, offers) {
    this.account = account, this.ledger_index = ledger_index, this.offers = offers;
  }

  _prototypeProperties(AccountOffers, {
    from_rpc_response: {
      value: function fromRpcResponse(response) {
        var result = response.result;
        new this(result.account, result.current_ledger_index, result.offers);
      },
      writable: true,
      enumerable: true,
      configurable: true
    }
  });

  return AccountOffers;
})();

module.exports = AccountOffers;