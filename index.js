import express from "express";          //module js (to assemble files as module js you have to define in package.jsoon ("type" : "module"))
// const express = require('express')   //common js

import dotenv from 'dotenv';
dotenv.config();
// require('dotenv').config();

const app = express()

// import cors  from 'cors';

// var whitelist = ['http://localhost:3002', 'http://example2.com']
// var corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1 || !origin) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }
// app.use(cors(corsOptions));        //but in production there are not fix port or url so on behalf of cors we use proxy
                                    //Proxy : if you had create react app through create-react-app then add "proxy": "http://localhost:3000" (backend url) to package.json in frontend
                                    //server will get all request are coming from this origin (backend origin = main origin = have access)
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/', (req, res) => {
  res.send('Hello Rohit!')
})

app.get('/login', (req, res) => {
    res.send('<h1>Please login at our page!</h1>')
})

const githubData= {
    "login": "RohitKadu1",
    "id": 113994365,
    "node_id": "U_kgDOBstqfQ",
    "avatar_url": "https://avatars.githubusercontent.com/u/113994365?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/RohitKadu1",
    "html_url": "https://github.com/RohitKadu1",
    "followers_url": "https://api.github.com/users/RohitKadu1/followers",
    "following_url": "https://api.github.com/users/RohitKadu1/following{/other_user}",
    "type": "User",
    "public_repos": 0,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2022-09-20T12:32:32Z",
    "updated_at": "2024-07-08T11:03:52Z"
} //https://api.github.com/users/RohitKadu1

app.get('/githubdata', (req, res) => {
    res.json({
        code: 200,
        status: "success",
        data: githubData
    })
})

const jokes =[
    {
        id: 1,
        title: "title 1",
        description: "joke 1"
    },
    {
        id: 2,
        title: "title 2",
        description: "joke 2"
    }
]

app.get('/api/jokes', (req, res) => {
    res.json({
        code: 200,
        status: "success",
        data: jokes
})})


app.use(express.static('dist'));  //we can create frontend build and paste dist folder in backend project and then add this line then frontend also run 
                                  //but this is not good practice because every time you need to do changes you need to do change and create build again and paste again

