import {gql} from "@apollo/client"

export const GET_ME= gql`
query getme{
    me{
        _id
        username
        savedbook{
            bookid
            authors
            description
            image
            link
            title
        }
    }

}`