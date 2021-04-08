import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Articles from './Articles';
//import './App.css';

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql"
});


const App = () => (
  <ApolloProvider client={client}>
    <div className="container">
      <div>
        <Articles />
      </div>
    </div>
  </ApolloProvider>
)


export default App;