# Sistema de modulos do node

A forma como vimos anteriormente de import e export é algo do es6, porém, em muitos casos não é compreendido nativamente pelos navegadores mais antigos, por isso é essencial o uso de um loader como babel. 

A forma nativa de import e export é ausada no node, tanto é, que quando usamos o babel, ele irá converter o import/export do es6 para o import/export do node.js.

---
## Exportar

Para exportar nós usamos os modules, que são nativos do node.

```Js
module.exports.seuObjeto = seuObjeto;
```

Esse *module* é o que iremos usar para que possamos exportar nossos objetos. Porém, existem outras duas formas:

```Js
exports.seuObjeto = seuObjeto;
// ou
this.seuObjeto = seuObjeto;
```

### Exportar vários de uma vez
Também é possível exportar vários de uma só vez, porém, se você fizer isso, não poderá exportar objetos separadamente mais. 

```Js
module.exports = {
    nome, sobrenome, Pessoa;
};
```
## Importar

Para importar, você deve colocar em uma variável e não usar mais import. 

```Js
const seuModulo = require('./app.js');
// ou 
const seuObjeto = require('./app.js').seuObjeto;
```

Como você pode observar existem duas formas, em uma você importa o modulo todo daquele arquivo, é algo como o "*import * as...*", que importa todos os objetos que modulo exporta. 

Já na segunda forma, você está importando apenas um objeto do modulo, de forma mais especifica. 

--- 
## Imports de objetos nativos

Em alguns casos, você precisa usar coisas como o "*path*" que vem nativamente ou o "*axios*" que você precisa importar usando npm instal. Para esses objetos que precisam ser importados para o escopo atual, para ai sim serem utilizados, a importação é diferente. 

> Lembre-se que alguns precisam ser instalados, se você tentar importar algo que não está instalado no node_modules, você não será capaz de usar.

```Js
const axios = require('axios');
```
 
> E é assim para as duas formas de importação. Tanto import quando require.