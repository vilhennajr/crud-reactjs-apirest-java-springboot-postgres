###### Flaviano Vilhena - flavianovilhena@gmail.com

# CRUD CREATHUS AGENDA - API REST JAVA </br> (SpringBoot / Swagger) E FRONTEND (React, JavaScript, Html e CSS)

## ETAPAS DO DESENVOLVIMENTO

BACKEND

1. Configurando o ambiente (Git, Eclipse, Java, Postgres, Insomnia);
2. Gerando arquivo de inicialização do spring boot (https://start.spring.io/);
3. Importando um projeto maven no eclipse;
4. Criando o pacote models p/ entidade contatos (com.creathus.crup.api.rest.models > contacts.java);
5. Implementando a conexão com o banco de dados (application.properties);
6. Criando banco de dados no postgres (creathus_agenda);
7. Criando o pacote repositório para persistência de dados da entidade contatos (com.creathus.crup.api.rest.repository > contactsrepository.java);
8. Criando um pacote dos controles da entidade contatos para receber as requisições http com a finalidade de criar, listar, editar e deletar registros no banco de dados postgres (com.creathus.crup.api.rest.controllers > contactscontroller.java);
9. Testando as requisições com o insominia ou postman;
10. Configurando o swagger (com.creathus.crup.api.rest.config > SwaggerConfig.java).

FRONTEND

1. Configurando o ambiente (Git, VsCode);
2. Inicializando um projeto ReactJs (npx create-react-app);
3. Instalando os pacotes necessários para o projeto (react-dom, react-router-dom e axios);
4. Definindo o Layout (Html e Css);
5. Configurando o react-router-dom para as rotas das páginas (./routes.js);
7. Criando as páginas para criação, atualização e listagem de Contatos (./src/pages/);
6. Configurando o Axios para comunicação do frontend com a API REST criada em JAVA (./services > api.js);
8. Testando o projeto.

## INSTRUÇÕES DE INSTALAÇÃO

git clone https://github.com/vilhennajr/creathus.git

BACKEND

1. Configure o banco de dados em (application.properties) se o acesso ao postgres for diferente de username = postgres e password = root;
3. Em (com.creathus.crup.api.rest > CrupApiRestApplication.java) de um Run As > Java Application para rodar a aplicação ou execute na pasta target o .jar crup-api-rest-0.0.1-SNAPSHOT;
4. Com tudo configurado acesse (localhost:8080/swagger-ui.html) para ver a documentação da API REST no Swagger ou use o insomnia para fazer testes das requisições usando a url /api-rest/contacts.

FRONTEND

2. No Vsconde (npm start).

## URL's: 

BACKEND

1. GET localhost:8080/api-rest/contacts - Lista os Contatos;
2. POST localhost:8080/api-rest/contacts - Cria um Contato;
3. PUT localhost:8080/api-rest/contacts - Atualiza um Contato;
4. DELETE localhost:8080/api-rest/contacts/id - Deleta um Contato;
5. GET localhost:8080/api-rest/contacts/id - Mostra um Contato.

FRONTEND

1. localhost:3000/ (frontend).

ATT, FLAVIANO (92)98204-5339
