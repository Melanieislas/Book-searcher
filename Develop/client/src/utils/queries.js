import { gql } from '@apollo/client';

export const QUERY_BOOKS = gql `
    query me {
        me {
            _id
            username
            email
            password
            savedBooks {
              _id
              authors
              description
              bookId
              image
              link
              title
            }
          }
    }
`;
