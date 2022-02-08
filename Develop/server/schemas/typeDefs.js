const { gql }=require('apollo-server-express')

const typeDefs= gql`


type User{
    _id:ID
    username:String
    email: String
    BookCount: Number
    savedBooks: [Book]
}
 type Book{
    bookid:ID
    
    Authors:[String]
    description:String
    title:String
    image:String
    link:String
 }

 input bookInput{
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
    link: String
}



type Auth {
    token: ID!
    user: User
}

input BookInput{
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
    link: String
}


 
 type Query{
    me:[User]
}

 type Mutation{
     addUser(username :String!, email: String!, password: String!):Auth
     login(email:String!, password: String!): Auth
     addBook(Author: [],description:String!): User
     saveBook(bookData: BookInput! ): User
     removebook(bookid: ID!):User
    
    
}`


module.exports= typeDefs