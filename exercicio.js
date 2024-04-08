document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário
    
    var campoA = parseInt(document.getElementById("campoA").value);
    var campoB = parseInt(document.getElementById("campoB").value);
    
    if (campoB > campoA) {
        document.getElementById("mensagem").textContent = "Formulário válido! B é maior que A.";
        document.getElementById("mensagem").style.color = "green";
    } else {
        document.getElementById("mensagem").textContent = "Formulário inválido! B precisa ser maior que A.";
        document.getElementById("mensagem").style.color = "red";
    }
});