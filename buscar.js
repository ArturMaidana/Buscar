// Objeto JSON de exemplo
var jsonObject = {
    "nome": "João",
    "idade": 25,
    "cidade": "São Paulo"
  };
  
  // Função para buscar um valor específico em um objeto JSON
  function buscaValor(objeto, valor) {
    for (var chave in objeto) {
      if (objeto.hasOwnProperty(chave)) {
        if (objeto[chave] === valor) {
          return true;
        }
      }
    }
    return false;
  }
  
  // Exemplo de uso da função buscaValor
  var valorBuscado = "São Paulo";
  var encontrado = buscaValor(jsonObject, valorBuscado);
  
  if (encontrado) {
    console.log("O valor '" + valorBuscado + "' foi encontrado no objeto JSON.");
  } else {
    console.log("O valor '" + valorBuscado + "' não foi encontrado no objeto JSON.");
  }
  