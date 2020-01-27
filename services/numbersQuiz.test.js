

const numbersUtil = require('./numbers-util.js')
it('converts numbers from 1-20', () => {
    expect(numbersUtil.numberToSpanish(1)).toEqual('uno');
    expect(numbersUtil.numberToSpanish(15)).toEqual('quince');
    expect(numbersUtil.numberToSpanish(18)).toEqual('dieciocho');
    expect(numbersUtil.numberToSpanish(20)).toEqual('veinte');
});
it('converts numbers in the twenties', ()=>{
    expect(numbersUtil.numberToSpanish(21)).toEqual('veintiuno');    
    expect(numbersUtil.numberToSpanish(23)).toEqual('veintitrés');
    expect(numbersUtil.numberToSpanish(27)).toEqual('veintisiete');
})

it('converts numbers between 30 and 100', ()=>{
    expect(numbersUtil.numberToSpanish(30)).toEqual('treinta'); 
    expect(numbersUtil.numberToSpanish(33)).toEqual('treinta y tres');    
    expect(numbersUtil.numberToSpanish(50)).toEqual('cincuenta'); 
    expect(numbersUtil.numberToSpanish(99)).toEqual('noventa y nueve'); 
    expect(numbersUtil.numberToSpanish(100)).toEqual('cien'); 
})

it('converts numbers between 101 and 999', ()=>{

    expect(numbersUtil.numberToSpanish(127)).toEqual('ciento veintisiete');
    expect(numbersUtil.numberToSpanish(337)).toEqual('trescientos treinta y siete');
    expect(numbersUtil.numberToSpanish(500)).toEqual('quinientos');
    expect(numbersUtil.numberToSpanish(999)).toEqual('novecientos noventa y nueve');
})

it('converts numbers between 1000 and 999999', ()=>{
    expect(numbersUtil.numberToSpanish(1000)).toEqual('mil'); 
    expect(numbersUtil.numberToSpanish(1027)).toEqual('mil veintisiete');
    expect(numbersUtil.numberToSpanish(2008)).toEqual('dos mil ocho');
    expect(numbersUtil.numberToSpanish(2018)).toEqual('dos mil dieciocho');
    expect(numbersUtil.numberToSpanish(3196)).toEqual('tres mil ciento noventa y seis');
    expect(numbersUtil.numberToSpanish(999999)).toEqual('novecientos noventa y nueve mil novecientos noventa y nueve');
})