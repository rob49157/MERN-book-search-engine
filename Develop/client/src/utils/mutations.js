import {gql} from '@apollo/client'

export const LOGIN_USER=gql`
mutation loginUser($email=String!,$password=String!)[
    loginUser(email:$email,password:$password){
        email
        passord
    }
]`;

export const ADD_USER=gql`
mutation addUser($username: String!, $email:String!, $password:String!){
    addUser(username:$username,email:$email,password:$password){
        username
        email
        password
    }
}`


// remove book by id
export const REMOVE_BOOK=gql`
mutation removebook($bookid: String!,$bookcounts:Int,$savedBooks:[]){
    removebook(bookid:$bookid,bookcounts:$bookcounts,savedBooks:$savedBooks){
        bookcount
        savedbook
    }
}`