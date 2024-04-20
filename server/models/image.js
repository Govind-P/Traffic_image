import mongoose from 'mongoose';

const ImageSchema=new mongoose.Schema(
    {
        image:{
            type:String,
        },
    },{timestamps:true}
)

const image=mongoose.model("image",ImageSchema);
export default image;