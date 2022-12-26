import { useState, useCallback, useEffect } from "react";
import { CognitoUserPool } from "amazon-cognito-identity-js";


const poolData = {
    UserPoolId: "us-east-1_zQyPfzU8n",
    ClientId: "5o02fs7g7j2746ft17oslj8s8k",
    ClientSecret:"l25m24s4c55r4uih6lhb3iuvb7a6i5nkbaej2msq7g8r1b60rui"

    
}

// export default new CognitoUserPool(poolData)



export default function useHandler() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [state, setstate] = useState({
      loading: false,
      isAuthenticated: false
    });
  
    const { loading, isAuthenticated } = state;
  
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const userPool = new CognitoUserPool(poolData);
  
    const getAuthenticatedUser = useCallback(() => {
      return userPool.getCurrentUser();
    }, [userPool]);
  
    console.log(getAuthenticatedUser());
  
    useEffect(() => {
      getAuthenticatedUser();
    }, [getAuthenticatedUser]);
  
    const signOut = () => {
      return userPool.getCurrentUser()?.signOut();
    };
  
    return {
      loading,
      isAuthenticated,
      userPool,
      getAuthenticatedUser,
      signOut
    };
  }