import { createContext } from "react";

const DefaultContext = createContext({
    theme: 'light',
    setTheme: () => {},
    setCookie: () => {}
});

export { DefaultContext };