
# O que é npm?

Node Package Manager ou NPM é o principal gerenciador de pacotes para javascript. 

Ele é composto por dois principais elementos. 

O **CLI** (command line interface), que é onde nós baixamos ou publicamos os pacotes e o **repositório online** que serve como host para os pacotes javascript. 

Um exemplo um pouco mais visual, pense no repositório online como uma revendedora, que recebe pacotes de empresas (criadores de pacote) e distribui para seus clientes (usuários de pacote).

![](https://www.freecodecamp.org/news/content/images/2020/06/wombat-install.png)

![](https://www.freecodecamp.org/news/content/images/2020/06/wombat-publish.png)

## Package.json

O package.json tem a responsabilidade de descrever o projeto javascript (ou node), com as informações necessárias, como nome do projeto, pacotes que estão sendo usados. 

Ele é como um rótulo do seu projeto, como todas as informações dele.

Ele irá ser gerado sempre que você usar o código *npm init*, e irá ter as seguintes informaçṍes de metadata:

* *name*: contendo o nome do seu projeto ou biblioteca, pode ser modificiado, porém evite espaços e acentos. 
* *version*: version, o que comumente não é utilizado pois não há necessidade aparente de controlar a versão de bibliotecas open-source, mas pode ser útil para versões de implementação.
* *description*: literalmente a descrição do projeto. 
* *license*: licença do projeto. 
* *main*: arquivo principal, geralmente **main.js**.
  
## npm scripts

O package.json também suporta alguns scripts, que podem ser rodados localmente no terminal. Segue abaixo alguns exemplos:

```Js
{
  "scripts": {
    "build": "tsc",
    "format": "prettier --write **/*.ts",
    "format-check": "prettier --check **/*.ts",
    "lint": "eslint src/**/*.ts",
    "pack": "ncc build",
    "test": "jest",
    "all": "npm run build && npm run format && npm run lint && npm run pack && npm test"
  }
}
``` 

Os scripts *eslint*, *prettier*, *ncc* e *jest* são instalados localmente na sua pasta *node_modeules*. É possivel colocar quaisquer códigos, até algum código especifico que você use para iniciar seu projeto como um webpack por exemplo.

> Para rodar esses scripts, você deve usar npm (nome do script).

## dependences e devDependences

Esses dois vem como chaves no package.json e seus valores são nomes de bibliotecas, segue um exemplo:

```Js
{
  "dependencies": {
    "@actions/core": "^1.2.3",
    "@actions/github": "^2.1.1"
  },
  "devDependencies": {
    "@types/jest": "^25.1.4",
    "@types/node": "^13.9.0",
    "@typescript-eslint/parser": "^2.22.0",
    "@zeit/ncc": "^0.21.1",
    "eslint": "^6.8.0",
    "eslint-plugin-github": "^3.4.1",
    "eslint-plugin-jest": "^23.8.2",
    "jest": "^25.1.0",
    "jest-circus": "^25.1.0",
    "js-yaml": "^3.13.1",
    "prettier": "^1.19.1",
    "ts-jest": "^25.2.1",
    "typescript": "^3.8.3"
  }
}
```

E são instaladas usando npm install --save (no caso das dependencies) ou npm install --save-dev (no caso das devDependencies).

As dependencies são usadas para dependencias que são relacionadas a produção, pacotes que irão se manter mesmo na etapa de implementação. Já as devDependencies são aquelas que só seram usadas no desenvolvimento, como babel-loader. 

Uma das utilidades de separar elas, é para poder remover as que não serão necessárias na hora de fazer o deploy por exemplo.

## Packed-lock.json

Esse arquivo é algo como um rótulo de ingredientes de um alimento, e assim como em tese você não precisa ler os rótulos (a não ser que você esteja muito sem o que fazer), você não irá ler o packed-lock, a não ser que você realment precise resolver algum erro especifico.

> Ele é criado com o *'npm i'* junto do *package.json*. 

