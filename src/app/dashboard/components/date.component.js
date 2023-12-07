'use client'
import {useContext} from 'react';
import { DashBoardContext } from '../context';

const Date = () => {
    const {date, setDate} = useContext(DashBoardContext);

    return (
        <input className='text-slate-500' type='date' onChange={(e) => setDate(e.target.value)} value={date}/>
    )
};

export default Date;