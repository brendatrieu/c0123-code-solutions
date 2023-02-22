/* exported Account */

function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (!Number.isInteger(amount) || amount <= 0) {
    return false;
  } else {
    this.transactions.push(new Transaction('deposit', amount));
    return true;
  }
};

Account.prototype.withdraw = function (amount) {
  if (!Number.isInteger(amount) || amount <= 0) {
    return false;
  } else {
    this.transactions.push(new Transaction('withdrawal', amount));
    return true;
  }
};

Account.prototype.getBalance = function () {
  var totalBal = 0;
  if (this.transactions.length === 0) {
    return totalBal;
  }
  for (var txn = 0; txn < this.transactions.length; txn++) {
    if (this.transactions[txn].type === 'deposit') {
      totalBal += this.transactions[txn].amount;
    } else {
      totalBal -= this.transactions[txn].amount;
    }
  }
  return totalBal;
};
