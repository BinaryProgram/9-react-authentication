import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';

const Home = () => {
    const contextInfo = useContext(AuthContext);
    console.log(contextInfo);
    return (
        <div>
            <p>Welcome to react authentication with private route - {contextInfo.name}</p>
        </div>
    );
};

export default Home;