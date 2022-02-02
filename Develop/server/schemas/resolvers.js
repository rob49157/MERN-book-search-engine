const {Book}= require('../models')

const resolver={
    Query:{
        books: async()=>{
            return Book.find()
        },
        book: async(parent,{bookid})=>{
            return Book.findOne({_id:bookid})
        }

    },
    // add mutation. 'Create,findOneandupdate,findOneandelete"""
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