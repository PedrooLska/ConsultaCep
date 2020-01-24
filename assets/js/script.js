class BuscaCep {
    constructor() {
      this.result = document.querySelector('.result');
      this.cep = document.querySelector('.cep');
  
      this.cors = 'https://cors-anywhere.herokuapp.com/';
    }
  
    getCep() {
      if(this.cep.value === '') {
        this.clearResult();
        this.errorMsg('Por favor preencha o campo.')
      } else {
        fetch(`${this.cors}viacep.com.br/ws/${this.cep.value}/json/`)
        .then(response => response.json())
        .then(data => {
          let { cep, logradouro, bairro, localidade, uf } = data;
          this.showResult(logradouro, bairro, localidade, uf, cep)
        })
        .catch(error => {
          this.clearResult();
          this.errorMsg('Cep Incorreto')
        })
        this.clearResult();
        this.errorMsg('');
      }
    }
  
    showResult(logradouro, bairro, localidade, uf, cep) {
      this.result.innerHTML = `${logradouro} - ${bairro}<br>
       ${localidade}/${uf} - ${cep}`
    }
  
    clearResult() {
      this.result.innerHTML = '';
      this.cep.value = '';
      this.cep.focus();
    }
  
    errorMsg(msg) {
      let erro = document.querySelector('.erro');
      erro.innerHTML = `${msg}`
    }
  }
  
  
  const newBuscaCep = new BuscaCep();