const {Book, User}= require('../models')
const {AuthenticationError}=require("apollo-server-express")
const {signToken} =require('../utils/auth')

const resolver={
  // query to read data
    Query:{
      
        me: async (parent, args, context) => {
            if (context.user){
              return await User.findOne({ _id: context.user.id}).select('-__v -password');  
            }
             return new AuthenticationError('error logging in') 
          
      }
        

    },
    // add Mutation to  'Create,findOneandupdate,findOneandelete"""
    
    Mutation:{
        addUser: async (parent, { username, email, password }) => {
            const profile = await User.create({ username, email, password });
            const token = signToken(profile);
      
            return { token, profile };
          },
          login: async (parent, { email, password }) => {
            const profile = await User.findOne({ email });
      
            if (!profile) {
              throw new AuthenticationError('No profile with this email found!');
            }
      
            const correctPw = await profile.isCorrectPassword(password);
      
            if (!correctPw) {
              throw new AuthenticationError('Incorrect password!');
            }
      
            const token = signToken(profile);
            return { token, profile };
          },
          saveBook: async(parent,{bookData}, context)=>{
              if(context.profile){
                  return await User.findByIdAndUpdate(
                      {_id:context.profile._id},
                      {$push:{savedBook: bookData}}
                  )
              }
              throw new AuthenticationError('You need to be logged in!');
            },
            removebook: async(parent,{bookid},context)=>{
                if(context.profile){
                    return await User.findOneAndUpdate(
                        { _id: context.user._id },
                        { $pull: { savedBooks: bookId } }
                    )
                }
                throw new AuthenticationError('You need to be logged in!');
            }
              
              
            

    }
}