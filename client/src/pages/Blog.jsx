import { Fragment } from 'react';
import BlogList from '../components/BlogList';

const Blog = () => {
  return (
    <Fragment>
      <p
        className='page-title'
        style={{
          fontSize: '1.4rem',
          color: '#08a7ce'
        }}>
        &lt;blog&gt;
      </p>
      <BlogList />

      <p
        className='page-title'
        style={{
          fontSize: '1.4rem',
          color: '#08a7ce'
        }}>
        &lt;/blog&gt;
      </p>
    </Fragment>
  );
};

export default Blog;
