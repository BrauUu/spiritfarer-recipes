const path = "https://spiritfarer-recipes-api.onrender.com/"

const getAllRecipes = async function(){
    return await fetch(path)
}

export default {
    getAllRecipes: getAllRecipes
}