function cadastrar() {
  const name = document.getElementById('name').value;
  const city = document.getElementById('city').value;

  document.getElementById('displayName').innerText = `Nome: ${name}`;
  document.getElementById('displayCity').innerText = `Cidade: ${city}`;

  document.getElementById('form').style.display = 'none';
  document.getElementById('result').style.display = 'block';
}

function voltar() {
  document.getElementById('form').style.display = 'block';
  document.getElementById('result').style.display = 'none';
  
  document.getElementById('name').value = '';
  document.getElementById('city').value = '';
}