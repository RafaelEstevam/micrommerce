'use client'
import {useState} from 'react';
import {upgradeCards} from '../items/upgradeCards';
import { Kratos } from '../items/characters/kratos';
import { Atreus } from '../items/characters/atreus';
import { Freya } from '../items/characters/freya';
import UseKratos from '../items/characters/kratos.hooks';
// import { Travelers } from '../items/scenarios/travelers';

const UseGodOfWar = () => {
  
  // const [missionActivated, setMissionActivated] = useState({});
  // const [mission2, setMission2] = useState({});
  // const [boss, setBoss] = useState({});
  // const [campaingStage, setCampaingStage] = useState(1);
  // const [scenariosCards, setScenariosCards] = useState(upgradeCards);
  // const [characters, setCaracters] = useState([]);
  // const [whoStart, setWhoStart] = useState('');
  // const [action, setAction] = useState({});

  // const handleChooseCaracters = () => {
  //   const kratos = new Kratos();
  //   // const atreus = new Atreus();
  //   // const freya = new Freya();

  //   // setCaracters([...characters, ...[kratos, atreus, freya]])
  //   setCaracters([...characters, ...[kratos]]);
  // };

  // const handleChooseScenario = () => {
  //   // const travelers = new Travelers();
  //   // setMissionActivated(travelers);
  // }
  
  // return {
  //   characters,
  //   missionActivated,
  //   handleChooseCaracters,
  //   handleChooseScenario
  // }  
  const [lastAction, setLastAction] = useState(undefined);

  return{
    lastAction, 
    setLastAction
  }
};

export default UseGodOfWar;