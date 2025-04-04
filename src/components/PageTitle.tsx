const PageTitle = ({ title }: { title: string }) => {
  return (
    <div className='flex  justify-center w-full lg:hidden'>
      <h1 className='text-center w-full my-4'>
        {title}
      </h1>
    </div>
  );
};

export default PageTitle;
