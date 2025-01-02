const path = "http://localhost:4001/"

const getAllRecipes = async function(){
    return await fetch(path)
}

export default {
    getAllRecipes: getAllRecipes
}