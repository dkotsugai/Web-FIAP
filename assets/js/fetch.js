const cep = document.querySelector("#cep");

const showData = (result) => {

    for (const campo in result){
        if(document.querySelector("#" + campo)){
            document.querySelector("#"+ campo).value = result[campo];
        }
    }

}

//o evento blur significa que clicamos na caixa de texto e saímos dela.
cep.addEventListener("blur", async (e) => {
    let search = cep.value.replace("-", "");

    if (search < 8 && isNaN(search)) {
        alert("CEP inválido")
        cep.value = "";
        return;
    }

    const options = {
        method: "GET",
        mode: "cors",
        cache: "default"

    }

    // https://viacep.com.br/ws/01001000/json/

    //fetch vai gerar um promise. Promise é uma promessa de que algo vai acontecer.
    // se der certo, ele vai retornar o resultado. Se der errado, ele vai retornar um erro.
    // se der certo nós resolvemos a promise. Se der errado, nós rejeitamos a promise;
    // Promise é uma intenção.

    // fetch(`https://viacep.com.br/ws/${search}/json/`,options)
    //     .then((response) => {
    //         response.json().then((result) => console.log(result));
    //     })
    //     .catch((e) => console.log(e.message));

    // async/await - são primos um do outro(a onde o await está o aync tem que estar).

    const resultado = await fetch(`https://viacep.com.br/ws/${search}/json/`, options)
    const json = await resultado.json();

    //console.log(json);

    showData(json)
});

