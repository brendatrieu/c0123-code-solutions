/* exported Bank */

function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (!Number.isInteger(balance) || balance <= 0) {
    return null;
  } else {
    var newAcct = new Account(this.nextAccountNumber, holder);
    newAcct.deposit(balance);
    this.accounts.push(newAcct);
    this.nextAccountNumber++;
    return newAcct.number;
  }
};

Bank.prototype.getAccount = function (number) {
  if (this.accounts.filter(acct => acct.number === number).length === 0) {
    return null;
  }
  return this.accounts.filter(acct => acct.number === number)[0];
};

Bank.prototype.getTotalAssets = function () {
  var grandTotal = 0;
  if (this.accounts.length === 0) {
    return grandTotal;
  } else {
    for (var acct of this.accounts) {
      grandTotal += acct.getBalance();
    }
  }
  return grandTotal;
};
