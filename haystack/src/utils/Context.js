import React, { useState, createContext } from 'react';

export const MyContext = createContext('');

export default ({ children }) => {

    const [isCompareModalActive, setIsCompareModalActive] = useState(false);
    const [loading, setLoading] = useState(false);

    return <MyContext.Provider
        value={{ isCompareModalActive, setIsCompareModalActive, loading, setLoading }}>
        {children}
    </MyContext.Provider>
}