import React, { Fragment } from 'react';

import PropTypes from 'prop-types';
// import formatDate from '../utils/formatDate';

const ProjectItems = ({ loading }) => {
  if (loading) return <p>add spinner here</p>;
  // console.log('imageArr', imageArr);
  return (
    <Fragment>
      <p>Projects item page</p>
    </Fragment>
  );
};

export default ProjectItems;
