"use strict";

const inputDigital = document.querySelector(".input-digital");
const btnAC = document.querySelector('.btn-AC');
const btnPlusMinus = document.querySelector(".btn-plus-minus");
const btnPercent = document.querySelector(".btn-percent");
const btnDil = document.querySelector(".btn-dil");
const btn7 = document.querySelector(".btn-7");
const btn8 = document.querySelector(".btn-8");
const btn9 = document.querySelector(".btn-9");
const btnMno = document.querySelector(".btn-mno");
const btn4 = document.querySelector(".btn-4");
const btn5 = document.querySelector(".btn-5");
const btn6 = document.querySelector(".btn-6");
const btnMinus = document.querySelector(".btn-minus");
const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector(".btn-2");
const btn3 = document.querySelector(".btn-3");
const btnPlus = document.querySelector(".btn-plus");
const btn0 = document.querySelector(".btn-0");
const btnComa = document.querySelector(".btn-coma");
const btnDor = document.querySelector(".btn-dor");

let operand1=0,
    operand2=0,
    result =0,
    result1 =0,
    result2 =0,
    result3 =0,
    identefikatorOfAction = 'None';

btn1.addEventListener("click", () => {
    operand1 = inputDigital.value*10+1;
    inputDigital.value = operand1 ;
});

btn2.addEventListener("click", () => {
    operand1 = inputDigital.value*10+2;
    inputDigital.value = operand1 ;
});

btn3.addEventListener("click", () => {
    operand1 = inputDigital.value*10+3;
    inputDigital.value = operand1 ;
});

btn4.addEventListener("click", () => {
    operand1 = inputDigital.value*10+4;
    inputDigital.value = operand1 ;
});
btn5.addEventListener("click", () => {
    operand1 = inputDigital.value*10+5;
    inputDigital.value = operand1 ;
});

btn6.addEventListener("click", () => {
    operand1 = inputDigital.value*10+6;
    inputDigital.value = operand1 ;
});

btn7.addEventListener("click", () => {
    operand1 = inputDigital.value*10+7;
    inputDigital.value = operand1 ;
});

btn8.addEventListener("click", () => {
    operand1 = inputDigital.value*10+8;
    inputDigital.value = operand1 ;
});

btn9.addEventListener("click", () => {
    operand1 = inputDigital.value*10+9;
    inputDigital.value = operand1 ;
});

btn0.addEventListener("click", () => {
    operand1 = inputDigital.value*10+0;
    inputDigital.value = operand1 ;
});

btnAC.addEventListener("click", () => {
    inputDigital.value = "0";
});

btnPlus.addEventListener("click", () => {
    operand2 = Number(inputDigital.value) ;
    identefikatorOfAction = 'plus';
    inputDigital.value ='0';
});

btnMinus.addEventListener("click", () => {
    operand2 = Number(inputDigital.value) ;
    identefikatorOfAction = 'minus';
    inputDigital.value ='0';
});

btnMno.addEventListener("click", () => {
    operand2 = Number(inputDigital.value) ;
    identefikatorOfAction = 'mno';
    inputDigital.value ='0';
});

btnDil.addEventListener("click", () => {
    operand2 = Number(inputDigital.value) ;
    identefikatorOfAction = 'dil';
    inputDigital.value ='0';
});

btnPercent.addEventListener("click", () => {
    operand2 = Number(inputDigital.value) ;
    result = inputDigital.value /100;
    inputDigital.value = result;
});

btnDor.addEventListener('click' , () => {
    operand1  = Number(inputDigital.value);
    
  switch(identefikatorOfAction)
  {
      case 'plus':
          {
              result = operand1 + operand2;
              inputDigital.value = result;
          };
          break;
          case 'minus':
              {
                  result = operand2 - operand1;
                  inputDigital.value = result;
              };
              break;
              case 'mno':
                  {
                      result = operand1 * operand2;
                      inputDigital.value = result;
                  };
                  break;
                  case 'dil':
                      {
                          result = operand2 / operand1;
                          inputDigital.value = result;
                      };
                      break;
                      default:
                          inputDigital = '0';
  }
});






