export class ExplosiveCristalCard {
  id = 0;
  name = 'Cristal Explosivo'
  flavorText = 'Você pode descartar esta carta para comprar uma carta adicional';

  action = ({player}) => {
    console.log(`${player} Compre 1 carta`);
  };

  handleAction(){
    this.action();
  }

  constructor({id}){
    this.id = id
  };
}

export class PoisonCard {
  id = 0;
  name = 'Veneno'
  flavorText = 'Quando você comprar esta carta, descarte-a imediatamente, receba 1 de Dano e compre uma nova carta.';
  action = ({player}) => {
    console.log(`${player} Recebe 1 de dano e Compre 1 carta`);
  };
  handleAction(){
    this.action();
  }
  constructor({id}){
    this.id = id
  };
}

export class StunCard {
  id = 0;
  name = 'Atordoamento'
  flavorText = 'Quando você comprar esta carta, descarte-a imediatamente.';

  action = () => {};

  handleAction(){
    this.action();
  }

  constructor({id}){
    this.id = id
  };

}