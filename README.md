### Projeto para a Materia de Laboratorio de Desenvolvimento Web
### Alunos:
**Fabrício Louzada Colodette**
**Gabriel Barros de Almeida**


### Enunciado do Trabalho
<div style="text-align: justify">

**Resumo:** este primeiro trabalho consiste na criação de um backend para uma aplicação web para academias de
musculação usando Node.js, Express.js e Mongoose (MongoDB). Deve ser criada uma API conforme padrão
estabelecido no roteiro atualizado da aula de 18 de outubro de 2022, disponível em nosso grupo do Telegram.

**Descrição do problema:**: uma academia de musculação deseja informatizar as fichas de exercícios dos alunos. Uma
ficha é composta por um conjunto de exercícios ordenados, sendo que cada exercício tem um tipo, uma carga
(peso), um número de repetições e um número de séries. Por exemplo, um dos exercícios da ficha pode ser do tipo
“supino”, com 30kg de peso e 3 séries de 10 repetições. Cada tipo de exercício tem um nome e trabalha um
determinado grupo muscular. Cada tipo possui também um peso máximo e mínimo de execução e um degrau de
ajuste de peso (de 1 em 1 quilo, ou de 5 em 5 quilos, por exemplo, dependendo do equipamento). O tipo de
exercício “supino”, por exemplo, pode ser executado com um peso entre 10kg e 200kg, variando de 5 em 5 quilos, e
trabalha o grupo muscular “peitoral”. A ficha de um aluno sempre é criada ou alterada por um instrutor, sendo que
ela tem uma data de início da vigência, um conjunto de exercícios a serem executados e um conjunto de registro das
execuções. Cada execução tem uma data e hora de início e de fim e, opcionalmente, gera algumas anotações. É
comum os alunos seguirem fichas diferentes em dias diferentes, portanto, alunos podem ter mais de uma ficha
ativa
</div>
