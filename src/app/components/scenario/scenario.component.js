'use client'

import { useContext, useEffect, useState } from "react";

const Scenario= ({cards, side = 'a'}) => {

  // const [side, setSide] = useState('a');
  // const [activeSide, setActiveSide] = useState(0);

  // useEffect(() => {
  //   if(side === 'a'){
  //     setActiveSide(0);
  //   }else{
  //     setActiveSide(1);
  //   }
  // }, [side]);

  return (
    <div className="w-1/4 h-full border-2">
      <div className="flex justify-between gap-2">
        {cards[activeSide].runes?.map((item) => (
          <p>{item}</p>
        ))}
      </div>
    </div>
  )
};

export default Scenario