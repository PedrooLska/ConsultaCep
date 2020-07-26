const result = document.querySelector('#result');
const cep = document.querySelector('#cep');
const cors = 'https://cors-anywhere.herokuapp.com/';
const erro = document.querySelector('#erro');

const getCep = () => {
  if (cep.value === '') {
    clearResult();
    errorMsg('Por favor preencha o campo.')
  } else {
    fetch(`${cors}viacep.com.br/ws/${cep.value}/json/`)
      .then(response => response.json())
      .then(data => {
        let {
          cep,
          logradouro,
          bairro,
          localidade,
          uf
        } = data;
        showResult(logradouro, bairro, localidade, uf, cep)
      })
      .catch(() => {
        clearResult();
        errorMsg('Cep Incorreto')
      })
    clearResult();
    errorMsg('');
  }
}

const showResult = (logradouro, bairro, localidade, uf, cep) => {
  result.innerHTML = `${logradouro} - ${bairro}<br>
       ${localidade}/${uf} - ${cep}`
}

const clearResult = () => {
  result.style.display = 'block'
  result.innerHTML = '';
  cep.value = '';
  cep.focus();
}

const errorMsg = (msg) => {
  erro.style.display = 'block'
  erro.innerHTML = `${msg}`
}