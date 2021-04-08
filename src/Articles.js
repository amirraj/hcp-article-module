import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
//import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import parse from 'html-react-parser';
import Accordion from "./Accordion";
import "./styles.css";

//import Course from './Course';

const Articles = () => (
    <Query query={gql`
        {
            getAllArticles{
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
    `}
    >
        {({loading, error, data}) => {
            if (loading) return <p>Loading ...</p>;
            if (error) {
                console.log('The error is ', error);
                return <p>Error :( </p>;
            }
            
            // return data.getAllArticles.map(({id,
            //     author_name,
            //     article_title,
            //     article_abstract,
            //     article_url,
            //     citation_count,
            //     co_authors,
            //     individual_id_onekey,
            //     uuid}) => (
            //     <div key={id}>
            //          <p>{`${article_title} by ${author_name}. citaion : ${citation_count}`}</p>
            //     </div>
            // ));

            // return  (
            //     <div className="None">
            //       <Accordion
            //         title="What is your return policy?"
            //         content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            //       />
            //       <Accordion
            //         title="How do I track my order?"
            //         content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            //       />
            //       <Accordion
            //         title="Can I purchase items again?"
            //         content="
            //         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            //         </br>
            //         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            //         </br>
            //         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            //         "
            //       />
            //     </div>
            //   );

             return data.getAllArticles.map(({id,
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
                     {/* <p>{`${article_title} by ${author_name}. citaion : ${citation_count}`}</p> */}
                </div>
            ));
    
        }}
    </Query>
);

export default Articles;