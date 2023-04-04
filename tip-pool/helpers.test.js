describe("Helpers test", function() {
    

    it('should take billAmt and tip and calculate tip %', function(){
        expect(calculateTipPercent(20,4)).toEqual(20);
        expect(calculateTipPercent(100,15)).toEqual(15);
        expect(calculateTipPercent(50,5)).toEqual(10);
        
    })

    it('should return tip/bill totals and tip percent totals with sumPaymentTotal()', function(){
        allPayments = {
            payment1: {
                billAmt: 20,
                tipAmt: 4,
                tipPercent: calculateTipPercent(20, 4)
            },
            payment2:{
                billAmt: 20,
                tipAmt: 4,
                tipPercent: calculateTipPercent(20, 4)
            }
        }

        expect(sumPaymentTotal('billAmt')).toEqual(40);
        expect(sumPaymentTotal('tipAmt')).toEqual(8);
        expect(sumPaymentTotal('tipPercent')).toEqual(40);
        
    })

    it('should append new td', function(){
        let tr = document.createElement('tr');
        appendTd(tr, 20);

        expect(tr.innerHTML).toEqual('<td>20</td>')
    })

    it('should append a new td with button with text "X"', function(){
        let tr = document.createElement('tr');

        appendDeleteBtn(tr);

        expect(tr.innerHTML).toEqual('<button>X</button>')
    })
})