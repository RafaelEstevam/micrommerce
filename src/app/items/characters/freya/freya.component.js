import { useContext, useEffect } from "react";
import { GodOfWarContext } from "../../../godOfWar/godOfWar.context";
import {lastActionMechanism} from '../../mechanics/mechanics';
import UseFreya from "./freya.hooks";

const Freya = () => {

  const {lastAction, setLastAction} = useContext(GodOfWarContext);
  const freya = UseFreya();

  useEffect(() => {
    if(lastAction && lastAction.target === 'Freya'){
      lastActionMechanism(lastAction, freya)
      setLastAction(undefined);
    }
  }, [lastAction, freya]);

  useEffect(() => {
    console.log(freya);
  }, [freya])

  return (
    <></>
  )
};

export default Freya;