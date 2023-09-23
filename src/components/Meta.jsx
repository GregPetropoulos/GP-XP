import React from 'react';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <meta charset='utf-8' />
      <meta name='theme-color' content='#000000' />
      <meta
        name='Greg Petropoulos portfolio as a full stack React and React Native MERN developer'
        content='Greg Petropoulos React Developer'
      />

      <title>{title ? title : 'Welcome Greg Petropoulos Frontend Portfolio'}</title>
      <meta name='description' key='description' content={description} />
      <meta
        name='keywords'
        key='keywords'
        content={
          keywords
            ? keywords
            : 'GregPetropoulos, gregpetropoulos, gregorios petropoulos,petropoulos,greg, Greg Petropoulos, React, React Native, frontend, software engineer, frontend developer, react developer, react.js, MERN,Express,Node.js,Gatsby,SASS,SCSS,CSS,HTML,CS3,HTML5,JavaScript JavaScript, UI,UX,web developer, mobile developer,Software Developer, code,coder, programming,React, React Native, JavaScript, CSS3, HTM5L,Git,TypeScript, Bootstrap, Materialize, TailwindUI, Node.js, Express.js, MongoDB, Mongoose, AWS CloudWatch, Azure, GraphQL, Umbraco, Contentful, Strapi, Gatsby, React-Query, Cypress, Playwright,Github,NoSQL'
        }
      />
      {/* <title>{title}</title> */}
      <title>{title ? title : 'Greg Petropoulos Software Developer Portfolio'}</title>

      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      <meta
        name='title'
        key='title'
        content={title ? title : 'Welcome Greg Petropoulos Frontend Portfolio'}
      />
      <meta
        property='og:title'
        key='og:title'
        content={title ? title : 'Welcome Greg Petropoulos Frontend Portfolio'}
      />
      <meta property='og:locale' key='og:locale' content='en_US' />
      <meta charSet='utf-8' />
      <meta property='og:type' key='og:type' content='website' />
      <meta
        property='og:description'
        key='og:description'
        content={
          description
            ? description
            : 'Greg Petropoulos is proficient react developer in react and react native as frontend software engineer'
        }
      />
      <meta
        property='og:image'
        key='og:image'
        // content={`${process.env.BASE_URL}/images/frontend.jpeg`}
        content='../src/assets/images/desktop/desktop-profile.jpg'
      />
      <meta property='og:url' content='https://gregpetropoulos.dev/' />
    </Helmet>
  );
};
Meta.defaultProps = {
  title: 'Welcome Greg Petropoulos Frontend Portfolio',
  description:
    'Greg Petropoulos is proficient react developer in react and react native as frontend software engineer',
  keywords:
    'GregPetropoulos, gregpetropoulos, gregorios petropoulos,petropoulos,greg, Greg Petropoulos, React, React Native, frontend, software engineer, frontend developer, react developer, react.js, MERN,Express,Node.js,Gatsby,SASS,SCSS,CSS,HTML,CS3,HTML5,JavaScript JavaScript, UI,UX,web developer, mobile developer,Software Developer, code,coder, programming,React, React Native, JavaScript, CSS3, HTM5L,Git,TypeScript, Bootstrap, Materialize, TailwindUI, Node.js, Express.js, MongoDB, Mongoose, AWS CloudWatch, Azure, GraphQL, Umbraco, Contentful, Strapi, Gatsby, React-Query, Cypress, Playwright,Github,NoSQL',
};
Meta.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
};
export default Meta;
