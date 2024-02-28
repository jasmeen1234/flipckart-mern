import mongoose from 'mongoose'
export const Connection=()=>{
    try{
        mongoose.connect
    }catch(error){
        console.log("error while connecting with database", error.message)
    }
}
export default Connection