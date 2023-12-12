import { useEffect, useState } from "react";
import Card from "./card.component";

const CardsOnHand = ({ cards, activatedCards, setActivatedCards, phase }) => {
  const [selectedActionCard, setSelectedActionCard] = useState(undefined);

  return (
    <div className="flex justify-center absolute bottom-0 w-full">
      <div className="w-1/2">
        <div className="flex gap-4 pb-4">
          {cards.length > 0 &&
            cards?.map((item) => (
              <Card
                card={item}
                key={item.id}
                disabled={
                  (selectedActionCard &&
                    item.action &&
                    item.id !== selectedActionCard?.id) ||
                  (phase === "attack" && item.type === "defense") ||
                  (phase === "defense" &&
                    (item.type === "attack_melee" ||
                      item.type === "attack_reach"))
                }
                {...{
                  activatedCards,
                  setActivatedCards,
                  selectedActionCard,
                  setSelectedActionCard,
                  phase,
                }}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default CardsOnHand;
