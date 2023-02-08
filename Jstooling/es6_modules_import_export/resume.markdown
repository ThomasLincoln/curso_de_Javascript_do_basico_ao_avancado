 # Import/Export

Quando trabalhamos com arquivos de modulo, eles são como "mundinhos" onde nenhum pode acessar o outro diretamente sem nenhum auxilio. Você por exemplo não pode viajar para outro país sem um passaporte. Assim como o modulo nao pode ir para outro lugar sem uma permissão apropriada.

E aí entra o import e export, sendo usado para permitir que uma determinada função possa ser acessada por outro arquivo e ao mesmo tempo permite que esse outro arquivo acesse a determinada função.

Existem várias formas de se fazer uma importação e exportação. 

## Import 

Para importar nós temos as seguintes formas (vou listar apenas as que eu realmente achei que tem um diferencial).

---
### Import Geral

```Js
import * as myModule from '/modules/my-module.js';
```

Isso importa todos os exports do my-module, e os adciona em um "pacotão" chamado myModule, assim você pode acessar eles dentro do myModule.

Para usar as coisas importas basta usar myModule.nomeDaFuncao();

---
### Import único
```Js
import {myExport} from '/modules/my-module.js';
``` 
O import único, tem como função importar apenas um componente, seja variável ou função. Basicamente importa o objeto myExport no escopo atual, permitindo seu acesso. 

---
### Import de vários ódulos
```Js
import {nome, idade} from '/modules/my-module.js';
```
Isso adciona tanto nome como idade no escopo atual, assim permitindo que você possa importar quais objetos você quiser.

---
### Importação default
Uma coisa que podemos fazer, é importar algo que é default na exportação, por exemplo.

Você tem um módulo responsável pela construção de objetos pessoa. A função construtora poderia ser o seu default, e demais variáveis usadas seriam o que seria a mais. 

Assim, você importaria como default a função construtora, e caso quiser, poderá importar as variáveis. 

```Js
import myDefault from '/modules/my-module.js';
```
Dessa forma você apenas importa o objeto default. Porém, você pode mesclar isso com as outras importações citadas.

``` JS
import myDefault, * as myModule from '/modules/my-module.js';
``` 

ou 

```Js
import myDefault, {foo, bar} from '/modules/my-module.js';
```

--- 
### Importação vazia
```Js
import '/modules/my-module.js';
```
Outra coisa interessante é que você pode apenas executar o código do módulo sem necessariamente importar nada. 

---
### Renomear Import
Com esses imports, você é capaz de importar quais itens você quiser, sem restrições alguma, seja importando todos, um apenas ou vários. 

Porém, você também pode modificar o nome das variáveis na importação, como no seguinte exemplo. 

```Js
import {reallyReallyLongModuleExportName as shortName} from '/modules/my-module.js';
``` 

colocando um as depois do objeto escolhido, você pode modificar seu nome naquele escopo. 


---
---

## Export

O export tem como função permitir que outros códigos importem os objetos importados, algo como abrir as fronteiras rs.

Assim como o import, existem inúmeras formas de se exportar um objeto.

