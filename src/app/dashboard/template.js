'use client';

import { useState } from "react";
import { DashBoardContext } from "./context";

const Theme = ({children}) => {

    const [date, setDate] = useState('');

    const context = {
        date,
        setDate
    }

    return (
        <DashBoardContext.Provider value={context}>
            {children}
        </DashBoardContext.Provider>

    )
};

export default Theme;