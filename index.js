/*
Primeiramente é necessário criar um diretório na área de trabalho e dentro do diretório criar um projeto utilizando o node.

Sequência para criar o projeto:

Criar o arquivo package.
Gerenciar as requisições, rotas e URLs, entre outras funcionalidades.

Se a sua requisição for do tipo 'post' será necessário utilizar algum programa para validar 
a requisição. Utilizamos o 'Insomnia'.

Após a requisição implementa a validação, usamos a biblioteca 'yup' para realizar a validação. 

Faça a instalação e segue os passos no npm caso não saiba utilizar. 

Recomendamos o comando require para inserir o yup. 

*/

const yup = require('yup');

/*

Cria uma constante, uma constante 'schema', utiliza a dependência, 'object' em seguida 'shape' e dentro do 'schape' valida os campos.

*/

const schema = yup.object().shape({
    nome: yup.string(),
    descrição: yup.string(),
    imagem: yup.string(),
    altura: yup.string()
});

/*

Após faça um teste, para verificar se executou corretamente a instrução a cima,
caso não tenha executado de forma correta, exibirá uma mensagem de erro.

*/

if(!(await schema.isValid(req.body))){
    return res.status(400).json({
        erro: true,
        mensagem: "Erro: Necessário preencher todos os campos"
    });
}

