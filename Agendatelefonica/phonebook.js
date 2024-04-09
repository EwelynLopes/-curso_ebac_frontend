document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;

    if (!isNaN(phone) && phone.length === 11) {
        addContact(name, phone);
        document.getElementById('contact-form').reset();
        showMessage('success-message', 'Contato adicionado com sucesso!', 'success');
    } else {
        alert("O número de celular deve conter 11 dígitos, incluindo o DDD.");
    }
});

function addContact(name, phone) {
    var table = document.getElementById('contacts-table');
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.textContent = name;
    cell2.textContent = phone;
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Excluir';
    deleteButton.addEventListener('click', function () {
        table.deleteRow(row.rowIndex);
        showMessage('remove-message', 'Contato removido com sucesso!', 'remove');
    });
    cell3.appendChild(deleteButton);
}

function showMessage(id, message, messageType) {
    var messageElement = document.getElementById(id);
    messageElement.textContent = message;
    messageElement.classList.remove('hidden');
    messageElement.classList.remove('success');
    messageElement.classList.remove('remove');
    messageElement.classList.add(messageType);
    setTimeout(function () {
        messageElement.classList.add('hidden');
    }, 3000);
}

document.addEventListener("DOMContentLoaded", function () {
    var phoneInput = document.getElementById('phone');
    Inputmask({ "mask": "(99) 99999-9999" }).mask(phoneInput);
});

const nameInput = document.getElementById("name");

nameInput.addEventListener("input", () => {
    const value = nameInput.value;
    nameInput.value = value.replace(/[^a-zA-Z\s]/g, "");
});


const numberInput = document.getElementById("phone");

numberInput.addEventListener("input", () => {
    const value = numberInput.value;
    numberInput.value = value.replace(/[^0-9]/g, "");
});