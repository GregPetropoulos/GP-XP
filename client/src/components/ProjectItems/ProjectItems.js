import React, { Fragment } from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import './style.css';
import styled from 'styled-components';
import Spinner from '../Spinner/Spinner';
import PropTypes from 'prop-types';
import formatDate from '../utils/formatDate';

// import GolfImages from '../images/golf.jpg';
// import EmployeeImage from '../images/employee-directory.jpg';
// import FitImage from '../images/fit-image.jpg';
// import BuildAPageImage from '../images/build-a-page.jpg';
import DevSquadImage from '../../images/dev-squad.jpg';
import ExcavationImage from '../../images/excavation.jpg';
import ContactBookImage from '../../images/contact-book.jpg';
import GithubFinderImage from '../../images/github-finder.jpg';
import ITLoggerImage from '../../images/it-logger.jpg';
// ADD ONS CAROUSEL AND BOX REVEALER

const ProjectItems = ({ loading,isLarge, imageMatch}) => {
  // // * IMAGES IN ARRAY FOR EACH OF THE TOP 5 POSTERS
  // // *Ideally will come from the unsplash api and made as a piece of state merged with the github api
  // const imagesOf5 = [
  //   {
  //     id: 0,
  //     imageId: 435850053,
  //     imageRep: ITLoggerImage,
  //     imageName: 'IT-Logger'
  //   },
  //   {
  //     id: 1,
  //     imageId: 426586061,
  //     imageRep: ContactBookImage,
  //     imageName: 'Contact-Book'
  //   },
  //   {
  //     id: 2,
  //     imageId: 421770170,
  //     imageRep: GithubFinderImage,
  //     imageName: 'Github-Finder'
  //   },
  //   {
  //     id: 3,
  //     imageId: 391642169,
  //     imageRep: ExcavationImage,
  //     imageName: 'GP-Excavation'
  //   },
  //   {
  //     id: 4,
  //     imageId: 383392571,
  //     imageRep: DevSquadImage,
  //     imageName: 'DevSquad'
  //   }
  // ];
 

  if (loading) return <Spinner />;
  return (
    <Fragment>

            {/* {
              <a
                href={homepage}
                target='_blank'
                rel='noreferrer noopener'
                alt={`Name of the repo ${name}`}>
                {name}
              </a>}   */}

<div className='row-posters'>
         {imageMatch.map((item) => 
        <img
        className={`${isLarge? 'row-poster':'small-row-poster'}`}
        key={item.id}
        src={item.imageRep}
        alt={`Coming soon ${item.imageName}`}
        /> 

          )}
          </div>
    </Fragment>
  );
};

// ProjectItems.propTypes = {
// repo: PropTypes.array.isRequired,
// loading: PropTypes.bool.isRequired
// };

export default ProjectItems;
