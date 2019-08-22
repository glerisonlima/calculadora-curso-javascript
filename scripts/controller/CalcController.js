class CalcController {
    constructor(){
        this._operator = []
        this._locale = 'pt-BR'
        this._displayCalcEl = document.querySelector('#display')
        this._dateEl = document.querySelector('#data')
        this._timeEl = document.querySelector('#hora')
        this._currentDate
        this.initialize()
        this.initButtonsEvents()
    }

    initialize(){      
        setInterval(()=>{
            this.displayDate = this.currentDate.toLocaleDateString(this._locale)
            this.displayTime = this.currentDate.toLocaleTimeString(this._locale)
        },1000)

    }

    addEventListenerAll(element, events, fn){
        events.split(' ').forEach(event =>{
            element.addEventListener(event, fn, false)
        })
    }

    clearAll(){
        this._operator = []
    }

    clearEntry(){
        this._operator.pop()
    }

    isOperator(value){
        return (['+','-','*','/','%'].indexOf(value) > -1)
    }

    pushOperator(value){
        this._operator.push(value)

        if(this._operator.length > 3){
            this.calc()
        }
    }

    calc(){
        let last = this._operator.pop()

        let result = eval(this._operator.join(""))

        this._operator = [result, last]
    }

    setLastNumberToDisplay(){
        
    }

    addOperation(value){
        if(isNaN(this.getLastOperation())){
            if(this.isOperator(value)){
                //troca o operador
                this.setLastOperation(value)
            }else if(isNaN(value)){
                //outra coisa
                console.log(value)
            }else{
                this.pushOperator(value)
            }
        }else{
            if(this.isOperator(value)){
                this.pushOperator(value)
            }else{
                let newValue = this.getLastOperation().toString() + value.toString()
                this.setLastOperation(parseInt(newValue))

                this.setLastNumberToDisplay()
            }
        }
        console.log(this._operator)
    }
    
    setError(){
        this.displayCalc = 'Error'
    }

    getLastOperation(){
        return this._operator[this._operator.length-1]
    }

    setLastOperation(value){
        this._operator[this._operator.length-1] = value
    }

    execBtn(value){
        switch (value) {
            case 'ac':
                this.clearAll()
            break
            case 'ce':
                this.clearEntry()
            break
            case 'soma':
                this.addOperation('+')
            break
            case 'subtracao':
                    this.addOperation('-')
            break
            case 'multiplicacao':
                    this.addOperation('*')
            break
            case 'divisao':
                    this.addOperation('/')
            break
            case 'porcento':
                    this.addOperation('%')
            break
            case 'igual':

            break
            case 'ponto':
                    this.addOperation('.')
            break
            
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
                this.addOperation(parseInt(value))
            break

            default:
                this.setError()
            break
        }
    }

    initButtonsEvents(){
        let buttons = document.querySelectorAll('#buttons > g, #parts > g')

        buttons.forEach((btn, index) =>{
            this.addEventListenerAll(btn, 'click drag', e => {
                let textBtn = btn.className.baseVal.replace('btn-', '')

                this.execBtn(textBtn)
            })

            this.addEventListenerAll(btn, 'mouseover mouseup mousedown', e =>{
                btn.style.cursor = 'pointer'
            })
        })
    }

    get displayTime(){
        return this._timeEl.innerHTML
    }

    set displayTime(value){
        this._timeEl.innerHTML = value
    }
    
    get displayDate(){
        return this._dateEl.innerHTML
    }

    set displayDate(value){
        this._dateEl.innerHTML = value
    }

    get displayCalc(){
        return this._displayCalcEl.innerHTML
    }

    set displayCalc(valor){
        this._displayCalcEl.innerHTML = valor
    }

    get currentDate(){
        return new Date()
    }

    set currentDate(valor){
        this._currentDate = valor
    }
}