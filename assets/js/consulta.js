const consult = document.querySelector('#consultar');
consult.addEventListener('click', filterProduct)

var products = JSON.parse(localStorage.getItem('produtos'));


if (products === null) {
    products = []
}


var tableConsulta = document.getElementById('table-consulta');


    for (i = 0; i < products.length; i++) {
        var product = products[i]
        var name = product['name']
        var nserie = product ['nserie']
        var tipo = product['tipo']
        var carac = product['carac']
        var th = tableConsulta.insertRow(1)
        var td = [th.insertCell(0), th.insertCell(1), th.insertCell(2), th.insertCell(3)]
        td[0].innerHTML = name
        td[1].innerHTML = tipo
        td[2].innerHTML = nserie
        td[3].innerHTML = carac
    }



    function filterProduct() {
        input = document.getElementById('filtrar');
        filter = input.value.toUpperCase();
        table = document.getElementById('table-consulta');
        tr = table.getElementsByTagName('tr');
        for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName('td')[0];
          if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = '';
            } else {
              tr[i].style.display = 'none';
            }
          }       
        }
      }