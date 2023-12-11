import { useContext, useEffect } from "react";
import { GodOfWarContext } from "../../../godOfWar/godOfWar.context";
import UseKratos from "./kratos.hooks";
import {lastActionMechanism} from '../../mechanics/mechanics';

const Kratos = () => {

  const {lastAction, setLastAction} = useContext(GodOfWarContext);
  const kratos = UseKratos();

  useEffect(() => {
    if(lastAction && lastAction.target === 'Kratos'){
      lastActionMechanism(lastAction, kratos)
      setLastAction(undefined);
    }
  }, [lastAction, kratos]);

  useEffect(() => {
    console.log(kratos);
  }, [kratos])

  return (
    <></>
  )
};

export default Kratos;