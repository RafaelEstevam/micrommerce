export const scenarios = [
  {
    id: 1,
    name: 'Os Viajantes',
    boss: false,
    specialRule: '',
    specialPreparation: '',
    victoryCondition: 'Derrote ambos os Viajantes em (5, 7)',
    defeatCondition: '',
    sides: [
      {id: 1, flavorText: 'Homens de terras distantes, vagando pelo mundo atrás de conhecimento e poder. As Nornas preveem uma temível batalha adiante.'},
      {id: 2, flavorText: 'Se forem deixados vivos, os Viajantes ganharão força até um ponto em que se tornarão imbatíveis.', obstacle: 'Antes da primeira rodada, cada jogador remove duas cartas de defesa de seu baralho.'}
    ]
  },
  {
    id: 2,
    name: 'Grendels',
    boss: false,
    specialPreparation: '',
    specialRule: 'Adicione 2 marcadores de fogo para cada pedestal. O número de marcadores representa a força de ataque e a defesa do respectivo Grendel.',
    victoryCondition: 'Derrote ambos os Grendels.',
    defeatCondition: '',
    sides: [
      {id: 1, flavorText: 'Para evitar o Ragnarok, alguém deve obter a Runa Negra. Mas, como todos os passos nesta jornada o caminho adiante está bloqueado.'},
      {id: 2, flavorText: 'Deixar os segredos da Runa Negra para trás torna o caminho árduo e imprevisível, poi ela esconde dentro de si grande conhecimento.', obstacle: 'Antes da primeira rodada, cada jogador embaralha uma carda de atordoamento em seu baralho.'}
    ]
  },
  {
    id: 3,
    name: 'O Ogro',
    boss: false,
    specialPreparation: '',
    specialRule: 'Após o Ogro ser atingido com a pedra, os jogadores podem montar nele e usá-lo para atacar outros monstros. Monstros atacados dessa maneira não rolam o dado de inimigo',
    victoryCondition: 'Derrote todos os inimigos',
    defeatCondition: 'Se o Ogro for derrotado e um outro inimigo estiver vivo, o jogo termina em derrota',
    sides: [
      {id: 1, flavorText: 'Criaturas horríveis, feitas de músculos e ódio. Agressivas, institivas e mortais, mas, se tiver a mente para a agerra, o poder delas pode se tornar seu para controlar.'},
      {id: 2, flavorText: 'Investir cegamente em uma batalha contra o Ogro não é impossível, mas é imprudente e perigoso.', obstacle: 'Antes da primeira rodada, cada Herói recebe 1 de dano.'}
    ]
  },
  {
    id: 4,
    name: 'Helheim',
    boss: false,
    specialPreparation: '',
    specialRule: 'Coloque 3 marcadores de fogo nos espaços respectivos em (5,8)',
    victoryCondition: 'Derrote todos os inimigos do cenário',
    defeatCondition: 'Se uma fogueira for extinga e sua runa for ativada, o jogo termina em derrota',
    sides: [
      {id: 1, flavorText: 'Um reino de frio implacável, onde nenhuma magia conhecida é capaz de criar uma chama. Os mortos desonrados vêm para cá, e ninguém jamais retorna. Usar um navio sitiado pelos mortos para escapar de Helheim deveira ser impossível. Mas o poço do destino mostra que alguém tentou...'},
      {id: 2, flavorText: 'Ir para Helheim é uma escolha insana, mas o exército deles crescerá cada vez mais, até ameaçar a própria Midgard.', obstacle: 'Antes da primeira rodada, cada jogador remove a carta (+) mais alta do seu baralho.'}
    ]
  },
  {
    id: 5,
    name: 'Alfheim',
    boss: false,
    specialRule: '',
    specialPreparation: '',
    victoryCondition: 'Derrote Svartáljqfurr e destrua a colmeia.',
    defeatCondition: '',
    sides: [
      {id: 1, flavorText: 'Um reino atormentado por uma gerra sem fim, trancafiado em uma batalha eterna pela luz de Alfheim. As Nornas não enxergam vencedor para esta guerra sem sentido. Em vez disso, um grupo de figuras lendárias reinvidicou a Luz para si.'},
      {id: 2, flavorText: 'Todas as guerras devem acabar. Se um ou ambos os lados reinvidicarem a Luz de Alfheim, o fim pode vir antes do Ragnarok para Midgard e os Reinos.', obstacle: 'Antes da primeira rodada, cada jogador embaralha 1 carta de veneno no seu baralho.'}
    ]
  },
  {
    id: 6,
    name: 'Ancestral de pedra',
    boss: false,
    specialPreparation: '',
    specialRule: 'Use marcador de fogo para representar pedaços do coração que caem do Ancestral. Não descarte os marcadores quando as cartas forem viradas. O ancestral de pedra não pode ser atordoado.',
    victoryCondition: 'Derrote o ancestral de pedra.',
    defeatCondition: '',
    sides: [
      {id: 1, flavorText: 'Criaturas místicas e guardiões do mundo natural, criados para proteger a terra. A lenda diz que fragmentos do coração da criatura são estilhaços de tremendo poder, ideais para aprimorar equipamentos.'},
      {id: 2, flavorText: 'Estes Golems são inofensivos, exceto quando defendem seu território. Deiá-los para trás não significa nada além de perder excelentes aprimoramentos de equipamento.', obstacle: 'Antes da primeira rodada, cada jogador remove 2 cartas especiais do seu baralho.'}
    ]
  },
  {
    id: 7,
    name: 'HREZLYR',
    boss: true,
    specialPreparation: '',
    specialRule: 'Cada parte de Hrezlyr é considerada um inimigo independente.',
    victoryCondition: 'Derrote a cabeça para derrotar Hrezlyr',
    defeatCondition: '',
    sides: [
      {id: 1, flavorText: 'Brok e Sintri poderiam fazzer bom uso de uma criatura nítica como Hrezlyr. Sem vida, é claro. Talvez a chave para sobreviver ao Ragnarok e derrotar Odin encontra-se em armas, armaduras e aprimoramentos feitos com os ossos e o couro do dragão.'},
      {id: 2, flavorText: 'Avançar nesta guerra contra a Profecia sem o equipamento certo pode revelar-se um esforço inútil.', obstacle: 'Antes da primeira rodada, cada jogador recebe 1 de dano'}
    ]
  },
  {
    id: 8,
    name: 'Magni e Modi',
    boss: true,
    specialPreparation: '',
    specialRule: 'Use marcador de fogo para representar as lanternas. Quando um inimogo voltar para a névoa, ele é completamente curado.',
    victoryCondition: 'Derrote Magni e Modi',
    defeatCondition: '',
    sides: [
      {id: 1, flavorText: 'Filhos de Thor, vivendo na sombra de seu titânico pai, Magni e Modi sempre procuram se igualar a ele. As Nornas veem que Modi, desesperado, está empunhando um Mastelo Lendário, na esperança de parar o grupo e impressionar seu Pai. Agora é a oportunidade perfeita para reinvidicar o Mjolnir e sobreviver ao Ragnarok'},
      {id: 2, flavorText: 'Deixar esta oportunidade passar faz com que o Poderoso Martelo de Thor continue nas mãos dele. Consequentemente, Odin fica mais forte.', obstacle: 'Antes da primeira rodada, cada jogador remove as 2 cartas mais altas de (+) do seu baralho.'}
    ]
  },
  {
    id: 9,
    name: 'Remissão de Baldur',
    boss: true,
    specialPreparation: 'Uma vez que o Cenário 9A estiver completo, subistitua pelo cenário 9B. Mantenha os marcadores de Viscos.',
    specialRule: 'Marcadores de fogo representam Visco',
    victoryCondition: 'Prenda Baldur.',
    defeatCondition: 'O jogo termina em derrota se Baldur for derrotado.',
    sides: [
      {id: 1, flavorText: 'Somente os tolos evitam as profecias. No momento em que Baldur for morto, o Ragnarok é desencadeado. Diminuir a raiva de Baldur poderia evitar esta tragédia.'},
      {id: 2, flavorText: 'Como o poço do Destino mostra, deixar Baldur com sua raiva e sede por vingança pode não terminar bem.', obstacle: 'Antes da primeira rodada, cada jogador saca 1 carta a menos.'}
    ]
  },
  {
    id: 10,
    name: 'Sigrun',
    boss: true,
    specialPreparation: 'As cartas 2C, 3C, 6C, 7C, devem ser colocadas sobre as cartas 2,3,6 e 7',
    specialRule: 'Depois que as outras Valquírias forem derrotadas, quando forem ativadas, elas atacam Sigrun, que neste caso não rola o dado de inimigo.',
    victoryCondition: 'Derrote Sigrun',
    defeatCondition: '',
    sides: [
      {id: 1, flavorText: 'Se alguém pode derrotar Odin, é Sigrun, que outrora foi a Rainha das Valquírias. A única maneira de quebrar o feitiço que a liga a esta condição mortal é derrotá-la.'},
      {id: 2, flavorText: 'Não contar com a ajuda de Sigrun para derrotar Odin pode tornar a missão impossível.', obstacle: 'Antes da primeira rodada, cada jogador remove do seu baralho 2 cartas especiais ou cartas de defesa em qualquer combinação.'}
    ]
  }
]