const {Book, User}= require('../models')
const {AuthenticationError}=require("apollo-server-express")
const {signToken} =require('../utils/auth')

const resolver={
  // query to read data
    Query:{
        books: async()=>{
            return Book.find()
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
        removebook: async(parent,{bookid})=>{
            return Book.findOneAndUpdate(
                {_id:bookid},
                {$pull:{bookid}}
            )
        },
        addUser: async(parent,{username,email,password})=>{
            const user=await User.create({username,email,password})
            const token= signToken(user)
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


    }
}