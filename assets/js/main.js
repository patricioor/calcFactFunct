function criaCalculadora() {
  return {
    display: document.querySelector('.display'),

    clearDisplay() {
      this.display.value = '';
    },

    pressionaEnter () {
      this.display.addEventListener('keyup',() => {
        if (e.key === 13) {
          this.realizaConta();
        }
      })
    },

    realizaConta() {
      let conta = this.display.value;

      try {
        conta = eval(conta);

        if(!conta) {
          alert('Conta inválida');
          return;
        }
        this.display.value = String(conta)
      } catch (e) { alert('Conta inválida') }
    },

    apagaUm() {
      this.display.value = this.display.value.slice(0, -1)
    },

    inicia() {
      this.cliqueBotoes();
    },
    cliqueBotoes() {
      document.addEventListener('click', (e) => {
        const el = e.target;
        
        if (el.classList.contains('btn-num')) {
          this.btnParaDisplay(el.innerText);
        }
        if(el.classList.contains('btn-clear')) {
          this.clearDisplay();
        }
        if(el.classList.contains('btn-del')){
          this.apagaUm();
        }
        if(el.classList.contains('btn-eql')) {
          this.realizaConta();
        }
      });
    },
    btnParaDisplay(valor){
      this.display.value += valor;
    }
  };
}

const calculadora = criaCalculadora();
calculadora.inicia();