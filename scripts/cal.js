let totalUnits;

function calTotalunits(){
  let inputElement2 = document.getElementById('investment-amount-input');
let investmentAmount =  Number(inputElement2.value);

let inputElement1 = document.getElementById('token-price-input');
let tokenPrice = Number(inputElement1.value);
  
  if(isNaN(tokenPrice) || isNaN(investmentAmount)){
    document.getElementById('displayTotalunits').innerText = 'Invalid Input';
  }else{
    totalUnits = (investmentAmount / tokenPrice).toFixed(3);
      document.getElementById('displayTotalunits').innerText = `Total Tokens = ${totalUnits}`;
  }
  
}

document.getElementById('caltotalunits-button').addEventListener('click', calTotalunits);

function resetInput(){
 let inputElement1 = document.getElementById('token-price-input');
  inputElement1.value = '';
  
  let inputElement2 = document.getElementById('investment-amount-input');
  inputElement2.value = ''; 
  document.getElementById('displayTotalunits').innerText = `Total Tokens = 0`;
    
}

document.getElementById('reset-input-button').addEventListener('click', resetInput);

function totalProfit() {
  let inputElement3 = document.getElementById('selling-price-input');
  let sellingPrice = inputElement3.value;
  
  if(isNaN(sellingPrice)){
    document.getElementById('displayTotalprofit').innerText = 'Invalid Input';
  }else{
         let inputElement2 = document.getElementById('investment-amount-input');
       let investmentAmount =  Number(inputElement2.value);
    
    let totalSellingAmout;
  totalSellingAmout = totalUnits * sellingPrice;
    let totalProfit;
    totalProfit = (totalSellingAmout - investmentAmount).toFixed(3);
      document.getElementById('displayTotalprofit').innerText = `Total Profit = ${totalProfit}`;
  }
   
}
document.getElementById('totalProfitButton').addEventListener('click',totalProfit);

function resetProfit(){
  let inputElement4 = document.getElementById('selling-price-input');
  inputElement4.value = '';
  document.getElementById('displayTotalprofit').innerText = `Total Profit = 0`;
}
document.getElementById('reset-profit-button').addEventListener('click',resetProfit);