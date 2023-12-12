import {useState, useCallback} from 'react';

const Card = ({ card, activatedCards, setActivatedCards, setSelectedActionCard, disabled }) => {

  const [activated, setActivated] = useState(false);

  const style = () => {
    switch (card.type) {
      case "defense":
        return "bg-blue-500";
      case "attack_melee":
        return "bg-red-500";
      case "attack_reach":
        return "bg-yellow-500";
      case "special":
        return "bg-purple-500";
      default:
        return "bg-slate-500";
    }
  };

  const handleActivateCard = useCallback(() => {
    const searchedCard = activatedCards.find((item) => item.id === card.id);
    const filteredCards = activatedCards.filter((item) => item.id !== card.id);
    if(searchedCard){
      setActivatedCards(filteredCards);
      if(card.action){
        setSelectedActionCard(undefined);
      }
    }
    if(!searchedCard){
      setActivatedCards([...activatedCards, ...[card]]);
      if(card.action){
        setSelectedActionCard(card);
      }
    }
  }, [activatedCards])
  
  return (
    <div className="flex h-20">
      <button
        disabled={disabled}
        onClick={() => {
          setActivated(!activated);
          handleActivateCard();
        }}
        className={`${style()} text-white flex flex-col items-center h-full rounded-md overflow-hidden ${activated && ' border-green-500 -mt-4'} border-4 ${disabled && 'opacity-10'}`}
      >
        <p className="p-2">{card.type}</p>
        {card.value > 0 && (
          <div className="bg-slate-500 p-2 w-full h-full">{card.value}</div>
        )}
      </button>
    </div>
  );
};

export default Card;
