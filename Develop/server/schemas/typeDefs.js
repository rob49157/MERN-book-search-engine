const { gql }=require('apollo-server-express')

const typeDefs= gql`


type User{
    _id=ID
    username:Sting
    email= String
    BookCount= Number
    savedBooks= [book]
}
 type Book{
    _id=ID
    
    Author=[]
    description=String
    title=String
    image=String
    link= String

type Auth {
    token: ID!
    user: User
}


 }
 type Query{
    me:[User]
}
 type Mutation{
     addUser(username :String!, email: String!, password: String!):Auth
     login(email:String!, password: String!): Auth
     addBook(Author: [],description:String!): User
     saveBook(Author:[],description:String,title:String,image:String,link:String):User
     removebook(bookid: ID!,bookcounts:Int,savedBooks=[]):User
    addbook(name:String!): Book
    
}`


module.exports= typeDefs