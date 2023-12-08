import { useContext } from "react";
import { PlayerContext } from "../player/player.context";
import PlusCard from "../cards/plus.component";
import AttackCard from "../cards/attack.component";
import SpecialCard from "../cards/special.component";
import DefenseCard from "../cards/defense.component";

const CardsOnHand = () => {

  const {cards, setCards} = useContext(PlayerContext);

  const renderCards = (card) => {
    switch (card.type) {
      case "plus":
        return (
          <PlusCard
            {...card}
            key={card.id}
            // callback={addOnListOfActions}
          />
        );
      case "melee":
        return (
          <AttackCard
            {...card}
            key={card.id}
            card={card}
            // attackType={attackType}
            // setAttackType={setAttackType}
          />
        );
      case "reach":
        return (
          <AttackCard
            {...card}
            key={card.id}
            card={card}
            // attackType={attackType}
            // setAttackType={setAttackType}
          />
        );
      case "special":
        return (
          <SpecialCard
            {...card}
            key={card.id}
            card={card}
            // attackType={attackType}
            // setAttackType={setAttackType}
          />
        );
      case "defense":
        return (
          <DefenseCard
            {...card}
            key={card.id}
            card={card}
            // attackType={attackType}
            // setAttackType={setAttackType}
          />
        );
      default:
        return <></>;
    }
  };

  return (
    <div className="flex bg-slate-100">
      {cards.length > 0 && cards?.map((item) => renderCards(item))}
    </div>
  )
};

export default CardsOnHand;