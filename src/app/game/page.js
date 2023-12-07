'use client'

import {useState, useEffect, useCallback} from 'react';
import CardGame from "../components/cardGame.component";

const cardsOnHand = [
    {name: 'Attack', type: 'melee', id: 5, action: 'attack' },
    {name: 'Attack', type: 'reach', id: 6, action: 'attack'},
    {name: 'Defense', type: 'defense', id: 8, action: 'defense'},
    {name: 'Special', type: 'special', id: 7, action: 'special'},
    {name: '+3', type: 'plus', value: 3, id: 1},
    {name: '+2', type: 'plus', value: 2, id: 2},
    {name: '+3', type: 'plus', value: 3, id: 3},
    {name: '+4', type: 'plus', value: 4, id: 4}
]

const Game = () => {

    const [attackActions, setAttackActions] = useState([]);
    const [attackAction, setAttackAction] = useState(undefined);
    const [attack, setAttack] = useState(0);
    const [attackType, setAttackType] = useState({});

    const addOnListOfActions = (action) => {
        setAttackAction(action)
    };

    const addOnAttacksLIst = (attack) => {
        const findedAction = attackActions.find((item) => item.id === attack.id);
        const filteredActions = attackActions.filter((item) => item.id !== attack.id);

        if(!findedAction){
            setAttackActions([...attackActions, ...[attack]])
        }
        if(findedAction){
            setAttackActions(filteredActions);
        }
    };

    const solveListOfActions = useCallback(() => {
        const attack = attackActions.reduce((acc, cur) => {
            return acc + cur.value;
        }, 0);

        setAttack(attack)
    }, [attackActions]);

    const cardAction = (card) => {
        setAttackType(card);
    }

    useEffect(() => {
        if(attackAction){
            addOnAttacksLIst(attackAction);
        }
    }, [attackAction]);

    return (
        <>
            <p className='text-slate-500 text-5xl'>Ataque: {attack} </p>
            <p className='text-slate-500 text-5xl'>Action: {attackType.action} </p>

            <div className="flex w-full flex-col bg-slate-100">
                {cardsOnHand?.map((item) => item.type === 'plus' ? (
                    <CardGame {...item} key={item.id} callback={addOnListOfActions}/>
                ) : (
                    <CardGame {...item} key={item.id} callback={() => cardAction(item)}/>
                ))}
                <button className='bg-red-500 p-4 rounded-2xl text-white' onClick={() => solveListOfActions()}>Terminar</button>
            </div>
            
        </>
    )
};

export default Game;