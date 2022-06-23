module.exports = function toReadable (number) {
    let arrayNumber = String(number).split('');
  
    let arrayReadable1 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    
    if (arrayNumber.length === 1) {
      number = arrayReadable1[number]
    }
  
    let arrayReadable2 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  
    if (arrayNumber.length === 2 && number < 20) {
      number = arrayReadable2[number - 10]
    }
  
    console.log()
    let arrayReadable3 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety',]
  
    if (arrayNumber.length === 2 && number >= 20 && number < 100) {
      let num1 = Number(arrayNumber[0]);
      let num2 = Number(arrayNumber[1]);
      if (num2 === 0) {
        number = arrayReadable3[num1 - 2]
      } else {
        number = arrayReadable3[num1 - 2] + ' ' + arrayReadable1[num2];
      }
    }
    
    if (arrayNumber.length === 3) {
      let num1 = Number(arrayNumber[0]); //7
      let num2 = Number(arrayNumber[1]); //6
      let num3 = Number(arrayNumber[2]); //5
      let num4 = Number(arrayNumber[1] + arrayNumber[2]);
  
      if (num2 === 0 && num3 === 0) {
        number = arrayReadable1[num1] + ' hundred';
      }
      
      if (num2 === 0 && num3 > 0) {
        number = arrayReadable1[num1] + ' hundred' + ' ' + arrayReadable1[num3];
      }
  
      if (num4 >= 10 && num4 < 20) {
        number = arrayReadable1[num1] + ' hundred' + ' ' + arrayReadable2[num4 - 10];
      }
  
      if (num3 === 0 && num4 >= 20) {
        number = arrayReadable1[num1] + ' hundred' + ' ' + arrayReadable3[num2 - 2];
      }
  
      if (num3 !== 0 && num2 !== 0 && num4 >= 20) {
        number = arrayReadable1[num1] + ' hundred' + ' ' + arrayReadable3[num2 - 2] + ' ' + arrayReadable1[num3];
      }
    }
    return number;
  }
