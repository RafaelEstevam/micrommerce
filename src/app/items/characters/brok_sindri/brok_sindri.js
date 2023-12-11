const cards = [
  {id: 11, type: 'defense', attribute: 'power', value: 2},
  {id: 12, type: 'defense', attribute: 'power', value: 1},
  {id: 13, type: 'defense', attribute: 'power', value: 1, flavorText: 'Causa Dano ao inimigo igual ao dano que você bloqueou'},
  {id: 14, type: 'attack_melee', attribute: 'power', value: 2},
  {id: 15, type: 'attack_melee', attribute: 'power', value: 1},
  {id: 16, type: 'attack_melee', attribute: 'power', value: 1},
  {id: 17, type: 'attack_melee', attribute: 'power', value: 1},
  {id: 18, type: 'attack_reach', attribute: 'power', value: 1},
  {id: 19, type: 'attack_reach', attribute: 'power', value: 1},
  {id: 110, type: 'power', attribute: 'power', value: 3},
  {id: 111, type: 'power', attribute: 'power', value: 2},
  {id: 112, type: 'power', attribute: 'power', value: 2},
  {id: 113, type: 'power', attribute: 'power', value: 3},
  {id: 114, type: 'power', attribute: 'power', value: 2},
]

export class Brok {
  life = 6;
  furyLimit = 3;
  fury = 0;
  skillOne = () => {}
  
  constructor({life,  fury, skillOne}){
    this.life = life,
    this.fury = fury,
    this.furyLimit = 3,
    this.skillOne = skillOne
  }

  activeSkills(){
    this.skillOne();
  }
}

export class Sindri {
  life = 6;
  furyLimit = 3;
  fury = 0;
  skillOne = () => {}
  
  constructor({life,  fury, skillOne}){
    this.life = life,
    this.fury = fury,
    this.furyLimit = 3,
    this.skillOne = skillOne
  }

  activeSkills(){
    this.skillOne();
  }
}