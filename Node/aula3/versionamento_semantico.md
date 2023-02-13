# Versionamento semantico

Algo que é extremamente para entender um pouco mais sobre as versões dos pacotes, principalmente para quem pretende criar pacotes, é como são lidas as versões dos pacotes.

Por exemplo, se tivermos um pacote na sua versão 1.2.4:

* 1: será a versão major(maior), que diz respeito a versão que contem mudanças significativas no pacote e pode gerar incompatibilidades.
* 2: será a versão minor(menor), que diz respeito a versões que adcionam novas features para o pacote, então quando você adcionar uma nova funcionalidade, deve ser mudar ela.
* 4: será a versão de patch, que são as versões que corrigem problemas nos pacotes. 

## Inferno das dependencias

Um problema de trabalhar com dependencias, é que quando nós temos muitos pacotes, atualizar um deles pode causar um gigante problema. E com isso surgiu o versionamento dinamico como solução. 

Pois, supondo que você precise fazer uma atualização por causa de um erro, você pode atualizar tranquilamente o patch. Pois, seguindo o guia acima é possível saber que versões você pode instalar. 

## Outras informações de versão

Você também pode se deparar com os seguintes simbolos " **^** " ou " **~**", o ^ indica que é possível atualizar a minor caso haja uma versão mais atual, o ~ indica que existe um patch mais atual e pode-se instalar ele. 