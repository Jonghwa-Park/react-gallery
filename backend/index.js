import express from 'express'
import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'
import bodyParser from 'body-parser'
import cors from 'cors'
const app = express()
app.use(express.json())

const corsOrigin = 'http://localhost:3000';
app.use(cors({
    origin:[corsOrigin],
    methods:['GET','POST'],
    credentials: true
}))

app.use('/static', express.static('public'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const adapter = new JSONFile('db.json')
const db = new Low(adapter)
await db.read()
db.data ||= { cardList: [], contact:[], blogCommentList:[], blogList:[] }
const { cardList, contact, blogCommentList, blogList } = db.data


app.get('/blogList', (req,res)=>{
    res.json(blogList)
})

app.get('/blogList/:detailId', (req,res)=>{
    const blogDetail = blogList.find((item) => item.id === req.params.detailId)
    res.json(blogDetail)
})


app.get('/blogCommentList', (req,res)=>{
    res.json(blogCommentList)
})


app.post('/blogComment', async (req, res, next) => {
    console.log(`req.body : ${JSON.stringify(req.body)}`)
    const post = blogCommentList.push(req.body)
    await db.write()
    res.json(post)
})


app.get('/cardList', (req, res) => {
    res.json(cardList)
})


app.get('/cardList/:detailId', (req, res) => {
    const cardDetail = cardList.find((item) => item.id === req.params.detailId)
    res.json(cardDetail)
})


app.listen(8000)