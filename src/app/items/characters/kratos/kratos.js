'use'

export const kratosCards = [
  {id: 71, type: 'defense', attribute: 'power', value: 2},
  {id: 710, type: 'power', attribute: 'power', value: 3},
  {id: 78, type: 'attack_reach', attribute: 'power', value: 0},
  {id: 72, type: 'defense', attribute: 'power', value: 1},
  {id: 712, type: 'power', attribute: 'power', value: 2},
  {id: 73, type: 'defense', attribute: 'power', value: 1, flavorText: 'Causa Dano ao inimigo igual ao dano que você bloqueou'},
  {id: 74, type: 'attack_melee', attribute: 'power', value: 2},
  {id: 75, type: 'attack_melee', attribute: 'power', value: 1},
  {id: 76, type: 'attack_melee', attribute: 'power', value: 1},
  {id: 77, type: 'attack_melee', attribute: 'power', value: 1},
  {id: 79, type: 'attack_reach', attribute: 'power', value: 1},
  {id: 711, type: 'power', attribute: 'power', value: 2},
  {id: 713, type: 'power', attribute: 'power', value: 3},
  {id: 714, type: 'power', attribute: 'power', value: 2},
]

export class Kratos {
  
  life = 10;
  furyLimit = 5;
  card = 7;
  fury = 0;
  type = '';
  power = 0;
  cards = kratosCards;
  position = [[], []]; //Column (0...3), position (0 ou 1)
  
  constructor(){
    this.life = 10,
    this.fury = 0,
    this.furyLimit = 5,
    this.card = 7;
  }

  skillOne = () => {
    this.life = this.life + 3;
  }

  skillTwo = () => {
    this.power = this.power + 3;
  }

  activeSkills(){
    this.skillOne();
    this.skillTwo();
  }
}