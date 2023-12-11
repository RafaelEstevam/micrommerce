'use client'
import {useContext, useEffect} from 'react';
import { GodOfWarContext } from "../../godOfWar/godOfWar.context";
import {lastActionMechanism } from '../mechanics/mechanics';

const Enemy = (enemy) => {

  const { lastAction, setLastAction } = useContext(GodOfWarContext);

  useEffect(() => {
    if(lastAction?.target === enemy?.enemyPosition){
      lastActionMechanism(lastAction, enemy)
      setLastAction(undefined);
    }
  }, [lastAction, enemy]);

  return (
    <div>
      <div>
        {enemy?.enemyRune?.map((item) => (
          <p className='text-red-500' key={item}>{item}</p>
        ))}
      </div>
      <div>
        <p className='text-green-500'>{enemy?.enemyLife === 0 ? 'death' : enemy?.enemyLife}</p>
        <p className='text-slate-500'>{enemy?.enemyPower}</p>
      </div>
    </div>
  );
};

export default Enemy;
