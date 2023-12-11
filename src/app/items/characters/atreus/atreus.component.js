import { useContext, useEffect } from "react";
import { GodOfWarContext } from "../../../godOfWar/godOfWar.context";
import {lastActionMechanism} from '../../mechanics/mechanics';
import UseAtreus from "./atreus.hooks";

const Atreus = () => {

  const {lastAction, setLastAction} = useContext(GodOfWarContext);
  const atreus = UseAtreus();

  useEffect(() => {
    if(lastAction && lastAction.target === 'Atreus'){
      lastActionMechanism(lastAction, atreus)
      setLastAction(undefined);
    }
  }, [lastAction, atreus]);

  useEffect(() => {
    console.log(atreus);
  }, [atreus])

  return (
    <></>
  )
};

export default Atreus;