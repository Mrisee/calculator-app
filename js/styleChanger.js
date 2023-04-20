

const sliderLeft = document.getElementById("off1");
const sliderMiddle = document.getElementById("neutral1");
const sliderRight = document.getElementById("on1");
const wrap = document.querySelector('.wrapper');
const calcBoxDdisplay = document.querySelector('.calc-box__display');
const calcBoxKeypad = document.querySelector('.calc-box__keypad');
const keypadArray = Array(num0, num1, num2, num3, num4, num5, num6, num7, num8, num9, plus, minus, multi, divis, dot);
const calcHead = document.querySelector('.calc-box__head > span ');
const labels = document.querySelectorAll('.labels > span');
const themeSpan = document.querySelector('.theme > span');
const switcher = document.querySelector('.switcher-slider');

document.documentElement.style.setProperty('--bg-main-color', 'hsl(222, 26%, 31%)'); //
document.documentElement.style.setProperty('--text-main-color', 'white'); //
document.documentElement.style.setProperty('--calc-keypad-color', 'hsl(223, 31%, 20%)'); //
document.documentElement.style.setProperty('--keys-bg-color', 'hsl(30, 25%, 89%)'); //
document.documentElement.style.setProperty('--keys-shadow-color', 'hsl(28, 16%, 65%)'); //
document.documentElement.style.setProperty('--keys-bg-hover', 'hsl(30, 43%, 95%)'); //
document.documentElement.style.setProperty('--del-bg-color', 'hsl(225, 21%, 49%)'); //
document.documentElement.style.setProperty('--del-shadow-color', 'hsl(224, 28%, 35%)'); //
document.documentElement.style.setProperty('--equals-bg-color', 'hsl(6, 63%, 50%)'); //
document.documentElement.style.setProperty('--equals-shadow-color', 'hsl(6, 70%, 34%)'); //
document.documentElement.style.setProperty('--calc-display-color', 'hsl(224, 36%, 15%)'); // 
document.documentElement.style.setProperty('--kyes-text-color', 'hsl(221, 14%, 31%)'); //
document.documentElement.style.setProperty('--text-equals-color', 'white'); //
document.documentElement.style.setProperty('--text-del-color', 'white'); //
document.documentElement.style.setProperty('--curnum-color', 'rgba(194, 194, 194, 0.637)'); //
document.documentElement.style.setProperty('--del-bg-hover', 'hsl(225, 31%, 57%)'); //
document.documentElement.style.setProperty('--equals-bg-hover', 'hsl(6, 81%, 60%)'); //

sliderMiddle.addEventListener('change', function (e) {
        document.documentElement.style.setProperty('--bg-main-color', 'hsl(0, 0%, 90%)'); //
        document.documentElement.style.setProperty('--text-main-color', 'hsl(60, 10%, 19%)'); //
        document.documentElement.style.setProperty('--calc-keypad-color', 'hsl(0, 5%, 81%)'); //
        document.documentElement.style.setProperty('--keys-bg-color', 'hsl(45, 7%, 89%)'); //
        document.documentElement.style.setProperty('--keys-shadow-color', 'hsl(35, 11%, 61%)'); //
        document.documentElement.style.setProperty('--keys-bg-hover', 'hsl(30, 100%, 100%)'); //
        document.documentElement.style.setProperty('--del-bg-color', 'hsl(185, 42%, 37%)'); //
        document.documentElement.style.setProperty('--del-shadow-color', 'hsl(185, 58%, 25%)'); //
        document.documentElement.style.setProperty('--equals-bg-color', 'hsl(25, 98%, 40%)'); //
        document.documentElement.style.setProperty('--equals-shadow-color', 'hsl(25, 99%, 27%)'); //
        document.documentElement.style.setProperty('--calc-display-color', 'hsl(0, 0%, 93%)'); // 
        document.documentElement.style.setProperty('--kyes-text-color', 'hsl(60, 10%, 19%'); //
        document.documentElement.style.setProperty('--text-equals-color', 'white'); //
        document.documentElement.style.setProperty('--text-del-color', 'white'); //
        document.documentElement.style.setProperty('--curnum-color', 'hsla(60, 8%, 30%, 0.842)'); //
        document.documentElement.style.setProperty('--del-bg-hover', 'hsl(185, 48%, 54%)'); //
        document.documentElement.style.setProperty('--equals-bg-hover', 'hsl(25, 80%, 51%)'); //
});

