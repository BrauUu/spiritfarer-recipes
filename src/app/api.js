const url = "https://spiritfarer-recipes-api.onrender.com/"

const getAllRecipes = async function(){
    return await fetch(url)
}

export default {
    getAllRecipes: getAllRecipes
}