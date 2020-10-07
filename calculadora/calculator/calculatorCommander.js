/*Classe que irá controlar as regras da calculadora
Será o mais comentado possível. */

class CalculatorCommander
{
    //método iniciado assim que é criado uma instância da classe
    constructor()
    {   
        //this._resgister = [];
        this._operation = [];
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
                    this.clearAll();
                    break;
                case 'Backspace':
                    this.clearEntry();
                    break;
                case '+':
                case '-':
                case '*':
                case '/':
                case '%':
                    this.addOperation(e.key);
                    break;
                case 'Enter':
                case '=':
                    this.addOperation(e.key);
                    break;
                case '.':
                case ',':
                    this.addOperation(e.key);
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
                    this.addOperation(e.key);
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
                    this.clearEntry();
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
                let btnText = btn.textContent ;

                this.execBtn(btnText);
            });
        });
        
    }
    //Ação que será realizada ao clicar em determinado botão
    execBtn(value){
        
        switch(value)
            {
                case 'C':
                    this.clearAll();
                    break;
                case '←':
                    this.clearEntry();
                    break;
                case 'CE':
                    this.clearEntry();
                    break;
                case '+':
                case '-':
                case 'X':
                case '÷':
                    this.addOperation(value);
                    break;
                case '%':
                    this.addOperation(value);
                    break;
                case '=':
                    this.addOperation(value);
                    break;
                case ',':
                    this.addOperation(value);
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
                    this.addOperation(Number(value));
                    break;
                case '√':
                    this.addOperation(value);
                    break;
                case 'x²':
                    this.addOperation(value);
                    break;
                case '¹/x':
                    this.addOperation(value);
                    break
                case '±': 
                    this.addOperation(value);
                    break;
            }

    }
     /*A partir daqui serão programados os métodos necessários para realizar o cálculo e outras ações comuns a calculadora padrão.*/
     
     //Limpa tudo
    clearAll(){
        //this._resgister = [];
        this._operation = [];
     }
     //Limpa o valor de entrada
    clearEntry(){
        
        //this._resgister.pop();
        this._operation.pop();
     }
     //Buscamos o último item adicionado para fazer comparação
    getLastOperation(){

        return this._operation[this._operation.length -1];

     }
     //Adicionamos um item após a comparação
    setLastOperation(value){

        this._operation[this._operation.length - 1] = value;

     }
     //Aqui identificamos as operações simples. 
     //Aqui se a pessoa digita uma operação sim e depois outra simples, a operação irá sobrepor a outra
    isOperatorS(value){

        return (['+','-','*','/'].indexOf(value) > -1 );

     }
     // Aqui as operações serão limitadas a três valores em caso de operações simples
     // Se adicionamos % ou Raiz ou potência ou x/1 então haverá outra operação
    pushOperation(value){

        this._operation.push(value);

        if(this._operation.length > 3){

            let last = this._operation.pop();
            console.log(this._operation);
        }

     }
     // aqui adicionamos números ou operadores
    addOperation(value){

        if(isNaN(this.getLastOperation())){

            if(this.isOperatorS(value)){

                    this.setLastOperation(value);

            } else if(isNaN(value)) {

                console.log("Outra Coisa " + value);

            } else {

                this.pushOperation(value);

            }

        } else {

            if(this.isOperatorS(value)){

                this.pushOperation(value);

            }else{
                
                let newValue = this.getLastOperation().toString() + value.toString();
                this.setLastOperation(Number(newValue));
            }
            
        }
        console.log(this._operation);
        //this._resgister.push(value);
        //this._operation.push(value);
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
