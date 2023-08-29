const axios = require('axios').default

class PostsController{
    async getAllPosts(request, response){
        try {
            const data = await axios("https://jsonplaceholder.typicode.com/posts")
            const dataJson = await data.data
            return response.json(dataJson)
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = PostsController
