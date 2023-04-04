
// accepts 'tipAmt', 'billAmt', 'tipPercent' and sums total from allPayments objects
function sumPaymentTotal(type) {
  let total = 0;

  for (let key in allPayments) {
    let payment = allPayments[key];

    total += Number(payment[type]);
  }

  return total;
}

// converts the bill and tip amount into a tip percent
function calculateTipPercent(billAmt, tipAmt) {
  return Math.round(100 / (billAmt / tipAmt));
}

// expects a table row element, appends a newly created td element from the value
function appendTd(tr, value) {
  let newTd = document.createElement('td');
  newTd.innerText = value;

  tr.append(newTd);
}

//expects parent tr, appends button with event listener that deletes tr
function appendDeleteBtn(tr){
  let btn = document.createElement('button')
  // let td = document.createElement('td')

  btn.innerText = 'X'

  btn.addEventListener('click',function(){
    let id = btn.parentElement.getAttribute('id');
    if(allPayments[id]) delete allPayments[id];
    if(allServers[id]) delete allServers[id];

    btn.parentElement.remove();
    updateServerTable();
    updateSummary();
  })

  
  tr.append(btn);

  
}
