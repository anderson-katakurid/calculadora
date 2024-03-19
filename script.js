let valoratual = ''
let valoranterior = ''
let operacaoatual = ''

    function concatenar(valor) {
    valoratual += valor
    atualizarDisplay()
    }

        function operacao(operacao) {
            if (valoratual !== '') {
                valoranterior = valoratual
                valoratual = ''
                operacaoatual = operacao
                atualizarDisplay()
            }
        }function calcular() {
            if (valoratual !== '' && valoranterior !== '') {
                switch (operacaoatual) {
                    case '+':
                        valoratual = String(parseFloat(valoranterior) + parseFloat(valoratual))
                        break
                    case '-':
                        valoratual = String(parseFloat(valoranterior) - parseFloat(valoratual))
                        break
                    case '*':
                        valoratual = String(parseFloat(valoranterior) * parseFloat(valoratual))
                        break
                    case '/':
                        valoratual = String(parseFloat(valoranterior) / parseFloat(valoratual))
                        break
                    case '**':
                        valoratual = String(parseFloat(valoranterior) ** parseFloat(valoratual))
                        break
                }
                valoranterior = ''
                operacaoatual = ''
                atualizarDisplay()
            }
        }

        function limpar() {
            valoratual = ''
            valoranterior = ''
            operacaoatual = ''
            atualizarDisplay()
        }
        

        function atualizarDisplay() {
            document.getElementById('display').value = valoratual
        }