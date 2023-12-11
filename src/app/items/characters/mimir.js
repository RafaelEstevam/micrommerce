const cards = [
  {id: 91, type: 'defense', attribute: 'power', value: 2},
  {id: 92, type: 'defense', attribute: 'power', value: 1},
  {id: 93, type: 'defense', attribute: 'power', value: 1, flavorText: 'Causa Dano ao inimigo igual ao dano que você bloqueou'},
  {id: 94, type: 'attack_melee', attribute: 'power', value: 2},
  {id: 95, type: 'attack_melee', attribute: 'power', value: 1},
  {id: 96, type: 'attack_melee', attribute: 'power', value: 1},
  {id: 97, type: 'attack_melee', attribute: 'power', value: 1},
  {id: 98, type: 'attack_reach', attribute: 'power', value: 1},
  {id: 99, type: 'attack_reach', attribute: 'power', value: 1},
  {id: 910, type: 'power', attribute: 'power', value: 3},
  {id: 911, type: 'power', attribute: 'power', value: 2},
  {id: 912, type: 'power', attribute: 'power', value: 2},
  {id: 913, type: 'power', attribute: 'power', value: 3},
  {id: 914, type: 'power', attribute: 'power', value: 2},
]
export class Mimir {
  
  life = 4;
  furyLimit = 4;
  fury = 0;
  hero = '';
  skillOne = () => {}
  
  constructor({life, hero, fury, skillOne}){
    this.life = life,
    this.fury = fury,
    this.furyLimit = 4,
    this.hero = hero,
    this.skillOne = skillOne
  }

  activeSkills(){
    this.skillOne();
  }

  setHero(hero) {
    this.hero = hero
  }
}