'use client'

const { createContext } = require("react");

const DashBoardContext = createContext({
    date: '',
    setDate: () => {}
});

export {DashBoardContext};