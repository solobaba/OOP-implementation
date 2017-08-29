"use strict";
const expect = require('chai').expect;
const myApp = require('../test.js');
const BankAccount = require('../test.js').BankAccount;
const KiddiesAccount = require('../test.js').KiddiesAccount;

describe('Object Oriented Programming', ()=>{

    describe('Create an instance of a class', () => {
        it('Create an instance of the BankAccount class when instanciated', () => {
            let solomon = new BankAccount('solomon');
            let isTypeOf = solomon instanceof BankAccount;
            expect.equal(isTypeOf, true);
        });
        it('Create an instance of the Kiddies BankAccount class when instanciated', () => {
            let solomon = new KiddiesAccount('solomon');
            let isTypeOf = solomon instanceof KiddiesAccount;
            expect.equal(isTypeOf, true);
        });
    });

    describe('Return properties of a class', ()=>{
        it('Should return the account balance when deposit is made', () => {
            let solomon = new BankAccount('solomon');
			expect.equal(solomon.deposit(5000), 5000);
        });
        it('Should return insufficient funds if amount less than balance is withdrawn', () => {
            let solomon = new BankAccount('solomon');
			expect.equal(solomon.withdraw(60000), "Insufficient Funds");
        });
        it('Should return balance when withdrawal is made', () => {
            let solomon = new BankAccount('solomon');
            solomon.deposit(50000);
			expect.equal(solomon.withdraw(6000), 44000);
        });
        it('Should return balance when getBalance is invoked', () => {
            let solomon = new BankAccount('solomon');
            solomon.deposit(5000)
			expect.equal(solomon.getBalance(), 'solomon your account balance is 5000');
        });
    });

    describe('Check for implementation of inheritance', () => {
        it('instance should have a balance of 0', () => {
            let solomon = new KiddiesAccount('solomon');
            expect.equal(solomon.getBalance(), "solomon your account balance is 0");
        });
    })
})