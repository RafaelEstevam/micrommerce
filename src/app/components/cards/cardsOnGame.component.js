import { useContext, useEffect } from "react";
import { GameContext } from '../../game/game.context';
const CardsOnGame = () => {

  const { cards, handleDrawCard } = useContext(GameContext);

  return (
    <button onClick={handleDrawCard} className="h-40 w-1/12 rounded-sm bg-slate-500 flex flex-column justify-center items-center absolute top-4 left-4">
      <div className="text-center"> 
        <p className="text-white">Cards on Game</p>
        <p className="text-white">{cards?.length}</p>
      </div>
    </button>
  )
};

export default CardsOnGame;