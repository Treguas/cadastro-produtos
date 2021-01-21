let inputNserie = document.getElementById('nserie');
let inputName = document.getElementById('name');
let inputTipo = document.getElementById('tipo');
let inputCarac = document.getElementById('carac');

const register = document.querySelector('#cadastrar');
register.addEventListener('click', checkInput);


var product = JSON.parse(localStorage.getItem('produtos'));

if (product === null) {
    product = [];
}

function saveProduct() {
    product.push({
        'nserie': document.getElementById('nserie').value,
        'name': document.getElementById('name').value,
        'tipo': document.getElementById('tipo').value,
        'carac': document.getElementById('carac').value
    });

    const json_product = JSON.stringify(product);
    localStorage.setItem('produtos', json_product);
    alert('PRODUTO CADASTRADO COM SUCESSO');
    clearInput();    
}

function checkInput() {
    let inputNserie = document.getElementById('nserie').value;
    let inputName = document.getElementById('name').value;
    let inputTipo = document.getElementById('tipo').value;
    let inputCarac = document.getElementById('carac').value;

    if (inputNserie === "" || inputName === '' || inputTipo === '' || inputCarac === '') {
        alert('Preencha todos os Campos')
    } else {
        saveProduct()
    }
    
}


inputNserie.setAttribute('oninput', 'justNumbers()');

function justNumbers() {              
    var ns = document.getElementById("nserie")
       if(ns.value.length == 3){
           ns.value += "."
       }
 }

function clearInput() {    
    inputNserie.value = '';
    inputName.value = '';
    inputTipo.value = '';
    inputCarac.value = '';

    inputName.focus();//Foco ficar no primeiro campo de cadastro!

    return;
}