const { gql }=require('apollo-server-express')

const typeDefs= gql`
type me{
    _id:ID
    User:String
    

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
    title=String
    image=[Image!]
    link=[Link!]


 }
 type Query{
    books:[Book]!
    book(bookid: ID!): Book
}
 type Mutation{
    addbook(name:String!): Book
    removebook(bookid: ID!):Book
}`


module.exports= typeDefs