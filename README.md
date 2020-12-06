# Gn-Vendas

Um projeto feito em React no Frontend e NodeJS/MySQL no Backend para usar a API do Gerencianet para gerar boletos.

## Para rodar este projeto

Clone este repositório:

```
git clone https://github.com/BernardoSoD/Gn-Vendas.git
```

Vá para a pasta client e instale as dependências:

```
cd Gn-Vendas
cd client
npm install
```
Agora quando quiser abrir o client é so ir pra pasta dele e digitar `npm start`. \
O client vai rodar no [http://localhost:3000](http://localhost:3000).

Você pode também fazer a build de produção com `npm run build`, ela será colocada na pasta `build`.

## Para instalar o servidor da API

```
cd ..
cd server
npm install
```

Agora quando quiser abrir o server é so ir pra pasta dele e digitar `npm run dev` (para rodar com nodemon) ou `npm run start`. \
O server vai rodar no [http://localhost:3001](http://localhost:3001).

## Para instalar o banco de dados MySQL, via MySQL Workbench

- Abra uma nova conexão,
- Vá para Server-> Data Import,
- Selecione "Import from a Self-Contained File",
- Escolha o caminho até o arquivo `gnvendas.sql`,
- Escolha o "Default Target Schema" ou crie um novo clicando em "New..." e nomeando como "gnvendas" (que será onde o banco de dados será colocado) 
- Clique em "Start Import" para começar a importação dos dados \
#### OBS: É necessário que este banco de dados seja ligado antes da utilização do server para funcionar corretamente.

#### OBS²: Para o banco de dados funcionar você deve usar o user "root" com a senha "password".

#### Caso você se depare com este erro: "Client does not support authentication protocol requested by server; consider upgrading MySQL client" recomendo ler esta resposta:
https://stackoverflow.com/questions/50093144/mysql-8-0-client-does-not-support-authentication-protocol-requested-by-server

Este projeto foi criado com o [Create React App](https://github.com/facebook/create-react-app).
