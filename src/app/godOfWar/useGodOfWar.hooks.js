'use client'
import {useState} from 'react';

const UseGodOfWar = () => {
  const [lastAction, setLastAction] = useState(undefined);

  return{
    lastAction, 
    setLastAction
  }
};

export default UseGodOfWar;