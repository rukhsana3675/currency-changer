import inquirer from 'inquirer';
const Currency = {
    USD: 1, //Base currency
    EUR: 0.91,
    GPB: 0.76,
    INR: 74.75,
    PKR: 280,
};
let user_answer = await inquirer.prompt([
    {
        name: 'from',
        message: "Enter From Currency",
        type: 'list',
        choices: ['USD', 'EUR', 'GPB', 'INR', 'PKR']
    },
    {
        name: 'to',
        message: "Enter To Currency",
        type: 'list',
        choices: ['USD', 'EUR', 'GPB', 'INR', 'PKR']
    },
    {
        name: 'amount',
        message: 'Enter Your Amount',
        type: 'number',
    }
]);
let fromAmount = Currency[user_answer.from];
let toAmount = Currency[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount; // USD base currency
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
// console.log(fromAmount);
// console.log(toAmount);
// console.log(amount);
