import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import BlogList from '../components/blog/BlogList';

const Blog = () => {
  return (
    <Container>
        <p className='page-title'
          style={{
            fontSize: '1.4rem',
            color: '#08a7ce'
          }}
        >
          &lt;blog&gt;
        </p>
      <BlogList />

        <p className='page-title'
          style={{
            fontSize: '1.4rem',
            color: '#08a7ce'
          }}
        >
          &lt;/blog&gt;
        </p>
    </Container>
  );
};

export default Blog;
