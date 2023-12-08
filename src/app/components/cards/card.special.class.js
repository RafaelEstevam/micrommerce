import Card from './card.class'

class SpecialCard extends Card {
  
  specialAction = () => {};
  
  constructor({type, name, value, callback, id, flavorText, specialAction}){
    super({type, name, value, callback, id, flavorText});
    this.specialAction = specialAction;
  };

  callSpecialAction(){
    specialAction();
  };

};

export default SpecialCard;