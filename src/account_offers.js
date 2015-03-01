
export default class AccountOffers {

  constructor(account, ledger_index, offers) {
    this.account = account,
    this.ledger_index = ledger_index,
    this.offers = offers
  }
  
  static from_rpc_response(response) {
    let result = response.result
    new this(result.account, result.current_ledger_index, result.offers) 
  }
}

