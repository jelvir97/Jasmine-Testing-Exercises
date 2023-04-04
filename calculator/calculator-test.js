
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({amount:7000, years:30, rate:4})).toEqual(280);
  expect(calculateMonthlyPayment({amount:3000, years:2, rate:2})).toEqual(158.61);
  expect(calculateMonthlyPayment({amount:50000, years:15, rate:5})).toEqual(2500.38)
});

it('should return false if not valid imputs', function () {
  expect(calculateMonthlyPayment({amount:7000, years:' ', rate:4})).toEqual(false);
  expect(calculateMonthlyPayment({amount:3000, years:-1, rate:2})).toEqual(false);
  expect(calculateMonthlyPayment({amount:0, years:15, rate:5})).toEqual(false);
  expect(calculateMonthlyPayment({amount:7000, years:15, rate:'not a num'})).toEqual(false);
  expect(calculateMonthlyPayment({amount:7000, years:'not a num', rate:5})).toEqual(false);
});


it("should return a result with 2 decimal places", function() {
  // should be equal to three to account for decimal in string
  expect(calculateMonthlyPayment({amount:7000, years:15, rate:4}).toString().length - Math.floor(calculateMonthlyPayment({amount:7000, years:15, rate:4})).toString().length).toEqual(3);

  expect(calculateMonthlyPayment({amount:8000, years:20, rate:3}).toString().length - Math.floor(calculateMonthlyPayment({amount:8000, years:20, rate:3})).toString().length).toEqual(3);

  expect(calculateMonthlyPayment({amount:8000, years:20, rate:.05}).toString().length - Math.floor(calculateMonthlyPayment({amount:8000, years:20, rate:.05})).toString().length).toEqual(3);
});

/// etc
