document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const intro = document.querySelector('.intro');

    setTimeout(() => {
        intro.style.opacity = '0';
        setTimeout(() => {
            intro.classList.add('hidden');
        }, 1000);
    }, 2000);

    window.appendNumber = function(number) {
        display.value = display.value === '0' ? number : display.value + number;
    };

    window.clearDisplay = function() {
        display.value = '0';
    };

    window.deleteNumber = function() {
        display.value = display.value.slice(0, -1) || '0';
    };

    window.calculate = function() {
        try {
            display.value = eval(display.value);
        } catch {
            display.value = 'opss';
        }
    };

    window.calcular = function() {
        const num1 = parseFloat(display.value.split(',')[0]);
        const num2 = parseFloat(display.value.split(',')[1] || 0);
        const checkMDC = document.getElementById('checkMDC').checked;
        const checkMMC = document.getElementById('checkMMC').checked;
        const checkDivisivel = document.getElementById('checkDivisivel').checked;
        const checkPrimo = document.getElementById('checkPrimo').checked;
        const checkPar = document.getElementById('checkPar').checked;
        const checkFatoracao = document.getElementById('checkFatoracao').checked;
        const checkMultiplo = document.getElementById('checkMultiplo').checked;
        const resultados = document.getElementById('resultados');
        resultados.innerHTML = '';

        if (isNaN(num1)) {
            resultados.innerHTML = 'Por favor, insira um número válido para Número 1.';
            return;
        }

        if (checkPar) {
            resultados.innerHTML += `<p>Número 1 é ${num1 % 2 === 0 ? 'Par' : 'Ímpar'}</p>`;
        }

        if (checkPrimo) {
            resultados.innerHTML += `<p>Número 1 é ${ehPrimo(num1) ? 'Primo' : 'Composto'}</p>`;
            if (!isNaN(num2)) {
                resultados.innerHTML += `<p>Número 2 é ${ehPrimo(num2) ? 'Primo' : 'Composto'}</p>`;
            }
        }

        if (checkFatoracao) {
            resultados.innerHTML += `<p>Fatoração em primos de Número 1: ${fatoracaoPrimos(num1).join(' x ')}</p>`;
            if (!isNaN(num2)) {
                resultados.innerHTML += `<p>Fatoração em primos de Número 2: ${fatoracaoPrimos(num2).join(' x ')}</p>`;
            }
        }

        if (!isNaN(num2)) {
            if (checkMDC) {
                const resultMDC = mdc(num1, num2);
                resultados.innerHTML += `<p>MDC de ${num1} e ${num2} é ${resultMDC === 'opss' ? 'opss' : resultMDC}</p>`;
            }

            if (checkMMC) {
                const resultMMC = mmc(num1, num2);
                resultados.innerHTML += `<p>MMC de ${num1} e ${num2} é ${resultMMC === 'opss' ? 'opss' : resultMMC}</p>`;
            }

            if (checkDivisivel) {
                resultados.innerHTML += `<p>${num1} é ${num1 % num2 === 0 ? '' : 'não '}divisível por ${num2}</p>`;
            }

            if (checkMultiplo) {
                resultados.innerHTML += `<p>${num1} é ${num1 % num2 === 0 ? 'um' : 'não um'} múltiplo de ${num2}</p>`;
            }
        }
    };

    function mdc(a, b) {
        if (!Number.isInteger(a) || !Number.isInteger(b) || a <= 0 || b <= 0) return 'opss';
        while (b !== 0) {
            let t = b;
            b = a % b;
            a = t;
        }
        return a;
    }

    function mmc(a, b) {
        const resultMDC = mdc(a, b);
        if (resultMDC === 'opss') return 'opss';
        return Math.abs(a * b) / resultMDC;
    }

    function ehPrimo(num) {
        if (!Number.isInteger(num) || num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    function fatoracaoPrimos(num) {
        if (!Number.isInteger(num) || num <= 1) return ['opss'];
        const fatores = [];
        let divisor = 2;
        while (num >= 2) {
            if (num % divisor === 0) {
                fatores.push(divisor);
                num = num / divisor;
            } else {
                divisor++;
            }
        }
        return fatores;
    }
});
