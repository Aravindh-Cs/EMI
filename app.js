const loanAmountInput = document.querySelector('.amount');
const interestRateInput = document.querySelector('.rate');
const loanTenureInput = document.querySelector('.tenure');

const loanEMIValue = document.querySelector('.loan');
const totalInterestValue = document.querySelector('.interest');
const totalAmountValue = document.querySelector('.total');

const btn = document.querySelector('.submit');
btn.addEventListener('click',calc);

function calc()
{
const loanAmount = parseFloat(loanAmountInput.value);
const interestRate = parseFloat(interestRateInput.value);
const loanTenure = parseFloat(loanTenureInput.value);
const err = document.querySelector('.err');
if(loanAmountInput.value==''|| interestRateInput.value==''|| loanTenureInput.value=='')
{
    err.textContent = 'Enter A Number'
}
else 
{
err.textContent = '';    
const interest = interestRate/12/100;
const numerator = Math.pow(1+interest,loanTenure);
const denominator = numerator-1;

const emi = (loanAmount*interest*numerator)/denominator;
const totalAmount = emi*loanTenure;
const totalInterest = totalAmount-loanAmount;

loanEMIValue.innerHTML ='$'+Math.round(emi);
totalInterestValue.innerHTML ='$'+Math.round(totalInterest);
totalAmountValue.innerHTML ='$'+Math.round(totalAmount);

let xValues = ["Principle", "Interest"];
    let yValues = [loanAmount, Math.floor(totalInterest)];

    let barColors = ["rgb(234, 105, 12)", "rgb(8, 197, 90)"];

    new Chart("loanChart", {
        type: "pie",
        data: {
            labels: xValues,
            datasets:[{
                backgroundColor: barColors,
                data: yValues
            }]
        },
        options: {
            title: {
                display:false,
            }
        }
    });
}
}
calc();