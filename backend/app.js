const express = require('express')
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const Post = require('./models/post')

require('dotenv/config')

app.use(bodyParser.json())

// ROUTES
app.get('/posts', async (req,res,next)=>{
    try {
        const posts = await Post.find()
        res.json(posts)
    } catch(err) {
        res.json({message:err})
    }
})

app.get('/posts', (req,res)=>{
    res.send("We are on posts")
})

app.post('/events', (req,res)=>{
    console.log(req.body)

    const post = new Post({
        title: req.body.title,
        description: req.body.description
    })
    console.log(post)

    post.save()
    .then(data => {
        console.log("Sending success message...")
        res.json(data)
    })
    .catch(err=>{
        console.log("Sending error message...")
        res.json({ message:err })
    })
})

const port = 3000;

// Connect to DB:
mongoose.connect(process.env.DB_CONNECTION, 
{ useUnifiedTopology: true, useNewUrlParser: true }, 
()=>{console.log('Connected to DB')
})

app.listen(port, ()=>{
    console.log(`Server started on port ${port}`)
});