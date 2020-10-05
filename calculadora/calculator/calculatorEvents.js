/*Classe que lidará com os eventos de clique e do teclado.
    Vou procurar manter cada etapa em poucas linhas deixando o código mais fácil de ler e comentado. */

// Aqui será programado os botões do teclado
class CalculatorEvents
{

    constructor()
    {    
        this.initKeyboard();
    }

    initKeyboard()
    {

        document.addEventListener('keyup', e=>{
                
            switch(e.key){
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
                case 'n':
                    console.log('±');
                    break;
            }
        });
    }    
}
