import React, {useContext, useReducer} from "react";

import {SIDEBAR_CLOSE, SIDEBAR_OPEN} from "./actions";
import reducer from "../Reducers/navigation_reducer";

const initialState = {
    isSidebarOpen: false,
};

const NavigationContext = React.createContext();

export const NavigationProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const openSidebar = () => {
        dispatch({type: SIDEBAR_OPEN});
    };
    const closeSidebar = () => {
        dispatch({type: SIDEBAR_CLOSE});
    };

    // *** Main ***
    return (<NavigationContext.Provider value={{...state, openSidebar, closeSidebar}}>
            {children}
        </NavigationContext.Provider>);
};

export const useNavigationContext = () => {
    return useContext(NavigationContext);
};
