import React, { useState, useEffect, useRef } from 'react';
import Spinner from './Spinner';

function BlogList() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const errorRef = useRef(false);

  useEffect(() => {
    let isMounted = false;
    if (!isMounted) {
      //TODO Create second get request for interesting blogs on top of my own
      getAllBlogs();
    }
    return () => (isMounted = true);
  }, []);

  const getAllBlogs = async () => {
    errorRef.current = false;
    setLoading(true);
    const controller = new AbortController();
    const signal = controller.signal;

    try {
      const response = await fetch(
        `https://dev.to/api/articles/latest?username=${process.env.REACT_APP_USER_NAME}`,
        {
          signal: signal,
        }
      );
      if (response.ok) {
        const data = await response.json();
        setArticles(data);
      }
    } catch (error) {
      errorRef.current = true;
      throw Error('Promise Failed');
    }
    setLoading(false);
    return () => {
      // cancel the request before component unmounts
      controller.abort();
    };
  };
  if (loading) return <Spinner />;
  
  return (
    <>
      {articles.map((article) => {
        return (
          <div key={article.id} className='bg-secondary m-2 p-4 rounded-md'>
            <h2 className='text-center font-bold text-lg mb-3'>
              <a href={article.url} className=''>
                {article.title}
              </a>
            </h2>
          
              <img
                src={article.social_image}
                alt={article.title}
                className='object-contain rounded-t-lg drop-shadow-2xl'
              ></img>
          
            <p className='font-light mt-3 '>
              {article.description}
              <a href={article.url} className='link link-hover hover:text-accent-content'>
                {' '}
                Read More.
              </a>
            </p>
            <p className='text-neutral-content'>
              {article.readable_publish_date} | {article.tags}{' '}
            </p>
            <p className='text-neutral-content'>{article.public_reactions_count} reactions</p>
          </div>
        );
      })}
    </>
  );
}
export default BlogList;
