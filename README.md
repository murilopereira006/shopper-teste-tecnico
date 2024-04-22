### shopper-teste-tecnico

# Backend stacks:
## Node.js, Prisma (ORM) e MySQL
- Para rodar esta aplicação, é necessário entrar no diretório "/backend", digitar no terminal 'npm install' e então 'npm start' para rodar a aplicação na porta 5000. Antes de ter a aplicação funcionando perfeitamente, é necessário criar o arquivo ".env" na pasta raiz do projeto. Este arquivo deve conter a variável "DATABASE_URL" no seguinte formato:

> DATABASE_URL="mysql://USUARIO:SENHA@localhost:PORTA/shopper"

Nesta variável, você deve substituir USUARIO pelo seu usuário de preferência do seu banco de dados local, SENHA pela senha de seu usuário de preferência e PORTA pela porta usada no seu banco de dados.

Em seguida, use o comando 'npx prisma init' para verificar se tudo foi preenchido corretamente e 'npx prisma db push' para criar as tabelas no seu banco de dados local. Após estes comandos, seu servidor backend já estará funcionando corretamente, pronto para gerenciar os produtos do seu banco de dados.

# Frontend stacks:
## React, Axios e Styled-Components
- Para rodar a aplicação, basta, dentro do diretório "/frontend", digitar 'npm install' para instalar os pacotes de dependências e então 'npm start' para rodar a aplicação na porta 3000.

# Uso da aplicação
Com o servidor rodando na porta 5000 e a interface do usuário na porta 3000, é possível, através de seu navegador em "http://localhost:3000/", adicionar arquivos .xlsx ou .csv com listas de produtos para valida-los e atualizar os dados dos produtos.
