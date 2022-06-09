const MainFooter = () => {
  const today = new Date();
  const currentYear = today.getFullYear();
  return (
    <section>
      <div className='text-center m-4 mt-9'>
        <p>Created by Greg Petropoulos</p>
        <p>copyright 2021-{currentYear}</p>
      </div>
    </section>
  );
};

export default MainFooter;
