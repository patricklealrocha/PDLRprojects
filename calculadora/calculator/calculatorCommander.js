/*Classe que irá controlar as regras da calculadora
Será o mais comentado possível. */

class CalculatorCommander
{
    //método iniciado assim que é criado uma instância da classe
    constructor()
    {    
        this._displayCalc = '0';
        this.initKeyboard();
        this.initMouseEvents();
        this.initialize();
    }
    /* método principal do projeto
     Tudo que quisermos que aconteça ao iniciar a calculadora estará codificado aqui*/ 
    initialize()
    {
        // O El é uma convenção aplicada para fazer referência ao elemento HTML
        let displayCalcEl = document.querySelector('#display');
        let displayHistEl = document.querySelector('#historic');

        displayCalcEl.innerHTML = '4567';
        displayHistEl.innerHTML = 'registro das últimas operações realizadas';
    }
    // Controlando Eventos do Teclado
    initKeyboard()
    {

        document.addEventListener('keyup', e=>
        {
                
            switch(e.key)
            {
                case 'Escape':
                    console.log('C');
                    break;
                case 'Backspace':
                    console.log('←');
                    break;
                case '+':
                case '-':
                case '*':
                case '/':
                case '%':
                    console.log(e.key);
                    break;
                case 'Enter':
                case '=':
                    console.log(e.key);
                    break;
                case '.':
                case ',':
                    console.log(e.key);
                    break;
                case '0':
                case '1':
                case '2':
                case '3':
                case '4':
                case '5':
                case '6':
                case '7':
                case '8':
                case '9':
                console.log(e.key);
                    break;
                case '@':
                    console.log('√');
                    break;
                case 'q':
                    console.log('x²');
                    break;
                case 'r':
                    console.log('¹/x');
                    break
                case 'Delete':
                    console.log('CE');
                    break;
                case 'n': // tecla escolhida , não é a padrão utilizada pela calculadora do windows
                    console.log('±');
                    break;
            }
        });
    }
    // Eventos do mouse / As vezes pode ser que a pessoa 'clique' e arraste, nesse caso o método addEventListener não vai conseguir tratar múltiplos eventos. Vamos criar um método para que possamos fazer isso, melhorando a usabilidade da calculadora
    addEventListenerAll(element, events, fn){
        
        events.split(' ').forEach(event =>{

            element.addEventListener(event,fn,false);
        });
    }
    initMouseEvents(){

        // aqui criamos um array com os botões de nosso HTML
        let buttons = document.querySelectorAll('.row > button');

        // para que seja possível identificar cada botão de nosso HTML precisaremos percorrer o array
        buttons.forEach((btn, index) =>    
        {
            //enquanto percorre o array o evento click consegue capturar cada botão de nossa aplicação
            this.addEventListenerAll(btn,'click drag', e =>
            {
                console.log(btn.textContent);
            });
        });
        
    }    
    //getters and setters estarão a partir daqui
    get displayCalc()
    {
        return this._displayCalc;
    }
    set displayCalc(value)
    {
        this._displayCalc = value;
    }
}
