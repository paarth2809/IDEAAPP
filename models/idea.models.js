// const mongoose=require('mongoose')
// const ideaSchema=new mongoose.Schema({
//     id: {
//         idea_id: Number,
//         name: String,
//         description: String
//     }
// },{versionKey:false,timestamps:true})
// module.exports=mongoose.model('Ideas',ideaSchema)




// const mongoose=require('mongoose')
// const ideadata=new mongoose.Schema({
//     idea_id: Number,
//     name: String,
//     description: String
// })

// const ideaSchema=new mongoose.Schema({
//     id: ideadata
// },{versionKey:false,timestamps:true})
// module.exports=mongoose.model('Ideas',ideaSchema)

const mongoose=require('mongoose')
const ideaSchema=new mongoose.Schema({
    id: Number,
    name: String,
    description: String
},{versionKey:false,timestamps:true})
module.exports=mongoose.model('Ideas',ideaSchema)
