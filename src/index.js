import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import ArticlesID from './ArticleGivenID';

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql"
});


const Article = (props) => (
  <ApolloProvider client={client}>
        <ArticlesID uuid= {`${props.uuid}`}/>    
  </ApolloProvider>
)


export default Article;