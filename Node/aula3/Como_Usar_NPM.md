# Como efetivamente usar npm como consumidor?

Como a maior parte dos usuários faz uso dessa forma, é realmente importante entender essa parte. A segunda é bem opcional

## Npm install

Ou também ' *npm instal (nome do pacote opicional)* ', esse é o comando mais usado por desenvolvedores, ele instala todos os pacotes na sua última versão com o sinal " **^** ".  Dentro de um projeto ele irá baixar todos os arquivos necessários na pasta node_modules (se não houver uma ele a cria), e seguindo as informações do package json em relação a pacotes e versões. 

> Ele também gera novamente o package-lock.json

Você também pode instalar usando -g, o que possibilita o uso do pacote em qualquer projeto da sua máquina. 

Outra flag que você pode usar além da --save-devDependence, é a --production, que irá instalar as dependencias que não está na devDependence, que são as que efetivamente vão para o deploy.

## NPM Ci

Assim como temos o --production que é um comando ideal para deploy, temos um que ideal para desenvolvimento. 

O " *npm ci* ", faz uso do package-lock para instalar todos os pacotes de dependencia usados no projeto, assim mantentando um ambiente atualizado, independente se estamos em outra máquina. 

## Auditoria NPM 

Como temos muitos e muitos pacotes, é óbvio que ia ter problemas de segurança, com isso, temos o comando " *npm audit* ", ele nos informa de possíveis problemas nos pacotes. 

Ele fazem isso mantendo uma lista de possíveis problemas dos pacotes e se já existir um patch de solução, será retornado ao invocar npm audit. 

> Se houver como resolver, é possível solucionar usando " *npm audit fix* ".


# Como usar sendo um publisher?

Para publicar um pacote, é simples, você apenas precisa rodar o código " *npm publish* ". O que você precisa saber é mais sobre o versionamento de pacotes, que será explicado em outro momento. 

