import { createContext, useState } from 'react';

export const Context = createContext()

export function Provider({ children }) {

    const [dishesList, setDishesList] = useState([])
    const [ingredientList, setIngredientList] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    return (
        <Context.Provider value={
            {
                dishesList,
                setDishesList,
                ingredientList,
                setIngredientList,
                isLoading,
                setIsLoading
            }
        }>
            {children}

        </Context.Provider>
    )
}