# Resumo

Bom nessa aula, eu aprendi um pouco sobre o webpack, que é responsável por permitir que nós particionemos nosso código em modulos e depois junta-lo em um só bundle

## Como são esses módulos?

Cada arquivo que voceê tem é algo como um modulo, assim você pode dividir em arquivos e pode importar um para o outro, assim criando dependencias. O que o webpack faz é pegar todos esses arquivos em um bundle e retornar ele para o html.

Isso é realmente útil para aplicações SPAs que são aplicações de uma página só. 

---

**Exemplo:** 

Supondo que tenhamos uma aplicação que faça dois calculos, um de soma e um de multiplicação, assim tendo duas funções.


index.html

```html
<html>
<head>
    <script src="src/sum.js"></script>
    <script src="src/multiply.js"></script>
    <script src="src/index.js"></script>
</head>
</html>
```

index.js

```Js
var totalMultiply = multiply(5, 3);
var totalSum = sum(5, 3);
console.log('Product of 5 and 3 = ' + totalMultiply);
console.log('Sum of 5 and 3 = ' + totalSum);
```
multiply.js
```Js
var multiply = function (a, b) {
    var total = 0;
    for (var i = 0; i < b; i++) {
        total = sum(a, total);
    }
    return total;
};
```

sum.js

```Js
var sum = function (a, b) {
    return a + b;
};
```

**Mas como o webpack nos ajuda?**

Ai que entra os modulos para nos ajudar com essas dependencias. Como você pode ver, existem dependencias, onde index depende de multiply e sum, e multiply depende de sum.

Isso pode nos gerar erros caso nós linkemos errado, ou coloquemos em uma ordem errada no index os links js.

Agora imagine se isso acontecesse com dezenas de arquivos. Ficaria complicado não?

O que o webpack faz é converter essa nossa dependencia em modulos permitindo que ele mesmo gerencie essas dependencias para nós. Chamando o arquivo quando for preciso, ao invés de seguir na mesma linha de carregamendo do html. 

## Como ele ajuda no carregamento?

Se você observar no index.html, ele irá puxar 3 arquivos js, mas supondo que nossa aplicação escale, imagine 30 desses arquivos. O usuário teria que levar um bom tempo carregando esses arquivos todos de uma vez. O que o webpack faz é juntar todos nossos arquivos em um só, permitindo que nosso projeto carrega de uma vez só. 

--- 

> E essas são as principais funcionalidades do webpack, bundling and modularisation. !


---

# Setup do webpack

O que nós podemos fazer para isso é usar module.exports para exportar ou permitir que uma função seja acessada por outra. 

E depois usamos o require para podermos acessar uma função que tem a permisão de exportação. 

**Exemplo:**

index.html
```HTML
<html>
<head>
    <script src="./dist/bundle.js""></script>
</head>
</html>
``` 


index.js

```Js
var multiply = require('./multiply');
var sum = require('./sum');
var totalMultiply = multiply(5, 3);
var totalSum = sum(5, 3);
console.log('Product of 5 and 3 = ' + totalMultiply);
console.log('Sum of 5 and 3 = ' + totalSum);
```

multiply.js
```js
var sum = require('./sum');
var multiply = function (a, b) {
    var total = 0;
    for (var i = 0; i < b; i++) {
        total = sum(a, total);
    }
    return total;
};
module.exports = multiply;
```

sum.js

```js
var sum = function (a, b) {
    return a + b;
};
module.exports = sum;
```


Observe que ambos sum e multiply, nós permitimos que eles fossem acessados usando o module.exports e depois puxamos elas para o index usando require.


___

Porém, nos precisamos configurar o webpack. Com isso, vamos ver como é a configuração inicial dele.

```js
var path = require('path');
module.exports = {
  entry: './src/index.js',    
  output: {
    path: path.resolve(__dirname, './dist/),
    filename: 'bundle.js'
  }
}
```

Entry: é a raiz da nossa árvore de dependências, você deve entender ele como o arquivo principal, seu main.js por assim dizer. 

output:path: é onde vai ser colocado o nosso bundle. usamos a função path para podermos buscar de uma forma mais geral. 

output:filename: é o nome do nosso arquivo bundle, geralmente chamam ele de bundle.js.

--- 

Nós também podemos usar loaders diferentes, como o do babel, que irá permitir uma maior compatibilidade com navegadores mais antigos. 

Para utilizar ele nós adcionamos isso no nosso webpack.config.js

``` js
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
```


fonts: 

https://blog.ag-grid.com/webpack-tutorial-understanding-how-it-works/#:~:text=Webpack%20is%20a%20module%20bundler,standard%20for%20Web%20Applications%20today.