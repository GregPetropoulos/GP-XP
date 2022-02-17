import React, { Fragment } from 'react';
import Spinner from 'react-bootstrap/Spinner';

import PropTypes from 'prop-types';
// import formatDate from '../utils/formatDate';

const ProjectItems = ({ loading, isLarge, top5, images }) => {
  if (loading) return <Spinner animation='border' variant='info' />;
  const imageArr = images;
  // console.log('imageArr', imageArr);
  return (
    <Fragment>
      {imageArr.map((item) =>
        top5 && item.id >= 0 && item.id <= 4 ? (
          <img
            className={`${isLarge ? 'row-poster' : 'small-row-poster'}`}
            key={item.imageId}
            src={item.imageRep}
            // title={item.imageName}
            alt={`Coming soon ${item.imageName}`}
            onClick={(e) => {
              e.preventDefault();
              window.open(item.repo.homepage, '_blank', 'noreferrer noopener');
            }}
          />
        ) : null
      )}

      {imageArr
        .sort((a, b) => (a.repo.updated_at < b.repo.updated_at ? 1 : -1))
        .map(
          (item) =>
            top5 === false && (
              <img
                className={`${isLarge ? 'row-poster' : 'small-row-poster'}`}
                key={item.imageId}
                src={item.imageRep}
                title={item.imageName}
                alt={
                  !imageArr
                    ? `Coming soon ${item.imageName}`
                    : 'Working hard to update this'
                }
                onClick={(e) => {
                  e.preventDefault();
                  window.open(
                    item.repo.homepage,
                    '_blank',
                    'noreferrer noopener'
                  );
                }}
              />
            )
        )}
    </Fragment>
  );
};

ProjectItems.propTypes = {
  images: PropTypes.array.isRequired,
  loading: PropTypes.bool
};

export default ProjectItems;
