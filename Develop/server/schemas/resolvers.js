const {Book, User}= require('../models')
const {AuthenticationError}=require("apollo-server-express")
const {}

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
        addBook: async(parent,{name})=>{
            return Book.create({name})
        },
        removebook: async(parent,{bookid})=>{
            return Book.findOneAndUpdate(
                {_id:bookid},
                {$pull:{bookid}}
            )
        }

    }
}