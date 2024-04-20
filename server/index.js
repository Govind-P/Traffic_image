import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import {uploadImage} from './controller/image.js';
import { getImage } from './controller/image.js';
import {newImage} from './controller/image.js';

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use(cors({
    origin: 'http://localhost:3000' // Only allow this origin to access
}));
app.use(express.json({ limit: '5mb' }));


/*Route*/
app.use('/imageupload',uploadImage);
app.use("/image",getImage);
app.use("/newimage",newImage);


const PORT=process.env.PORT || 6001;

mongoose.connect(process.env.MONGO_URL,{
    useUnifiedTopology:true,
    useNewUrlParser:true,

}).then(()=>{
    app.listen(PORT,()=>console.log('Server port:'+PORT));
    // officer.insertMany(officers);
    // console.log('Data inserted');
    // Post.insertMany(posts);
}).catch((err)=>{console.log(err)});
