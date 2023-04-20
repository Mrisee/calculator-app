const num1 = document.getElementById("1");
const num2 = document.getElementById("2");
const num3 = document.getElementById("3");
const num4 = document.getElementById("4");
const num5 = document.getElementById("5");
const num6 = document.getElementById("6");
const num7 = document.getElementById("7");
const num8 = document.getElementById("8");
const num9 = document.getElementById("9");
const num0 = document.getElementById("0");
const del = document.getElementById("del");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const dot = document.getElementById("dot");
const divis = document.getElementById("division");
const multi = document.getElementById("multiply");
const reset = document.getElementById("reset");
const equal = document.getElementById("equals");
const display = document.querySelector('#display');
const curNum = document.querySelector('.current-number')

let y = display.value;
let x = curNum.textContent;

function clickN() {
    if( display.value.length < 16) {
        if(typeof(this.id) === 'number') {
        display.value = this.id;
        } else {
        display.value += this.id;
        }
    } 
};
function addDot() {
    if(display.value != '' & display.value.includes('.') == false) {
        if( display.value.length < 16) {
            display.value += '.';
        } 
    }
};
function deleteFunc() { 
    if (display.value != '') {
        display.value = display.value.substring(0, display.value.length - 1);
    }
    else {
        if (curNum.textContent != '') {
            display.value = parseFloat(curNum.textContent.substring(0, curNum.textContent.length - 2));
            curNum.textContent = '';
        }
    }
};
function resFunc() {
    display.value = '';
    curNum.textContent = ''
}
function result() {
    if (curNum.textContent != '') {
        if(display.value == '') {
            display.value = parseFloat(curNum.textContent.substring(0, curNum.textContent.length - 2))
            curNum.textContent = '';
        }
        else {
            if (curNum.textContent.includes('+')) {
            display.value = parseFloat(curNum.textContent.substring(0, curNum.textContent.length - 2)) + parseFloat(display.value);
            curNum.textContent = '';
            }
            if (curNum.textContent.includes('-')) {
                display.value = parseFloat(curNum.textContent.substring(0, curNum.textContent.length - 2)) - parseFloat(display.value);
                curNum.textContent = '';
            }
            if (curNum.textContent.includes('*')) {
                display.value = parseFloat(curNum.textContent.substring(0, curNum.textContent.length - 2)) * parseFloat(display.value);
                curNum.textContent = '';
            }
            if (curNum.textContent.includes('/')) {
                display.value = parseFloat(curNum.textContent.substring(0, curNum.textContent.length - 2)) / parseFloat(display.value);
                curNum.textContent = '';
            } 
        }
    }   
}
function sum() {
    if(display.value !='') {
        if(curNum.textContent == '') {
            curNum.textContent = display.value;
            curNum.textContent += ' +';
            display.value = '';
        }
        else {
            if (curNum.textContent.includes('+')) {
                curNum.textContent = String(parseFloat(curNum.textContent.substring(0, curNum.textContent.length - 2)) + parseFloat(display.value));
                display.value= '';
                }
            if (curNum.textContent.includes('-')) {
                curNum.textContent = String(parseFloat(curNum.textContent.substring(0, curNum.textContent.length - 2)) - parseFloat(display.value));
                display.value = '';
            }
            if (curNum.textContent.includes('*')) {
                curNum.textContent = String(parseFloat(curNum.textContent.substring(0, curNum.textContent.length - 2)) * parseFloat(display.value));
                display.value = '';
            };
            if (curNum.textContent.includes('/')) {
                curNum.textContent = String(parseFloat(curNum.textContent.substring(0, curNum.textContent.length - 2)) / parseFloat(display.value));
                display.value = '';
            };
            curNum.textContent += ' +';
        };
    } else {
        if (curNum.textContent.includes('-') | curNum.textContent.includes('/') | curNum.textContent.includes('*')) {
            curNum.textContent = curNum.textContent.substring(0, curNum.textContent.length - 2);
            curNum.textContent += ' +'
        }
    }
};
function subtraction() {
    if(display.value !='') {
        if(curNum.textContent == '') {
            curNum.textContent = display.value;
            curNum.textContent += ' -';
            display.value = '';
        }
        else {
            if (curNum.textContent.includes('+')) {
                curNum.textContent = String(parseFloat(curNum.textContent.substring(0, curNum.textContent.length - 2)) + parseFloat(display.value));
                display.value= '';
                }
            if (curNum.textContent.includes('-')) {
                curNum.textContent = String(parseFloat(curNum.textContent.substring(0, curNum.textContent.length - 2)) - parseFloat(display.value));
                display.value = '';
            }
            if (curNum.textContent.includes('*')) {
                curNum.textContent = String(parseFloat(curNum.textContent.substring(0, curNum.textContent.length - 2)) * parseFloat(display.value));
                display.value = '';
            }
            if (curNum.textContent.includes('/')) {
                curNum.textContent = String(parseFloat(curNum.textContent.substring(0, curNum.textContent.length - 2)) / parseFloat(display.value));
                display.value = '';
            };
            curNum.textContent += ' -';
        };
    } else {
        if (curNum.textContent.includes('+') | curNum.textContent.includes('/') | curNum.textContent.includes('*')) {
            curNum.textContent = curNum.textContent.substring(0, curNum.textContent.length - 2);
            curNum.textContent += ' -'
        }
    }
};
function multiply() {
    if(display.value !='') {
        if(curNum.textContent == '') {
            curNum.textContent = display.value;
            curNum.textContent += ' *';
            display.value = '';
        }
        else {
            if (curNum.textContent.includes('+')) {
                curNum.textContent = String(parseFloat(curNum.textContent.substring(0, curNum.textContent.length - 2)) + parseFloat(display.value));
                display.value= '';
                }
            if (curNum.textContent.includes('-')) {
                curNum.textContent = String(parseFloat(curNum.textContent.substring(0, curNum.textContent.length - 2)) - parseFloat(display.value));
                display.value = '';
            }
            if (curNum.textContent.includes('*')) {
                curNum.textContent = String(parseFloat(curNum.textContent.substring(0, curNum.textContent.length - 2)) * parseFloat(display.value));
                display.value = '';
            }
            if (curNum.textContent.includes('/')) {
                curNum.textContent = String(parseFloat(curNum.textContent.substring(0, curNum.textContent.length - 2)) / parseFloat(display.value));
                display.value = '';
            };
            curNum.textContent += ' *';
        };
    } else {
        if (curNum.textContent.includes('+') | curNum.textContent.includes('/') | curNum.textContent.includes('-')) {
            curNum.textContent = curNum.textContent.substring(0, curNum.textContent.length - 2);
            curNum.textContent += ' *'
        }
    }
};
function division() {
    if(display.value !='') {
        if(curNum.textContent == '') {
            curNum.textContent = display.value;
            curNum.textContent += ' /';
            display.value = '';
        }
        else {
            if (curNum.textContent.includes('+')) {
                curNum.textContent = String(parseFloat(curNum.textContent.substring(0, curNum.textContent.length - 2)) + parseFloat(display.value));
                display.value= '';
                }
            if (curNum.textContent.includes('-')) {
                curNum.textContent = String(parseFloat(curNum.textContent.substring(0, curNum.textContent.length - 2)) - parseFloat(display.value));
                display.value = '';
            }
            if (curNum.textContent.includes('*')) {
                curNum.textContent = String(parseFloat(curNum.textContent.substring(0, curNum.textContent.length - 2)) * parseFloat(display.value));
                display.value = '';
            }
            if (curNum.textContent.includes('/')) {
                curNum.textContent = String(parseFloat(curNum.textContent.substring(0, curNum.textContent.length - 2)) / parseFloat(display.value));
                display.value = '';
            };
            curNum.textContent += ' /';
        };
    } else {
        if (curNum.textContent.includes('+') | curNum.textContent.includes('-') | curNum.textContent.includes('*')) {
            curNum.textContent = curNum.textContent.substring(0, curNum.textContent.length - 2);
            curNum.textContent += ' /'
        }
    }
};
num0.addEventListener("click", clickN);
num1.addEventListener("click", clickN);
num2.addEventListener("click", clickN);
num3.addEventListener("click", clickN);
num4.addEventListener("click", clickN);
num5.addEventListener("click", clickN);
num6.addEventListener("click", clickN);
num7.addEventListener("click", clickN);
num8.addEventListener("click", clickN);
num9.addEventListener("click", clickN);
del.addEventListener("click", deleteFunc);
reset.addEventListener("click", resFunc);
plus.addEventListener("click", sum);
minus.addEventListener("click", subtraction);
equal.addEventListener("click", result);
multi.addEventListener("click", multiply);
divis.addEventListener("click", division);
dot.addEventListener("click", addDot)