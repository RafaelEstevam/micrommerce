import { useContext } from "react";
import { PlayerContext } from "../player/player.context";
import { useAttack } from "../../actions/useAttack.hooks";
import PlusCard from "../cards/plus.component";
import AttackCard from "../cards/attack.component";
import SpecialCard from "../cards/special.component";
import DefenseCard from "../cards/defense.component";
import { GameContext } from "@/app/game/game.context";

const CardsOnHand = () => {
  const {
    attackType,
    setAttackType,
    attackPlus,
    setAttackPlus,
    plusActions,
    setPlusActions,
    sum,
    setSum
  } = useAttack();

  const { cards, setCards, cemetery, setCemetery } = useContext(PlayerContext);
  const { setAction } = useContext(GameContext);

  const handleResetMove = () => {
    setPlusActions([]);
    setSum(0);
  }

  const handleFinalizeMove = ({ attackType, sum, plusActions }) => {
    const usedCards = plusActions;
    usedCards.push(attackType);

    const filteredCards = cards.filter((item) => item.id !== attackType.id).filter((item) => {
      return !plusActions.find((subitem)=>{
          return item.id === subitem.id
       })
    });

    setAction({attackType, sum, plusActions});
    setCards(filteredCards);
    setCemetery([...cemetery, ...usedCards]);

    handleResetMove();
  };

  const renderCards = (card) => {
    switch (card.type) {
      case "plus":
        return (
          <PlusCard
            {...card}
            key={card.id}
            attackPlus={attackPlus}
            setAttackPlus={setAttackPlus}
          />
        );
      case "melee":
        return (
          <AttackCard
            {...card}
            key={card.id}
            card={card}
            attackType={attackType}
            setAttackType={setAttackType}
          />
        );
      case "reach":
        return (
          <AttackCard
            {...card}
            key={card.id}
            card={card}
            attackType={attackType}
            setAttackType={setAttackType}
          />
        );
      case "special":
        return (
          <SpecialCard
            {...card}
            key={card.id}
            card={card}
            attackType={attackType}
            setAttackType={setAttackType}
          />
        );
      case "defense":
        return (
          <DefenseCard
            {...card}
            key={card.id}
            card={card}
            attackType={attackType}
            setAttackType={setAttackType}
          />
        );
      default:
        return <></>;
    }
  };

  return (
    <div className="flex justify-center absolute bottom-0 w-full">
      <div className="w-1/2">
        <div className="flex gap-4">
          {cards.length > 0 && cards?.map((item) => renderCards(item))}
          <button
            className="p-4 rounded-2xl text-white mb-4 bg-orange-500"
            onClick={() => handleFinalizeMove({ attackType, sum, plusActions })}
          >
            Finalizar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardsOnHand;
