import React, { createContext, useState } from 'react';

const UsersContext = createContext({});

function UserProvider({children}){

    const [users, setUsers] = useState([
        {
            nome: 'Luis',
            email: 'luis@luis',
            senha: '1234'
        },
        {
            nome: 'Raquel',
            email: 'raquel@raquel',
            senha: '1234'
        }
    ]);


    return(
        <UsersContext.Provider value={{users, setUsers}}>
            {children}
        </UsersContext.Provider>
    );

}

export {UserProvider, UsersContext};