sliderRight.addEventListener('change', function (e) {
    if (this.checked) {
        document.documentElement.style.setProperty('--bg-main-color', 'hsl(268, 75%, 9%)'); //
        document.documentElement.style.setProperty('--text-main-color', 'hsl(52, 100%, 62%)'); //
        document.documentElement.style.setProperty('--calc-keypad-color', 'hsl(268, 71%, 12%)'); //
        document.documentElement.style.setProperty('--keys-bg-color', 'hsl(268, 47%, 21%)'); //
        document.documentElement.style.setProperty('--keys-shadow-color', 'hsl(290, 70%, 36%)'); //
        document.documentElement.style.setProperty('--keys-bg-hover', 'hsl(268, 45%, 38%)'); //
        document.documentElement.style.setProperty('--del-bg-color', 'hsl(281, 89%, 26%)'); //
        document.documentElement.style.setProperty('--del-shadow-color', 'hsl(285, 91%, 52%)'); //
        document.documentElement.style.setProperty('--equals-bg-color', 'hsl(176, 100%, 44%)'); //
        document.documentElement.style.setProperty('--equals-shadow-color', 'hsl(177, 92%, 70%)'); //
        document.documentElement.style.setProperty('--calc-display-color', 'hsl(268, 71%, 12%)'); // 
        document.documentElement.style.setProperty('--kyes-text-color', 'hsl(52, 100%, 62%)'); //
        document.documentElement.style.setProperty('--text-equals-color', 'hsl(60, 10%, 19%)'); //
        document.documentElement.style.setProperty('--text-del-color', 'hsl(0, 0%, 100%)'); //
        document.documentElement.style.setProperty('--curnum-color', 'hsla(60, 31%, 67%, 0.842)'); //
        document.documentElement.style.setProperty('--del-bg-hover', 'hsl(281, 73%, 37%)'); //
        document.documentElement.style.setProperty('--equals-bg-hover', 'hsl(176, 82%, 78%)'); //
    }
});

sliderLeft.addEventListener('change', function (e) {
        document.documentElement.style.setProperty('--bg-main-color', 'hsl(222, 26%, 31%)'); //
        document.documentElement.style.setProperty('--text-main-color', 'white'); //
        document.documentElement.style.setProperty('--calc-keypad-color', 'hsl(223, 31%, 20%)'); //
        document.documentElement.style.setProperty('--keys-bg-color', 'hsl(30, 25%, 89%)'); //
        document.documentElement.style.setProperty('--keys-shadow-color', 'hsl(28, 16%, 65%)'); //
        document.documentElement.style.setProperty('--keys-bg-hover', 'hsl(30, 43%, 95%)'); //
        document.documentElement.style.setProperty('--del-bg-color', 'hsl(225, 21%, 49%)'); //
        document.documentElement.style.setProperty('--del-shadow-color', 'hsl(224, 28%, 35%)'); //
        document.documentElement.style.setProperty('--equals-bg-color', 'hsl(6, 63%, 50%)'); //
        document.documentElement.style.setProperty('--equals-shadow-color', 'hsl(6, 70%, 34%)'); //
        document.documentElement.style.setProperty('--calc-display-color', 'hsl(224, 36%, 15%)'); // 
        document.documentElement.style.setProperty('--kyes-text-color', 'hsl(221, 14%, 31%)'); //
        document.documentElement.style.setProperty('--text-equals-color', 'white'); //
        document.documentElement.style.setProperty('--text-del-color', 'white'); //
        document.documentElement.style.setProperty('--curnum-color', 'rgba(194, 194, 194, 0.637)'); //
        document.documentElement.style.setProperty('--del-bg-hover', 'hsl(225, 31%, 57%)'); //
        document.documentElement.style.setProperty('--equals-bg-hover', 'hsl(6, 81%, 60%)'); //
});

/*
function buttonsDropdown() {
    var buttons = document.querySelectorAll('.calc-box__keypad > div')
    for (var i = 0; i < buttons.length; i++) {
        var self = buttons[i];
        self.addEventListener('mouseover', function (event) {  
            if (this.id != "reset" | this.id != "del") {
                this.style.boxShadow = '0 5px hsl(35, 11%, 61%)';
            }
            if (this.id == "equals") {
                this.style.boxShadow = '0 5px hsl(25, 99%, 27%)';
            }
            if (this.id == "del" | this.id == "reset") {
                this.style.boxShadow = '0 5px hsl(185, 58%, 25%)';
            };
            this.style.top = '1px';
        });
        self.addEventListener('mouseout', function (event) {  
            if (this.id != "reset" | this.id != "del") {
                this.style.boxShadow = '0 6px hsl(35, 11%, 61%)';
            }
            if (this.id == "equals") {
                this.style.boxShadow = '0 6px hsl(25, 99%, 27%)';
            }
            if (this.id == "del" | this.id == "reset") {
                this.style.boxShadow = '0 6px hsl(185, 58%, 25%)';
            };
            this.style.top = '0px';
        });
        self.addEventListener('mousedown', function (event) {  
            if (this.id != "reset" | this.id != "del") {
                this.style.boxShadow = '0 0px hsl(35, 11%, 61%)';
            }
            if (this.id == "equals") {
                this.style.boxShadow = '0 0px hsl(25, 99%, 27%)';
            }
            if (this.id == "del" | this.id == "reset") {
                this.style.boxShadow = '0 0px hsl(185, 58%, 25%)';
            };
            this.style.top = '6px';
        });
        self.addEventListener('mouseup', function (event) {  
            if (this.id != "reset" | this.id != "del") {
                this.style.boxShadow = '0 5px hsl(35, 11%, 61%)';
            }
            if (this.id == "equals") {
                this.style.boxShadow = '0 5px hsl(25, 99%, 27%)';
            }
            if (this.id == "del" | this.id == "reset") {
                this.style.boxShadow = '0 5px hsl(185, 58%, 25%)';
            };
            this.style.top = '1px';
        });
    }
}*/