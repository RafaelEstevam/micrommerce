'use client'

import { useContext, useEffect, useState } from "react";
import { GameContext } from "../../game/game.context";

const Scenario= ({cards}) => {

  const {cardActivate} = useContext(GameContext);
  const [activeSide, setActiveSide] = useState(0);
  const [side, setSide] = useState('a');

  useEffect(() => {
    if(side === 'a'){
      setActiveSide(cards[0]);
    }else{
      setActiveSide(cards[1]);
    }
  }, [side]);

  useEffect(() => {
    const runesSearched = activeSide?.runes?.includes(cardActivate.runes);
    if(runesSearched){
      console.log(activeSide);
      //TO DO CALL Scenario action
    };
  }, [cardActivate, activeSide])

  // console.log(cards);

  return (
    <div className="w-1/4 h-full border-2 flex flex-col justify-between">
      <div className="w-full flex justify-between">
        <div className="flex justify-between gap-2">
          {activeSide?.runes?.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
        <div className="">
          <p>{activeSide?.flipAction}</p>
        </div>
      </div>
      {activeSide?.component}
    </div>
  )
};

export default Scenario