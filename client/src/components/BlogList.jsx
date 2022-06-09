import React, { useState, useEffect, Fragment } from 'react';

function BlogList() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch('https://dev.to/api/articles/latest?username=gregpetropoulos')
      .then((res) => res.json())
      .then((res) => {
        setArticles(res);
      });
  }, []);

  // console.log('article-check', articles);

  return (
    <Fragment>
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
              className='object-contain rounded-t-lg drop-shadow-2xl'></img>
            <p className='font-light mt-3 '>
              {article.description}
              <a
                href={article.url}
                className='link link-hover hover:text-accent-content'>
                {' '}
                Read More.
              </a>
            </p>
            <p className='text-neutral-content'>
              {article.readable_publish_date} | #{article.tags}{' '}
            </p>
            <p className='text-neutral-content'>
              {article.public_reactions_count} reactions
            </p>
          </div>
        );
      })}
    </Fragment>
  );
}
export default BlogList;
