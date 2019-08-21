class CalcController {
    constructor(){
        this._displayCalcEl = document.querySelector('#display')
        this._dateEl = document.querySelector('#data')
        this._timeEl = document.querySelector('#hora')
        this._currentDate
        this.initialize()
    }

    initialize(){      
        setInterval(()=>{
            this.displayDate = this._currentDate.toLocaleDateString('pt-BR')
        },1000)

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

    get dataAtual(){
        return new Date()
    }

    set dataAtual(valor){
        this._currentDate = valor
    }
}