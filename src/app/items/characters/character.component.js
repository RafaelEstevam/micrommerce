import CardsOnDeck from "@/app/items/components/cards/cardsOnDeck.component";
import CardsOnCemetery from "@/app/items/components/cards/cardsOnCemetery.component";
import CardsOnHand from "@/app/items/components/cards/cardsOnHand.component";

const Character = ({ character }) => {

  return (
    <>
      <CardsOnDeck {...character} />
      <CardsOnCemetery  {...character}/>
      <CardsOnHand  {...character}/>
      
      <div className="border-2">
        <p className="text-slate-500 text-md">{character.character}</p>
        <p className="text-green-500 text-sm">
          {character.life <= 0 ? "Atordoado" : character.life}
        </p>
        <p className="text-red-500 text-sm">{character.fury}</p>
      </div>
    </>
  );
};

export default Character;
