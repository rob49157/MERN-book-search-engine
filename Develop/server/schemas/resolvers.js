const {Book, User}= require('../models')
const {AuthenticationError}=require("apollo-server-express")
const {signToken} =require('../utils/auth')

const resolver={
  // query to read data
    Query:{
        books: async()=>{
            return Book.find().p
        },
        book: async(parent,{bookid})=>{
            return Book.findOne({_id:bookid})
        }

    },
    // add Mutation to  'Create,findOneandupdate,findOneandelete"""
    
    Mutation:{
        addBook: async(parent,{Author,description})=>{
            return Book.create({Author,description})
        },
      
        addUser: async(parent,{username,email,password})=>{
            const user=await User.create({username,email,password})
            const token= signToken(user)
            
            return {user, token}
        },
        login:async(parent,{email,password})=>{
            const user=await User.findOne({email})
            if(!user){
                throw new AuthenticationError("No user found")
            }

            const correctPw= await user.isCorrectPassword(password)
            if(!correctPw){
                throw new AuthenticationError("incorrect password")
            }
            const token= signToken(user)
            return{ token,user}
        },
        removebook: async(parent,{bookid})=>{
            return await User.findOneAndUpdate(
                {_id:bookid},
                {$pull:{bookid}}
            )
        },

        saveBook: async(parent,{bookdata},context)=>{
            if(contex.user){
                return await User.findOneAndUpdate(
                    {_id:context.user._id},
                    {$push:{savedBook:bookid}}
                )
            }
        }

            
            


    }
}