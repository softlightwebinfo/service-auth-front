import '../src/styles/globals/global.scss'
import React, { useEffect, useState } from "react";
import { AppContext } from '../src/context/AppContext';
import nookies from 'nookies'


export default function App({Component, pageProps, token, user}) {
    const [state, setState] = useState({
        ...pageProps,
        token,
        user,
    });
    useEffect(() => {
        setState(prev => ({
            ...prev,
            token,
            user,
        }))
    }, [token, user]);
    return (
        <AppContext.Provider value={{
            ...state,
            setState,
        }}>
            <Component {...pageProps} />
        </AppContext.Provider>
    )
}

App.getInitialProps = async function ({ctx}) {
    let {token, user} = nookies.get(ctx);
    user = JSON.parse(user ?? "{}");
    return {
        token,
        user,
    };
}
