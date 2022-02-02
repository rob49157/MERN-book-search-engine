const { gql }=require('apollo-server-express')

const typeDefs= gql`


type User{
    _id=ID
    username:Sting
    email= String
    BookCount= Number
    savedBooks= [book]
}
 Book{
    bookid=ID
    Author=[]
    description=String
    title=String
    image=[Image!]
    link=[Link!]

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
     removebook(bookid: ID!):User
    addbook(name:String!): Book
    
}`


module.exports= typeDefs