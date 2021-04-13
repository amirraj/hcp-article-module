import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import ArticlesID from './ArticleGivenID';


const Article = (props) => (

  <ApolloProvider client={ new ApolloClient({uri: props.uri})}>
        <ArticlesID uuid= {`${props.uuid}`} oneKeyID={`${props.oneKeyID}`}/>    
  </ApolloProvider>
)


export default Article;