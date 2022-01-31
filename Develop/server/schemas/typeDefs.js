const { gql }=require('apollo-server-express')

const typeDefs= gql`
type Book{
    _id:ID
    name: String

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