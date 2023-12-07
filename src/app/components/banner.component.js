// 'use client'
// import { useState } from "react";

import BannerButtons from './bannerButtons.component'

// function setCookie({k, v, expira, path}) {
//     if (!path) path = "/";
//     var d = new Date();
//     d.setTime(d.getTime() + (expira * 1000));
//     document.cookie = encodeURIComponent(k) + "=" + encodeURIComponent(v) + "; expires=" + d.toUTCString() + "; SameSite=Lax; path=" + path;
// }

const Banner = ({theme}) => {
    
    // const [color, setColor] = useState(theme?.value || 'blue');

    // const handleThemeCookie = (v) => {
    //     setCookie({k: 'theme', v});
    // }

    // const getTheme = (value) => {
    //     handleThemeCookie(value);

    //     switch(value){
    //         case 'black':
    //             return 'bg-gray-600'
    //         case 'yellow':
    //             return 'bg-yellow-400'
    //         case 'magenta':
    //             return 'bg-pink-600'
    //         default:
    //             return 'bg-blue-600'
    //     }
    // }

    return (
        <section className={`min-h-[500px] bg-blue-600 relative`}>
            <BannerButtons />
        {/* <section className={`min-h-[500px] bg-blue-600 relative`}> */}
            {/* <form action={handleThemeCookie} className="flex w-full absolute bottom-0">
                <input type="hidden" name="theme" value={theme} />
                <button type="submit" onClick={() => setTheme('blue')} className="text-white w-1/4 bg-blue-600 h-10">Banner 1</button>
                <button type="submit" onClick={() => setTheme('magenta')} className="text-white w-1/4 bg-pink-600 h-10">Banner 2</button>
                <button type="submit" onClick={() => setTheme('yellow')} className="text-black w-1/4 bg-yellow-400 h-10">Banner 3</button>
                <button type="submit" onClick={() => setTheme('black')} className="text-white w-1/4 bg-gray-950 h-10">Banner 4</button>
            </form> */}
        </section>
    )
};

export default Banner;