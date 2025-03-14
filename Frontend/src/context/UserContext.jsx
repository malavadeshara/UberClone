import React, {createContext, useState} from 'react'

export const UserDataContext = createContext();

const UserContext = ({children}) => {

  const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState({
        email: '',
        fullName: {
            firstName: '',
            lastName: ''
        }
    });

  return (
    <UserDataContext.Provider value={{user, setUser}}>
      {children}
    </UserDataContext.Provider>
  )
}

export default UserContext;