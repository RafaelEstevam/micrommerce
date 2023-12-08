'use client'

import SpecialCard from './card.special.class';
import {handleTypeStyle} from './utils';

const SpecialCardPlayer = ({type, name, value, callback, id, flavorText, card, attackType, setAttackType}) => {

    const specialCard = new SpecialCard({type, name, value, callback, flavorText, id})

    return (
        <div className='w-1/4'>
            <button
                onClick={() => setAttackType(card)}
                className={`p-4 rounded-2xl text-white mb-4 ${attackType?.id === id ? 'opacity-50' : 'opacity-100'} ${handleTypeStyle(specialCard.type)}`}
            >
                {specialCard.id}: {specialCard.name}
            </button>
        </div>
    )
};

export default SpecialCardPlayer;