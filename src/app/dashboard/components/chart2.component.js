'use client'

const { useContext } = require("react")
const { DashBoardContext } = require("../context")

const Chart2 = () => {
    const {date} = useContext(DashBoardContext);
    return (
        <p className="text-slate-500">{date}</p>
    )
};

export default Chart2;