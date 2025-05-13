import { createContext, useState } from 'react';

export const Context = createContext()

export function Provider({ children }) {

    const [dishesList, setDishesList] = useState([])
    const [ingredientsList, setIngredientsList] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    return (
        <Context.Provider value={
            {
                dishesList,
                setDishesList,
                ingredientsList,
                setIngredientsList,
                isLoading,
                setIsLoading,
            }
        }>
            {children}

        </Context.Provider>
    )
}