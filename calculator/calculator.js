window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  } //returning object
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const amnt = document.querySelector('#loan-amount');
  const yrs = document.querySelector('#loan-years');
  const rate = document.querySelector('#loan-rate');

  amnt.value = 50000;
  yrs.value = 10;
  rate.value = 10;

  const obj = {
    amount: amnt.value,
    years: yrs.value,
    rate: rate.value
  }
  
  let monthly = calculateMonthlyPayment(obj);
  updateMonthly(monthly);

}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const amnt = document.querySelector('#loan-amount');
  const yrs = document.querySelector('#loan-years');
  const rate = document.querySelector('#loan-rate');
  let payment;


  const obj = {
    amount: amnt.value,
    years: yrs.value,
    rate: rate.value
  }
  payment = calculateMonthlyPayment(obj);
  if(!payment){
    return;
  }
  
  updateMonthly(payment);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let topFormula = values.amount * (values.rate / 100);
  let botFormula = 1 - (Math.pow(1+(values.rate / 100), -(values.years * 12)));

  console.log(topFormula)
  console.log(botFormula)
  console.log(topFormula/botFormula);

  let monthly = Math.floor((topFormula/botFormula)* 100)/100

  if(isNaN(monthly) || monthly === Infinity ||monthly === undefined||monthly===0 || monthly <0){
    invalidInputs();
    //throw new Error('Not valid inputs!');
    return false;
  }

  return monthly;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
    const monthlyPayment = document.querySelector('#monthly-payment');
    monthlyPayment.innerText = '$' + monthly;
}

function invalidInputs() {
  const monthlyPayment = document.querySelector('#monthly-payment');
  monthlyPayment.innerText = 'Please submit valid inputs.';
}
