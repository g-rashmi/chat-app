import express from 'express' 
import cors from 'cors'  
import {Server} from 'socket.io' 
import http from 'http'

const app=express() ; 
const server = http.createServer(app) ; 


app.use(cors()) ;
 
server.listen(1000,()=>{
  console.log("serveer is runing on port 1000")
})