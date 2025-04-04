import { createFileRoute } from '@tanstack/react-router';
import type { Articles } from '../models';
import ContentContainer from '../components/ContentContainer';
import { fetchLatestBlogs } from '../services';
export const Route = createFileRoute('/blog')({
  loader: (abortController) => fetchLatestBlogs(abortController),
  errorComponent: ({ error }) => {
    // Render an error message
    return (
      <div className='flex justify-center m-10 align-middle'>
        <h4 className='text-error m-9'>{error.message}</h4>
      </div>
    );
  },
  component: BlogComponent
});

function BlogComponent() {
  const articles: Articles[] = Route.useLoaderData<any>();

  return (
<ContentContainer>

      <div className='block mt-6  text-sm sm:grid gap-1 grid-cols-3 grid-rows-3  w-full '>
        {articles.map((article: Articles) => {
          return (
            <div key={article.id} className='bg-base-300 m-2 p-4 rounded-md'>
              <h4 className='text-center font-bold mb-3'>
                <a href={article.url}>{article.title}</a>
              </h4>

              <img
                src={article.social_image}
                alt={article.title}
                className='object-contain rounded-t-lg drop-shadow-2xl'></img>

              <p className='font-light mt-3'>
                {article.description.trim()}
                <a
                  href={article.url}
                  className='link link-hover hover:text-accent'>
                  Read More.
                </a>
              </p>
              <p>
                {article.readable_publish_date} | {article.tags}{' '}
              </p>
              <p className='text-accent'>
                {article.public_reactions_count} reactions
              </p>
            </div>
          );
        })}
      </div>
</ContentContainer>

  );
}
