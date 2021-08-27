import React, { useState, createContext } from 'react'

const Context = createContext()

export function AppContext(props) {

    const [user, setUser] = useState('hey this is my name')



    const value = {
        user,
    }

    return (
        <Context.Provider value={value} >
            {props.children}
        </Context.Provider>
    )
}

export default AppContext