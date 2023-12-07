// import { useContext, useState, useEffect } from "react";
// import { DefaultContext } from "../context";

const BannerButtons = () => {

    // const {setTheme} = useContext(DefaultContext);
    // const [theme, setTheme] = useState(null);

    // useEffect(() => {
    //     if(theme){
    //         setCookie({k:'theme', v: theme})
    //     }
    // }, [theme])

    return (
        <div className="flex w-full absolute bottom-0">
            <button type="submit" className="text-white w-1/4 bg-blue-600 h-10">Banner 1</button>
            <button type="submit" className="text-white w-1/4 bg-pink-600 h-10">Banner 2</button>
            <button type="submit" className="text-black w-1/4 bg-yellow-400 h-10">Banner 3</button>
            <button type="submit" className="text-white w-1/4 bg-gray-950 h-10">Banner 4</button>
        </div>
    )
};

export default BannerButtons;