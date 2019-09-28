function carLoanPayment(amount, months, interest) {
    carPayment = amount*(interest(Math.pow(1+interest,months)))/(Math.pow(1+interest,months)-1)
    return carPayment;
}
function homeLoanPayment(num1, num2, num3) {
}

let choice = prompt("Which calculator do you want to use? Car? Home? (use all lowercase) Enter stop to quit.")

i = 0
while (i = 0) {
    if (choice == "car") {
    console.log("car")
    let loanAmount = Number(prompt("What is the car loan amount? ex. 30000"))
    let months = Number(prompt("How many months is the loan for? ex 30"))
    let interest = Number(Prompt("How much is the interest? ex 5.7"))
    print(`A car loan for ${loanAmount} over ${months} months at ${interest}% interest would have a monthly payment of ${carLoanPayment(loanAmount, months, interest)}`)
    }       
    if (choice == "house") {
    }
    if(choice == "stop") {
    console.log("You stoped")
    i += 1
    }
}