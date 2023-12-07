'use client'
import { useCallback, useState } from 'react';
import Card from '../game/card.class';

const CardGame = ({type, name, value, callback, id, disabled}) => {

    const card = new Card({id, type, name, value, callback});
    const [active, setActive] = useState(true);

    const handleActiveCardGame = useCallback(() => {
        setActive(!active)
        if(active){
            card.cardActivate();
        }else{
            card.cardDeactive();
        }
    }, [active]);

    const handleTypeStyle = () => {
        switch(type){
            case 'melee':
                return 'bg-red-500';
            case 'reach':
                return 'bg-yellow-400';
            case 'special':
                return 'bg-purple-500';
            case 'defense':
                return 'bg-blue-300';
            default:
                return 'bg-slate-500';
        }
    }
    

    return (
        <div className='w-1/4'>
            <button
                onClick={() => handleActiveCardGame()}
                disabled={disabled}
                className={`p-4 rounded-2xl text-white mb-4 ${active && !disabled ? 'opacity-100' : 'opacity-50'} ${handleTypeStyle()}`}
            >
                {name}
            </button>
        </div>
    )
};

export default CardGame;