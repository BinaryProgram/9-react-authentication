import PropTypes from "prop-types";
import { Children, createContext } from "react";

export const AuthContext = createContext(null);

const AuthProviders = ({children}) => {
    const authInfo = {name:'context api is using'}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;
AuthProviders.propTypes = {
    children:PropTypes.node
}

/**
 * *********** How to use context API **************
 * 1. create context and export it
 * 2. set provider with value
 * 3. use the AuthProvider in the main.jsx file
 * 4. access children in the AuthProvider component as children and use it in the middle of the Provider
 */