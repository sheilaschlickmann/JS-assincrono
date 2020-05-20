var listElement = document.querySelector('ul');
var inputElement = document.querySelector('input');

function preencheLista(lista){
    for(list of lista){
        const textElement = document.createTextNode(list.name);
        const liElement = document.createElement('li');

        liElement.appendChild(textElement);
        listElement.appendChild(liElement);
    }
}

function buscarUser(){
    var user = inputElement.value;

    axios.get('https://api.github.com/users/' + user + '/repos')
    .then(function (response) {
        console.log(preencheLista(response.data));
    })
    .catch(function(error){
        console.warn(error);
    })
}