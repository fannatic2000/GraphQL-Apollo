const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Book {
        id: ID
        name: String
        genre: String,
        author: Author
    }

    type Author {
        id: ID!
        name: String
        age: Int,
        books: [Book]
    }

    # ROOT TYPE
    # Đọc dữ liêu với Query
    type Query {
        books: [Book]
        book(id: ID!): Book
        authors: [Author]
        author(id: ID!): Author
    }

    # Tạo, Cập nhật, Xóa với Mutation
    type Mutation {
        createAuthor(id: ID!, name: String, age: Int): Author
        createBook(id: ID!, name: String, genre: String, authorId: ID!): Book
    }
`;

module.exports = typeDefs;