async function api(cep){
  const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
  // const response = await fetch(`https://viacep.com.br/ws/07793880/json/`);
  const data = await response.json();
  console.log(data);
  return data;
};

function insertApi(){
  let  inputCep = document.querySelector('#cep');
  let inputCidade = document.querySelector('#cidade');
  let inputEstado = document.querySelector('#estado');
  let cep = inputCep.value;
  api(cep).then((data) => {
    inputCidade.value = data.localidade;
    inputEstado.value = data.uf;
  }).catch((error) => {
    console.log('CEP não encontrado');
  });
};
inputCep.addEventListener('blur', insertApi);

insertApi();