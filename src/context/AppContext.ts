import React, { useContext } from "react";

export const AppContext = React.createContext({
    token: null,
    user: null
});

export const useAppContext = () => {
    return useContext(AppContext);
}
