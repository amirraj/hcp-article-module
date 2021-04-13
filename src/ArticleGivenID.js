import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Accordion from "./Accordion";
import "./styles.css";


const ArticlesID = (props) => (
    <Query query={gql`
        query getSingle($uuid : String, $oneKeyID: String){
            getArticleById(uuid:$uuid, oneKeyID:$oneKeyID){
                id
                author_name
                article_title
                article_abstract
                article_url
                citation_count
                co_authors
                individual_id_onekey
                uuid
  }
}
    `} variables = {{"uuid": `${props.uuid}`, "oneKeyID":`${props.oneKeyID}`}}
    >
        {({loading, error, data}) => {
            if (loading) return <p>Loading ...</p>;
            if (error) {
                console.log('The error is ', error);
                return <p>Error :( </p>;
            }
            

             return data.getArticleById.map(({id,
                author_name,
                article_title,
                article_abstract,
                article_url,
                citation_count,
                co_authors,
                individual_id_onekey,
                uuid}) => (
                <div key={id}>
                    <Accordion
                    title={`${article_title}. Citation Count: ${citation_count}`}
                    content={article_abstract}
                  />
                </div>
            ));
    
        }}
    </Query>
);

export default ArticlesID;