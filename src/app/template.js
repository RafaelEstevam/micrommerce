
import Header from '@/app/components/header.component';
import Footer from '@/app/components/footer.component';

// function getCookie(k) {
//     const cookies = " " + document.cookie;
//     const key = " " + k + "=";
//     const start = cookies.indexOf(key);

//     if (start === -1) return null;

//     const pos = start + key.length;
//     const last = cookies.indexOf(";", pos);

//     if (last !== -1) return cookies.substring(pos, last);

//     return cookies.substring(pos);
// }

export default function template ({children}) {

    // const [theme, setTheme] = useState(null);

    // // useEffect(() => {
    // //     if(theme){
    // //         setCookie({k:'theme',v:theme})
    // //     }
    // // }, [theme]);

    // // useEffect(() => {
    // //     setTheme(getCookie('theme'));
    // // }, []);

    // useEffect(() => {
    //     if(theme){
    //         setCookie({k:'theme', v: theme})
    //     }
    // }, [theme])

    // const context = {
    //     theme,
    //     setTheme,
    //     setCookie
    // }

    return (
        <>
            {/* <Header/> */}
            <main>{children}</main>
            {/* <Footer/> */}
        </>
    )
}