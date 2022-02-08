import {gql} from "@apollo/client"

export const GET_ME= gql`
query getme{
    me{
        _id
        username
        email
        savedBook{
            bookid
            authors
            description
            title
            image
            link
        }
    }

}`