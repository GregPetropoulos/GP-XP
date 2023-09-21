import BlogList from '../components/BlogList';
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <section>
      <Meta
        title='Greg Petropoulos react developer blogs'
        description='A list of blogs that are coding, programming, frontend developer related'
      />
      <Link to='/blog' alt='Blog Link'>
        <p className='ml-3 mt-3 text-xl text-secondary-content sm:text-3xl'>&lt;blog&gt;</p>
      </Link>

      <div className='block mt-6 text-primary text-sm sm:grid gap-1 grid-cols-3 grid-rows-3 '>
        <BlogList />
      </div>
      <Link to='/blog' alt='Blog Link'>
        <p className='ml-3 text-xl text-secondary-content sm:text-3xl'>&lt;/blog&gt;</p>
      </Link>
    </section>
  );
};

export default Blog;
