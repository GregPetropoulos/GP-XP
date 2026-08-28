

const githubUser = import.meta.env.VITE_USER_NAME

export const fetchLatestBlogs = async ({ abortController }: any) => {
  const response = await fetch(
    `https://dev.to/api/articles/latest?username=${import.meta.env.VITE_USER_NAME}`,
    { signal: abortController.signal }
  );
  return response.json();
};

export const fetchGithub = async ({ abortController }: any) => {
//   return fetch(`https://api.github.com/users/${githubUser}`)

  const response = await fetch(
    ` https://api.github.com/users/${githubUser}`,
    { signal: abortController.signal }
  );
  return response.json();
};
