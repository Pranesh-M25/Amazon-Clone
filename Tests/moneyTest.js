import {formatCurrency} from "../scripts/Utils/money.js";

console.log('Test Suite: FormatCurrency');

console.log('1.Converts cents to dollars');

if(formatCurrency(2095) === '20.95'){
  console.log('passed');
}else{
    console.log('failed')
} //basic test case

console.log('2.Works with zero');

if(formatCurrency(0) === '0.00'){
  console.log('passed');
} else {
  console.log('failed')
} //edge test case(tricky)

console.log('3.Rounding up to nearest cent');

if(formatCurrency(2000.5) === '20.01'){
  console.log('passed');
} else {
  console.log('failed')
} //edge test case(tricky)

console.log('4.Rounding up to nearest cent');

if(formatCurrency(2000.4) === '20.00'){
  console.log('passed');
} else {
  console.log('failed')
} //edge test case(tricky)