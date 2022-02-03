import React, { Fragment } from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import './style.css';
import styled from 'styled-components';
import Spinner from '../Spinner/Spinner';
import PropTypes from 'prop-types';
import formatDate from '../utils/formatDate'
// ADD ONS CAROUSEL AND BOX REVEALER

const ProjectItems = ({loading, repo:{name, created_at,topics,description, homepage}}) => {
  //   const ProjectResponsive = styled.div`
  //   @media (max-width:585px){
  //     .app-description{
  //       display:none;
  //     }
  //     .project-children{
  //       margin:5px;
  //       padding:10px;
  //       display:flex;
  //       justify-content:center
  //       align-items:center;
  //     }
  //     .project-title{
  //       font-size:1.5rem;
  //     }
  //     .project-links{
  //       font-size:.8rem;
  //     }
  //     .img{
  //   border-radius:30px;

  //     }
  //     .images{
  //       border-radius:30px;

  //         }
  // }
  //   `

  if (loading)return <Spinner />;
  // const {topics, total,description, homepage,created_at}=repo
  return(
<Fragment>
<li className='project-items'>


<h3>{name}</h3>
<p> About: {description}</p>
<a href={homepage}>{name}</a>
<div>Started on: {formatDate(created_at)}</div>
{/* <p>Tags: {topics}</p> */}
{/* <div>{FormatDate(date)}</div> */}

</li>


</Fragment>
  )



  // ) <div style={{ userStyle }}>
  //   {repo.name}</div>;
};

// const userStyle = {
//   display: 'grid',
//   gridTemplateColumns: 'repeat(3. 1fr)',
//   gridGap: '1rem'
// };
ProjectItems.propTypes = {
  // repo: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};
// <Container className="project-container col-10">
//  <ProjectResponsive>
//   <Row>
//     <Col className="box-container">
//       <Row >
//         <Col  className="box">
//           <h2 className="project-title">{title}</h2>
//           <Row className='images'>
//             <img src={img} alt="Linked project images of greg petropoulos project's page" />
//             </Row>
//           <Col>
//           <p className='app-description'>{description}</p>
//           </Col>
//           <Row className ='project-children'>
//             <Col>
//           {children}
//             </Col>
//           </Row>
//         </Col>
//       </Row>
//     </Col>
//   </Row>
//   <Row className="buffer-row"></Row>
// </ProjectResponsive>
// </Container>
// );
// };

export default ProjectItems;
