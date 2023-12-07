'use client'
import { useCallback, useEffect, useState } from 'react';
import Card from './card.class';
import {handleTypeStyle} from './utils';

const PlusCard = ({type, name, value, callback, id}) => {

    const card = new Card({id, type, name, value, callback});
    const [active, setActive] = useState(false);

    const handleActiveCardGame = useCallback(() => {
        setActive(!active)
        if(!active){
            card.cardActivate();
        }else{
            card.cardDeactive();
        }
    }, [active]);

    return (
        <div className='w-1/4'>
            <button
                onClick={() => handleActiveCardGame()}
                className={`p-4 rounded-2xl text-white mb-4 ${active ? 'opacity-50' : 'opacity-100'} ${handleTypeStyle(type)}`}
            >
                {!active ? '+' : '-'}{value}
            </button>
        </div>
    )
};

export default PlusCard;