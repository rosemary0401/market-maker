import Promise       from 'bluebird'
import http          from 'superagant'
import AccountOffers from './account_offers'
import Order         from '/.order'

const rpc_url  = 'https://s1.ripple.com:51234/'

export default class Account {

  constructor(address, secret) {
    this.address = address
    this.secret  = secret
  }

  get_current_offers() {
    return new Promise(resolve, reject => {
    http
      .post(rpc_url)
      .send({
        method: 'account_offers',
        params: [{
          account: this.address,
          ledger_index: 'current'
        }]
      })
      .end(function(error, response) {
        if (error) { return reject(error) }
        resolve(new AccountOffers(response.body))
      })
    })
  }

  submit_order(order) {

  }
}

