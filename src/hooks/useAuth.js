import { useCallback, useState } from "react";

const useAuth = (initialState = false) => {
    // Initialize the state
    const [hasSession, setHasSession] = useState(initialState);
    
    // Define and memorize function in case we pass down the component,
    // This function change the boolean value to it's opposite value
    const defineSession = useCallback((value) => setHasSession(value), []);
    
    return [hasSession, setHasSession, defineSession]
}

export default useAuth;