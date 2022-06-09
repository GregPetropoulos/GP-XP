import BlogList from '../components/BlogList';

const Blog = () => {
  return (
    <section>
      <p className='ml-3 mt-3 text-xl text-secondary-content sm:text-3xl'>&lt;blog&gt;</p>
      <BlogList />
      <p className='ml-3 text-xl text-secondary-content sm:text-3xl'>&lt;/blog&gt;</p>
    </section>
  );
};

export default Blog;
