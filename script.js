let buttons = document.querySelectorAll('div[class^="calc-container__buttons__"]');
let display = document.querySelector('.calc-container__display')
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        let isNumber = +this.getAttribute('data');
        if (display.textContent.length < 10 && (isNumber >= 0 || this.getAttribute('data') == '.')) {
            display.textContent += this.getAttribute('data')
        }
        else if (this.getAttribute('data') == 'AC') {

            display.textContent = display.textContent.slice(0, display.textContent.length - 1)
        }
    }
}
