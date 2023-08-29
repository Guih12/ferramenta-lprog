const express = require('express')
const PostsController = require('./controller/PostsController')

const app = express()
const port = 3000

const postsController = new PostsController();


app.get('/posts', async (request, response) => {
    postsController.getAllPosts(request, response)
})

app.listen(port, () => console.log('running'))


