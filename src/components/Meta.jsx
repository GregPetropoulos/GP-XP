import React from 'react';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' key='description' content={description} />
      <meta name='keywords' key='keywords' content={keywords} />
      <title>{title}</title>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      <meta name='title' key='title' content={title} />
      <meta property='og:title' key='og:title' content={title} />
      <meta property='og:locale' key='og:locale' content='en_US' />
      <meta charSet='utf-8' />
      <meta property='og:type' key='og:type' content='website' />
      <meta property='og:description' key='og:description' content={description} />
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
    'Greg Petropoulos, React, React Native, frontend, software engineer, frontend developer, react developer, react.js, JavaScript, UI,UX,web developer, mobile developer',
};
Meta.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
};
export default Meta;
