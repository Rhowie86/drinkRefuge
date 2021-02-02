//This component will fetch all the glassware types from the api

import React, { useState, createContext } from "react"

export const GlasswareContext = createContext()


export const GlasswareProvider = (props) => {
    const [glassware, setGlassware] = useState([])

    const getGlassware = () => {
        return fetch("http://localhost:8088/glassware")
        .then(res => res.json())
        .then(setGlassware)
    }


    
    return (
        <GlasswareContext.Provider value={{
            glassware, getGlassware
        }}>
            {props.children}
        </GlasswareContext.Provider>
    )
}