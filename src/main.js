"use strict";

/**
 * Bank Account class
 */
class BankAccount {
    constructor(name) {
        this.name = name;
        this.balance = 0;
    }

    /**
     * Deposit an amount into the account
     */

    deposit(amount) {
        this.balance += amount;
        return this.balance;
    }

    /**
     * Withdraw an amount from the account
     */

    withdraw(amount) {
        if (amount > this.balance) {
            return "Insufficient Funds";
        }else {
            this.balance -= amount;
            return this.balance;
        }
    }

    /**
     * get account balance
     * 
     */

    getBalance() {
        return `${this.name} your account balance is ${this.balance}`;
    }
}


/**
 * Kids Bank Account sub-class that extends bank account class
 */

class KiddiesAccount extends BankAccount {
    constructor (name) {
        super();
        this.name = name;
    }
}

module.exports = {
    BankAccount: BankAccount,
    KiddiesAccount: KiddiesAccount
}