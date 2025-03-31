const PageTitle = ({ title }: { title: string }) => {
  return (
    <div className='flex  justify-center w-full lg:hidden'>
      <h2 className='text-center w-full text-3xl sm:text-4xl my-4  '>
        {title}
      </h2>
    </div>
  );
};

export default PageTitle;
