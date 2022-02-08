import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
mutation loginUser($email=String!,$password=String!){
    loginUser(email:$email,password:$password){
        token
        User{
        _id
        username
        
    }
    }
    
}`;

// need to add token to it

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      User{
        _id
        username
        email
        password
      }
     
    }
  }
`;

// save book
// add input to savebook

export const SAVE_BOOK = gql`
mutation saveBook($Author:[],description:String,title:String,image:String,link:String){
    saveBook(Author:$Author,$description:description,$title:title,$image:image,$link:link){
       _id
       username
       email
      savedBook{
        bookid
        description
        authors
        image
        link
        title
      }
        }

    
}`;

// remove book by id
export const REMOVE_BOOK = gql`
mutation removebook($bookid: String!,$bookcounts:Int,$savedBooks:[]){
    removebook(bookid:$bookid,bookcounts:$bookcounts,savedBooks:$savedBooks){
       _id
    }
}`;
