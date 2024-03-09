// Create a simple banking application using Object-Oriented Programming principles in JavaScript. Your application should have the following functionalities:
// Create a BankAccount class with the following properties:
// accountNumber (a unique identifier for each account)
// ownerName
// balance
class BankAccount {
    constructor(accountNumber, ownerName, balance) {
      this.accountNumber = accountNumber;
      this.ownerName = ownerName;
      this.balance = balance;
    }
    // Implement methods within the BankAccount class:
    // deposit(amount): This method should add the specified amount to the balance.
    deposit(amount) {
      this.balance += amount;
      console.log(
        `Deposit of ${amount} successful. New balance: ${this.balance}`
      );
    }
  
    // withdraw(amount): This method should subtract the specified amount from the balance.
    withdraw(amount) {
      if (amount > this.balance) {
        console.log("Insufficient funds");
      } else {
        this.balance -= amount;
        console.log(
          `Withdrawal of ${amount} successful. New balance: ${this.balance}`
        );
      }
    }
    // checkBalance(): This method should return the current balance.
    checkBalance() {
      console.log(`Account balance: ${this.balance}`);
    }
  
    // Abstract for monthly interest
    monthlyInterest() {
      throw new Error("monthlyInterest method must be implemented in subclass");
    }
  }
  
  // Create instances of BankAccount and demonstrate the functionality by depositing and withdrawing amounts from the accounts, and checking the balance.
  
  // instances
  const account1 = new BankAccount(5757584485666, "Kemi Sule", 5000);
  const account2 = new BankAccount(7890124355547, "Bethel Swift", 10000);
  
  //functionalities
  account1.deposit(5000); // Deposit 5000 to account1
  account1.checkBalance(); // Check balance of account1
  account1.withdraw(200); // Withdraw 200 from account1
  account1.checkBalance(); // Check balance of account1
  
  account2.deposit(5000); // Deposit 10000 to account2
  account2.checkBalance(); // Check balance of account2
  account2.withdraw(16000); // Attempt to withdraw more than balance from account2
  
  // Modify the BankAccount class to include an abstract method named monthlyInterest. This method should calculate and return the monthly interest earned by the account. Implement this method in subclasses.
  
  class ModifyAccount extends BankAccount {
    constructor(accountNumber, ownerName, balance, interestRate) {
      super(accountNumber, ownerName, balance);
      this.interestRate = interestRate;
    }
  
    // Implementing monthlyInterest method for ModifyAccount
    monthlyInterest() {
      const monthlyInterest = (this.balance * this.interestRate) / 100;
      console.log(`Monthly interest earned: ${monthlyInterest}`);
      return monthlyInterest;
    }
  }
  
  // For example, let's calculate the interest generated for account3
  
  const account3 = new ModifyAccount(123456, "Betty Andy", 5000, 0.5);
  account3.deposit(1000); // Deposit 1000 to account3
  account3.checkBalance(); // Check balance of account3
  account3.monthlyInterest(); // Calculate and print monthly interest earned
  
  // Create a subclass called SavingsAccount that extends the BankAccount class. Add an additional property interestRate specific to SavingsAccount. Override the monthlyInterest method to calculate the interest earned based on the balance and the interest rate.
  class SavingsAccount extends BankAccount {
    constructor(accountNumber, ownerName, balance, interestRate) {
      super(accountNumber, ownerName, balance);
      this.interestRate = interestRate;
    }
  
    // Override monthlyInterest method for SavingsAccount
    monthlyInterest() {
      const monthlyInterest = (this.balance * this.interestRate) / 100;
      console.log(`Monthly interest earned: ${monthlyInterest}`);
      return monthlyInterest;
    }
  }
  
  // check example below
  const account4 = new SavingsAccount(123456, "John Doe", 5000, 0.5);
  account4.deposit(1000); // Deposit 1000 to account4
  account4.checkBalance(); // Check balance of account4
  account4.monthlyInterest(); // Calculate and print monthly interest earned
  
  // Create another subclass called CurrentAccount that extends the BankAccount class. Implement the monthlyInterest method differently compared to SavingsAccount. For example, you might have a fixed fee deducted from the balance every month.
  
  class CurrentAccount extends BankAccount {
    constructor(accountNumber, ownerName, balance, monthlyFee) {
      super(accountNumber, ownerName, balance);
      this.monthlyFee = monthlyFee;  // dedeucts this amount every month from the account
    }
  
    // Implementing monthlyInterest method for CurrentAccount
    monthlyInterest() {
      console.log(
        `Monthly fee of ${this.monthlyFee} deducted from account balance`
      );
      this.balance -= this.monthlyFee;
    }
  }
  
  // Example
  const account5 = new CurrentAccount(789012, "Jane Obodo", 3000, 50);
  account5.deposit(2000); // Deposit 2000 to account5
  account5.checkBalance(); // Check balance of account5
  account5.monthlyInterest(); // Deduct monthly fee from currentAccount
  account5.checkBalance(); // Check updated balance of currentAccount