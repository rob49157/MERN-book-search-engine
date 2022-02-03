import {gql} from '@apollo/client'

export const LOGIN_USER=gql`
mutation loginUser($email=String!,$password=String!)`;

export const ADD_USER=gql`
mutation addUser($username: String!, $email:String!, $password:String!)`


// remove book by id
export const REMOVE_BOOK=gql`
mutation removebook($)`