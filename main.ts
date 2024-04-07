#! /usr/bin/env node

import inquirer from "inquirer";

let acountBalance = 25000; 

let pinCode = 5454;

console.log("Wellcome to ATM machine");

let pinAnswer = await inquirer.prompt(
    [
       {
           name: "pin",
           message: "Enter your Pin Code",
           type: "number"
       }
    ]
  )
if (pinAnswer.pin === pinCode) {
    console.log("Correct Pin Code!!!");

    const operationAns = await inquirer.prompt(
        [
         {
           name: "operation",
           message: "please select One option ",
           type: "list",
           choices: ["withdraw", "check balance","Fast Cash"]
         }
        ]
     );
     console.log(operationAns);

     if (operationAns.operation === "withdraw") {
        const amountAns = await inquirer.prompt(
         [
           {
              name: "amount",
              message: "Enter your amount you want to withdraw",
              type: "number"
           }
         ]
     );

          acountBalance -= amountAns.amount;

       console.log("your remaining balance is: " + acountBalance);

     } 
     if (operationAns.operation === "check balance") {
        console.log("your Current balance is: " + acountBalance);
     }
      if (operationAns.operation === "Fast Cash") {
        let cash_answer = await inquirer.prompt(
          [
             {
                name: "cash_amount",
                message: "How much money you want to withdraw",
                 type: "list",
                 choices: ["5000","10000","15000"]
             }
          ]
        );

        if(cash_answer.cash_amount === "1000"){
        acountBalance -= cash_answer.cash_amount
        console.log("your remaining balance is:" + acountBalance);
        }

        if(cash_answer.cash_amount ==="2000"){
          acountBalance -= cash_answer.cash_amount
        console.log("your remaining balance is:" + acountBalance);
        }

        if(cash_answer.cash_amount === "3000"){
          acountBalance -= cash_answer.cash_amount
        console.log("your remaining balance is:" + acountBalance);
        }

        if(cash_answer.cash_amount === "4000"){
          acountBalance -= cash_answer.cash_amount
          console.log("your remaining balance is:" + acountBalance);
        }
          if(cash_answer.cash_amount === "5000"){
            acountBalance -= cash_answer.cash_amount
            console.log("your remaining balance is:" + acountBalance);
        }    
      }
      }
        else {
      console.log("Incorrect Pin Code Please Try Again!!");
    }
