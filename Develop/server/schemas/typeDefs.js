const { gql }=require('apollo-server-express')

const typeDefs= gql`
type me{
    _id:ID
    User:[User]!
    

}


type User{
    _id=ID
    username:Sting
    email= String
    BookCount= Number
    savedBooks= [book]
}
 Book{
    bookid=ID
    authors=[]
    description=String
    title=String
    image=[Image!]
    link=[Link!]


 }
 type Query{
    books:[Book]!
    book(bookid: ID!): Book
}
 type Mutation{
     addUser(username :String!, email: String!, password: String!):Auth
     login(email:String!, password: String!): Auth
     saveBook(authors: [],description:String!): User
     removebook(bookid: ID!):User
    addbook(name:String!): Book
    
}`


module.exports= typeDefs