import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';


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
            

            return (
                <Accordion defaultActiveKey="0">
            
                  {data?.getArticleById.map((article, index) => (
                    <Card key={index}>
                      <Accordion.Toggle as={Card.Header} eventKey={index + ""} className="p-3 d-flex align-items-baseline justify-content-between" role="button" >
                        <span className="faq__question">
                        Title: {`${article.article_title}. Citation Count: ${article.citation_count}`}
                        </span>
                        <i className="icon icon-arrow-down ml-2 faq__icon-down"></i>
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey={index + ""}>
                        <Card.Body>
                        {article.article_abstract}
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  ))}
                </Accordion>
              );


    
        }}
    </Query>
);

export default ArticlesID;