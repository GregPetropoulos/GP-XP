import BlogList from '../components/BlogList';

const Blog = () => {
  return (
    <section>
      <p className='ml-3 mt-3 text-xl text-secondary-content sm:text-3xl'>&lt;blog&gt;</p>
      <div className='block mt-6 text-primary text-sm sm:grid gap-1 grid-cols-3 grid-rows-3 '>
        <BlogList />
      </div>
      <p className='ml-3 text-xl text-secondary-content sm:text-3xl'>&lt;/blog&gt;</p>
    </section>
  );
};

export default Blog;
