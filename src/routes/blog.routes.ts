const express = require("express")
import Post from '../models/Post'

const router = express.Router()

router.get("/getAllPosts", async (req,res,next)=>{
    try {
        const posts = await Post.find()
        res.json({success:true, posts})
    } catch (error) {
        res.json({success:false, msg: JSON.stringify(error)})    

    }
})

router.delete("/deletePostById", async(req,res,next)=>{
    const _id = req.body._id
    console.log(_id)
    try {
        await Post.findOneAndDelete({_id})
        const posts = await Post.find()
        res.json({success:true, posts})
    } catch (error) {
        res.json({success:false, msg: JSON.stringify(error)})    

        
    }
})

router.post("/createNewPost", (req,res,next)=>{
    try {
        
        console.log(req.body)
        const metaForm = req.body.metaForm;
        const markdownString = req.body.markdownString;
        const p = Post({...metaForm, markdownString})
        p.save()
        res.json({success:true, post:p})
    } catch (error) {
        res.json({success:false, msg: JSON.stringify(error)})
    }
})

router.get("/getPostsByCategory/:category", async(req,res,next)=>{
    const category = req.params.category
    console.log(category)
    try {
        const posts = await Post.find({category})
        res.json({success:true, posts})
    } catch (error) {
        res.json({success:false, msg : JSON.stringify(error)})
    }
})


export default router;