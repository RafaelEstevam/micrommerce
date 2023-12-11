export const atreusCards = [
  {id: 31, type: 'defense', attribute: 'power', value: 2},
  {id: 32, type: 'defense', attribute: 'power', value: 1},
  {id: 33, type: 'defense', attribute: 'power', value: 1, flavorText: 'Causa Dano ao inimigo igual ao dano que você bloqueou'},
  {id: 34, type: 'attack_melee', attribute: 'power', value: 2},
  {id: 35, type: 'attack_melee', attribute: 'power', value: 1},
  {id: 36, type: 'attack_melee', attribute: 'power', value: 1},
  {id: 37, type: 'attack_melee', attribute: 'power', value: 1},
  {id: 38, type: 'attack_reach', attribute: 'power', value: 1},
  {id: 39, type: 'attack_reach', attribute: 'power', value: 1},
  {id: 310, type: 'power', attribute: 'power', value: 3},
  {id: 311, type: 'power', attribute: 'power', value: 2},
  {id: 312, type: 'power', attribute: 'power', value: 2},
  {id: 313, type: 'power', attribute: 'power', value: 3},
  {id: 314, type: 'power', attribute: 'power', value: 2},
]

export class Atreus {
  
  life = 7;
  furyLimit = 4;
  card = 7;
  fury = 0;
  type = '';
  power = 0;
  cards = atreusCards;
  position = [[], []]; //Column (0...3), position (0 ou 1)
  
  constructor(){
    this.life = 7,
    this.fury = 0,
    this.furyLimit = 4
  }

  skillOne = () => {}
}