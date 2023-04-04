describe("Payments test (with setup and tear-down)", function() {
    beforeEach(function () {
      // initialization logic
      billAmtInput.value = 20;
      tipAmtInput.value = 4;
    });
  
    it('should make add table row for payment with appendPaymentTable()', function () {
      submitPaymentInfo();
      let curPay = document.querySelectorAll('#payment1 td');

      expect(curPay[0].innerText).toEqual('$20');
      expect(curPay[1].innerText).toEqual('$4');
      expect(curPay[2].innerText).toEqual('20%');
      
    });
  
    it('should return an object with bill, tip, and percentage with createCurPayment', function(){
      let curPay = createCurPayment();

      expect(curPay.billAmt).toEqual('20');
      expect(curPay.tipAmt).toEqual('4');
      expect(curPay.tipPercent).toEqual(20);
      
    })
  
    it('should add current payment to allPayments and increment paymentId', function(){
      submitPaymentInfo();

      expect(paymentId).toEqual(1);
      expect(Object.keys(allPayments).length).toEqual(1);
      expect(allPayments['payment' +paymentId].billAmt).toEqual('20');
    })

    it('should update tds with total bill, tips and tip percantage avg with updateSummary', function(){
      submitPaymentInfo();

      expect(summaryTds[0].innerHTML).toEqual('$20');
      expect(summaryTds[1].innerHTML).toEqual('$4');
      expect(summaryTds[2].innerHTML).toEqual('20%');
    })
  
    afterEach(function() { 
      allPayments = {};
      paymentId = 0;
      paymentTbody.innerHTML = "";
    });
  });
  