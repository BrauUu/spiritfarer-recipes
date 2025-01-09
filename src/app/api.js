const url = process.env.NEXT_PUBLIC_API_PATH

const getAllRecipes = async function(){
    console.log(url)
    return await fetch(url)
}

export default {
    getAllRecipes: getAllRecipes
}