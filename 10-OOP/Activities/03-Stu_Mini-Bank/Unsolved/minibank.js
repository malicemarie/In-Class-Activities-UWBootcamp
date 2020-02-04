function MiniBank(balance) {
  this.balance = balance;
  this.statement = [this.balance];
  this.getBalance = () => this.balance;
  this.printBalance = () => console.log(`Balance: ${this.getBalance()}`);
  this.setBalance = balance =>
    console.log(`your new balance is ${this.printBalance()}`);
  this.setBalance = balance => {
    this.balance = balance;
  };
  this.updateStatement = num => this.statement.push(num);
  this.getStatemnts = () => this.statement;
  this.printStatement = () =>
    this.statment.forEach(entry => console.log(entry));
}

const bank = new MiniBank(0);
const bank2 = new MiniBank(9999999999999);
