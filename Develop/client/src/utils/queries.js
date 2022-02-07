import {gql} from "@apollo/client"

export const GET_ME= gql`
query getme{
    me{
        me
        User
    }

}`