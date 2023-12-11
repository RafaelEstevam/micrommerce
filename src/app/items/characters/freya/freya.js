export const freyaCards = [
  {id: 51, type: 'defense', attribute: 'power', value: 2},
  {id: 52, type: 'defense', attribute: 'power', value: 1},
  {id: 53, type: 'defense', attribute: 'power', value: 1, flavorText: 'Causa Dano ao inimigo igual ao dano que você bloqueou'},
  {id: 54, type: 'attack_melee', attribute: 'power', value: 2},
  {id: 55, type: 'attack_melee', attribute: 'power', value: 1},
  {id: 56, type: 'attack_melee', attribute: 'power', value: 1},
  {id: 57, type: 'attack_melee', attribute: 'power', value: 1},
  {id: 58, type: 'attack_reach', attribute: 'power', value: 1},
  {id: 59, type: 'attack_reach', attribute: 'power', value: 1},
  {id: 510, type: 'power', attribute: 'power', value: 3},
  {id: 511, type: 'power', attribute: 'power', value: 2},
  {id: 512, type: 'power', attribute: 'power', value: 2},
  {id: 513, type: 'power', attribute: 'power', value: 3},
  {id: 514, type: 'power', attribute: 'power', value: 2},
];

export class Freya {
  life = 8;
  furyLimit = 6;
  card = 7;
  fury = 0;
  type = '';
  power = 0;
  cards = cards;
  position = [[], []]; //Column (0...3), position (0 ou 1)
  
  constructor(){
    this.life = 8,
    this.fury = 0,
    this.furyLimit = 6,
    this.card = 7;
  }

  skillOne = () => {}
}