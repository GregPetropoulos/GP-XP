import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import BlogList from '../components/blog/BlogList';

const Blog = () => {
  return (
    <Container>
      <Row>
        <p
          style={{
            fontSize: '1.4rem',
            color: '#08a7ce'
          }}
        >
          &lt;blog&gt;
        </p>
      </Row>
      <BlogList />

      <Row>
        <p
          style={{
            fontSize: '1.4rem',
            color: '#08a7ce'
          }}
        >
          &lt;/blog&gt;
        </p>
      </Row>
    </Container>
  );
};

export default Blog;
