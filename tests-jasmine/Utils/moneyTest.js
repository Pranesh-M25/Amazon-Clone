import{formatCurrency} from '../../scripts/Utils/money.js';

//describe is an inbuit function in jasmine, used to create a suite
describe('Test Suite: FormatCurrency', () => {
  it('converts cents into dollars',() => {
    expect(formatCurrency(2095)).toEqual('20.95');
  }); //it() function creates a single test

  it('works with zero',() => {
    expect(formatCurrency(0)).toEqual('0.00');
  });
  
  it('rounds off to nearest cent', () => {
    expect(formatCurrency(2000.5)).toEqual('20.01');
  });
 
});