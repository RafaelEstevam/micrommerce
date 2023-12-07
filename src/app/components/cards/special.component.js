'use client'

import {handleTypeStyle} from './utils';

const SpecialCard = ({type, name, value, callback, id, card, attackType, setAttackType}) => {
    return (
        <div className='w-1/4'>
            <button
                onClick={() => setAttackType(card)}
                className={`p-4 rounded-2xl text-white mb-4 ${attackType?.id === id ? 'opacity-50' : 'opacity-100'} ${handleTypeStyle(type)}`}
            >
                {id}: {name}
            </button>
        </div>
    )
};

export default SpecialCard;