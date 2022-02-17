import React, { Fragment } from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import './style.css';
import Spinner from 'react-bootstrap/Spinner';

import PropTypes from 'prop-types';
import formatDate from '../utils/formatDate';

const ProjectItems = ({ loading, isLarge, projects, top5 }) => {
  if (loading) return <Spinner animation='border' variant='info' />;
  const projectsCopy = projects;
  const { imageCheck } = projectsCopy;
  return (
    <Fragment>
      {imageCheck.map((item) =>
        top5 && item.id >= 0 && item.id <= 4 ? (
          <img
            className={`${isLarge ? 'row-poster' : 'small-row-poster'}`}
            key={item.id}
            src={item.imageRep}
            title={item.imageName}
            alt={`Coming soon ${item.imageName}`}
          />
        ) : null
      )}

      {imageCheck.map(
        (item) =>
          top5 === false && (
            <img
              className={`${isLarge ? 'row-poster' : 'small-row-poster'}`}
              key={item.id}
              src={item.imageRep}
              title={item.imageName}
              alt={`Coming soon ${item.imageName}`}
            />
          )
      )}
    </Fragment>
  );
};

// ProjectItems.propTypes = {
// repo: PropTypes.array.isRequired,
// loading: PropTypes.bool.isRequired
// };

export default ProjectItems;
