import app from './app.js';
import {connectDB} from './config/database.js';


connectDB()


app.get('/',(req,res)=>{
    res.send("<h1>working</h1>");
})

app.listen(process.env.PORT,()=>{
    console.log(`http://localhost:${process.env.PORT}`);
})
