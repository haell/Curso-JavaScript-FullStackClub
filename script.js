const container = document.querySelector('.container');
const obs = document.querySelector('#obs');
const nome = document.querySelector('#nome');
const email = document.querySelector('#email');
const idade = document.querySelector('#idade');
const altura = document.querySelector('#altura');
const peso = document.querySelector('#peso');
const btn = document.querySelector('#btn');
const form = document.querySelector('#form'); // Pega o formulário
const verIMC = document.querySelector('#imc');
const textCheckbox = document.querySelector('#textCheckbox');
const textOriginalIMC = textCheckbox.textContent; // Armazena o texto original do checkbox

obs.style.display = 'none';

const divTitulo = document.createElement('div');
const titulo = document.createElement('h2');
titulo.textContent = 'Formulário de Cadastro';
titulo.classList.add('titulos'); // Adiciona a classe 'titulos' ao título
container.prepend(divTitulo); // Adiciona a div ao início do body
divTitulo.appendChild(titulo); // Adiciona o título à div



let fieldIds = ["nome", "email", "idade", "altura", "peso"];

for (let field of fieldIds) {

    const fields = document.querySelector(`#${field}`);
    const genero = field === "altura" || field === "idade" ? "sua" : "seu";
    fields.placeholder = `Digite ${genero} ${field}`; // Adiciona o placeholder ao campo
}

// Função para definir a mensagem de validação personalizada
fieldIds.forEach(field => {

    const fields = document.querySelector(`#${field}`);
    console.log(fields);
    // Define a mensagem personalizada somente quando o campo é inválido
    fields.addEventListener('invalid', () => {
        fields.setCustomValidity(`Por favor, preencha o campo ${field}`);
    });

    // Limpa a mensagem personalizada assim que o usuário começar a digitar
    fields.addEventListener('input', () => {
        fields.setCustomValidity('');
    });
});



// Evento de clique no botão
btn.addEventListener('click', function (event) {
    event.preventDefault(); // Previne o envio do formulário


    // Envia o formulário apenas se todos os campos forem válidos
    if (form.checkValidity()) {

        obs.style.display = 'block'; // Exibe a mensagem de sucesso
        obs.innerHTML = 'Formulário enviado com sucesso!'; // Mensagem de sucesso

        if (verIMC.checked) {
            const alturaValue = parseFloat(altura.value);
            const pesoValue = parseFloat(peso.value);
            const imc = pesoValue / (alturaValue * alturaValue);
            textCheckbox.textContent = `Seu IMC é: ${imc.toFixed(2)}`; // Adiciona o IMC à mensagem de sucesso            
        }
        //cria o botão OK
        const okButton = document.createElement('button');
        okButton.textContent = 'OK';
        okButton.type = 'button'; // Define o tipo do botão como "button"
        okButton.style.marginLeft = '10px'; // Adiciona uma margem à esquerda do botão
        okButton.onclick = function () {
            form.reset(); // Limpa os campos do formulário
            obs.style.display = 'none'; // Oculta a mensagem de sucesso
            obs.innerHTML = ''; // Limpa a mensagem de sucesso
            textCheckbox.textContent = textOriginalIMC; // Limpa o texto do checkbox
        };

        obs.appendChild(okButton); // Adiciona o botão à mensagem de sucesso


    } else {
        form.reportValidity(); // Exibe mensagens de erro para campos inválidos
    }
});
