function carLoanPayment(amt, mnt, rate) {
    let newRate = (rate / 100 ) / 12
    return (amt*(newRate * (Math.pow(1+newRate,mnt)))/(Math.pow(1+newRate,mnt)-1));
}
function homeLoanPayment(num1, num2, num3) {
}

let choice = prompt("Which calculator do you want to use? Car? Home? (use all lowercase) Enter stop to quit.")


while (choice == "car" || choice == "house" || choice == "stop") {
    if (choice == "car") {
        console.log("car")
        let loanAmount = Number(prompt("What is the car loan amount? ex. 30000"))
        let months = Number(prompt("How many months is the loan for? ex 30"))
        let interest = Number(prompt("How much is the interest? ex 5.7"))
        let payment = Math.round(carLoanPayment(loanAmount, months, interest) * 100) / 100
        alert(`A car loan for ${loanAmount} over ${months} months at ${interest}% interest would have a monthly payment of ${payment}`)
        choice = prompt("Which calculator do you want to use? Car? Home? (use all lowercase) Enter stop to quit.")
    }       
    if (choice == "house") {
    
    }
    if (choice == "stop") {
        alert("You stopped.")
        break;
    }
}