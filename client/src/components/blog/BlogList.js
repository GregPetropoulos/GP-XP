import React, { useState, useEffect } from 'react';
import './style.css'
function BlogList() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch('https://dev.to/api/articles/latest?username=gregpetropoulos')
      .then((res) => res.json())
      .then((res) => {
        setArticles(res);
      });
  }, []);

  console.log('article-check', articles);

  return (
    <div className='articles'>
      {articles.map((article) => {
        return (
          <div key={article.id} className='article'>
            <a href={article.url} className='title'>
              {article.title}
            </a>
            <img src={article.social_image} alt={article.title} className='blog-image'></img>
            <p className='blog-description'>
              {article.description}
              <a href={article.url}>Read More.</a>
            </p>
            <p>
              {article.readable_publish_date} | {article.tags}{' '}
            </p>
            <p>{article.public_reactions_count} reactions</p>
          </div>
        );
      })}
    </div>
  );
    }
export default BlogList;

