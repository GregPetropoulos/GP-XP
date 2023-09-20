import React from 'react';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
    </Helmet>
  );
};
Meta.defaultProps = {
    title: 'Welcome Greg Petropoulos Frontend Portfolio',
    description: 'Greg Petropoulos is proficient react developer in react and react native as frontend software engineer',
    keywords: 'Greg Petropoulos, React, React Native, frontend, software engineer, frontend developer, react developer, react.js, JavaScript, UI,UX,web developer, mobile developer',
  };
  Meta.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    keywords: PropTypes.string,
  };
export default Meta;
