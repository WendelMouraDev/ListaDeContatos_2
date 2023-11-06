$(document).ready(function () {
    $("#meuFormulario").submit(function (event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Obtém os valores dos campos de entrada
        var nome = $("#nome").val();
        var numero = $("#numero").val();

        // Cria uma nova linha e células para os dados
        var novaLinha = $("<tr>");
        var celulaNome = $("<td>").text(nome);
        var celulaNumero = $("<td>").text(numero);

        
        // Adicione as células à linha
        novaLinha.append(celulaNome, celulaNumero);

        // Adicione a nova linha ao corpo da tabela
        $("#minhaTabela tbody").append(novaLinha);

        // Limpa os campos do formulário
        $("#nome").val("");
        $("#numero").val("");
    });
});
