const url = process.env.NEXT_PUBLIC_API_PATH

const getAllRecipes = async function () {
    return await fetch(`${url}/recipes`)
}

const getAllIngredients = async function () {
    return await fetch(`${url}/ingredients`)
}

export default {
    getAllRecipes,
    getAllIngredients
}