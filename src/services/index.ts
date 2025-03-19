export const fetchLatestBlogs = async ({ abortController }: any) => {
  const response = await fetch(
    `https://dev.to/api/articles/latest?username=${import.meta.env.VITE_USER_NAME}`,
    { signal: abortController.signal }
  );
  return response.json();
};
