// const jwt = require('jsonwebtoken')
// const app = require('../app')
// const isAdmin=(req,res,next) =>{
//     try{
//         let token=req.get("Authotrization")
//         if(!token){
//             res.status(400).send({
//                 message:"you are no allowed"
//             })
//         }else{
//             let decodedToken =jwt.verify(token,"SECRET")
//             if(!decodedToken){
//             res.status(400).send({
//                 message:"you are no allowed"
//             })
//         }  else{
//             if(decodedToken.role=="Admin"){
//             next()
//         }else{
//             res.status(400).send({
//                 message:"you are no allowed"
//             })
//         }

//         }
//         }

//     }catch(error){
//         res.status(400).send({
//             message:"you are no allowed"
//         })
//     }
// }
// module.exports= isAdminn