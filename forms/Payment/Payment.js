function carLoanPayment(amt, mnt, rate) {
    let newRate = (rate / 100 ) / 12
    return (amt*(newRate * (Math.pow(1+newRate,mnt)))/(Math.pow(1+newRate,mnt)-1));
}
function homeLoanPayment(amt2, mnt2, rate2) {
    let newRate2 = (rate2 / 100 ) / 12
    let newMnt2 = -Math.abs(mnt2 *12)
    return ((newRate2 * amt2) / (1 - (Math.pow(1 + newRate2,newMnt2))));
}

let choice = prompt("Which calculator do you want to use? Car? Home? (use all lowercase) Enter stop to quit.")


while (choice == "car" || choice == "home" || choice == "stop") {
    if (choice == "car") {
        console.log("car")
        let loanAmount = Number(prompt("What is the car loan amount? ex. 30000"))
        let months = Number(prompt("How many months is the loan for? ex 60"))
        let interest = Number(prompt("How much is the interest? ex 3.2"))
        let payment = Math.round(carLoanPayment(loanAmount, months, interest) * 100) / 100
        alert(`A car loan for $${loanAmount} over ${months} months at ${interest}% interest would have a monthly payment of $${payment}`)
        choice = prompt("Which calculator do you want to use? Car? Home? (use all lowercase) Enter stop to quit.")
    }       
    if (choice == "home") {
        let loanHouseAmount = Number(prompt("What is the home loan amount? ex. 200000"))
        let houseMonths = Number(prompt("How many years is the loan for? Only 15 or 30 years."))
        let houseInterest = Number(prompt("How much is the interest? ex 5.7"))
        let housePayment = Math.round(homeLoanPayment(loanHouseAmount, houseMonths, houseInterest) * 100) / 100
        alert(`A home loan for $${loanHouseAmount} over ${houseMonths} years at ${houseInterest}% interest would have a monthly payment of $${housePayment}`)
        choice = prompt("Which calculator do you want to use? Car? Home? (use all lowercase) Enter stop to quit.")
    }
    if (choice == "stop") {
        alert("You stopped the program.")
        break;
    }
}